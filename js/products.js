/* ============================================================
   b_lit hairs — products.js
   Central product data store
   ============================================================ */

/**
 * Product catalogue
 * Future-ready: structured for cart / payment integration
 */
const PRODUCTS = [
  {
    id: "BLH001",
    name: "Brazilian Straight Bundle",
    slug: "brazilian-straight-bundle",
    category: "bundles",
    price: 420,
    currency: "GHS",
    badge: "Best Seller",
    hairType: "Brazilian Virgin",
    lengths: ["12\"", "14\"", "16\"", "18\"", "20\"", "22\"", "24\""],
    defaultLength: "18\"",
    color: "Natural Black (#1B)",
    texture: "Straight",
    weight: "100g per bundle",
    description: "Our signature Brazilian Straight bundles are sourced from 100% virgin human hair. Full, lustrous and tangle-free. These silky bundles lay flat, look natural and can be coloured, heat-styled and washed just like your natural hair. Perfect for the woman who loves a sleek, polished look.",
    features: ["100% Virgin Human Hair", "No Shedding / No Tangling", "Can be Coloured & Heat Styled", "Full Cuticle Aligned", "Long-Lasting 1–2 Years"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80"
    ],
    whatsappMsg: "Hello b_lit hairs! 💕 I'm interested in the *Brazilian Straight Bundle*. Please let me know the price, available lengths and how to order. Thank you!"
  },
  {
    id: "BLH002",
    name: "Body Wave Wig",
    slug: "body-wave-wig",
    category: "wigs",
    price: 850,
    currency: "GHS",
    badge: "New Arrival",
    hairType: "Peruvian Virgin",
    lengths: ["14\"", "16\"", "18\"", "20\"", "22\""],
    defaultLength: "18\"",
    color: "Natural Black (#1B)",
    texture: "Body Wave",
    weight: "150–180g",
    description: "Elevate your style with our luxurious Body Wave Wig. Crafted from 100% unprocessed Peruvian virgin hair, this wig delivers stunning, natural-looking waves that exude confidence and femininity. The 13x4 HD lace front creates an invisible hairline for an undetectable finish – as if the hair grew directly from your scalp.",
    features: ["13x4 HD Lace Frontal", "Pre-Plucked Hairline", "Baby Hair Included", "Adjustable Straps", "Bleached Knots Available"],
    image: "https://images.unsplash.com/photo-1559547080-ce1bec3b3785?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1559547080-ce1bec3b3785?w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80"
    ],
    whatsappMsg: "Hello b_lit hairs! 💕 I'm interested in the *Body Wave Wig* (13x4 HD Lace). Please let me know the price, available lengths and how to place an order. Thank you!"
  },
  {
    id: "BLH003",
    name: "Deep Curly Closure Wig",
    slug: "deep-curly-closure-wig",
    category: "wigs",
    price: 780,
    currency: "GHS",
    badge: "Hot Pick",
    hairType: "Malaysian Virgin",
    lengths: ["14\"", "16\"", "18\"", "20\""],
    defaultLength: "16\"",
    color: "Natural Black (#1B)",
    texture: "Deep Curly",
    weight: "150–170g",
    description: "Bouncy, voluminous curls that turn heads everywhere you go. Our Deep Curly Closure Wig is made from premium Malaysian virgin hair with a 4x4 HD silk base closure. The deep curl pattern stays defined even after washing and minimal styling. For the woman who loves bold, beautiful and unapologetically stunning hair.",
    features: ["4x4 HD Silk Closure", "Bouncy Deep Curl Pattern", "Minimal Shedding", "Tangle Resistant", "True to Length"],
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80"
    ],
    whatsappMsg: "Hello b_lit hairs! 💕 I'm interested in the *Deep Curly Closure Wig*. Please let me know the available lengths, price and how to order. Thank you!"
  },
  {
    id: "BLH004",
    name: "Kinky Straight Bundle",
    slug: "kinky-straight-bundle",
    category: "bundles",
    price: 380,
    currency: "GHS",
    badge: null,
    hairType: "Indian Virgin",
    lengths: ["12\"", "14\"", "16\"", "18\"", "20\""],
    defaultLength: "16\"",
    color: "Natural Black (#1B)",
    texture: "Kinky Straight",
    weight: "100g per bundle",
    description: "The perfect blend of natural texture and sleek beauty. Our Kinky Straight bundles mimic the look and feel of relaxed natural hair. Lightweight, full and incredibly versatile — style it straight, add loose curls or wrap it in a protective updo. Sourced from 100% Indian virgin hair.",
    features: ["100% Virgin Indian Hair", "Natural Kink Texture", "Blends Perfectly with Natural Hair", "No Tangling", "Colour-Friendly"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80"
    ],
    whatsappMsg: "Hello b_lit hairs! 💕 I'm interested in the *Kinky Straight Bundle*. Please let me know the price, available lengths and ordering details. Thank you!"
  },
  {
    id: "BLH005",
    name: "Loose Wave Full Wig",
    slug: "loose-wave-full-wig",
    category: "wigs",
    price: 920,
    currency: "GHS",
    badge: "Luxury Pick",
    hairType: "Brazilian Virgin",
    lengths: ["16\"", "18\"", "20\"", "22\"", "24\""],
    defaultLength: "20\"",
    color: "Natural Black (#1B)",
    texture: "Loose Wave",
    weight: "160–200g",
    description: "Our most luxurious wig yet. The Loose Wave Full Wig features a full 180% density construction that delivers maximum volume and an effortlessly glamorous wave. The 13x6 HD lace gives you a full 6-inch parting space for ultimate versatility. Bun it, side-part it, or wear it straight — this wig does it all.",
    features: ["13x6 HD Lace Frontal", "180% Density", "6-Inch Parting Space", "Pre-Plucked + Baby Hairs", "Bleached Knots"],
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
      "https://images.unsplash.com/photo-1559547080-ce1bec3b3785?w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80"
    ],
    whatsappMsg: "Hello b_lit hairs! 💕 I'm interested in the *Loose Wave Full Wig* (180% density). Please let me know the price, available lengths and how to order. Thank you!"
  },
  {
    id: "BLH006",
    name: "Water Wave Frontal Bundle",
    slug: "water-wave-frontal-bundle",
    category: "frontals",
    price: 650,
    currency: "GHS",
    badge: null,
    hairType: "Malaysian Virgin",
    lengths: ["14\"", "16\"", "18\"", "20\""],
    defaultLength: "18\"",
    color: "Natural Black (#1B)",
    texture: "Water Wave",
    weight: "100g bundle + 70g frontal",
    description: "Complete your protective style with our Water Wave Frontal Bundle set. Includes one 13x4 HD lace frontal and two bundles of matching water wave hair. The wet and wavy texture is romantic, feminine and incredibly natural-looking. Pre-plucked with baby hairs for an authentic, effortless finish.",
    features: ["13x4 HD Lace Frontal Included", "3-Piece Bundle Set", "Pre-Plucked Hairline", "Wet & Wavy Look", "Full Cuticle Aligned"],
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1559547080-ce1bec3b3785?w=800&q=80",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
    ],
    whatsappMsg: "Hello b_lit hairs! 💕 I'm interested in the *Water Wave Frontal Bundle Set*. Please let me know the price, available lengths and ordering details. Thank you!"
  },
  {
    id: "BLH007",
    name: "Blonde Body Wave Wig",
    slug: "blonde-body-wave-wig",
    category: "wigs",
    price: 1100,
    currency: "GHS",
    badge: "Premium",
    hairType: "Brazilian Virgin",
    lengths: ["16\"", "18\"", "20\"", "22\""],
    defaultLength: "20\"",
    color: "#613 Blonde",
    texture: "Body Wave",
    weight: "160g",
    description: "Turn up the glam with our Blonde Body Wave Wig. This stunning #613 blonde wig is expertly coloured on virgin Brazilian hair for a rich, vibrant blonde that lasts. The body wave texture adds movement and dimension. Perfect for bold women who want to make a statement — at weddings, events or everyday luxury.",
    features: ["#613 Blonde Colour", "13x4 HD Lace", "100% Virgin Coloured Hair", "Vibrant Colour Retention", "Pre-Plucked + Baby Hairs"],
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
      "https://images.unsplash.com/photo-1559547080-ce1bec3b3785?w=800&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80"
    ],
    whatsappMsg: "Hello b_lit hairs! 💕 I'm interested in the *Blonde Body Wave Wig* (#613). Please let me know the price, available lengths and how to order. Thank you!"
  },
  {
    id: "BLH008",
    name: "Clip-In Extensions Set",
    slug: "clip-in-extensions-set",
    category: "extensions",
    price: 290,
    currency: "GHS",
    badge: null,
    hairType: "Remy Human Hair",
    lengths: ["14\"", "16\"", "18\"", "20\""],
    defaultLength: "18\"",
    color: "Natural Black (#1B)",
    texture: "Straight",
    weight: "120g full set (7 wefts)",
    description: "Add instant length and volume with our Remy Clip-In Extensions. The full 7-weft set covers your entire head for seamless, natural-looking results. Easy to clip in and out — no salon needed. Perfect for adding glamour for a night out or everyday fullness. Salon-quality hair at your fingertips.",
    features: ["7-Weft Full Set", "Remy Human Hair", "Secure Clip Attachments", "Heat Styleable", "Blends with Natural Hair"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80"
    ],
    whatsappMsg: "Hello b_lit hairs! 💕 I'm interested in the *Clip-In Extensions Set*. Please let me know the price, available colours and lengths, and how to order. Thank you!"
  }
];

