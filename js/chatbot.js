/* ============================================================
   b_lit hairs — chatbot.js
   Fully self-contained chat assistant — NO API, NO KEY needed
   ============================================================
   SETUP: Add one line to every HTML page before </body>:
   <script src="js/chatbot.js"></script>
   That's it. Done. ✅
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════════════════════
   KNOWLEDGE BASE
   ══════════════════════════════════════════════════════════ */
const KB = {

  greet: [
    "Hello, gorgeous! 💕 I'm Lola, your b_lit hairs assistant. Ask me about our products, prices, delivery, hair care tips or how to book — I'm here to help!",
    "Hey queen! 👑 Welcome to b_lit hairs. I'm Lola. What can I help you with today — prices, wigs, bundles, delivery, or something else?",
    "Hi there! 💕 I'm Lola from b_lit hairs. Ask me anything about our hair, services, delivery or how to place an order!"
  ],

  products:
    "Here's our full product catalogue:\n\n💇 BUNDLES\n• Brazilian Straight Bundle — GHS 420 (12\"–24\")\n• Kinky Straight Bundle — GHS 380 (12\"–20\")\n• Water Wave Frontal Bundle Set — GHS 650 (14\"–20\")\n\n👑 WIGS\n• Body Wave Wig (13x4 HD Lace) — GHS 850 (14\"–22\")\n• Deep Curly Closure Wig — GHS 780 (14\"–20\")\n• Loose Wave Full Wig (180% density) — GHS 920 (16\"–24\")\n• Blonde Body Wave Wig #613 — GHS 1,100 (16\"–22\")\n\n✂️ EXTENSIONS\n• Clip-In Extensions Set (7 wefts) — GHS 290 (14\"–20\")\n\nAll hair is 100% virgin human hair. 💕 Which one interests you?",

  prices:
    "Our prices start from GHS 290:\n\n• Clip-In Extensions — GHS 290\n• Kinky Straight Bundle — GHS 380\n• Brazilian Straight Bundle — GHS 420\n• Water Wave Frontal Bundle — GHS 650\n• Deep Curly Closure Wig — GHS 780\n• Body Wave Wig — GHS 850\n• Loose Wave Full Wig — GHS 920\n• Blonde Body Wave Wig — GHS 1,100\n\nWant details on any specific one? Just ask! 😊",

  bundles:
    "Our bundles are 100% virgin human hair — cuticle-aligned, tangle-free and heat-styleable:\n\n• Brazilian Straight Bundle — GHS 420 (12\"–24\")\nSilky, flat lay, perfect for a sleek polished look.\n\n• Kinky Straight Bundle — GHS 380 (12\"–20\")\nBlends perfectly with natural hair, super versatile.\n\n• Water Wave Frontal Bundle Set — GHS 650 (14\"–20\")\nIncludes 13x4 HD lace frontal + 2 water wave bundles.\n\nBundles last 1–2 years with proper care. 💕",

  wigs:
    "Our wigs use HD lace for an undetectable, natural finish:\n\n• Body Wave Wig — GHS 850 | 13x4 HD lace, pre-plucked, baby hairs (14\"–22\")\n• Deep Curly Closure Wig — GHS 780 | 4x4 HD silk closure, bouncy curls (14\"–20\")\n• Loose Wave Full Wig — GHS 920 | 13x6 HD lace, 180% density (16\"–24\")\n• Blonde Body Wave Wig — GHS 1,100 | #613 blonde, 13x4 HD lace (16\"–22\")\n\nAll wigs are pre-plucked and ready to install. Which style are you feeling? 👑",

  extensions:
    "Clip-In Extensions Set — GHS 290\n\n• 7-weft full set — covers your whole head\n• Remy human hair\n• Available: 14\", 16\", 18\", 20\"\n• Natural Black (#1B)\n• Secure clip attachments — no salon needed\n• Fully heat-styleable\n\nPerfect for adding instant length and volume for events or everyday glam! To order: WhatsApp +233 27 352 1007 💕",

  services:
    "Here's everything we offer:\n\n💇 HAIR SALES — from GHS 290\nBundles, wigs, closures & extensions.\n\n🧵 HAIR BRAIDING — from GHS 200\nKnotless braids, goddess braids, cornrows, fulani & tribal braids.\n\n✂️ CUSTOM STYLING — from GHS 150\nWig install, blow-out, curl set, colour treatments.\n\n💍 BRIDAL & EVENT HAIR — from GHS 500\nConsultation + trial session included.\n\n👑 CUSTOM WIG CONSTRUCTION — from GHS 800\nHand-tied, HD lace, your exact specs. 3–7 days to build.\n\n🚚 NATIONWIDE DELIVERY — FREE on orders above GHS 500\n\nTo book: WhatsApp +233 27 352 1007 💕",

  braiding:
    "Hair Braiding starts from GHS 200:\n\n• Knotless Box Braids\n• Goddess Braids\n• Cornrows\n• Fulani Braids\n• Tribal Braids\n\nWe use premium extension hair for a clean, natural finish that protects your hair and lasts for weeks.\n\nTo book your braiding appointment:\n📱 WhatsApp +233 27 352 1007 💕",

  styling:
    "Custom Hair Styling starts from GHS 150:\n\n• Wig installation & customisation\n• Blow-out styling\n• Flat iron styling\n• Curl sets\n• Colour treatments\n• Plucking & tinting\n\nOur stylists bring your vision to life!\n\nTo book: WhatsApp +233 27 352 1007 💕",

  bridal:
    "Bridal & Event Hair starts from GHS 500 and includes:\n\n💍 Private consultation\n💍 Trial session\n💍 Day-of styling\n💍 Premium hair products\n💍 Home visit available in Accra/Tema (surcharge applies)\n\nWe've styled hundreds of Ghanaian brides — your dream look is our signature! 👑\n\nEnquire now: WhatsApp +233 27 352 1007",

  customwig:
    "Custom Wig Construction starts from GHS 800:\n\nBuilt exactly to your specs:\n• Cap size (small / medium / large / custom)\n• Lace type (HD, transparent, closure, frontal)\n• Any hair texture & length\n• Density: 130%–250%\n• Pre-plucked & baby hairs included\n\nBuild time: 3–7 business days (express available).\n\nTo order your custom wig:\n📱 WhatsApp +233 27 352 1007 💕",

  delivery:
    "We deliver everywhere in Ghana! 🇬🇭\n\n📍 Accra & Tema — same-day or next-day\n📍 All other regions — 1–3 business days\n\n💚 FREE delivery on orders above GHS 500\n(Delivery fee applies on orders below GHS 500)\n\nAll orders are securely packaged. To place your order:\n📱 WhatsApp +233 27 352 1007",

  payment:
    "We accept:\n\n📱 MTN Mobile Money\n📱 Vodafone Cash\n📱 AirtelTigo Money\n🏦 Bank Transfer\n💵 Cash (in-person)\n🚚 Cash on Delivery (select Accra locations)\n\nPayment details are confirmed on WhatsApp when you order. Super easy! 💕",

  order:
    "Ordering is simple:\n\n1️⃣ Browse our shop or ask me about products\n2️⃣ WhatsApp us: +233 27 352 1007\n3️⃣ Confirm your product, length & colour\n4️⃣ Pay (MoMo, bank transfer, cash, etc.)\n5️⃣ We package & dispatch your hair 📦\n\nAccra/Tema: same-day or next-day!\nOther regions: 1–3 business days 💕",

  contact:
    "Reach us through:\n\n📱 WhatsApp: +233 27 352 1007\n📧 Email: hello@blit-hairs.com\n📍 Location: Accra, Ghana\n⏰ Hours: Monday–Saturday, 8 AM – 8 PM\n\nWe respond on WhatsApp within minutes! 💕",

  hours:
    "We're open:\n\n⏰ Monday – Saturday\n🕗 8:00 AM – 8:00 PM\n\nYou can WhatsApp us any time — we'll reply as soon as we open. Always here for our queens! 💕",

  haircare:
    "Top tips to keep your b_lit hair flawless:\n\n🌿 Wash with sulphate-free shampoo weekly\n💧 Deep condition every wash day\n🪮 Detangle gently from ends to roots with a wide-tooth comb\n🔥 Always use heat protectant before heat styling\n🛏️ Sleep on a silk or satin pillowcase\n💼 Store wigs on a mannequin head or in a silk bag\n🎨 Virgin hair can be coloured — always do a strand test first\n\nWith proper care, our hair lasts 1–2 years! 💕",

  quality:
    "All b_lit hairs products are:\n\n✅ 100% virgin human hair\n✅ Fully cuticle-aligned — zero tangling\n✅ Zero shedding guaranteed\n✅ Heat-styleable (up to 230°C)\n✅ Colour & bleach friendly\n✅ Lasts 1–2 years with proper care\n\nWe quality-check every single piece before it reaches you. Your satisfaction is our reputation. 👑",

  shedding:
    "Our hair is 100% virgin, fully cuticle-aligned — which means zero shedding and zero tangling with proper care.\n\nTo prevent shedding:\n• Detangle from ends to roots (never root to tip)\n• Use sulphate-free products\n• Protect your hair at night\n• Re-tighten weft tracks if they loosen\n\nAny quality issues? WhatsApp us within 48 hours of receiving and we'll make it right! 💕",

  colour:
    "Yes! Our virgin hair can be coloured, bleached and dyed. 🎨\n\nTips:\n• Always do a strand test first\n• Use a professional colourist for best results\n• Deep condition after colouring\n• Don't over-process (max 2 levels of bleach at once)\n\nNote: Our pre-coloured Blonde #613 Wig should NOT be re-bleached. 💕",

  heat:
    "Yes — our virgin hair is fully heat-styleable! 🔥\n\n• Flat iron: up to 230°C / 450°F\n• Curling wand: up to 200°C\n• Blow dryer: medium–high heat\n\n⚠️ Always use a heat protectant spray first!\n⚠️ For coloured/bleached hair, use lower heat settings.\n\nRegular heat styling is absolutely fine with the right protection. 💕",

  length:
    "Quick length guide:\n\n📏 12–14\" — shoulder length\n📏 16–18\" — just below shoulder / mid-back\n📏 20–22\" — waist / hip length\n📏 24\"+ — extra long, dramatic\n\n18\" is our most popular length! If you're unsure, start there — it's the most versatile. 💕\n\nJust ask me about any specific product's available lengths!",

  hdlace:
    "HD lace (High Definition) is the thinnest, most transparent lace available. It:\n\n• Melts seamlessly into any skin tone\n• Creates an invisible, undetectable hairline\n• Looks like the hair grows directly from your scalp\n• Works on all complexions\n\nAll our wigs use HD or HD silk base lace for the most natural finish. 💕",

  frontal:
    "A frontal covers your entire hairline from ear to ear (13x4\" or 13x6\"). It:\n\n• Gives a full natural hairline\n• Allows multiple parting styles\n• Can be styled away from the face\n• Our 13x6 gives 6\" of parting space for maximum versatility\n\nOur Water Wave Frontal Bundle Set (GHS 650) includes a frontal + 2 bundles! 💕",

  closure:
    "A closure (4x4\" or 5x5\") covers only the parting area. It:\n\n• Gives a natural-looking part\n• Requires less maintenance than a frontal\n• Protects your natural hair underneath\n\nOur Deep Curly Closure Wig (GHS 780) uses a 4x4 HD Silk Closure for a seamless, effortless finish. 💕",

  difference:
    "Great question! Here's the difference:\n\n📦 BUNDLES — loose wefts you sew or glue onto braids or a wig base. You need 2–4 bundles for a full look.\n\n👑 WIGS — complete ready-to-wear unit with lace. Put it on and go — no sewing needed.\n\n✂️ CLIP-INS — temporary wefts you clip in and remove at night.\n\nFor beginners, wigs are the easiest! For protective styles, bundles are great. Need help deciding? Just ask! 💕",

  brazilian:
    "Brazilian Straight Bundle — GHS 420\n\n• 100% Brazilian virgin hair\n• Lengths: 12\", 14\", 16\", 18\", 20\", 22\", 24\"\n• Natural Black (#1B)\n• 100g per bundle\n• Silky, flat lay, zero tangling\n• Heat & colour friendly\n• Lasts 1–2 years\n\nPerfect for a sleek, polished look! To order:\n📱 WhatsApp +233 27 352 1007 💕",

  bodywave:
    "Body Wave Wig — GHS 850\n\n• 100% Peruvian virgin hair\n• Lengths: 14\", 16\", 18\", 20\", 22\"\n• Natural Black (#1B) | 150–180g\n• 13x4 HD Lace Frontal\n• Pre-plucked + baby hairs\n• Adjustable straps\n• Bleached knots available\n\nTo order:\n📱 WhatsApp +233 27 352 1007 💕",

  deepcurly:
    "Deep Curly Closure Wig — GHS 780\n\n• 100% Malaysian virgin hair\n• Lengths: 14\", 16\", 18\", 20\"\n• Natural Black (#1B) | 150–170g\n• 4x4 HD Silk Closure\n• Bouncy, defined curl pattern\n• Stays defined after washing\n• Tangle resistant\n\nTo order:\n📱 WhatsApp +233 27 352 1007 💕",

  kinky:
    "Kinky Straight Bundle — GHS 380\n\n• 100% Indian virgin hair\n• Lengths: 12\", 14\", 16\", 18\", 20\"\n• Natural Black (#1B) | 100g per bundle\n• Natural kink texture\n• Blends perfectly with natural hair\n• Colour-friendly\n\nTo order:\n📱 WhatsApp +233 27 352 1007 💕",

  loosewave:
    "Loose Wave Full Wig — GHS 920\n\n• 100% Brazilian virgin hair\n• Lengths: 16\", 18\", 20\", 22\", 24\"\n• Natural Black (#1B) | 160–200g\n• 13x6 HD Lace Frontal\n• 180% density (maximum volume!)\n• 6-inch parting space\n• Pre-plucked + baby hairs + bleached knots\n\nOur most luxurious wig! To order:\n📱 WhatsApp +233 27 352 1007 💕",

  waterwave:
    "Water Wave Frontal Bundle Set — GHS 650\n\n• 100% Malaysian virgin hair\n• Lengths: 14\", 16\", 18\", 20\"\n• Includes: 13x4 HD Lace Frontal + 2 bundles\n• Pre-plucked hairline & baby hairs\n• Romantic wet & wavy look\n\nTo order:\n📱 WhatsApp +233 27 352 1007 💕",

  blonde:
    "Blonde Body Wave Wig #613 — GHS 1,100\n\n• 100% Brazilian virgin hair (coloured)\n• Lengths: 16\", 18\", 20\", 22\"\n• #613 Blonde | 160g\n• 13x4 HD Lace Frontal\n• Vibrant colour retention\n• Pre-plucked + baby hairs\n\nFor the bold queen who wants to make a statement! 👑 To order:\n📱 WhatsApp +233 27 352 1007",

  clipin:
    "Clip-In Extensions Set — GHS 290\n\n• Remy human hair\n• Lengths: 14\", 16\", 18\", 20\"\n• Natural Black (#1B) | 120g (7 wefts)\n• Covers entire head seamlessly\n• Secure clips — no salon needed\n• Heat-styleable\n\nTo order:\n📱 WhatsApp +233 27 352 1007 💕",

  about:
    "b_lit hairs was founded on one belief: every Ghanaian woman deserves world-class luxury hair. 👑\n\n🇬🇭 Based in Accra, Ghana\n💕 500+ happy clients served\n⭐ 5-star rated\n🗓️ 3+ years in business\n\nFrom the streets of Accra to everywhere a queen walks — our hair moves with your lifestyle, your confidence, your power.",

  return:
    "We stand behind every product 100%. 💕\n\nIf there's a quality issue with your order:\n• Contact us on WhatsApp within 48 hours of receiving\n• Send a photo of the issue\n• We will make it right — exchange or full resolution\n\n📱 WhatsApp +233 27 352 1007",

  cancel:
    "For service appointments:\n• Please give at least 24 hours notice to cancel or reschedule\n• Same-day cancellations may have a small fee\n• We understand life happens — just let us know ASAP 💕\n\n📱 WhatsApp +233 27 352 1007",

  homevisit:
    "Yes! We offer home visit styling for:\n✅ Bridal clients\n✅ Special events\n✅ Within Accra & Tema (surcharge applies)\n\nContact us to confirm availability:\n📱 WhatsApp +233 27 352 1007 💕",

  thanks: [
    "You're so welcome! 💕 Anything else I can help with?",
    "My pleasure, queen! 👑 What else would you like to know?",
    "Happy to help! 😊 Feel free to ask me anything else about our hair!",
  ],

  fallback: [
    "Hmm, I'm not sure about that one! 😅 For the most accurate answer, WhatsApp our team directly: +233 27 352 1007 — they reply within minutes! 💕",
    "Great question! Our team on WhatsApp (+233 27 352 1007) can give you the most accurate answer for that. 💕",
    "I might not have that answer, but our team definitely will! WhatsApp us: +233 27 352 1007 💕",
  ],
};

