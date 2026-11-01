import LetterForm from "../components/LetterForm";
import { ErrorBlock, LoadingBlock } from "../components/Status";
import {
  ADDRESS,
  EMAIL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappLink,
} from "../content/site";
import { usePuppies } from "../hooks/usePuppies";

export default function ContactPage() {
  const { puppies, loading, error } = usePuppies({
    availability: "available",
    limit: 30,
  });

  return (
    <div className="wrap grid gap-10 py-12 lg:grid-cols-[1.3fr_0.7fr]">
      <section aria-label="Get in touch with us">
        <h1 className="font-display text-5xl leading-tight sm:text-6xl">Get in touch with us</h1>
        <p className="mt-4 max-w-2xl text-lg text-cocoa-soft">
          Have questions about our puppies or adoption process? Fill out the form, and our team will get back to you promptly. Whether ready to adopt or just seeking info, we'd love to hear from you!
        </p>
        <div className="mt-8">
          {loading ? <LoadingBlock label="Loading the puppy list…" /> : null}
          {error ? <ErrorBlock message={error} /> : null}
          {!loading ? <LetterForm puppies={puppies} variant="letter" /> : null}
        </div>
      </section>
      <aside className="space-y-5">
        <div className="tp-board">
          <h2 className="font-display text-3xl">Say hello</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a className="font-semibold text-toffee-ink underline" href={whatsappLink()}>
                WhatsApp {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a className="font-semibold" href={`tel:${PHONE_TEL}`}>
                call us
                <span className="mt-1 block text-cocoa-soft">{PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a className="font-semibold" href={`mailto:${EMAIL}`}>
                email
                <span className="mt-1 block break-all text-cocoa-soft">{EMAIL}</span>
              </a>
            </li>
          </ul>
        </div>
        <section className="tp-board bg-blush" aria-label="Visit us in Downtown Dubai">
          <h2 className="font-display text-3xl">Visit us in Downtown Dubai</h2>
          <p className="mt-3 text-cocoa-soft">
            Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.
          </p>
          <p className="mt-3 font-semibold">{ADDRESS}</p>
          <a className="btn btn-primary mt-5" href={MAPS_URL} target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </section>
      </aside>
    </div>
  );
}