/**
 * Get all products
 * @returns {Array}
 */
function getAllProducts() {
  return PRODUCTS;
}

/**
 * Get product by ID
 * @param {string} id
 * @returns {Object|undefined}
 */
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

/**
 * Get products by category
 * @param {string} category
 * @returns {Array}
 */
function getProductsByCategory(category) {
  if (category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

/**
 * Get featured products (first 4)
 * @returns {Array}
 */
function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.badge).slice(0, 4);
}

/**
 * Build WhatsApp URL for a product
 * @param {Object} product
 * @returns {string}
 */
function buildWhatsAppURL(product) {
  const phone = '233273521007';
  const msg   = encodeURIComponent(product.whatsappMsg);
  return `https://wa.me/${phone}?text=${msg}`;
}

/**
 * Build generic WhatsApp URL
 * @param {string} message
 * @returns {string}
 */
function buildGenericWhatsAppURL(message) {
  const phone = '233273521007';
  const msg   = encodeURIComponent(message || 'Hello b_lit hairs! I would like to enquire about your hair products.');
  return `https://wa.me/${phone}?text=${msg}`;
}

/**
 * Format price
 * @param {number} price
 * @param {string} currency
 * @returns {string}
 */
function formatPrice(price, currency = 'GHS') {
  return `${currency} ${price.toLocaleString()}`;
}

/* Future-ready: cart stub */
const Cart = {
  _items: [],
  add(productId, qty = 1)    { /* TODO: implement */ },
  remove(productId)           { /* TODO: implement */ },
  getItems()                  { return this._items; },
  getTotal()                  { return 0; /* TODO */ }
};