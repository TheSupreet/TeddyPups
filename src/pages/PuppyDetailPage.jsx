import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LetterForm from "../components/LetterForm";
import { ErrorBlock, LoadingBlock } from "../components/Status";
import { IMPORT_STEPS, LOCAL_STEPS } from "../content/site";
import { usePuppy } from "../hooks/usePuppies";

export default function PuppyDetailPage() {
  const { slug } = useParams();
  const { puppy, previous, next, loading, error } = usePuppy(slug);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [slug]);

  if (loading) {
    return (
      <div className="wrap py-16">
        <LoadingBlock label="Fetching this puppy…" />
      </div>
    );
  }

  if (error || !puppy) {
    return (
      <div className="wrap py-16">
        <ErrorBlock message={error || "Puppy not found."} />
        <Link className="btn btn-ghost mt-6" to="/puppies">
          Back to available puppies
        </Link>
      </div>
    );
  }

  const slides = [
    ...(puppy.images || []).map((image) => ({ type: "image", ...image })),
    ...(puppy.videos || []).map((video) => ({ type: "video", ...video })),
  ];
  const slide = slides[Math.min(index, Math.max(slides.length - 1, 0))];
  const steps = puppy.origin === "local" ? LOCAL_STEPS : IMPORT_STEPS;
  const gone = puppy.availability === "gone-home";

  return (
    <article className="wrap py-10">
      <nav className="text-sm" aria-label="Breadcrumb">
        <Link className="font-semibold text-toffee-ink underline" to={gone ? "/gone-home" : "/puppies"}>
          {gone ? "Gone home" : "Available puppies"}
        </Link>
      </nav>

      <div className="mt-6 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-hand text-2xl text-toffee">hello, it's me</p>
          <div className="relative mt-3 overflow-hidden rounded-[1.8rem] border-[3px] border-cocoa bg-honey-soft">
            {slide?.type === "video" ? (
              <video
                key={slide.url}
                className="aspect-[4/5] w-full bg-cocoa object-contain"
                controls
                playsInline
                poster={slide.poster || undefined}
              >
                <source src={slide.url} />
              </video>
            ) : slide ? (
              <img
                src={slide.url}
                alt={slide.alt || puppy.name}
                className="aspect-[4/5] w-full object-cover"
              />
            ) : null}
            {slides.length > 1 ? (
              <div className="absolute inset-x-3 bottom-3 flex justify-between">
                <button type="button" className="btn btn-ghost !min-h-11 !bg-milk" onClick={() => setIndex((index - 1 + slides.length) % slides.length)}>
                  Previous
                </button>
                <button type="button" className="btn btn-ghost !min-h-11 !bg-milk" onClick={() => setIndex((index + 1) % slides.length)}>
                  Next
                </button>
              </div>
            ) : null}
          </div>
          {slides.length > 1 ? (
            <ul className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {slides.map((item, itemIndex) => (
                <li key={`${item.url}-${itemIndex}`}>
                  <button
                    type="button"
                    aria-label={item.type === "video" ? `${puppy.name}, video ${itemIndex + 1} of ${slides.length}` : `${puppy.name}, photo ${itemIndex + 1} of ${slides.length}`}
                    aria-current={itemIndex === index ? "true" : undefined}
                    className={`h-16 w-16 overflow-hidden rounded-xl border-2 ${itemIndex === index ? "border-toffee" : "border-cocoa/30"}`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    <img
                      src={item.type === "video" ? item.poster || puppy.images?.[0]?.url : item.url}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div>
          <h1 className="font-display text-6xl leading-none">{puppy.name}</h1>
          <p className="mt-2 font-hand text-2xl text-toffee-ink">{puppy.breed}</p>
          <span className="mt-4 inline-flex rounded-full bg-honey-soft px-3 py-1 text-sm font-semibold">
            {gone ? "Gone home" : "Available"}
          </span>
          <dl className="mt-6 grid grid-cols-2 gap-4">
            {[
              ["Breed", puppy.breed],
              ["Boy or girl", puppy.genderLabel],
              ["Age", puppy.age],
              ["Where", puppy.originLabel],
            ]
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <div key={label} className="rounded-2xl border-2 border-cocoa/15 p-3">
                  <dt className="text-sm text-cocoa-soft">{label}</dt>
                  <dd className="font-semibold">{value}</dd>
                </div>
              ))}
          </dl>
          {puppy.description ? <p className="mt-5 text-lg">{puppy.description}</p> : null}
        </div>
      </div>

      {puppy.healthInfo?.length ? (
        <section className="mt-12">
          <p className="font-hand text-2xl text-toffee">what comes with {puppy.name}</p>
          <h2 className="mt-2 font-display text-4xl">Every Teddy Pup comes</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {puppy.healthInfo.map((item) => (
              <li key={item} className="tp-board !p-4 font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {gone ? (
        <p className="mt-10 max-w-2xl text-lg text-cocoa-soft">
          {puppy.name} has already joined a loving family. Tell us what you're hoping for and we'll help you find a match.
        </p>
      ) : (
        <section className="mt-12" aria-label={puppy.origin === "local" ? "Coming home from Dubai" : "Coming home from abroad"}>
          <p className="font-hand text-2xl text-toffee">the way home</p>
          <h2 className="mt-2 font-display text-4xl">
            {puppy.origin === "local" ? "Coming home from our showroom" : "Coming home from abroad"}
          </h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {steps.map((step, stepIndex) => (
              <li key={step.title} className="tp-board">
                <p className="font-hand text-xl text-toffee">{stepIndex + 1}</p>
                <h3 className="font-display text-2xl">{step.title}</h3>
                <p className="mt-2 text-cocoa-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className="mt-12 max-w-3xl" aria-label={`Ask about ${puppy.name}`}>
        <p className="font-hand text-2xl text-toffee">dear TeddyPups…</p>
        <h2 className="mt-2 font-display text-4xl">Ask about {puppy.name}</h2>
        <p className="mt-3 text-cocoa-soft">
          Leave your details and our team will get back to you promptly — or message us on WhatsApp for the quickest reply.
        </p>
        <div className="mt-5">
          <LetterForm key={puppy.slug} puppy={puppy} variant="enquiry" />
        </div>
      </section>

      <nav className="mt-12 flex flex-wrap justify-between gap-3" aria-label="More puppies">
        {previous ? (
          <Link className="btn btn-ghost" to={`/puppies/${previous.slug}`}>
            Previous pup {previous.name}
          </Link>
        ) : <span />}
        {next ? (
          <Link className="btn btn-primary" to={`/puppies/${next.slug}`}>
            Next pup {next.name}
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