/* ══════════════════════════════════════════════════════════
   INTENT MATCHER
   ══════════════════════════════════════════════════════════ */
const INTENTS = [
  { k: ['hello','hi','hey','morning','afternoon','evening','hiya','howdy','sup','yo','start','begin'], r: () => rand(KB.greet) },
  { k: ['thank','thanks','cheers','perfect','awesome','great','wonderful','excellent'], r: () => rand(KB.thanks) },
  { k: ['product','catalogue','catalog','collection','all hair','what do you have','what do you sell','show me','list all'], r: () => KB.products },
  { k: ['price','cost','how much','charge','fee','rate','ghs','cedis','afford','expensive','cheap','pricing'], r: () => KB.prices },
  // Specific products first (more specific before generic)
  { k: ['brazilian'], r: () => KB.brazilian },
  { k: ['body wave','bodywave'], r: () => KB.bodywave },
  { k: ['deep curl','deep curly','closure wig'], r: () => KB.deepcurly },
  { k: ['kinky straight','kinky'], r: () => KB.kinky },
  { k: ['loose wave'], r: () => KB.loosewave },
  { k: ['water wave','waterwave','frontal bundle'], r: () => KB.waterwave },
  { k: ['blonde','613','#613'], r: () => KB.blonde },
  { k: ['clip in','clip-in','clipin','7 weft','extensions set'], r: () => KB.clipin },
  // Categories
  { k: ['bundle','bundles'], r: () => KB.bundles },
  { k: ['wig','wigs'], r: () => KB.wigs },
  { k: ['extension','extensions'], r: () => KB.extensions },
  // Lace education
  { k: ['hd lace','high definition','what is hd','transparent lace'], r: () => KB.hdlace },
  { k: ['frontal','13x4','13x6'], r: () => KB.frontal },
  { k: ['closure','4x4','5x5'], r: () => KB.closure },
  { k: ['difference','vs ','versus','bundle vs','wig vs','which is better'], r: () => KB.difference },
  // Services
  { k: ['service','services','what service','what do you offer','offerings'], r: () => KB.services },
  { k: ['braid','braiding','cornrow','knotless','goddess braid','fulani','tribal braid'], r: () => KB.braiding },
  { k: ['styling','style','wig install','blow out','blowout','blow-out','curl set'], r: () => KB.styling },
  { k: ['bridal','bride','wedding','event hair'], r: () => KB.bridal },
  { k: ['custom wig','build a wig','make a wig','hand tied','hand-tied','bespoke'], r: () => KB.customwig },
  // Delivery & ordering
  { k: ['deliver','delivery','ship','shipping','how long','dispatch','arrive','nationwide'], r: () => KB.delivery },
  { k: ['pay','payment','momo','mobile money','vodafone','airtel','bank transfer'], r: () => KB.payment },
  { k: ['order','buy','purchase','how to order','place order','how do i buy'], r: () => KB.order },
  // Contact
  { k: ['contact','whatsapp','wa.me','phone number','call','email','reach you','talk to','message you'], r: () => KB.contact },
  { k: ['hours','open','opening','close','closing','when are you','time','available'], r: () => KB.hours },
  { k: ['home visit','come to my house','home service','at home','visit me'], r: () => KB.homevisit },
  // Hair care & quality
  { k: ['care','maintain','maintenance','wash','washing','condition','conditioner','detangle','care tip'], r: () => KB.haircare },
  { k: ['quality','virgin','authentic','genuine','100%','real hair'], r: () => KB.quality },
  { k: ['shed','shedding','tangle','tangling','matted','mat'], r: () => KB.shedding },
  { k: ['colour','color','dye','bleach','tint','highlight','ombre','coloured','colored','dyed'], r: () => KB.colour },
  { k: ['heat','flat iron','curling','blow dry','temperature','celsius','fahrenheit','straighten'], r: () => KB.heat },
  { k: ['length','how long','inches','inch','size','12','14','16','18','20','22','24'], r: () => KB.length },
  // Policies
  { k: ['return','refund','exchange','defect','wrong item','quality issue','complaint'], r: () => KB.return },
  { k: ['cancel','cancellation','reschedule','postpone'], r: () => KB.cancel },
  // About
  { k: ['about','story','brand','who are you','about you','blit hairs','founded','accra','ghana brand'], r: () => KB.about },
];

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function getResponse(input) {
  const t = input.toLowerCase();
  for (const intent of INTENTS) {
    if (intent.k.some(k => t.includes(k))) return intent.r();
  }
  return rand(KB.fallback);
}

