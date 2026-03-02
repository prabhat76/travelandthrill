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

// ...existing code...

export const packages: PackageItem[] = [
  {
    slug: 'golden-triangle-tour-of-nepal-7n8d',
    title: 'Golden Triangle Tour of Nepal (7N8D)',
    duration: '7 Nights / 8 Days',
    price: '₹35,500',
    people: 'Minimum 2 Pax (Twin Sharing)',
    highlights: [
      'Destination Covered: Kathmandu, Chitwan, Pokhara',
      'Tour Activities: Jungle Safari, Sightseeing, Boat Ride, Cultural Experience',
      'Tour Themes: Religious & Pilgrimage, Wildlife, Hill Stations & Valleys, Adventure Tours',
      'UNESCO World Heritage Sites: Pashupatinath, Boudhanath, Swayambhunath, Kathmandu Durbar Square',
      'Wildlife Safari: Chitwan National Park with one-horned rhinos and Bengal tigers',
      'Adventure Activities: Paragliding, Ultralight tour, Helicopter city tour (optional)'
    ],
    details: `ITINERARY

Day 01: Arrival in Kathmandu
Upon your arrival at Tribhuvan International Airport in Kathmandu, you will be warmly welcomed and transferred to your hotel. After check-in and a brief rest, you will head to the sacred Pashupatinath Temple, one of the holiest Hindu temples dedicated to Lord Shiva. In the evening, witness the mesmerizing Ganga Aarati ceremony on the banks of the Bagmati River—a spiritually uplifting experience. Return to your hotel for dinner and rest. Overnight stay in Kathmandu.

Day 02: Exploring the Cultural Heart of Kathmandu
After a delightful breakfast, begin your day by exploring Kathmandu Durbar Square, a UNESCO World Heritage Site known for its stunning Newari architecture, ancient palaces, and temples. Continue to Swayambhunath Stupa, also called the Monkey Temple, perched on a hilltop offering panoramic views of the Kathmandu Valley. Later, visit the peaceful and massive Boudhanath Stupa, a key spiritual hub for Tibetan Buddhists. The day is a blend of cultural depth and scenic beauty. Overnight stay in Kathmandu.

Day 03: Drive to Chitwan – Jungle Life Begins
After breakfast, set off on a scenic drive to Chitwan National Park (approximately 5–6 hours), located in the subtropical lowlands of southern Nepal. On arrival, check into a jungle resort and relax. Later take a guided walk through a Tharu village, where you'll learn about the local lifestyle and customs. In the evening, enjoy a traditional Tharu cultural dance performance. Wind down with dinner in the peaceful ambiance of the forest. Overnight stay in Chitwan.

Day 04: Jungle Safari Adventure in Chitwan
Today is full of adventure and wildlife exploration. After breakfast, embark on an exciting elephant-back safari or jeep safari through Chitwan National Park, home to exotic wildlife including one-horned rhinos, deer, wild boars, and—if you're lucky—you can even spot the elusive Bengal tiger. Later, enjoy a tranquil canoe ride on the Rapti River, spotting crocodiles and a variety of bird species along the way. The day also includes a visit to the elephant breeding center, offering insight into elephant conservation. Overnight stay in Chitwan.

Day 05: Drive to Pokhara – The Lakeside Gem
After breakfast, depart for Pokhara, a picturesque city nestled beside the Himalayas (approximately a 4–5-hour drive). Upon arrival, check into your hotel near Phewa Lake, the vibrant heart of Pokhara. In the evening, enjoy a serene boat ride on Phewa Lake and visit the Tal Barahi Temple, situated on a small island. You'll have free time to stroll along the lakeside, relax in cafés, or shop for souvenirs. Overnight stay in Pokhara.

Day 06: Pokhara Sightseeing & Adventure
Rise early for a drive to Sarangkot, a famous viewpoint for witnessing a breathtaking sunrise over the Annapurna and Dhaulagiri ranges. After breakfast, explore Pokhara's highlights including the majestic Davis Falls, the mystical Gupteshwor Mahadev Cave, and the serene World Peace Pagoda. Adventure seekers may opt for activities such as paragliding, Ultralight tour, or even a helicopter city tour. Overnight stay in Pokhara.

Day 07: Return to Kathmandu
After breakfast, drive back to Kathmandu (approx. 6 hours). Upon arrival, enjoy some free time in Thamel, the bustling tourist hub known for its vibrant markets, handicraft stores, and restaurants. In the evening, indulge in a traditional Nepali dinner accompanied by a cultural dance performance—a perfect farewell to your Nepali adventure. Overnight stay in Kathmandu.

Day 08: Visit Jalnarayan Temple & Departure
After breakfast, visit the sacred Jalnarayan Temple (Sleeping Vishnu Temple), a revered Hindu site featuring a large reclining statue of Lord Vishnu in a pond. Later, you'll be transferred to the airport in time for your onward journey, carrying with you the rich memories and spiritual energy of Nepal's Golden Triangle.

Note: The above package can be fully customized according to your requirements. Please feel free to contact us with any inquiries.`,
    image: '/nepal.png',
  },
  {
    slug: 'darjeeling-exploring-off-beat-destination-5n6d',
    title: 'Darjeeling: Exploring Off Beat Destination (5N6D)',
    duration: '5 Nights / 6 Days',
    price: '₹12,800',
    people: 'Minimum 6 Pax',
    highlights: [
      'Destination Covered: Sittong, Lamahatta, Darjeeling, Mirik',
      'Tour Activities: Tea Garden Tours, Sightseeing, Adventure Drives',
      'Tour Themes: Hill Stations & Valleys, Off-Beat Experiences, Cultural Exploration',
      'Highlights: Tiger Hill Sunrise, Dali Monastery, Batasia Loop, Sumendu Lake',
      'Experience: Orchid Lake, Chinchona Plantation, Gopaldhara Tea Estate, Himalayan Views'
    ],
    details: `ITINERARY

Day 01: Siliguri/NJP – Sittong (29 KM, 1.5 hrs)
On arrival at NJP Railway Station / Bagdogra Airport, meet our local representative. Drive to Sittong with beautiful tea garden views of Rohini Road and Kurseong Bazar. Check-in at Sittong Homestay. Overnight stay in Sittong.

Day 02: Sittong Sightseeing – Lamahatta (65 KM, 2.5 hrs)
After breakfast, visit Ahaldara Viewpoint, Sittong Monastery, Orchid Lake, Chinchona Plantation, Namthang Lake, and Latpanchar. Transfer to Lamahata for overnight stay.

Day 03: Lamahatta - Sightseeing – Darjeeling (25 KM, 1 hr)
After breakfast, visit Lamahatta Park (Mamta Park), Tinchulay Viewpoint, Peshok Tea Garden, Triveni Viewpoint, and Teasta River. Drive towards Darjeeling and check-in at homeland. Evening free for shopping or leisure. Overnight stay in Darjeeling.

Day 04: Darjeeling Sightseeing
Early morning drive to Tiger Hill for sunrise. After breakfast, visit Dali Monastery, Batasia Loop, Himalayan Mountaineering Institute, P.N. Zoological Park, Tenzing Rock, Tea Garden (outer view), and Japanese Temple. Optional: Darjeeling Himalayan Toy Train joy ride. Overnight stay in Darjeeling.

Day 05: Darjeeling - Mirik
After breakfast, journey towards Mirik. Visit Lepchajagat, Simana Viewpoint (Nepal border), Sumendu Lake (famous manmade lake), Pashupati Nagar, and Gopaldhara Tea Estate. Transfer to Homestay. Overnight stay in Mirik.

Day 06: Mirik to NJP Railway Station
After breakfast, check out and transfer to NJP Railway Station according to departure time.

Meal Plan: MAP/AP (Breakfast, Lunch, Snacks, Dinner in Sittong, Lamahatta, and Mirik; MAP in Darjeeling)
Vehicle: Luxury Vehicle (Innova/Eartiga or similar)
Hotels: Sittong (1 night), Lamahata (1 night), Darjeeling (2 nights), Mirik (1 night)`,
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=800&h=600&fit=crop&q=80',
  },
  {
    slug: 'sikkim-darjeeling-roof-of-the-world-7n8d',
    title: 'Sikkim & Darjeeling: Exploring the Roof of the World (7N8D)',
    duration: '7 Nights / 8 Days',
    price: '₹1,09,000',
    people: 'Minimum 5 Pax',
    highlights: [
      'Destination Covered: Gangtok, Lachung, Darjeeling',
      'Tour Activities: Mountain Trekking, Sightseeing, Lake Excursions',
      'Tour Themes: Religious & Pilgrimage, Hill Stations & Valleys, Adventure Tours',
      'Highlights: Gangtok MG Marg, Yumthang Valley (12,000 ft), Tsomgo Lake & Babamandir',
      'Experience: Tiger Hill Sunrise, Himalayan Mountaineering Institute, Optional Cable Ropeway'
    ],
    details: `ITINERARY

Day 01: Bagdogra Airport – Gangtok (120 KMS, 5 HRS)
Welcome to Bagdogra Airport. Representative assistance and vehicle pick-up. Drive to Gangtok passing through Mahananda Wildlife Sanctuary. Follow the course of Teasta River. Check-in at hotel in Gangtok. Rest of the time explore MG Marg, Mall Road, Local Market. Overnight stay in Gangtok.

Day 02: Gangtok – Lachung (107 KMS, 6 HRS)
After breakfast, check out with limited luggage. Proceed to Lachung (8,500 ft) in North Sikkim. Enroute visit Naga Waterfall and Bhim Nala Waterfall. Check-in at hotel in Lachung. Overnight stay in Lachung.

Day 03: Lachung – Yumthang Valley Excursion
Early morning drive to Yumthang Valley (12,000 ft). Optional tour of Zero Point at extra cost (Rs. 3,500 per vehicle). Mt. Katawo (Rs. 2,000 extra). Rest of the time enjoy evening walk with beautiful views of Lachung. Overnight stay in Lachung.

Day 04: Lachung – Gangtok (120 KMS, 5 HRS)
After breakfast, check out from hotel and travel to Gangtok. Explore MG Marg and Local Market. Overnight stay in Gangtok.

Day 05: Excursion to Tsomgo Lake & Babamandir
Breakfast, then excursion to Tsomgo Lake & Babamandir. Optional Ropeway cable ride recommended. Optional Nathula Pass Permit at extra cost (Rs. 4,000 per vehicle, subject to availability, closed on Monday). Overnight stay in Gangtok.

Day 06: Gangtok – Darjeeling (110 KM, 4 hours)
After breakfast, check out and drive to Darjeeling via Teasta River. Check-in at hotel. Explore Mall Road, Chowrasta, Makhal Baba Temple, Local Market. Overnight stay in Darjeeling.

Day 07: Darjeeling Sightseeing
Early morning drive to Tiger Hill for sunrise. After breakfast, visit Dali Monastery, Batasia Loop, Himalayan Mountaineering Institute, P.N. Zoological Park, Tenzing Rock, Tea Garden (outer view), and Japanese Temple. Optional: Darjeeling Himalayan Toy Train joy ride. Overnight stay in Darjeeling.

Day 08: Darjeeling – Siliguri/NJP Airport
After breakfast, check out and drive towards Siliguri NJP. Transfer to Railway Station for onwards journey.

Meal Plan: MAP (Dinner & Breakfast included)
Vehicle: Luxury Vehicle (Innova/Xylo or similar)
Hotels: Gangtok (3 nights), Lachung (2 nights), Darjeeling (2 nights)`,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80',
  },
  {
    slug: 'sikkim-bliss-roof-of-world-4n5d',
    title: 'Sikkim Bliss: Exploring the Roof of the World (4N5D)',
    duration: '4 Nights / 5 Days',
    price: '₹11,000',
    people: 'Minimum 13 Pax',
    highlights: [
      'Destination Covered: Gangtok, Lachung, Yumthang Valley',
      'Tour Activities: Mountain Sightseeing, Waterfall Tours, High-Altitude Excursions',
      'Tour Themes: Adventure Tours, Hill Stations & Valleys, Scenic Drives',
      'Highlights: Gangtok MG Marg, Yumthang Valley (12,000 ft), Zero Point (15,300 ft)',
      'Experience: Seven Sister Waterfalls, Snow-capped Peaks, Indo-China Border Region'
    ],
    details: `ITINERARY

Day 01: Bagdogra Airport – Gangtok (120 KMS, 5 HRS)
Welcome to Bagdogra Airport. Representative assistance and vehicle pick-up. Drive to Gangtok passing through Mahananda Wildlife Sanctuary. Follow the course of River Teesta. Check-in at hotel in Gangtok. Rest of time explore MG Marg, Mall Road, Local Market. Overnight stay in Gangtok.

Day 02: Gangtok – Lachung (107 KMS, 6 HRS)
After breakfast, check out with limited luggage. Proceed to Lachung (8,500 ft) in North Sikkim. Enroute visit Seven Sister Waterfalls, Bhim Nala Waterfall, Singhik Viewpoint. Check-in at hotel in Lachung. Overnight stay in Lachung.

Day 03: Lachung – Yumthang Valley Excursion
Early morning drive to Yumthang Valley (12,000 ft). Zero Point is a high-altitude (15,300 ft) tourist destination known as the last motorable outpost, offering stunning views of snow-capped peaks and merging rivers. It is a year-round snow spot near the Indo-China border, requiring permits for access. Rest of time enjoy evening walk with beautiful views of Lachung. Overnight stay in Lachung.

Day 04: Lachung – Gangtok (120 KMS, 5 HRS)
After breakfast, check out from hotel and travel to Gangtok. Visit Chungthang (small town where Lachung and Lachen rivers meet), Mangan, and Tashi Viewpoint. Check-in at hotel. Overnight stay in Gangtok.

Day 05: Gangtok – Bagdogra Airport (120 KM, 5 HOURS)
After breakfast, check-out from hotel and take departure transfer to Bagdogra Airport for your onward journey.

Meal Plan: MAP (Dinner & Breakfast included)
Vehicle: 2 Luxury Vehicles (Bolero/Scorpio or similar)
Hotels: Gangtok (2 nights), Lachung (2 nights)
Inclusion: Transport, Fooding, Lodging, Parking, Zero Point access
Exclusion: Optional sightseeing, Lunch, Flight/Train Fares, Entry Fees, Room Heater`,
    image: 'https://images.unsplash.com/photo-1585147269142-fd99a15a7aed?w=800&h=600&fit=crop&q=80',
  },
  {
    slug: 'bhutan-mystique-gateway-to-happiness-6n7d',
    title: 'Bhutan Mystique: Gateway to Happiness (6N7D)',
    duration: '6 Nights / 7 Days',
    price: '₹32,500',
    people: 'Minimum 5 Pax',
    highlights: [
      'Destination Covered: Phuentsholing, Thimphu, Punakha, Paro',
      'Tour Activities: Monastery Trekking, Sightseeing, Cultural Tours, Optional River Rafting',
      'Tour Themes: Religious & Pilgrimage, Cultural Heritage, Mountain Experiences, Adventure',
      'Highlights: Tiger\'s Nest Monastery (10,245 ft), Dochula Pass (3,150 m), Punakha Dzong, Buddha Dordenma',
      'Experience: Traditional Archery, Hot Stone Bath, Bhutanese Butter Tea, Takin Zoo, National Museum'
    ],
    details: `ITINERARY

Day 01: Bagdogra Airport – Phuentsholing (145 km, 4 hours)
Arrival at Bagdogra Airport. Drive from Bagdogra to Phuentsholing, the border town of Bhutan (about 4-5 hours). Complete immigration formalities at the Bhutan-India border. Check-in at your hotel in Phuentsholing. Explore the local market and nearby attractions. Overnight stay in Phuentsholing.

Day 02: Phuentsholing to Thimphu (160 KMS, 5 HRS)
After breakfast, checkout from the hotel. After immigration, proceed towards Thimphu. Enjoy beautiful journey through scenic landscapes. Pass through Chukha Waterfall and Chuzom Bridge (confluence of Thimphu river and Paro river). Arrive Thimphu by evening and check in to your hotel. Leisure time in the evening. Overnight stay in Thimphu.

Day 03: Thimphu to Punakha Excursion (75 KMS, 2.5 HRS ONE WAY)
After breakfast, drive to Punakha. Visit Dochula Pass (3,150 mts) - a beautiful mountain pass with 108 memorial stupas. Visit Punakha Dzong - the second oldest dzong in Bhutan, which served as the capital and seat of government until the mid-1950s. See Punakha Suspension Bridge - one of the longest and oldest suspension bridges in Bhutan. After sightseeing, return to hotel in Thimphu. Overnight stay in Thimphu. Optional: Experience River Rafting in Punakha.

Day 04: Thimphu Sightseeing – Paro (45 km, 1.5 hours)
After breakfast, proceed for Thimphu local sightseeing. Visit Buddha Dordenma Statue - a huge statue of Buddha. Visit The National Memorial Chorten Stupas - built in memory of the third king. Visit Takin Zoo - where the national animal of Bhutan can be seen. Visit Changangkha Lhakhang - oldest surviving temple in Thimphu. Visit Simply Bhutan Museum - taste local wine 'Aara', dress up in traditional clothes, play National game Archery, meet foot carver Pema Tshering, watch cultural show and drink Bhutanese Butter Tea. Arrival to Paro by evening. Check in to your hotel. Overnight stay in Paro.

Day 05: Paro Sightseeing
After breakfast, proceed to Tiger's Nest Monastery (also known as Paro Taktsang) - a sacred Buddhist temple and monastery (6.4 KMS, 3-5 HRS, ALTITUDE 10,245 FT, ELEVATION 900 MTR). The hike is easy to moderate. For people who cannot make the climb, horses are available for hire at the starting point. After the hike, enjoy hot stone bath at countryside. Overnight stay in Paro. Optional: Enjoy live music at Park 76 Cafe & Pub in Paro Town.

Day 06: Paro Local Sightseeing - Transfer to Phuentsholing (150km, 4hours)
After breakfast, proceed to Paro local sightseeing. Visit Ta Dzong – National Museum of Bhutan. Visit Rinpung Dzong - popularly known as Paro Dzong, situated in the Paro Valley. Afternoon drive to Phuentsholing with stopovers and enjoying scenic beauty. Arrive Phuentsholing by evening and check in to your hotel. Overnight stay in Phuentsholing.

Day 07: Phuentsholing to Bagdogra Airport (145km, 4hrs)
After breakfast, check-out from hotel and transfer to Bagdogra Airport for onwards journey. Suggested: Book flight after 02:00 PM from Bagdogra Airport.

Inclusions: 3-star Hotel, Pick-up & Drop at Bagdogra Airport, Reserved vehicle for Transfer and Sightseeing, All sightseeing as per itinerary, All taxes & SDF permits, Meal Plan – MAP (Breakfast & Dinner)

Exclusions: Personal expenses, Entry fees of sightseeing places, Any other not mentioned in inclusions

Hotels: Hotel Terminal Phuentsholing (2N), Hotel Dralha Thimphu (2N), Empire Hotel Paro (2N)
Vehicle: 1 Luxury Vehicle (Innova/Eartiga or similar)
Meal Plan: MAP (Breakfast & Dinner)

Documents Required: Valid Passport (6 months validity), For below 18 years - DOB certificate, 2 Passport Size Colour Photographs, Double Vaccination Certificate (Note: Aadhaar Card is not valid in Bhutan)

Valid Identity Proofs for Bhutan: Indians can use Voter Card or Valid Passport`,
    image: 'https://images.pexels.com/photos/3573351/pexels-photo-3573351.jpeg?w=800&h=600&fit=crop',
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
    name: 'Rahesh Sutariya',
    date: '9 months ago',
    rating: 5,
    text: 'I had a wonderful 7-night, 8-day trip to Sikkim arranged by Mr. Rupesh. From start to finish, he was incredibly supportive, responsive, and maintained a calm demeanor that made planning the trip smooth and stress-free. His attention to detail was impeccable.'
  },
  {
    name: 'Anjumara Khatun',
    date: '9 months ago',
    rating: 5,
    text: 'We recently had the pleasure of going on a Darjeeling tour with Travel & Thrills, and it was absolutely wonderful! The breathtaking beauty of Darjeeling took our breath away at every turn. Our driver, Mr. Prabin, was incredibly experienced.'
  },
  {
    name: 'Suban Sarkar',
    date: 'A year ago',
    rating: 5,
    text: 'Awesome trip arranged by Travel and Thrills especially by Rupesh Tamang, who not only helped share a beautiful itinerary but also helped and guided us for a beautiful trip to Sikkim, his expert guidance and warm suggestion helped us to visit amazing places.'
  },
  {
    name: 'Soumendu',
    date: 'A year ago',
    rating: 5,
    text: 'Our Sandakphu trip for 3 days 2 night was arranged by Travel & Trills. Service was excellent. Hotels provided with excellent view room, which is very helpful for other members in group, specially for ladies and children, able to enjoy the beauty of nature.'
  },
  {
    name: 'Swapnil Kharat',
    date: '3 weeks ago',
    rating: 5,
    text: 'We had a good trip to Sikkim and really enjoyed it. Mr. Rupesh was very helpful during the trip.'
  },
  {
    name: 'Abhishek',
    date: '4 months ago',
    rating: 5,
    text: 'Rupesh has been our travel organizer for our trip to Kafergaon, Rishyap and Kalimpong. He has provided us the best plan possible. I will be availing his services in future as well.'
  },
  {
    name: 'Ketan Helly',
    date: '9 months ago',
    rating: 5,
    text: 'I had the pleasure of experiencing a trip to Sikkim and surrounding regions organized by Mr. Rupesh. Our itinerary included visits to Gangtok, Nathula Pass, Lachung, Yumthang Valley, Pelling, and Darjeeling, along with numerous sightseeing opportunities.'
  },
  {
    name: 'Goutam Pal',
    date: '9 months ago',
    rating: 5,
    text: 'Excellent service and very good experience with Rupesh Bhai. Very budget friendly tour.'
  }
];

