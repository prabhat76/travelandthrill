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
  sourceUrl?: string;
};

export type BlogItem = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  sourceUrl?: string;
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
    slug: 'sikkim-bliss-exploring-the-roof-of-the-world-4-n-5d',
    title: 'Sikkim Bliss Exploring the Roof of the World 4 N - 5d',
    duration: '4 Nights / 5 Days',
    price: '₹10,450',
    people: 'As per itinerary',
    highlights: ['Destination Covered: Gangtok, Yumthang, Lachung', 'Tour Activities: Sightseeing', 'Tour Themes: Hill Stations & Valleys, Religious & Pilgrimage'],
    details: 'Welcome to Bagdogra Airport. Representative assistance and vehicle pick-up. Drive to Gangtok, followed by North Sikkim and Yumthang circuit as per itinerary.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399050.jpg',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/sikkim-bliss-exploring-the-roofof-the-world4n5d.htm'
  },
  {
    slug: 'sikkim-bliss-exploring-the-roof-of-the-world-5nights-6-days',
    title: 'SIKKIM BLISS: EXPLORING THE ROOF OF THE WORLD 5NIGHTS - 6 DAYS',
    duration: '5 Nights / 6 Days',
    price: '₹15,675',
    people: 'As per itinerary',
    highlights: ['Destination Covered: Gangtok, Yumthang, Lachung', 'Tour Activities: Sightseeing', 'Tour Themes: Hill Stations & Valleys'],
    details: 'Extended Sikkim package with Gangtok and North Sikkim route for travelers who want additional days in the hills.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399074.jpg',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/sikkim-bliss-exploring-the-roofof-the-world-5nights6-days.htm'
  },
  {
    slug: 'nepal-tour-5n-6d',
    title: 'Nepal Tour- 5N 6D',
    duration: '5 Nights / 6 Days',
    price: '₹19,500',
    people: 'As per itinerary',
    highlights: ['Destination Covered: Kathmandu, Pokhara', 'Tour Activities: Sightseeing', 'Tour Themes: Hill Stations & Valleys, Religious & Pilgrimage'],
    details: 'As per train schedule arrival in Gorakhpur, transport assistance is provided and the itinerary proceeds to Kathmandu and Pokhara sightseeing.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399649.jpg',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/nepal-package-from-gorakhpur.htm'
  },
  {
    slug: 'sikkim-bliss-exploring-the-roof-of-the-world-tour',
    title: 'Sikkim Bliss Exploring the roof of the world tour',
    duration: '6 Nights / 7 Days',
    price: 'On Request',
    people: 'As per itinerary',
    highlights: ['Destination Covered: Gangtok, Pelling, Yumthang, Lachung, Pemayangtse Monastery', 'Tour Activities: Camping, Sightseeing', 'Tour Themes: Wildlife, Hill Stations & Valleys'],
    details: 'Complete Sikkim circuit package with mountain sightseeing and multi-stop stay plan.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399650.jpg',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/6-night-7-days-sikkim-package.htm'
  },
  {
    slug: 'bhutan-mystique-gateway-to-happines-4-nights-5-days-tour',
    title: 'Bhutan Mystique Gateway to Happines 4 Nights 5 Days Tour',
    duration: '5 Days / 4 Nights',
    price: 'On Request',
    people: 'As per itinerary',
    highlights: ['Destination Covered: Thimphu', 'Tour Activities: Sightseeing', 'Tour Themes: Hill Stations & Valleys'],
    details: 'Bhutan itinerary route designed for mountain and cultural sightseeing.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399754.jpg',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/4-nights-5-days-bhutan-tour.htm'
  },
  {
    slug: '5-nights-6-days-tours-to-guwahati-to-meghalaya',
    title: '5 Nights - 6 Days Tours To Guwahati To Meghalaya',
    duration: '5 Nights / 6 Days',
    price: 'On Request',
    people: 'As per itinerary',
    highlights: ['Destination Covered: Shillong, Cherrapunji, Dawki, Mawsmai Falls, Elephant Falls', 'Tour Activities: Trekking, Sightseeing', 'Tour Themes: Hill Stations & Valleys, Religious & Pilgrimage'],
    details: 'Meghalaya route featuring Shillong, Cherrapunji, and Dawki sightseeing.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400033.jpg',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/5-nights6-days-toursto-guwahatito-meghalaya.htm'
  },
  {
    slug: 'amazing-north-east-india-06-nights-07-days',
    title: 'Amazing North East India 06 Nights - 07 Days',
    duration: '6 Nights / 7 Days',
    price: 'On Request',
    people: 'As per itinerary',
    highlights: ['Destination Covered: Gangtok, Darjeeling, Kalimpong, Hanuman Tok, Ganesh Tok, Enchey Monastery', 'Tour Activities: Mountaineering, Sightseeing', 'Tour Themes: Hill Stations & Valleys'],
    details: 'North East India package covering key Sikkim and Darjeeling circuits.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400034.jpg',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/amazing-north-east-india06-nights07-days.htm'
  },
  {
    slug: '5-nights-6-days-kashmir-to-kashmir-dal-lake-gulmarg-sonamarg-pahalgam-tour',
    title: '5 Nights 6 Days Kashmir To Kashmir - Dal Lake - Gulmarg - Sonamarg - Pahalgam Tour',
    duration: '5 Nights / 6 Days',
    price: 'On Request',
    people: 'As per itinerary',
    highlights: ['Destination Covered: Srinagar, Pahalgam, Sonamarg, Gulmarg, Shankaracharya Temple, Dal Lake', 'Tour Activities: Mountaineering', 'Tour Themes: Hill Stations & Valleys'],
    details: 'Kashmir circuit package with Srinagar, Gulmarg, Sonamarg, and Pahalgam sightseeing.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400035.jpg',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/5-nights6-days-kashmirto-kashmir-dal-lake-gulmarg-sonamarg-pahalgam.htm'
  },
  {
    slug: '2-nights-3-days-goa-tour-package',
    title: '2 Nights - 3 Days Goa Tour Package',
    duration: '2 Nights / 3 Days',
    price: 'On Request',
    people: 'As per itinerary',
    highlights: ['Destination Covered: North Goa, South Goa', 'Tour Activities: Beaches Sightseeing', 'Tour Themes: Beaches and Islands'],
    details: 'Short Goa package focused on North and South Goa sightseeing.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400036.jpg',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/2-nights3-days-goa-tour-package.htm'
  },
  {
    slug: '13-nights-14-days-everest-base-camp-trek-tour',
    title: '13 Nights 14 Days Everest Base Camp Trek Tour',
    duration: '13 Nights / 14 Days',
    price: 'On Request',
    people: 'As per itinerary',
    highlights: ['Destination Covered: Kathmandu, Solukhumbu', 'Tour Activities: Trekking', 'Tour Themes: Adventure Tours, Hill Stations & Valleys'],
    details: 'Long-duration Everest Base Camp trek itinerary via Kathmandu and Solukhumbu route.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400037.jpg',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/13-nights14-days-everest-base-camp-trek-tour.htm'
  },
  {
    slug: 'kerala-4-night-5-days-package',
    title: 'Kerala 4 Night 5 Days Package',
    duration: '4 Nights / 5 Days',
    price: 'On Request',
    people: 'As per itinerary',
    highlights: ['Destination Covered: Thekkady, Alleppey, Munnar', 'Tour Activities: House Boat, Boating, Sightseeing', 'Tour Themes: Hill Stations & Valleys'],
    details: 'Kerala route package with Munnar, Thekkady, and Alleppey experiences.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400038.jpg',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/kerala4-night5-days-package.htm'
  }
];

