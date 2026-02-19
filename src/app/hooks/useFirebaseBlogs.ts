import { useEffect, useMemo, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../lib/firebase';

type FirebaseBlogRecord = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  sourceUrl?: string;
  published: boolean;
  seoTitle?: string;
  seoDescription?: string;
  slug?: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

export function useFirebaseBlogs() {
  const [blogs, setBlogs] = useState<FirebaseBlogRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blogsRef = ref(db, 'blogs');
    const unsubscribe = onValue(blogsRef, (snapshot) => {
      const value = snapshot.val() ?? {};
      const nextBlogs: FirebaseBlogRecord[] = Object.entries(value).map(([id, record]) => {
        const item = record as Omit<FirebaseBlogRecord, 'id'>;
        return {
          id,
          ...item,
          slug: item.slug || slugify(item.title || '')
        };
      });

      nextBlogs.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
      setBlogs(nextBlogs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const publishedBlogs = useMemo(
    () => blogs.filter((blog) => blog.published),
    [blogs]
  );

  return {
    blogs: publishedBlogs,
    allBlogs: blogs,
    loading
  };
}
