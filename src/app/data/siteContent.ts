export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  details: string;
  image: string;
};

export type PackageItem = {
  slug: string;
  title: string;
  duration: string;
  price: string;
  people: string;
  highlights: string[];
  details: string;
  image: string;
};

export type BlogItem = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
};

export type DestinationItem = {
  slug: string;
  name: string;
  country: string;
  image: string;
  description: string;
  details: string;
  highlights: string[];
};

export const services: ServiceItem[] = [
  {
    slug: 'tour-operators',
    title: 'Tour Operators',
    description: 'Expertly managed holiday planning across Darjeeling, Sikkim, Bhutan, and Nepal.',
    details:
      'Our team designs complete itineraries with hotel suggestions, local transport coordination, and sightseeing planning to make your trip smooth from arrival to departure.',
    image: 'https://catalog.wlimg.com/service-images/ttw/tour-operators3.jpg'
  },
  {
    slug: 'car-coach-rental',
    title: 'Car & Coach Rental',
    description: 'Comfortable and reliable transport options for local and long-route travel.',
    details:
      'We provide suitable vehicle options for families, couples, and groups with route planning support across hill and plain circuits.',
    image: 'https://catalog.wlimg.com/service-images/ttw/car-coach-rental2.jpg'
  },
  {
    slug: 'flight-booking',
    title: 'Flight Booking',
    description: 'Convenient domestic and international flight ticket assistance.',
    details:
      'Get help with itinerary-friendly flight options, fare selection, and coordinated travel timing with your land package.',
    image: 'https://catalog.wlimg.com/service-images/ttw/flight-booking4.jpg'
  },
  {
    slug: 'railway-ticket-booking',
    title: 'Railway Ticket Booking',
    description: 'Hassle-free rail ticket support to keep your journey smooth.',
    details:
      'We assist in planning rail connectivity for your holiday route and suggest practical arrival/departure options.',
    image: 'https://catalog.wlimg.com/service-images/ttw/railway-ticket-booking3.jpg'
  },
  {
    slug: 'passport-visa-services',
    title: 'Passport & Visa Services',
    description: 'Guidance and support for travel documentation and visa requirements.',
    details:
      'Our team shares checklist guidance and helps you prepare documents for international travel circuits like Bhutan and Nepal.',
    image: 'https://catalog.wlimg.com/service-images/ttw/passport-visa-services2.jpg'
  },
  {
    slug: 'travel-insurance-services',
    title: 'Travel Insurance Services',
    description: 'Travel protection plans for safer and stress-free vacations.',
    details:
      'Choose suitable coverage options based on your duration, destination, and activities for better trip security.',
    image: 'https://catalog.wlimg.com/service-images/ttw/travel-insurance-services2.jpg'
  },
  {
    slug: 'hotel-booking',
    title: 'Hotel Booking',
    description: 'Carefully selected stays including hotels, resorts, and guesthouses.',
    details:
      'We arrange stays across budgets with location convenience and itinerary fit for family, group, or couple tours.',
    image: 'https://catalog.wlimg.com/service-images/ttw/hotel-booking3.jpg'
  }
];

