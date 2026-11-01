import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";
import { FAQ, whatsappLink } from "../content/site";

export default function FaqPage() {
  return (
    <div className="wrap max-w-3xl py-12">
      <h1 className="font-display text-5xl sm:text-6xl">Questions & answers</h1>
      <p className="mt-4 text-lg text-cocoa-soft">
        Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7.
      </p>
      <div className="mt-8">
        <Accordion items={FAQ} />
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <a className="btn btn-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer">
          Say hello on WhatsApp
        </a>
        <Link className="btn btn-ghost" to="/contact">
          Visit & contact
        </Link>
      </div>
    </div>
  );
}