/* ══════════════════════════════════════════════════════════
   INJECT CSS
   ══════════════════════════════════════════════════════════ */
(function () {
  const s = document.createElement('style');
  s.textContent = `
    #blc-w {
      position: fixed; bottom: 2rem; left: 2rem; z-index: 9500;
      font-family: 'Poppins','Segoe UI',sans-serif;
    }

    /* Toggle */
    #blc-toggle {
      width: 62px; height: 62px; border-radius: 50%;
      background: linear-gradient(135deg,#b5436a,#d4698b);
      border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 24px rgba(181,67,106,.5);
      transition: transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s;
      position: relative;
      animation: blc-pulse 3s 2.5s infinite;
    }
    #blc-toggle:hover { transform: scale(1.1); box-shadow: 0 8px 32px rgba(181,67,106,.65); }
    #blc-toggle.open  { animation: none; }
    .blc-ti { position: absolute; transition: opacity .25s, transform .25s; }
    .blc-ti svg { width: 26px; height: 26px; fill: white; display: block; }
    .blc-ti-chat  { opacity: 1; }
    .blc-ti-close { opacity: 0; transform: scale(0) rotate(-90deg); }
    #blc-toggle.open .blc-ti-chat  { opacity: 0; transform: scale(0) rotate(90deg); }
    #blc-toggle.open .blc-ti-close { opacity: 1; transform: scale(1) rotate(0deg); }

    /* Badge */
    #blc-badge {
      position: absolute; top: -4px; right: -4px;
      width: 20px; height: 20px; border-radius: 50%;
      background: #c9a96e; color: white; font-size: .65rem; font-weight: 700;
      display: none; align-items: center; justify-content: center;
      border: 2px solid white;
    }

    /* Tooltip */
    #blc-tip {
      position: absolute; bottom: 76px; left: 0;
      background: #1a1a1a; color: white;
      font-size: .75rem; font-weight: 600;
      padding: .5rem 1rem; border-radius: 999px;
      white-space: nowrap; box-shadow: 0 4px 16px rgba(0,0,0,.25);
      pointer-events: none;
      animation: blc-up .4s 2.5s both;
      transition: opacity .5s;
    }
    #blc-tip::after {
      content:''; position: absolute; top: 100%; left: 20px;
      border: 5px solid transparent; border-top-color: #1a1a1a;
    }

    /* Panel */
    #blc-panel {
      position: absolute; bottom: 78px; left: 0;
      width: 360px; max-height: 580px;
      background: white; border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,.18), 0 4px 20px rgba(181,67,106,.12);
      display: flex; flex-direction: column; overflow: hidden;
      transform: scale(.85) translateY(20px); transform-origin: bottom left;
      opacity: 0; pointer-events: none;
      transition: transform .35s cubic-bezier(.4,0,.2,1), opacity .3s;
    }
    #blc-panel.open { transform: scale(1) translateY(0); opacity: 1; pointer-events: all; }

    /* Header */
    .blc-hd {
      background: linear-gradient(135deg,#b5436a 0%,#8b2249 100%);
      padding: 1rem 1.2rem;
      display: flex; align-items: center; gap: .85rem; flex-shrink: 0;
    }
    .blc-av {
      width: 42px; height: 42px; border-radius: 50%;
      background: rgba(255,255,255,.18);
      display: flex; align-items: center; justify-content: center;
      font-family: 'Playfair Display',serif; font-size: 1.1rem;
      font-weight: 700; color: white; flex-shrink: 0; position: relative;
    }
    .blc-dot {
      position: absolute; bottom: 1px; right: 1px;
      width: 11px; height: 11px; background: #4ade80;
      border-radius: 50%; border: 2px solid #8b2249;
    }
    .blc-ht h4 { font-family: 'Playfair Display',serif; font-size: .95rem; font-weight: 700; color: white; margin: 0; line-height: 1.2; }
    .blc-ht p  { font-size: .68rem; color: rgba(255,255,255,.75); margin: 0; }
    .blc-ha { margin-left: auto; display: flex; gap: .4rem; }
    .blc-hbtn {
      width: 30px; height: 30px; border-radius: 50%;
      background: rgba(255,255,255,.14); border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background .2s; text-decoration: none; color: white;
    }
    .blc-hbtn:hover { background: rgba(255,255,255,.25); }
    .blc-hbtn svg { width: 15px; height: 15px; }

    /* Messages */
    .blc-msgs {
      flex: 1; overflow-y: auto; padding: 1rem; background: #fdf8fa;
      display: flex; flex-direction: column; gap: .8rem; scroll-behavior: smooth;
    }
    .blc-msgs::-webkit-scrollbar { width: 4px; }
    .blc-msgs::-webkit-scrollbar-thumb { background: #e8c4d4; border-radius: 4px; }

    .blc-msg { display: flex; gap: .5rem; align-items: flex-end; animation: blc-in .3s ease; }
    .blc-msg.user { flex-direction: row-reverse; }
    .blc-mav {
      width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      font-size: .72rem; font-weight: 700; color: white;
      background: linear-gradient(135deg,#b5436a,#d4698b);
    }
    .blc-msg.user .blc-mav { background: linear-gradient(135deg,#888,#555); }
    .blc-bub {
      max-width: 78%; padding: .65rem .9rem;
      border-radius: 16px; font-size: .79rem; line-height: 1.65;
      color: #2d2d2d; white-space: pre-line;
    }
    .blc-msg.bot  .blc-bub { background: white; border-bottom-left-radius: 4px; box-shadow: 0 1px 8px rgba(0,0,0,.07); }
    .blc-msg.user .blc-bub { background: linear-gradient(135deg,#b5436a,#d4698b); color: white; border-bottom-right-radius: 4px; }
    .blc-ts { font-size: .6rem; color: #bbb; margin-top: 3px; }
    .blc-msg.user .blc-ts { text-align: right; }

    /* Typing */
    .blc-typing { display: flex; gap: .5rem; align-items: flex-end; }
    .blc-dots {
      background: white; border-radius: 16px; border-bottom-left-radius: 4px;
      padding: .65rem 1rem; box-shadow: 0 1px 8px rgba(0,0,0,.07);
      display: flex; gap: 5px; align-items: center;
    }
    .blc-dots span {
      width: 6px; height: 6px; background: #b5436a; border-radius: 50%;
      opacity: .4; animation: blc-dt 1.2s infinite;
    }
    .blc-dots span:nth-child(2) { animation-delay: .2s; }
    .blc-dots span:nth-child(3) { animation-delay: .4s; }

    /* Quick replies */
    .blc-qr { display: flex; flex-wrap: wrap; gap: .4rem; padding: 0 1rem .8rem; background: #fdf8fa; }
    .blc-qbtn {
      padding: .32rem .8rem; border-radius: 999px;
      background: white; border: 1.5px solid rgba(181,67,106,.25);
      color: #b5436a; font-size: .7rem; font-weight: 600; cursor: pointer;
      font-family: 'Montserrat','Poppins',sans-serif; letter-spacing: .02em;
      transition: all .2s;
    }
    .blc-qbtn:hover { background: #b5436a; border-color: #b5436a; color: white; transform: translateY(-1px); }

    /* Input */
    .blc-iw {
      border-top: 1px solid rgba(181,67,106,.1); padding: .7rem 1rem;
      display: flex; gap: .5rem; align-items: flex-end;
      background: white; flex-shrink: 0;
    }
    #blc-in {
      flex: 1; border: 1.5px solid rgba(181,67,106,.2); border-radius: 12px;
      padding: .55rem .85rem; font-family: 'Poppins',sans-serif; font-size: .8rem;
      color: #2d2d2d; background: #fdf8fa; resize: none; outline: none;
      max-height: 100px; line-height: 1.5; transition: border-color .2s;
    }
    #blc-in:focus { border-color: #b5436a; background: white; }
    #blc-in::placeholder { color: #ccc; }
    #blc-snd {
      width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
      background: linear-gradient(135deg,#b5436a,#d4698b);
      border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 2px 10px rgba(181,67,106,.35);
      transition: transform .2s, opacity .2s;
    }
    #blc-snd:hover:not(:disabled) { transform: scale(1.1); }
    #blc-snd:disabled { opacity: .4; cursor: not-allowed; }
    #blc-snd svg { width: 14px; height: 14px; fill: white; }

    /* Footer */
    .blc-ft {
      text-align: center; padding: .45rem; background: white;
      border-top: 1px solid #f0e8ec; font-size: .64rem; color: #aaa; flex-shrink: 0;
    }
    .blc-ft a { color: #25D366; font-weight: 700; text-decoration: none; }

    /* Keyframes */
    @keyframes blc-pulse { 0%{box-shadow:0 0 0 0 rgba(181,67,106,.5)} 70%{box-shadow:0 0 0 14px rgba(181,67,106,0)} 100%{box-shadow:0 0 0 0 rgba(181,67,106,0)} }
    @keyframes blc-up    { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
    @keyframes blc-in    { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
    @keyframes blc-dt    { 0%,60%,100%{transform:translateY(0);opacity:.4} 30%{transform:translateY(-5px);opacity:1} }

    @media (max-width: 480px) {
      #blc-w { left: 1rem; bottom: 1rem; }
      #blc-panel { width: calc(100vw - 2rem); max-height: 75vh; }
    }
  `;
  document.head.appendChild(s);
})();

