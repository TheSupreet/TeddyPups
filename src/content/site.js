export const PHONE_DISPLAY = "+971 54 167 6733";
export const PHONE_TEL = "+971541676733";
export const EMAIL = "teddypupsadmin@gmail.com";
export const ADDRESS = "Downtown Dubai, United Arab Emirates";
export const MAPS_URL = "https://maps.app.goo.gl/ZdJvwHBSQWWZT54s7";

export const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/teddypups.worldwide/" },
  { label: "TikTok", href: "https://www.tiktok.com/@teddypupsuae" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61567496944539" },
];

export const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/puppies", label: "Puppies" },
  { to: "/happy-families", label: "Happy families" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Visit & contact" },
];

export const FOOTER_LINKS = [
  { to: "/puppies", label: "Available puppies" },
  { to: "/gone-home", label: "Gone home" },
  { to: "/happy-families", label: "Happy families" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/how-it-works#delivery", label: "Delivery & collection" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Visit & contact" },
];

export const DEFAULT_WHATSAPP =
  "Hi TeddyPups! I'd love to know more about your puppies.";

export function whatsappLink(text = DEFAULT_WHATSAPP) {
  return `https://wa.me/971541676733?text=${encodeURIComponent(text)}`;
}

export const BREED_LINKS = [
  { label: "Maltipoo", to: "/puppies?breed=maltipoo" },
  { label: "Pomeranian", to: "/puppies?breed=pomeranian" },
  { label: "Poodle", to: "/puppies?breed=poodle" },
  { label: "Cavapoo", to: "/puppies?breed=cavapoo" },
  { label: "Shih Tzu", to: "/puppies?breed=shih-tzu" },
];

export const JOURNEY = [
  {
    title: "Choose your breed",
    body: "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.",
  },
  {
    title: "Get photos & details",
    body: "Our team will share real photos, health details, and all necessary information directly on WhatsApp.",
  },
  {
    title: "Secure & safe delivery",
    body: "Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.",
  },
];

export const TRUST = [
  {
    title: "Vet-checked & healthy",
    body: "Every puppy comes vaccinated, dewormed, and with a verified health certificate.",
  },
  {
    title: "Korea to Dubai, safely",
    body: "Trusted breeders, safe travel, and premium care from start to finish.",
  },
  {
    title: "Support 24/7",
    body: "Always here to help, from choosing your puppy to post-delivery support.",
  },
  {
    title: "Trusted by families worldwide",
    body: "Puppies delivered to loving homes all around the world.",
  },
];

export const LOCAL_STEPS = [
  {
    title: "Explore our puppies",
    body: "Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information.",
  },
  {
    title: "Choose your puppy",
    body: "Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly if you have any questions.",
  },
  {
    title: "Meet before you choose",
    body: "Spend time bonding before making your decision.",
  },
  {
    title: "Pick-up or delivery",
    body: "Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable, ensuring your puppy arrives comfortably.",
  },
];

export const IMPORT_STEPS = [
  {
    title: "Reserve your puppy",
    body: "Tell us which puppy has captured your heart.",
  },
  {
    title: "Personalized consultation",
    body: "We finalize details with you and share updates on your puppy's journey.",
  },
  {
    title: "Import and arrival",
    body: "We manage health checks, travel arrangements, and documentation.",
  },
  {
    title: "Welcome home",
    body: "We help your new puppy settle in and ensure a smooth transition into your home.",
  },
];

export const ORDER_STEPS = [
  {
    title: "Reserve your puppy",
    body: "Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart. Our reservation-only model ensures that each puppy is specifically sourced to meet your preferences.",
  },
  {
    title: "Personalized consultation",
    body: "Once your reservation is confirmed, we will work closely with you to finalize details and provide updates on your puppy's journey.",
  },
  {
    title: "Import and arrival",
    body: "We manage all aspects of the import process, including health checks, travel arrangements, and necessary documentation. Your puppy will be carefully transported and will arrive ready to join your family.",
  },
  {
    title: "Welcome home",
    body: "Upon arrival, we provide support to help your new puppy acclimate to their new environment. Our team is available for any additional assistance and to ensure a smooth transition into your home.",
  },
];

export const DELIVERY = [
  {
    title: "Take your puppy home the same day",
    body: "Local puppies are available immediately — visit, fall in love, and go home together.",
  },
  {
    title: "Delivery within Dubai",
    body: "Prefer to stay home? We deliver your puppy to your door within Dubai, safely and comfortably.",
  },
  {
    title: "Safe international cargo",
    body: "We handle all the paperwork and ensure comfortable travel so your puppy arrives happy and stress-free.",
  },
  {
    title: "Worldwide delivery",
    body: "We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance.",
  },
];

export const PROMISE = [
  {
    title: "Hand-selected breeders",
    body: "We work only with breeders who uphold the highest ethical and health standards.",
  },
  {
    title: "Full transparency",
    body: "Photos, videos, and health certificates are shared before your puppy travels.",
  },
  {
    title: "Safe, stress-free delivery",
    body: "We handle every detail of the import process, so your puppy arrives happy, healthy, and ready to love you.",
  },
];

export const TESTIMONIAL = {
  quote:
    "TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.",
  author: "Sarah M.",
  location: "Dubai, UAE",
};

export const FAQ = [
  {
    question: "Are your puppies vaccinated and health-checked?",
    answer:
      "Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.",
  },
  {
    question: "Can I meet a puppy before I decide?",
    answer:
      "Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.",
  },
  {
    question: "Can I take my puppy home the same day?",
    answer:
      "Local puppies are available immediately, so you can take your puppy home the same day.",
  },
  {
    question: "Do you import puppies from abroad?",
    answer:
      "Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.",
  },
  {
    question: "How does an imported puppy travel to Dubai?",
    answer:
      "We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.",
  },
  {
    question: "Will I see photos and health details first?",
    answer:
      "Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.",
  },
  {
    question: "Do you deliver?",
    answer:
      "Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.",
  },
  {
    question: "Which breeds do you usually have?",
    answer:
      "Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.",
  },
  {
    question: "Is there help after my puppy comes home?",
    answer:
      "Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.",
  },
];

export const HOME_CAPTIONS = [
  "Lulu 🧸 with her new mummy ❤️",
  "Adorable Maltipoo baby 🧸❤️",
  "My new teddy puppy 🥰🧸",
  "Our new puppies 🧸🥰🤗",
  "New puppy 🧸😍",
  "Gang of 3 😍🧸",
  "So happy 😍😍",
  "New pup 🤗💫",
];
