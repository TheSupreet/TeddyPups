import { Link } from "react-router-dom";
import {
  ADDRESS,
  EMAIL,
  FOOTER_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SOCIAL,
  whatsappLink,
} from "../content/site";
import brand from "../data/brand.json";

export default function Footer() {
  return (
    <footer className="bg-cocoa text-milk">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-hand text-4xl text-honey">Home, at last.</p>
          <p className="mt-5 max-w-md text-milk/80">
            TeddyPups U.A.E. is a Dubai-based brand specializing in miniature
            puppies, offering premium services and worldwide shipping.
          </p>
          <img
            src={brand.logo}
            alt=""
            className="mt-6 h-16 w-16 rounded-full border-2 border-honey-soft object-cover"
          />
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <h2 className="font-display text-2xl">Explore</h2>
          <ul className="mt-4 space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link className="text-milk/85 hover:text-honey" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <h2 className="font-display text-2xl">Say hello</h2>
          <ul className="mt-4 space-y-2 text-milk/85">
            <li>
              <a className="hover:text-honey" href={whatsappLink()}>
                WhatsApp {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a className="hover:text-honey" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
            <li>{ADDRESS}</li>
          </ul>
          <ul className="mt-4 flex flex-wrap gap-4">
            {SOCIAL.map((item) => (
              <li key={item.label}>
                <a
                  className="font-semibold text-honey hover:text-milk"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap flex flex-wrap items-center justify-between gap-3 border-t border-milk/15 py-5 text-sm">
        <p>© 2026 TeddyPups U.A.E.</p>
        <a className="font-hand text-lg text-honey/90" href={`tel:${PHONE_TEL}`}>
          every puppy is family
        </a>
      </div>
    </footer>
  );
}
