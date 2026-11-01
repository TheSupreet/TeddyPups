import { Link } from "react-router-dom";
import HeroCollage, { PawScatter } from "../components/HeroCollage";
import KennelDoor from "../components/KennelDoor";
import Walker from "../components/Walker";
import { SectionHeading } from "../components/SectionHeading";
import { EmptyBlock, ErrorBlock, LoadingBlock } from "../components/Status";
import {
  BREED_LINKS,
  FAQ,
  HOME_CAPTIONS,
  JOURNEY,
  TESTIMONIAL,
  TRUST,
  whatsappLink,
} from "../content/site";
import families from "../data/families.json";
import brand from "../data/brand.json";
import { usePuppies } from "../hooks/usePuppies";
import { useState } from "react";
import Lightbox from "../components/Lightbox";

const captioned = HOME_CAPTIONS.map((caption) =>
  families.find((photo) => photo.caption === caption),
).filter(Boolean);

export default function HomePage() {
  const { puppies, loading, error } = usePuppies({
    availability: "available",
    limit: 20,
  });
  const [photoIndex, setPhotoIndex] = useState(null);
  const heroStill = brand.hero.find((src) => src.endsWith(".jpg"));

  return (
    <div>
      <section className="relative flex min-h-[calc(100svh-4.5rem)] flex-col overflow-x-clip bg-[#fff8f1] pt-8 sm:pt-12" aria-label="Premium teacup puppies in Dubai">
        <div className="wrap relative z-10 text-center">
          <h1 className="mx-auto max-w-4xl font-display text-[2.65rem] leading-[0.92] tracking-tight text-cocoa sm:text-6xl lg:text-[5.15rem]">
            Premium teacup
            <br />
            puppies in Dubai
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cocoa-soft sm:text-xl">
            Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.
          </p>
          <div className="relative mx-auto mt-8 w-fit max-w-full">
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link className="btn btn-primary w-full sm:w-auto" to="/puppies">
                View available puppies
              </Link>
              <a className="btn btn-ghost w-full sm:w-auto" href={whatsappLink()} target="_blank" rel="noreferrer">
                Enquire on WhatsApp
              </a>
            </div>
            <PawScatter />
          </div>
        </div>
        <HeroCollage puppies={puppies} />
      </section>

      <section className="overflow-x-clip py-16" aria-label="Meet the pups">
        <div className="wrap flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl text-left">
            <h2 className="font-display text-4xl leading-none text-cocoa sm:text-6xl">Meet the pups</h2>
            <p className="mt-3 text-lg text-cocoa-soft">
              Real puppies, real photos, looking for their families right now.
            </p>
          </div>
          <Link className="btn btn-primary shrink-0" to="/puppies">
            See all available puppies
          </Link>
        </div>
        <div className="mt-10">
          {loading ? (
            <div className="wrap">
              <LoadingBlock />
            </div>
          ) : null}
          {error ? (
            <div className="wrap">
              <ErrorBlock message={error} />
            </div>
          ) : null}
          {!loading && !error && puppies.length === 0 ? (
            <div className="wrap">
              <EmptyBlock message="No puppies are listed right now." />
            </div>
          ) : null}
          {!loading && !error && puppies.length > 0 ? (
            <div className="overflow-x-auto">
              <div className="kennel-stage relative w-max min-w-full px-4 pb-1 sm:px-8">
                <ul className="relative z-10 flex items-end gap-6 sm:gap-8">
                  {puppies.map((puppy, index) => (
                    <li key={puppy.slug}>
                      <KennelDoor puppy={puppy} index={index} />
                    </li>
                  ))}
                </ul>
                <div className="kennel-floor relative z-20 -mt-1 w-full" />
                <Walker />
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-honey-soft/40 py-16" aria-label="Two ways to meet your puppy">
        <div className="wrap">
          <SectionHeading title="Two ways to meet your puppy" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="tp-board bg-blush">
              <p className="font-hand text-xl text-toffee-ink">In our showroom</p>
              <h3 className="mt-2 font-display text-3xl">Puppies in Dubai</h3>
              <p className="mt-3 text-cocoa-soft">
                See them, love them, take them home. Come meet our locally available puppies before you decide.
              </p>
              <Link className="btn btn-primary mt-6" to="/puppies?origin=local">
                Meet local puppies
              </Link>
            </article>
            <article className="tp-board bg-sky">
              <p className="font-hand text-xl text-sky-deep">From Korea and beyond</p>
              <h3 className="mt-2 font-display text-3xl">Imported for you</h3>
              <p className="mt-3 text-cocoa-soft">
                Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import.
              </p>
              <Link className="btn btn-ghost mt-6" to="/puppies?origin=imported">
                See imported puppies
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="wrap grid items-center gap-10 py-16 lg:grid-cols-2" aria-label="Your puppy journey">
        <div>
          <SectionHeading
            align="left"
            title="Your puppy journey"
            body="A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful."
          />
          <ol className="mt-8 space-y-5">
            {JOURNEY.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cocoa font-display text-xl text-milk">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl">{step.title}</h3>
                  <p className="mt-1 text-cocoa-soft">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link className="btn btn-ghost mt-8" to="/how-it-works">
            How it works
          </Link>
        </div>
        <div className="mx-auto w-full max-w-sm rounded-[2rem] border-[3px] border-cocoa bg-cocoa p-3 text-milk">
          <div className="overflow-hidden rounded-[1.4rem] bg-[#ece7df]">
            {heroStill ? (
              <img src={heroStill} alt="A tiny apricot teddy bear puppy held up in the TeddyPups showroom" className="aspect-[4/5] w-full object-cover" />
            ) : null}
            <div className="space-y-3 bg-milk p-4 text-cocoa">
              <p className="rounded-2xl bg-honey-soft px-3 py-2 text-sm">
                Hi TeddyPups! I'd love to know more about your puppies.
              </p>
              <p className="text-sm text-cocoa-soft">{JOURNEY[0].body}</p>
              <ul className="flex flex-wrap gap-2">
                {BREED_LINKS.map((breed) => (
                  <li key={breed.label}>
                    <Link className="chip !py-1" to={breed.to}>
                      {breed.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap py-8" aria-label="Why families trust TeddyPups">
        <SectionHeading title="Why families trust TeddyPups" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {TRUST.map((item) => (
            <li key={item.title} className="tp-board">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-2 text-cocoa-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 bg-cocoa py-16 text-milk" aria-label="Happy families & puppies">
        <div className="wrap">
          <SectionHeading
            tone="dark"
            title="Happy families & puppies"
            body="We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts."
          />
          <blockquote className="mx-auto mt-8 max-w-3xl text-center">
            <p className="font-display text-2xl leading-snug text-honey sm:text-3xl">“{TESTIMONIAL.quote}”</p>
            <footer className="mt-4 font-hand text-xl text-honey-soft">
              {TESTIMONIAL.author}, {TESTIMONIAL.location}
            </footer>
          </blockquote>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {captioned.map((photo, index) => (
              <li key={photo.src}>
                <button
                  type="button"
                  className="block w-full overflow-hidden rounded-3xl border-2 border-honey/40"
                  onClick={() => setPhotoIndex(families.findIndex((item) => item.src === photo.src))}
                >
                  <img src={photo.src} alt={photo.caption || photo.alt} className="aspect-square w-full object-cover" />
                  <span className="sr-only">Open photo {index + 1} of {families.length}: {photo.caption}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link className="btn btn-primary" to="/happy-families">
              See every happy family
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap py-16" aria-label="Questions, answered">
        <SectionHeading title="Questions, answered" />
        <div className="mx-auto mt-8 max-w-3xl">
          {FAQ.slice(0, 3).map((item) => (
            <article key={item.question} className="border-b border-cocoa/15 py-4">
              <h3 className="font-display text-2xl">{item.question}</h3>
              <p className="mt-2 text-cocoa-soft">{item.answer}</p>
            </article>
          ))}
          <Link className="btn btn-ghost mt-6" to="/faq">
            Read all questions
          </Link>
        </div>
      </section>

      <section className="wrap pb-20" aria-label="Ready to meet your new best friend?">
        <div className="tp-board bg-blush text-center">
          <h2 className="font-display text-4xl sm:text-5xl">Ready to meet your new best friend?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cocoa-soft">
            Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a className="btn btn-whatsapp w-full sm:w-auto" href={whatsappLink()} target="_blank" rel="noreferrer">
              Enquire on WhatsApp
            </a>
            <Link className="btn btn-ghost w-full sm:w-auto" to="/contact">
              Visit & contact
            </Link>
          </div>
        </div>
      </section>

      {photoIndex !== null && photoIndex >= 0 ? (
        <Lightbox
          photos={families}
          index={photoIndex}
          onClose={() => setPhotoIndex(null)}
          onIndex={setPhotoIndex}
        />
      ) : null}
    </div>
  );
}