/* ══════════════════════════════════════════════════════════
   BUILD WIDGET HTML
   ══════════════════════════════════════════════════════════ */
(function () {
  const W = document.createElement('div');
  W.id = 'blc-w';
  W.innerHTML = `
    <div id="blc-tip">💬 Ask me about our hair! 💕</div>

    <div id="blc-panel" role="dialog" aria-modal="true" aria-label="b_lit hairs chat assistant">
      <div class="blc-hd">
        <div class="blc-av">L<div class="blc-dot"></div></div>
        <div class="blc-ht">
          <h4>Lola ✨</h4>
          <p>b_lit hairs Assistant · Always here for you</p>
        </div>
        <div class="blc-ha">
          <a class="blc-hbtn" href="https://wa.me/233273521007?text=Hello%20b_lit%20hairs!%20I%20need%20help%20%F0%9F%92%95"
             target="_blank" rel="noopener noreferrer" title="Open WhatsApp" aria-label="Chat on WhatsApp">
            <svg viewBox="0 0 24 24" fill="#25D366" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <button class="blc-hbtn" id="blc-clear" title="Clear chat" aria-label="Clear chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>
          </button>
        </div>
      </div>

      <div class="blc-msgs" id="blc-msgs" role="log" aria-live="polite" aria-label="Chat messages"></div>
      <div class="blc-qr" id="blc-qr" role="group" aria-label="Suggested questions"></div>

      <div class="blc-iw">
        <textarea id="blc-in" placeholder="Ask Lola anything..." rows="1" maxlength="400" aria-label="Type your message"></textarea>
        <button id="blc-snd" disabled aria-label="Send message">
          <svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        </button>
      </div>

      <div class="blc-ft">
        Prefer talking directly?
        <a href="https://wa.me/233273521007" target="_blank" rel="noopener noreferrer">💚 WhatsApp us</a>
      </div>
    </div>

    <button id="blc-toggle" aria-label="Open chat" aria-expanded="false">
      <span class="blc-ti blc-ti-chat">
        <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
      </span>
      <span class="blc-ti blc-ti-close">
        <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
      </span>
      <span id="blc-badge" aria-hidden="true">1</span>
    </button>
  `;
  document.body.appendChild(W);
})();

