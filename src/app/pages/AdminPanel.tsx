import { useEffect, useMemo, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User
} from 'firebase/auth';
import {
  onValue,
  push,
  ref,
  remove,
  set,
  update
} from 'firebase/database';
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes
} from 'firebase/storage';
import { auth, db, storage } from '../lib/firebase';

const adminAllowlist = ['prabhatprabhakar8@gmail.com'];

type BlogRecord = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  sourceUrl?: string;
  published: boolean;
  seoTitle?: string;
  seoDescription?: string;
};

type DestinationRecord = {
  id: string;
  slug: string;
  name: string;
  country: string;
  image: string;
  description: string;
  details: string;
  highlights: string[];
};

type ServiceRecord = {
  id: string;
  slug: string;
  title: string;
  description: string;
  details: string;
  image: string;
};

type PackageRecord = {
  id: string;
  slug: string;
  title: string;
  duration: string;
  price: string;
  people: string;
  highlights: string[];
  details: string;
  image: string;
  sourceUrl?: string;
};

type BlogFormState = Omit<BlogRecord, 'id' | 'slug'> & { id?: string };
const emptyBlog: BlogFormState = {
  title: '',
  excerpt: '',
  content: '',
  image: '',
  date: '',
  sourceUrl: '',
  published: false,
  seoTitle: '',
  seoDescription: ''
};

type DestinationFormState = Omit<DestinationRecord, 'id' | 'slug' | 'highlights'> & {
  id?: string;
  highlights: string;
};
const emptyDestination: DestinationFormState = {
  name: '',
  country: '',
  image: '',
  description: '',
  details: '',
  highlights: ''
};

type ServiceFormState = Omit<ServiceRecord, 'id' | 'slug'> & { id?: string };
const emptyService: ServiceFormState = {
  title: '',
  description: '',
  details: '',
  image: ''
};

type PackageFormState = Omit<PackageRecord, 'id' | 'slug' | 'highlights'> & {
  id?: string;
  highlights: string;
};
const emptyPackage: PackageFormState = {
  title: '',
  duration: '',
  price: '',
  people: '',
  highlights: '',
  details: '',
  image: '',
  sourceUrl: ''
};

type TabKey = 'blogs' | 'destinations' | 'services' | 'packages';

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const splitHighlights = (value: string) =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