export const packages: PackageItem[] = [
  {
    slug: 'sikkim-bliss-4n5d',
    title: 'Sikkim Bliss Exploring the Roof of the World (4N / 5D)',
    duration: '5 Days / 4 Nights',
    price: '₹10,450*',
    people: 'Family / group friendly',
    highlights: ['Gangtok, Lachung, Yumthang', 'Naga Falls and Bhim Nala', 'Sightseeing-focused itinerary'],
    details:
      'A compact and popular North Sikkim circuit ideal for travelers who want mountain landscapes, valley views, and key sightseeing points in limited time.',
    image: 'https://catalog.wlimg.com/4/1682301/other-images/522647.jpg'
  },
  {
    slug: 'sikkim-bliss-5n6d',
    title: 'SIKKIM BLISS: Exploring the Roof of the World (5N / 6D)',
    duration: '6 Days / 5 Nights',
    price: '₹15,675*',
    people: 'Small groups and families',
    highlights: ['Gangtok, Yumthang, Lachung', 'Extended mountain stays', 'Balanced travel pace'],
    details:
      'An extended version of the Sikkim circuit that offers more time for local exploration and scenic travel across key highland routes.',
    image: 'https://catalog.wlimg.com/about-image/about-12.jpg'
  },
  {
    slug: 'nepal-tour-5n6d',
    title: 'Nepal Tour (5N / 6D)',
    duration: '6 Days / 5 Nights',
    price: '₹19,500*',
    people: 'Couples / families / groups',
    highlights: ['Kathmandu and Pokhara', 'Cultural + scenic mix', 'Cross-border holiday plan'],
    details:
      'A curated Nepal itinerary covering heritage and scenic experiences, suited for travelers looking for a blend of city culture and natural beauty.',
    image: 'https://catalog.wlimg.com/service-images/ttw/tour-operators3.jpg'
  },
  {
    slug: 'bhutan-mystique-4n5d',
    title: 'Bhutan Mystique Gateway to Happiness (4N / 5D)',
    duration: '5 Days / 4 Nights',
    price: 'On Request',
    people: '2-10 people',
    highlights: ['Phuentsholing, Thimphu, Paro', '3-star stay options', 'Pickup and drop support'],
    details:
      'A carefully planned Bhutan route for first-time visitors who want a smooth border-to-capital-to-valley travel experience.',
    image: 'https://catalog.wlimg.com/service-images/ttw/car-coach-rental2.jpg'
  },
  {
    slug: 'darjeeling-mirik-5d',
    title: 'Darjeeling & Mirik Tour (5 Days)',
    duration: '5 Days / 4 Nights',
    price: 'On Request',
    people: 'Couples / families / groups',
    highlights: ['Tiger Hill sunrise', 'Local Darjeeling sightseeing', 'Mirik lake and viewpoints'],
    details:
      'A classic hill holiday combining iconic Darjeeling points with the calm landscapes and attractions around Mirik.',
    image: 'https://catalog.wlimg.com/service-images/ttw/flight-booking4.jpg'
  },
  {
    slug: 'darjeeling-offbeat-6n7d',
    title: 'Darjeeling & Offbeat Places (6N / 7D)',
    duration: '7 Days / 6 Nights',
    price: 'On Request',
    people: '2-10 people',
    highlights: ['Sittong, Dawaipani, Mirik', 'Offbeat village experiences', 'Mixed CP/AP meal plans'],
    details:
      'Designed for travelers who prefer quieter mountain stays and less-crowded routes while still covering key Darjeeling region highlights.',
    image: 'https://catalog.wlimg.com/service-images/ttw/hotel-booking3.jpg'
  }
];

export const blogs: BlogItem[] = [
  {
    slug: 'sikkim-bliss-4n5d-guide',
    title: 'Sikkim Bliss: Exploring the Roof of the World (4N/5D)',
    excerpt: 'A compact North Sikkim experience covering Gangtok, Lachung, and Yumthang Valley.',
    content:
      'This route is ideal for travelers who want to cover major North Sikkim highlights in a short duration. It includes scenic drives, valley views, and curated local stays.',
    image: 'https://catalog.wlimg.com/4/1682301/other-images/522647.jpg',
    date: 'Feb 2026'
  },
  {
    slug: 'sikkim-bliss-5n6d-highlights',
    title: 'Sikkim Bliss (5N/6D) with Himalayan Highlights',
    excerpt: 'Extended itinerary for travelers who want more mountain views and local experiences.',
    content:
      'If you want a more relaxed pace than a short itinerary, this version allows better time distribution between transfers and sightseeing across Sikkim circuits.',
    image: 'https://catalog.wlimg.com/about-image/about-12.jpg',
    date: 'Feb 2026'
  },
  {
    slug: 'nepal-tour-kathmandu-pokhara',
    title: 'Nepal Tour 5N/6D: Kathmandu to Pokhara',
    excerpt: 'A curated cross-border holiday with spiritual landmarks and scenic lakeside city life.',
    content:
      'This Nepal route combines urban heritage and natural viewpoints, suitable for families and groups seeking a balanced cultural holiday.',
    image: 'https://catalog.wlimg.com/service-images/ttw/tour-operators3.jpg',
    date: 'Feb 2026'
  }
];