/* ══════════════════════════════════════════════════════════
   QUICK REPLIES
   ══════════════════════════════════════════════════════════ */
const QR = [
  { l: '💰 Our Prices',       t: 'What are your prices?' },
  { l: '💇 All Products',     t: 'Show me all products' },
  { l: '👑 Wigs',             t: 'Tell me about your wigs' },
  { l: '📦 Bundles',          t: 'Tell me about your bundles' },
  { l: '🚚 Delivery',         t: 'How does delivery work?' },
  { l: '💳 How to Pay',       t: 'What payment methods do you accept?' },
  { l: '✂️ Hair Care Tips',   t: 'How do I care for my hair?' },
  { l: '💍 Bridal Hair',      t: 'Tell me about your bridal packages' },
  { l: '📱 How to Order',     t: 'How do I place an order?' },
  { l: '🕐 Opening Hours',    t: 'What are your opening hours?' },
];

/* ══════════════════════════════════════════════════════════
   WIDGET LOGIC
   ══════════════════════════════════════════════════════════ */
const $toggle = document.getElementById('blc-toggle');
const $panel  = document.getElementById('blc-panel');
const $msgs   = document.getElementById('blc-msgs');
const $input  = document.getElementById('blc-in');
const $send   = document.getElementById('blc-snd');
const $qr     = document.getElementById('blc-qr');
const $tip    = document.getElementById('blc-tip');
const $badge  = document.getElementById('blc-badge');
const $clear  = document.getElementById('blc-clear');