export function AdminPanel() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<TabKey>('blogs');

  const [blogs, setBlogs] = useState<BlogRecord[]>([]);
  const [destinations, setDestinations] = useState<DestinationRecord[]>([]);
  const [services, setServices] = useState<ServiceRecord[]>([]);
  const [packages, setPackages] = useState<PackageRecord[]>([]);

  const [blogForm, setBlogForm] = useState<BlogFormState>(emptyBlog);
  const [destinationForm, setDestinationForm] = useState<DestinationFormState>(emptyDestination);
  const [serviceForm, setServiceForm] = useState<ServiceFormState>(emptyService);
  const [packageForm, setPackageForm] = useState<PackageFormState>(emptyPackage);

  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  const isAdmin = useMemo(() => {
    if (!user?.email) {
      return false;
    }
    return adminAllowlist.includes(user.email);
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isAdmin) {
      return;
    }

    const blogsRef = ref(db, 'blogs');
    const destinationsRef = ref(db, 'destinations');
    const servicesRef = ref(db, 'services');
    const packagesRef = ref(db, 'packages');

    const unsubscribeBlogs = onValue(blogsRef, (snapshot) => {
      const value = snapshot.val() ?? {};
      const nextBlogs: BlogRecord[] = Object.entries(value).map(([id, record]) => ({
        id,
        ...(record as Omit<BlogRecord, 'id'>)
      }));
      nextBlogs.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
      setBlogs(nextBlogs);
    });

    const unsubscribeDestinations = onValue(destinationsRef, (snapshot) => {
      const value = snapshot.val() ?? {};
      const nextDestinations: DestinationRecord[] = Object.entries(value).map(([id, record]) => ({
        id,
        ...(record as Omit<DestinationRecord, 'id'>)
      }));
      nextDestinations.sort((a, b) => a.name.localeCompare(b.name));
      setDestinations(nextDestinations);
    });

    const unsubscribeServices = onValue(servicesRef, (snapshot) => {
      const value = snapshot.val() ?? {};
      const nextServices: ServiceRecord[] = Object.entries(value).map(([id, record]) => ({
        id,
        ...(record as Omit<ServiceRecord, 'id'>)
      }));
      nextServices.sort((a, b) => a.title.localeCompare(b.title));
      setServices(nextServices);
    });

    const unsubscribePackages = onValue(packagesRef, (snapshot) => {
      const value = snapshot.val() ?? {};
      const nextPackages: PackageRecord[] = Object.entries(value).map(([id, record]) => ({
        id,
        ...(record as Omit<PackageRecord, 'id'>)
      }));
      nextPackages.sort((a, b) => a.title.localeCompare(b.title));
      setPackages(nextPackages);
    });

    return () => {
      unsubscribeBlogs();
      unsubscribeDestinations();
      unsubscribeServices();
      unsubscribePackages();
    };
  }, [isAdmin]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setAuthError(null);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      setPassword('');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed.';
      setAuthError(message);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setBlogForm(emptyBlog);
    setDestinationForm(emptyDestination);
    setServiceForm(emptyService);
    setPackageForm(emptyPackage);
  };

  const uploadImage = async (file: File, folder: string) => {
    setUploading(true);
    setUploadMessage(null);

    try {
      const safeName = file.name.replace(/\s+/g, '-').toLowerCase();
      const fileRef = storageRef(storage, `uploads/${folder}/${Date.now()}-${safeName}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      setUploadMessage('Image uploaded successfully.');
      return url;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Upload failed.';
      setUploadMessage(message);
      return '';
    } finally {
      setUploading(false);
    }
  };

  const resetMessages = () => {
    setSaveMessage(null);
    setUploadMessage(null);
  };

  const handleBlogSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isAdmin) {
      return;
    }

    setSaving(true);
    resetMessages();

    const payload = {
      slug: slugify(blogForm.title || ''),
      title: blogForm.title.trim(),
      excerpt: blogForm.excerpt.trim(),
      content: blogForm.content.trim(),
      image: blogForm.image.trim(),
      date: blogForm.date.trim(),
      sourceUrl: blogForm.sourceUrl?.trim() || '',
      published: blogForm.published,
      seoTitle: blogForm.seoTitle?.trim() || '',
      seoDescription: blogForm.seoDescription?.trim() || ''
    };

    try {
      if (blogForm.id) {
        await update(ref(db, `blogs/${blogForm.id}`), payload);
        setSaveMessage('Blog updated successfully.');
      } else {
        const newRef = push(ref(db, 'blogs'));
        await set(newRef, payload);
        setSaveMessage('Blog created successfully.');
      }
      setBlogForm(emptyBlog);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to save blog.';
      setSaveMessage(message);
    } finally {
      setSaving(false);
    }
  };

  const handleDestinationSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isAdmin) {
      return;
    }

    setSaving(true);
    resetMessages();

    const payload = {
      slug: slugify(destinationForm.name || ''),
      name: destinationForm.name.trim(),
      country: destinationForm.country.trim(),
      image: destinationForm.image.trim(),
      description: destinationForm.description.trim(),
      details: destinationForm.details.trim(),
      highlights: splitHighlights(destinationForm.highlights)
    };

    try {
      if (destinationForm.id) {
        await update(ref(db, `destinations/${destinationForm.id}`), payload);
        setSaveMessage('Destination updated successfully.');
      } else {
        const newRef = push(ref(db, 'destinations'));
        await set(newRef, payload);
        setSaveMessage('Destination created successfully.');
      }
      setDestinationForm(emptyDestination);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to save destination.';
      setSaveMessage(message);
    } finally {
      setSaving(false);
    }
  };

  const handleServiceSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isAdmin) {
      return;
    }

    setSaving(true);
    resetMessages();

    const payload = {
      slug: slugify(serviceForm.title || ''),
      title: serviceForm.title.trim(),
      description: serviceForm.description.trim(),
      details: serviceForm.details.trim(),
      image: serviceForm.image.trim()
    };

    try {
      if (serviceForm.id) {
        await update(ref(db, `services/${serviceForm.id}`), payload);
        setSaveMessage('Service updated successfully.');
      } else {
        const newRef = push(ref(db, 'services'));
        await set(newRef, payload);
        setSaveMessage('Service created successfully.');
      }
      setServiceForm(emptyService);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to save service.';
      setSaveMessage(message);
    } finally {
      setSaving(false);
    }
  };

  const handlePackageSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isAdmin) {
      return;
    }

    setSaving(true);
    resetMessages();

    const payload = {
      slug: slugify(packageForm.title || ''),
      title: packageForm.title.trim(),
      duration: packageForm.duration.trim(),
      price: packageForm.price.trim(),
      people: packageForm.people.trim(),
      highlights: splitHighlights(packageForm.highlights),
      details: packageForm.details.trim(),
      image: packageForm.image.trim(),
      sourceUrl: packageForm.sourceUrl?.trim() || ''
    };

    try {
      if (packageForm.id) {
        await update(ref(db, `packages/${packageForm.id}`), payload);
        setSaveMessage('Package updated successfully.');
      } else {
        const newRef = push(ref(db, 'packages'));
        await set(newRef, payload);
        setSaveMessage('Package created successfully.');
      }
      setPackageForm(emptyPackage);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to save package.';
      setSaveMessage(message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (collection: string, id: string) => {
    if (!isAdmin) {
      return;
    }

    await remove(ref(db, `${collection}/${id}`));
  };

  const handleTogglePublish = async (blog: BlogRecord) => {
    if (!isAdmin) {
      return;
    }

    await update(ref(db, `blogs/${blog.id}`), {
      published: !blog.published
    });
  };

  if (!authReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading admin panel...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white shadow-lg rounded-lg p-6"
        >
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Admin Login</h1>
          <label className="block text-sm text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full border rounded px-3 py-2 mb-4"
            required
          />
          <label className="block text-sm text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full border rounded px-3 py-2 mb-4"
            required
          />
          {authError && <p className="text-sm text-red-600 mb-3">{authError}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded py-2 font-medium hover:bg-blue-700"
          >
            Sign In
          </button>
          <p className="text-xs text-gray-500 mt-4">
            Access is restricted to approved admin emails.
          </p>
        </form>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Access denied</h1>
          <p className="text-gray-600 mb-4">
            Your account is not authorized to access the admin panel.
          </p>
          <button
            type="button"
            onClick={handleSignOut}
            className="w-full bg-gray-900 text-white rounded py-2"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Control Panel</p>
            <h1 className="text-3xl font-semibold text-gray-900">Travel & Thrills Admin</h1>
            <p className="text-gray-600 mt-1">Manage blogs and site content.</p>
          </div>
          <button
            type="button"
            onClick={handleSignOut}
            className="bg-gray-900 text-white rounded px-4 py-2"
          >
            Sign Out
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {([
            { key: 'blogs', label: 'Blogs' },
            { key: 'destinations', label: 'Destinations' },
            { key: 'services', label: 'Services' },
            { key: 'packages', label: 'Packages' }
          ] as { key: TabKey; label: string }[]).map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setActiveTab(tab.key);
                resetMessages();
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === tab.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {saveMessage && <p className="text-sm text-green-600 mb-4">{saveMessage}</p>}
        {uploadMessage && <p className="text-sm text-blue-600 mb-4">{uploadMessage}</p>}

        {activeTab === 'blogs' && (
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Write a Blog</h2>
              <form onSubmit={handleBlogSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Title</label>
                    <input
                      value={blogForm.title}
                      onChange={(event) => setBlogForm((prev) => ({ ...prev, title: event.target.value }))}
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      value={blogForm.date}
                      onChange={(event) => setBlogForm((prev) => ({ ...prev, date: event.target.value }))}
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Excerpt</label>
                  <input
                    value={blogForm.excerpt}
                    onChange={(event) => setBlogForm((prev) => ({ ...prev, excerpt: event.target.value }))}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Featured Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (event) => {
                      const file = event.target.files?.[0];
                      if (!file) return;
                      const url = await uploadImage(file, 'blogs');
                      if (url) {
                        setBlogForm((prev) => ({ ...prev, image: url }));
                      }
                    }}
                    className="w-full"
                    disabled={uploading}
                  />
                  {blogForm.image && (
                    <p className="text-xs text-gray-500 mt-2">Image ready for use.</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Source URL (optional)</label>
                  <input
                    value={blogForm.sourceUrl}
                    onChange={(event) => setBlogForm((prev) => ({ ...prev, sourceUrl: event.target.value }))}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Content</label>
                  <textarea
                    value={blogForm.content}
                    onChange={(event) => setBlogForm((prev) => ({ ...prev, content: event.target.value }))}
                    className="w-full border rounded px-3 py-2 h-32"
                    required
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">SEO Title</label>
                    <input
                      value={blogForm.seoTitle}
                      onChange={(event) => setBlogForm((prev) => ({ ...prev, seoTitle: event.target.value }))}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">SEO Description</label>
                    <input
                      value={blogForm.seoDescription}
                      onChange={(event) => setBlogForm((prev) => ({ ...prev, seoDescription: event.target.value }))}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                </div>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={blogForm.published}
                    onChange={(event) => setBlogForm((prev) => ({ ...prev, published: event.target.checked }))}
                  />
                  Publish immediately
                </label>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    disabled={saving}
                    className="bg-blue-600 text-white rounded px-4 py-2 font-medium hover:bg-blue-700 disabled:opacity-70"
                  >
                    {blogForm.id ? 'Update Blog' : 'Publish Blog'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setBlogForm(emptyBlog)}
                    className="border border-gray-300 rounded px-4 py-2"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </section>

            <section className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Blogs</h2>
              <div className="space-y-4">
                {blogs.length === 0 && (
                  <p className="text-gray-500">No blogs created yet. Add your first post.</p>
                )}
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="border border-gray-100 rounded-lg p-4 flex flex-col gap-3"
                  >
                    <div>
                      <p className="text-sm text-gray-500">{blog.date || 'No date'}</p>
                      <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
                      <p className="text-sm text-gray-600">{blog.excerpt}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setBlogForm({
                            id: blog.id,
                            title: blog.title,
                            excerpt: blog.excerpt,
                            content: blog.content,
                            image: blog.image,
                            date: blog.date,
                            sourceUrl: blog.sourceUrl ?? '',
                            published: blog.published,
                            seoTitle: blog.seoTitle ?? '',
                            seoDescription: blog.seoDescription ?? ''
                          })
                        }
                        className="text-sm text-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTogglePublish(blog)}
                        className="text-sm text-gray-700"
                      >
                        {blog.published ? 'Unpublish' : 'Publish'}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete('blogs', blog.id)}
                        className="text-sm text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'destinations' && (
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Add Destination</h2>
              <form onSubmit={handleDestinationSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Name</label>
                    <input
                      value={destinationForm.name}
                      onChange={(event) => setDestinationForm((prev) => ({ ...prev, name: event.target.value }))}
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Country</label>
                    <input
                      value={destinationForm.country}
                      onChange={(event) => setDestinationForm((prev) => ({ ...prev, country: event.target.value }))}
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (event) => {
                      const file = event.target.files?.[0];
                      if (!file) return;
                      const url = await uploadImage(file, 'destinations');
                      if (url) {
                        setDestinationForm((prev) => ({ ...prev, image: url }));
                      }
                    }}
                    className="w-full"
                    disabled={uploading}
                  />
                  {destinationForm.image && (
                    <p className="text-xs text-gray-500 mt-2">Image ready for use.</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Short Description</label>
                  <input
                    value={destinationForm.description}
                    onChange={(event) => setDestinationForm((prev) => ({ ...prev, description: event.target.value }))}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Details</label>
                  <textarea
                    value={destinationForm.details}
                    onChange={(event) => setDestinationForm((prev) => ({ ...prev, details: event.target.value }))}
                    className="w-full border rounded px-3 py-2 h-28"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Highlights (comma-separated)</label>
                  <input
                    value={destinationForm.highlights}
                    onChange={(event) => setDestinationForm((prev) => ({ ...prev, highlights: event.target.value }))}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    disabled={saving}
                    className="bg-blue-600 text-white rounded px-4 py-2 font-medium hover:bg-blue-700 disabled:opacity-70"
                  >
                    {destinationForm.id ? 'Update Destination' : 'Add Destination'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setDestinationForm(emptyDestination)}
                    className="border border-gray-300 rounded px-4 py-2"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </section>

            <section className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Destinations</h2>
              <div className="space-y-4">
                {destinations.length === 0 && (
                  <p className="text-gray-500">No destinations created yet.</p>
                )}
                {destinations.map((destination) => (
                  <div key={destination.id} className="border border-gray-100 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
                    <p className="text-sm text-gray-500">{destination.country}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <button
                        type="button"
                        onClick={() =>
                          setDestinationForm({
                            id: destination.id,
                            name: destination.name,
                            country: destination.country,
                            image: destination.image,
                            description: destination.description,
                            details: destination.details,
                            highlights: destination.highlights.join(', ')
                          })
                        }
                        className="text-sm text-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete('destinations', destination.id)}
                        className="text-sm text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Add Service</h2>
              <form onSubmit={handleServiceSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Title</label>
                  <input
                    value={serviceForm.title}
                    onChange={(event) => setServiceForm((prev) => ({ ...prev, title: event.target.value }))}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (event) => {
                      const file = event.target.files?.[0];
                      if (!file) return;
                      const url = await uploadImage(file, 'services');
                      if (url) {
                        setServiceForm((prev) => ({ ...prev, image: url }));
                      }
                    }}
                    className="w-full"
                    disabled={uploading}
                  />
                  {serviceForm.image && (
                    <p className="text-xs text-gray-500 mt-2">Image ready for use.</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Short Description</label>
                  <input
                    value={serviceForm.description}
                    onChange={(event) => setServiceForm((prev) => ({ ...prev, description: event.target.value }))}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Details</label>
                  <textarea
                    value={serviceForm.details}
                    onChange={(event) => setServiceForm((prev) => ({ ...prev, details: event.target.value }))}
                    className="w-full border rounded px-3 py-2 h-28"
                    required
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    disabled={saving}
                    className="bg-blue-600 text-white rounded px-4 py-2 font-medium hover:bg-blue-700 disabled:opacity-70"
                  >
                    {serviceForm.id ? 'Update Service' : 'Add Service'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceForm(emptyService)}
                    className="border border-gray-300 rounded px-4 py-2"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </section>

            <section className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Services</h2>
              <div className="space-y-4">
                {services.length === 0 && (
                  <p className="text-gray-500">No services created yet.</p>
                )}
                {services.map((service) => (
                  <div key={service.id} className="border border-gray-100 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <button
                        type="button"
                        onClick={() =>
                          setServiceForm({
                            id: service.id,
                            title: service.title,
                            description: service.description,
                            details: service.details,
                            image: service.image
                          })
                        }
                        className="text-sm text-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete('services', service.id)}
                        className="text-sm text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'packages' && (
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Add Package</h2>
              <form onSubmit={handlePackageSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Title</label>
                  <input
                    value={packageForm.title}
                    onChange={(event) => setPackageForm((prev) => ({ ...prev, title: event.target.value }))}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Duration</label>
                    <input
                      value={packageForm.duration}
                      onChange={(event) => setPackageForm((prev) => ({ ...prev, duration: event.target.value }))}
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Price</label>
                    <input
                      value={packageForm.price}
                      onChange={(event) => setPackageForm((prev) => ({ ...prev, price: event.target.value }))}
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">People</label>
                    <input
                      value={packageForm.people}
                      onChange={(event) => setPackageForm((prev) => ({ ...prev, people: event.target.value }))}
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Source URL (optional)</label>
                    <input
                      value={packageForm.sourceUrl}
                      onChange={(event) => setPackageForm((prev) => ({ ...prev, sourceUrl: event.target.value }))}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (event) => {
                      const file = event.target.files?.[0];
                      if (!file) return;
                      const url = await uploadImage(file, 'packages');
                      if (url) {
                        setPackageForm((prev) => ({ ...prev, image: url }));
                      }
                    }}
                    className="w-full"
                    disabled={uploading}
                  />
                  {packageForm.image && (
                    <p className="text-xs text-gray-500 mt-2">Image ready for use.</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Highlights (comma-separated)</label>
                  <input
                    value={packageForm.highlights}
                    onChange={(event) => setPackageForm((prev) => ({ ...prev, highlights: event.target.value }))}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Details</label>
                  <textarea
                    value={packageForm.details}
                    onChange={(event) => setPackageForm((prev) => ({ ...prev, details: event.target.value }))}
                    className="w-full border rounded px-3 py-2 h-28"
                    required
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    disabled={saving}
                    className="bg-blue-600 text-white rounded px-4 py-2 font-medium hover:bg-blue-700 disabled:opacity-70"
                  >
                    {packageForm.id ? 'Update Package' : 'Add Package'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPackageForm(emptyPackage)}
                    className="border border-gray-300 rounded px-4 py-2"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </section>

            <section className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Packages</h2>
              <div className="space-y-4">
                {packages.length === 0 && (
                  <p className="text-gray-500">No packages created yet.</p>
                )}
                {packages.map((pkg) => (
                  <div key={pkg.id} className="border border-gray-100 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{pkg.title}</h3>
                    <p className="text-sm text-gray-500">{pkg.duration}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <button
                        type="button"
                        onClick={() =>
                          setPackageForm({
                            id: pkg.id,
                            title: pkg.title,
                            duration: pkg.duration,
                            price: pkg.price,
                            people: pkg.people,
                            highlights: pkg.highlights.join(', '),
                            details: pkg.details,
                            image: pkg.image,
                            sourceUrl: pkg.sourceUrl ?? ''
                          })
                        }
                        className="text-sm text-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete('packages', pkg.id)}
                        className="text-sm text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
