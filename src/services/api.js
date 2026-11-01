import catalogue from "../data/puppies.json";

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function dropEmpty(item) {
  const copy = { ...item };
  if (copy.width == null) delete copy.width;
  if (copy.height == null) delete copy.height;
  if (!copy.poster) delete copy.poster;
  return copy;
}

const puppies = catalogue.puppies.map((puppy, index) => ({
  ...puppy,
  sortOrder: index,
  images: (puppy.images || []).map(dropEmpty),
  videos: (puppy.videos || []).map(dropEmpty),
  breedSlugs: puppy.breedSlugs?.length
    ? puppy.breedSlugs
    : [puppy.breed.toLowerCase().replace(/\s+/g, "-")],
}));

function matches(puppy, query) {
  if (query.availability === "available" || query.availability === "gone-home") {
    if (puppy.availability !== query.availability) return false;
  }
  if (query.origin === "local" || query.origin === "imported") {
    if (puppy.origin !== query.origin) return false;
  }
  if (query.gender === "male" || query.gender === "female") {
    if (puppy.gender !== query.gender && puppy.gender !== "male-female") return false;
  }
  if (query.collection) {
    if (!(puppy.collections || []).includes(query.collection)) return false;
  }
  if (query.breed) {
    const breed = String(query.breed).toLowerCase();
    const spaced = breed.replace(/-/g, " ");
    const slugMatch = (puppy.breedSlugs || []).includes(breed);
    const nameMatch = new RegExp(escapeRegex(spaced), "i").test(puppy.breed || "");
    if (!slugMatch && !nameMatch) return false;
  }
  return true;
}

function sorted(list) {
  return [...list].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getErrorMessage(error) {
  return (
    error?.response?.data?.message ||
    error?.message ||
    "We couldn't reach TeddyPups just now. Please try again."
  );
}

export async function getPuppies(params = {}) {
  const page = Math.max(parseInt(params.page, 10) || 1, 1);
  const limit = Math.min(Math.max(parseInt(params.limit, 10) || 24, 1), 100);
  const filtered = sorted(puppies.filter((puppy) => matches(puppy, params)));
  const total = filtered.length;
  const start = (page - 1) * limit;
  return {
    puppies: filtered.slice(start, start + limit),
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit) || 0,
  };
}

export async function getPuppy(slug) {
  const puppy = puppies.find((item) => item.slug === slug);
  if (!puppy) {
    throw new Error("Puppy not found.");
  }
  const siblings = sorted(puppies.filter((item) => item.availability === puppy.availability));
  const index = siblings.findIndex((item) => item.slug === puppy.slug);
  const brief = (item) => (item ? { slug: item.slug, name: item.name } : null);
  return {
    puppy,
    previous: index > 0 ? brief(siblings[index - 1]) : null,
    next: index >= 0 && index < siblings.length - 1 ? brief(siblings[index + 1]) : null,
  };
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function createEnquiry(payload) {
  if (payload?.website) {
    return { message: "Thank you. We have your letter." };
  }

  const customerName = String(payload?.customerName || "").trim();
  const phone = String(payload?.phone || "").trim();
  const email = String(payload?.email || "").trim();

  if (!customerName) {
    throw new Error("Please tell us your name.");
  }
  if (!phone || phone.length < 8) {
    throw new Error("A phone or WhatsApp number is required.");
  }
  if (email && !isEmail(email)) {
    throw new Error("That email doesn't look quite right.");
  }

  return { message: "Thank you. We have your letter." };
}