export const testimonials = [
  {
    name: 'Arzldffbzq',
    date: '21 Feb 2024',
    rating: 4,
    text: 'I thank from the bottom of my heart to this company for helping us get the most amazing deal for my travel needs.'
  },
  {
    name: 'N/A',
    date: '02 Mar 2024',
    rating: 5,
    text: 'Interesting packages for different destinations and purposes, from budget to luxury clients.'
  },
  {
    name: 'Mike Ramacey',
    date: '09 Mar 2024',
    rating: 4,
    text: 'Glad I chose this agent for booking different travel packages. I recommend the company to friends and family.'
  }
];

export const destinations: DestinationItem[] = [
  {
    slug: 'gangtok',
    name: 'Gangtok',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    description: 'Capital of Sikkim with monasteries, viewpoints, and lively MG Marg evenings.',
    details:
      'Gangtok is one of the most popular gateways to Sikkim tours, known for scenic viewpoints, monasteries, and convenient access to North Sikkim circuits.',
    highlights: ['MG Marg and local markets', 'Monastery visits', 'Common base for North Sikkim itineraries']
  },
  {
    slug: 'lachung',
    name: 'Lachung',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    description: 'Scenic North Sikkim village and base for Yumthang and high-altitude excursions.',
    details:
      'Lachung serves as a key overnight stop for travelers exploring Yumthang Valley and nearby mountain attractions in North Sikkim.',
    highlights: ['Mountain village experience', 'Yumthang access point', 'Waterfall routes nearby']
  },
  {
    slug: 'yumthang-valley',
    name: 'Yumthang Valley',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    description: 'Known as the Valley of Flowers with alpine landscapes and river views.',
    details:
      'Yumthang Valley is one of the signature highlights of North Sikkim tours, offering seasonal blooms, dramatic mountain terrain, and cold valley rivers.',
    highlights: ['Valley of Flowers landscape', 'High-altitude scenic drive', 'Popular with nature-focused travelers']
  },
  {
    slug: 'darjeeling',
    name: 'Darjeeling',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    description: 'Tea gardens, Tiger Hill sunrise, monasteries, and colonial mountain charm.',
    details:
      'Darjeeling remains a flagship hill destination with iconic sunrise points, tea estate views, and a blend of culture, heritage, and mountain leisure.',
    highlights: ['Tiger Hill sunrise', 'Tea garden experiences', 'Local monasteries and market walks']
  },
  {
    slug: 'kathmandu',
    name: 'Kathmandu',
    country: 'Nepal',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    description: 'Historic temples, heritage squares, and rich Nepali cultural experiences.',
    details:
      'Kathmandu features prominently in Nepal holiday circuits for its temples, architecture, and cultural landmarks, often paired with Pokhara.',
    highlights: ['Heritage and temple circuits', 'Cultural city exploration', 'Connected Nepal package routing']
  },
  {
    slug: 'paro',
    name: 'Paro',
    country: 'Bhutan',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    description: 'A serene Bhutanese valley town known for monasteries and mountain views.',
    details:
      'Paro is a key stop in Bhutan packages, offering scenic valleys, cultural sites, and a calm mountain atmosphere suited for leisure travel.',
    highlights: ['Valley landscape and monasteries', 'Bhutan culture and heritage', 'Often combined with Thimphu']
  }
];
