import { Link, useSearchParams } from "react-router-dom";
import PuppyCard from "../components/PuppyCard";
import { Eyebrow } from "../components/SectionHeading";
import { EmptyBlock, ErrorBlock, LoadingBlock } from "../components/Status";
import TicketCard from "../components/TicketCard";
import { usePuppies } from "../hooks/usePuppies";

const FILTERS = [
  { id: "all", label: "Everywhere", params: {} },
  { id: "imported", label: "Imported", params: { origin: "imported" } },
  { id: "korean-teacup", label: "Korean Teacup", params: { collection: "korean-teacup" } },
  { id: "maltipoo", label: "Maltipoo", params: { breed: "maltipoo" } },
  { id: "pomeranian", label: "Pomeranian", params: { breed: "pomeranian" } },
  { id: "poodle", label: "Poodle", params: { breed: "poodle" } },
  { id: "cavapoo", label: "Cavapoo", params: { breed: "cavapoo" } },
  { id: "shih-tzu", label: "Shih Tzu", params: { breed: "shih-tzu" } },
  { id: "boys", label: "Boys", params: { gender: "male" } },
  { id: "girls", label: "Girls", params: { gender: "female" } },
];

function activeFilter(params) {
  const origin = params.get("origin");
  const breed = params.get("breed");
  const gender = params.get("gender");
  const collection = params.get("collection");
  if (collection === "korean-teacup") return "korean-teacup";
  if (breed) return breed;
  if (gender === "male") return "boys";
  if (gender === "female") return "girls";
  if (origin === "imported") return "imported";
  if (origin === "local") return "local";
  return "all";
}

export default function PuppiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const current = activeFilter(searchParams);
  const query = {
    availability: "available",
    limit: 24,
  };
  const breed = searchParams.get("breed");
  const origin = searchParams.get("origin");
  const gender = searchParams.get("gender");
  const collection = searchParams.get("collection");
  if (breed) query.breed = breed;
  if (origin) query.origin = origin;
  if (gender) query.gender = gender;
  if (collection) query.collection = collection;

  const available = usePuppies(query);
  const gone = usePuppies({ availability: "gone-home", limit: 5 });

  function apply(filter) {
    const next = new URLSearchParams();
    Object.entries(filter.params).forEach(([key, value]) => next.set(key, value));
    setSearchParams(next);
  }

  const heading =
    origin === "local"
      ? "Puppies in Dubai"
      : origin === "imported"
        ? "Imported for you"
        : "Available puppies";

  return (
    <div className="wrap py-12">
      <section aria-label="Available puppies">
        <Eyebrow>from Teddy's sketchbook</Eyebrow>
        <h1 className="mt-3 font-display text-5xl leading-none sm:text-6xl">{heading}</h1>
        <p className="mt-4 max-w-2xl text-lg text-cocoa-soft">
          Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter puppies">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className="chip"
              aria-pressed={current === filter.id}
              onClick={() => apply(filter)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        {current === "local" ? (
          <p className="mt-4 text-cocoa-soft">
            Showing puppies in our Dubai showroom.{" "}
            <button type="button" className="underline" onClick={() => apply(FILTERS[0])}>
              See everywhere
            </button>
          </p>
        ) : null}

        <p className="mt-8 font-hand text-2xl text-toffee-ink">
          {available.loading
            ? "Looking through the sketchbook…"
            : `${available.total} ${available.total === 1 ? "puppy" : "puppies"} looking for a home`}
        </p>

        <div className="mt-6">
          {available.loading ? <LoadingBlock /> : null}
          {available.error ? <ErrorBlock message={available.error} /> : null}
          {!available.loading && !available.error && available.puppies.length === 0 ? (
            <EmptyBlock
              message="No puppies match this filter right now."
              action={
                <button type="button" className="btn btn-primary mt-4" onClick={() => apply(FILTERS[0])}>
                  See all available puppies
                </button>
              }
            />
          ) : null}
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {available.puppies.map((puppy) => (
              <li key={puppy.slug}>
                <PuppyCard puppy={puppy} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16" aria-label="Already gone home">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-4xl">Already gone home</h2>
            <p className="mt-2 text-cocoa-soft">These puppies have found their families.</p>
          </div>
          <Link className="font-semibold text-toffee-ink underline" to="/gone-home">
            See the puppies who've gone home
          </Link>
        </div>
        {gone.loading ? <div className="mt-6"><LoadingBlock label="Loading tickets…" /></div> : null}
        {gone.error ? <div className="mt-6"><ErrorBlock message={gone.error} /></div> : null}
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gone.puppies.map((puppy, index) => (
            <li key={puppy.slug}>
              <TicketCard puppy={puppy} index={index} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