let isOpen = false, started = false;

function ts() {
  return new Date().toLocaleTimeString('en-GH', { hour: '2-digit', minute: '2-digit' });
}

function scrollDown() { $msgs.scrollTop = $msgs.scrollHeight; }

function addMsg(text, role) {
  const d = document.createElement('div');
  d.className = `blc-msg ${role}`;
  d.innerHTML = `
    <div class="blc-mav">${role === 'bot' ? 'L' : 'U'}</div>
    <div>
      <div class="blc-bub">${text}</div>
      <div class="blc-ts">${ts()}</div>
    </div>`;
  $msgs.appendChild(d);
  scrollDown();
}

function showTyping() {
  const d = document.createElement('div');
  d.className = 'blc-msg bot blc-typing'; d.id = 'blc-ty';
  d.innerHTML = `<div class="blc-mav">L</div><div class="blc-dots"><span></span><span></span><span></span></div>`;
  $msgs.appendChild(d); scrollDown();
}
function hideTyping() { const e = document.getElementById('blc-ty'); if (e) e.remove(); }

function showQR() {
  $qr.innerHTML = '';
  QR.forEach(q => {
    const b = document.createElement('button');
    b.className = 'blc-qbtn'; b.textContent = q.l;
    b.addEventListener('click', () => { $qr.innerHTML = ''; send(q.t); });
    $qr.appendChild(b);
  });
}