export const destinations: DestinationItem[] = [
  {
    slug: 'gangtok',
    name: 'Gangtok',
    country: 'India',
    image: '/pemayangtse-monastery-pelling-sikkim-1-attr-nearby.png',
    description: 'Capital of Sikkim with monasteries, viewpoints, and lively MG Marg evenings.',
    details:
      'Gangtok is one of the most popular gateways to Sikkim tours, known for scenic viewpoints, monasteries, and convenient access to North Sikkim circuits.',
    highlights: ['MG Marg and local markets', 'Monastery visits', 'Common base for North Sikkim itineraries']
  },
  {
    slug: 'lachung',
    name: 'Lachung',
    country: 'India',
    image: '/lachung.png',
    description: 'Scenic North Sikkim village and base for Yumthang and high-altitude excursions.',
    details:
      'Lachung serves as a key overnight stop for travelers exploring Yumthang Valley and nearby mountain attractions in North Sikkim.',
    highlights: ['Mountain village experience', 'Yumthang access point', 'Waterfall routes nearby']
  },
  {
    slug: 'yumthang-valley',
    name: 'Yumthang Valley',
    country: 'India',
    image: '/yumthang.png',
    description: 'Known as the Valley of Flowers with alpine landscapes and river views.',
    details:
      'Yumthang Valley is one of the signature highlights of North Sikkim tours, offering seasonal blooms, dramatic mountain terrain, and cold valley rivers.',
    highlights: ['Valley of Flowers landscape', 'High-altitude scenic drive', 'Popular with nature-focused travelers']
  },
  {
    slug: 'darjeeling',
    name: 'Darjeeling',
    country: 'India',
    image: '/pemayangtse-monastery-pelling-sikkim-1-attr-nearby.png',
    description: 'Tea gardens, Tiger Hill sunrise, monasteries, and colonial mountain charm.',
    details:
      'Darjeeling remains a flagship hill destination with iconic sunrise points, tea estate views, and a blend of culture, heritage, and mountain leisure.',
    highlights: ['Tiger Hill sunrise', 'Tea garden experiences', 'Local monasteries and market walks']
  },
  {
    slug: 'kathmandu',
    name: 'Kathmandu',
    country: 'Nepal',
    image: '/nepal.png',
    description: 'Historic temples, heritage squares, and rich Nepali cultural experiences.',
    details:
      'Kathmandu features prominently in Nepal holiday circuits for its temples, architecture, and cultural landmarks, often paired with Pokhara.',
    highlights: ['Heritage and temple circuits', 'Cultural city exploration', 'Connected Nepal package routing']
  },
  {
    slug: 'paro',
    name: 'Paro',
    country: 'Bhutan',
    image: '/Paro.png',
    description: 'A serene Bhutanese valley town known for monasteries and mountain views.',
    details:
      'Paro is a key stop in Bhutan packages, offering scenic valleys, cultural sites, and a calm mountain atmosphere suited for leisure travel.',
    highlights: ['Valley landscape and monasteries', 'Bhutan culture and heritage', 'Often combined with Thimphu']
  }
];