export const blogs: BlogItem[] = [
  {
    slug: 'sikkim-bliss-exploring-the-roof-of-the-world-4-n-5d-blog',
    title: 'Sikkim Bliss Exploring the Roof of the World 4 N - 5d',
    excerpt: '4 Nights / 5 Days',
    content: 'Destination Covered: Gangtok, Yumthang, Lachung. Tour Activities: Sightseeing. Tour Themes: Hill Stations & Valleys, Religious & Pilgrimage.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399050.jpg',
    date: 'Sat, 09 Mar 2024',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/sikkim-bliss-exploring-the-roofof-the-world4n5d.htm'
  },
  {
    slug: 'sikkim-bliss-exploring-the-roof-of-the-world-5nights-6-days-blog',
    title: 'SIKKIM BLISS: EXPLORING THE ROOF OF THE WORLD 5NIGHTS - 6 DAYS',
    excerpt: '5 Nights / 6 Days',
    content: 'Destination Covered: Gangtok, Yumthang, Lachung. Tour Activities: Sightseeing. Tour Themes: Hill Stations & Valleys.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399074.jpg',
    date: 'Sat, 09 Mar 2024',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/sikkim-bliss-exploring-the-roofof-the-world-5nights6-days.htm'
  },
  {
    slug: 'nepal-tour-5n-6d-blog',
    title: 'Nepal Tour- 5N 6D',
    excerpt: '5 Nights / 6 Days',
    content: 'Destination Covered: Kathmandu, Pokhara. Tour Activities: Sightseeing. Tour Themes: Hill Stations & Valleys, Religious & Pilgrimage.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399649.jpg',
    date: 'Sat, 16 Mar 2024',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/nepal-package-from-gorakhpur.htm'
  },
  {
    slug: 'sikkim-bliss-exploring-the-roof-of-the-world-tour-blog',
    title: 'Sikkim Bliss Exploring the roof of the world tour',
    excerpt: '6 Nights / 7 Days',
    content: 'Destination Covered: Gangtok, Pelling, Yumthang, Lachung, Pemayangtse Monastery. Tour Activities: Camping, Sightseeing. Tour Themes: Wildlife, Hill Stations & Valleys.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399650.jpg',
    date: 'Sat, 16 Mar 2024',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/6-night-7-days-sikkim-package.htm'
  },
  {
    slug: 'bhutan-mystique-gateway-to-happines-4-nights-5-days-tour-blog',
    title: 'Bhutan Mystique Gateway to Happines 4 Nights 5 Days Tour',
    excerpt: '4 Nights / 5 Days',
    content: 'Destination Covered: Thimphu. Tour Activities: Sightseeing. Tour Themes: Hill Stations & Valleys.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399754.jpg',
    date: 'Mon, 18 Mar 2024',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/4-nights-5-days-bhutan-tour.htm'
  },
  {
    slug: '5-nights-6-days-tours-to-guwahati-to-meghalaya-blog',
    title: '5 Nights - 6 Days Tours To Guwahati To Meghalaya',
    excerpt: '5 Nights / 6 Days',
    content: 'Destination Covered: Shillong, Cherrapunji, Dawki, Mawsmai Falls, Elephant Falls. Tour Activities: Trekking, Sightseeing. Tour Themes: Hill Stations & Valleys, Religious & Pilgrimage.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400033.jpg',
    date: 'Thu, 21 Mar 2024',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/5-nights6-days-toursto-guwahatito-meghalaya.htm'
  },
  {
    slug: 'amazing-north-east-india-06-nights-07-days-blog',
    title: 'Amazing North East India 06 Nights - 07 Days',
    excerpt: '6 Nights / 7 Days',
    content: 'Destination Covered: Gangtok, Darjeeling, Kalimpong, Hanuman Tok, Ganesh Tok, Enchey Monastery. Tour Activities: Mountaineering, Sightseeing. Tour Themes: Hill Stations & Valleys.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400034.jpg',
    date: 'Thu, 21 Mar 2024',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/amazing-north-east-india06-nights07-days.htm'
  },
  {
    slug: '5-nights-6-days-kashmir-tour-blog',
    title: '5 Nights 6 Days Kashmir To Kashmir - Dal Lake - Gulmarg - Sonamarg - Pahalgam Tour',
    excerpt: '5 Nights / 6 Days',
    content: 'Destination Covered: Srinagar, Pahalgam, Sonamarg, Gulmarg, Shankaracharya Temple, Dal Lake. Tour Activities: Mountaineering. Tour Themes: Hill Stations & Valleys.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400035.jpg',
    date: 'Thu, 21 Mar 2024',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/5-nights6-days-kashmirto-kashmir-dal-lake-gulmarg-sonamarg-pahalgam.htm'
  },
  {
    slug: '2-nights-3-days-goa-tour-package-blog',
    title: '2 Nights - 3 Days Goa Tour Package',
    excerpt: '2 Nights / 3 Days',
    content: 'Destination Covered: North Goa, South Goa. Tour Activities: Beaches Sightseeing. Tour Themes: Beaches and Islands.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400036.jpg',
    date: 'Thu, 21 Mar 2024',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/2-nights3-days-goa-tour-package.htm'
  },
  {
    slug: '13-nights-14-days-everest-base-camp-trek-tour-blog',
    title: '13 Nights 14 Days Everest Base Camp Trek Tour',
    excerpt: '13 Nights / 14 Days',
    content: 'Destination Covered: Kathmandu, Solukhumbu. Tour Activities: Trekking. Tour Themes: Adventure Tours, Hill Stations & Valleys.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400037.jpg',
    date: 'Thu, 21 Mar 2024',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/13-nights14-days-everest-base-camp-trek-tour.htm'
  },
  {
    slug: 'kerala-4-night-5-days-package-blog',
    title: 'Kerala 4 Night 5 Days Package',
    excerpt: '4 Nights / 5 Days',
    content: 'Destination Covered: Thekkady, Alleppey, Munnar. Tour Activities: House Boat, Boating, Sightseeing. Tour Themes: Hill Stations & Valleys.',
    image: 'https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400038.jpg',
    date: 'Thu, 21 Mar 2024',
    sourceUrl: 'https://www.travelandthrillsholidays.co.in/holiday-packages/kerala4-night5-days-package.htm'
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