function send(txt) {
  const msg = (txt || $input.value).trim();
  if (!msg) return;
  $input.value = ''; $input.style.height = 'auto'; $send.disabled = true; $qr.innerHTML = '';
  addMsg(msg, 'user');
  showTyping();
  setTimeout(() => {
    hideTyping();
    addMsg(getResponse(msg), 'bot');
    const total = $msgs.querySelectorAll('.blc-msg').length;
    if (total > 0 && total % 8 === 0) setTimeout(showQR, 500);
  }, 650 + Math.random() * 550);
}

function openPanel() {
  isOpen = true;
  $panel.classList.add('open');
  $toggle.classList.add('open');
  $toggle.setAttribute('aria-expanded', 'true');
  $tip.style.opacity = '0';
  $badge.style.display = 'none';
  if (!started) {
    started = true;
    const page = window.location.pathname.split('/').pop();
    let ctx = '';
    if (page.includes('shop'))    ctx = " I see you're browsing our shop — ";
    if (page.includes('service')) ctx = " I see you're checking out our services — ";
    if (page.includes('product')) ctx = " I see you're looking at a product — ";
    if (page.includes('contact')) ctx = " I see you're on the contact page — ";
    setTimeout(() => {
      addMsg(`Hello, gorgeous! 💕 I'm Lola, your b_lit hairs assistant.${ctx || ' '}Ask me anything about our products, prices, delivery, hair care or how to order!`, 'bot');
      showQR();
    }, 350);
  }
  setTimeout(() => $input.focus(), 400);
}

function closePanel() {
  isOpen = false;
  $panel.classList.remove('open');
  $toggle.classList.remove('open');
  $toggle.setAttribute('aria-expanded', 'false');
}

$toggle.addEventListener('click', () => isOpen ? closePanel() : openPanel());

$input.addEventListener('input', function () {
  $send.disabled = !this.value.trim();
  this.style.height = 'auto';
  this.style.height = Math.min(this.scrollHeight, 100) + 'px';
});

$input.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); if (!$send.disabled) send(); }
});

$send.addEventListener('click', () => send());

$clear.addEventListener('click', () => {
  $msgs.innerHTML = ''; $qr.innerHTML = ''; started = false;
  if (isOpen) { started = true; setTimeout(() => { addMsg("Chat cleared! 😊 How can I help you today?", 'bot'); showQR(); }, 200); }
});

// Badge after delay
setTimeout(() => { if (!isOpen) $badge.style.display = 'flex'; }, 5000);

// Hide tooltip after 8s
setTimeout(() => { $tip.style.opacity = '0'; }, 8000);

// Close on Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen) closePanel(); });