export interface MenuItem {
  id: string;
  name: string;
  category: 'designer-cakes' | 'patisserie' | 'cafe-bites' | 'beverages';
  price: number;
  priceNote?: string;
  description: string;
  tags: string[];
  isEggless?: boolean;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  source: 'Google Maps' | 'MagicPin' | 'Direct Customer';
  highlight: string;
}

export const BUSINESS_INFO = {
  name: "La'Delicious Bakery & Cafe",
  legalName: "La'Delicious Bakery and Cafe / Charlie Restaurant",
  tagline: "Karimnagar's Premier Artisanal Patisserie, Custom Designer Cakes & Cafe",
  description: "Crafting bespoke celebration cakes, French-style pastries, sizzling cafe delicacies, and specialty coffees in the heart of Karimnagar. Loved for authentic flavors, eggless mastercrafts, and warm gatherings.",
  phone: "+91 97043 03881",
  altPhone: "+91 83749 16111",
  whatsapp: "919704303881",
  email: "contact@ladeliciouskarimnagar.demo", // demo placeholder
  address: "Shiva Theater Road, Opp. Easy Buy, 2-10-822/B/1, Jyothinagar, Karimnagar, Telangana — 505001",
  plusCode: "C4VF+7XF Karimnagar, Telangana",
  googleMapsUrl: "https://maps.app.goo.gl/74FQTbeV6ovrWQ1k6",
  googleMapsEmbedQuery: "La'Delicious Bakery and Cafe, Jyothinagar, Karimnagar, Telangana 505001",
  instagramHandle: "@la_delicious_cafe_patisserie",
  instagramUrl: "https://www.instagram.com/la_delicious_cafe_patisserie/",
  swiggyUrl: "https://www.swiggy.com/city/karimnagar/la-delicious-bakery-and-cafe-jyothinagar-rest",
  zomatoUrl: "https://www.zomato.com/karimnagar/la-delicious-bakery-and-cafe",
  timings: {
    bakery: "10:00 AM – 10:00 PM",
    restaurant: "12:00 PM – 10:00 PM",
    days: "Monday – Sunday (All 7 Days)",
    openHour: 10,
    closeHour: 22
  },
  stats: {
    rating: "4.3★",
    reviewCount: "500+",
    cakesBaked: "15,000+",
    flavorsCount: "35+"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // Designer Cakes
  {
    id: 'cake-signature',
    name: "La'Delicious Signature Truffle Cake",
    category: 'designer-cakes',
    price: 450,
    priceNote: 'for 500g (1kg available)',
    description: "Our signature dark Belgian ganache layered on tender cocoa sponge, garnished with gold foil crisps and hand-rolled truffles.",
    tags: ['Best Seller', 'Eggless Available', 'Chef Special'],
    isEggless: true,
    isPopular: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'cake-belgian',
    name: "Belgian Dark Chocolate Cake",
    category: 'designer-cakes',
    price: 420,
    priceNote: 'for 500g',
    description: "Intense 54% dark chocolate silk ganache with velvety sponge layers. Pure chocolate luxury loved by Karimnagar chocolate enthusiasts.",
    tags: ['Chocoholic Favorite', 'Eggless'],
    isEggless: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'cake-choco-almond',
    name: "Choco Almond Royale",
    category: 'designer-cakes',
    price: 440,
    priceNote: 'for 500g',
    description: "Toasted California almond slivers blended with rich chocolate mousse and crunchy praline pearls.",
    tags: ['Premium Crunch', 'Nutty'],
    isEggless: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'cake-redvelvet',
    name: "Velvet Cream Cheese Delight",
    category: 'designer-cakes',
    price: 430,
    priceNote: 'for 500g',
    description: "Rich crimson buttermilk sponge paired with whipped Philadelphia cream cheese frosting. Elegant choice for anniversaries & birthdays.",
    tags: ['Celebration', 'Eggless'],
    isEggless: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'cake-blueberry',
    name: "Blueberry Glaze Fresh Gateau",
    category: 'designer-cakes',
    price: 410,
    priceNote: 'for 500g',
    description: "Light vanilla sponge layered with whole wild blueberry compote and silky whipped cream glaze.",
    tags: ['Fruity', 'Eggless'],
    isEggless: true,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'cake-blackforest',
    name: "Classic Black Forest Gateau",
    category: 'designer-cakes',
    price: 380,
    priceNote: 'for 500g',
    description: "The timeless favorite: dark chocolate shavings, maraschino cherries, and fresh light cream on soft sponge.",
    tags: ['Classic', 'Crowd Favorite'],
    isEggless: true,
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'cake-butterscotch',
    name: "Butterscotch Praline Crunch",
    category: 'designer-cakes',
    price: 380,
    priceNote: 'for 500g',
    description: "Golden brown caramel glaze topped with homemade butterscotch cashew nut brittle crunch.",
    tags: ['Sweet Crunch', 'Eggless'],
    isEggless: true,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80'
  },

  // French Patisserie & Desserts
  {
    id: 'pat-opera',
    name: "Artisanal French Opera Pastry",
    category: 'patisserie',
    price: 99,
    priceNote: 'per slice',
    description: "French classic featuring almond joconde sponge soaked in coffee syrup, layered with ganache and French buttercream.",
    tags: ['French Classic', 'Handcrafted'],
    isPopular: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'pat-waffle',
    name: "Caramelized Banana Warm Waffle",
    category: 'patisserie',
    price: 150,
    priceNote: 'served fresh',
    description: "Crispy golden Belgian waffle topped with pan-caramelized bananas, cinnamon dust, and maple drizzle.",
    tags: ['Cafe Special', 'Hot & Fresh'],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'pat-sundae',
    name: "Chocolate Avalanche Loaded Sundae",
    category: 'patisserie',
    price: 220,
    priceNote: 'giant sharing dessert',
    description: "Fudge brownie chunks, double chocolate scoops, molten lava fudge, toasted nuts, and crispy wafer rolls.",
    tags: ['Signature Dessert', 'Kids Favorite'],
    isPopular: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'pat-cheesecake',
    name: "Baked New York Cheesecake Slice",
    category: 'patisserie',
    price: 130,
    priceNote: 'per slice',
    description: "Dense, velvety Philadelphia-style cream cheese filling on a buttery digestive biscuit crust.",
    tags: ['Patisserie Classic'],
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80'
  },

  // Cafe & Charlie Bistro Bites
  {
    id: 'cafe-charlie-chicken',
    name: "Charlie Signature Special Chicken",
    category: 'cafe-bites',
    price: 260,
    priceNote: 'chef specialty',
    description: "Tender chicken morsels tossed in our secret house marinade, crispy curry aromatics, and roasted spices.",
    tags: ['Charlie Restaurant Classic', 'Spicy'],
    isPopular: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'cafe-chew-roller',
    name: "Crispy Veg Chew Roller",
    category: 'cafe-bites',
    price: 200,
    priceNote: '4 pieces with dip',
    description: "Golden crunchy rolls packed with herb spiced farm veggies and gooey melting cheese.",
    tags: ['Vegetarian', 'Quick Bite'],
    isEggless: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'cafe-tandoori',
    name: "Clay Oven Tandoori Chicken",
    category: 'cafe-bites',
    price: 320,
    priceNote: 'half portion (4 pcs)',
    description: "Bone-in chicken marinated in hung curd, Kashmiri red chilies, and freshly ground garam masala, charred to perfection.",
    tags: ['Tandoori Grill', 'High Protein'],
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'cafe-szechuan-rice',
    name: "Chicken Szechuan Wok Fried Rice",
    category: 'cafe-bites',
    price: 300,
    priceNote: 'generous bowl',
    description: "Wok-tossed fragrant basmati rice with shredded chicken, crunchy scallions, bell peppers, and fiery Szechuan chili sauce.",
    tags: ['Fusion Wok', 'Mains'],
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'cafe-tamyam-soup',
    name: "Zesty Veg Tom Yam Soup",
    category: 'cafe-bites',
    price: 100,
    priceNote: 'warm bowl',
    description: "Authentic lemongrass and kaffir lime infused broth loaded with mushrooms, baby corn, and fresh coriander.",
    tags: ['Healthy', 'Comforting'],
    isEggless: true,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80'
  },

  // Handcrafted Beverages & Shakes
  {
    id: 'bev-brownie-shake',
    name: "Fudge Brownie Thick Milkshake",
    category: 'beverages',
    price: 180,
    priceNote: 'served in tall glass',
    description: "Blended with rich chocolate ice cream, baked brownie cubes, Hershey chocolate drizzle, and whipped cream crown.",
    tags: ['All-Time Favorite', 'Decadent'],
    isPopular: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'bev-chilly-guava',
    name: "Spiced Chilly Guava Mocktail",
    category: 'beverages',
    price: 115,
    priceNote: 'chilled with salted chili rim',
    description: "Refreshing pink guava nectar infused with tabasco drops, chaat masala, and fresh mint on crushed ice.",
    tags: ['House Mocktail', 'Zesty & Refreshing'],
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'bev-cappuccino',
    name: "Artisan Roasted Cappuccino",
    category: 'beverages',
    price: 90,
    priceNote: 'single estate beans',
    description: "Freshly pulled espresso shot topped with velvety textured microfoam and aromatic cinnamon dusting.",
    tags: ['Barista Special', 'Hot Coffee'],
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=80'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: "Rakesh Sharma",
    rating: 5,
    timeAgo: "2 weeks ago",
    comment: "Ordered a 2kg Belgian chocolate theme cake for my daughter's 5th birthday. The design was exactly what we showed from Pinterest, and the taste was outstanding! Not overly sugary, perfectly moist.",
    source: "Google Maps",
    highlight: "Belgian Chocolate Birthday Cake"
  },
  {
    id: 'rev-2',
    author: "Sneha Reddy",
    rating: 5,
    timeAgo: "1 month ago",
    comment: "Best cafe hangout spot near Jyothinagar opposite Easy Buy. Their Opera pastry and Caramelized banana waffle are next level! Charlie chicken starter is also super tasty.",
    source: "Google Maps",
    highlight: "French Pastries & Charlie Chicken"
  },
  {
    id: 'rev-3',
    author: "Mohammed Imran",
    rating: 5,
    timeAgo: "3 months ago",
    comment: "Prompt delivery and very polite staff on WhatsApp. We wanted an eggless Choco Almond cake on urgent 3-hour notice and they delivered right on time with fresh packaging.",
    source: "Google Maps",
    highlight: "Emergency Eggless Delivery"
  },
  {
    id: 'rev-4',
    author: "Pooja K.",
    rating: 5,
    timeAgo: "recent visit",
    comment: "Cozy lighting, clean seating, and amazing Chilly Guava mocktail with brownie shake. A must-visit bakery cafe in Karimnagar!",
    source: "MagicPin",
    highlight: "Cozy Ambiance & Shakes"
  }
];

export const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=900&q=80',
    title: 'Artisan Berry Celebration Cake',
    category: 'Designer Cakes'
  },
  {
    url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    title: 'Signature Dark Chocolate Ganache',
    category: 'Patisserie'
  },
  {
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
    title: 'Cozy Jyothinagar Cafe Dining',
    category: 'Ambiance'
  },
  {
    url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
    title: 'Chocolate Avalanche Sundae',
    category: 'Desserts'
  },
  {
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    title: 'Fresh French Viennoiserie & Breads',
    category: 'Bakery'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    title: 'Evening Cafe Lights & Hangout Area',
    category: 'Ambiance'
  }
];
