import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV, whatsappLink } from "../content/site";
import brand from "../data/brand.json";

const HEADER_SCALLOP = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="22" viewBox="0 0 44 22"><path fill="#fffdf8" d="M0 0H44V5A22 15 0 0 1 0 5Z"/><path d="M0 5A22 15 0 0 1 44 5" fill="none" stroke="#2a170e" stroke-width="2.4"/></svg>`,
)}")`;

function NavItem({ to, label, end, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `relative px-2 py-2 text-[1.02rem] font-semibold ${
          isActive ? "text-toffee-deep" : "text-cocoa hover:text-toffee"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          {isActive ? (
            <img
              src="/images/brand/paw-cursor.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2"
            />
          ) : null}
        </>
      )}
    </NavLink>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-milk/95 backdrop-blur">
      <div className="wrap-wide flex items-center justify-between gap-4 py-3">
        <NavLink to="/" className="flex items-center gap-2" aria-label="TeddyPups U.A.E. — home">
          <img
            src={brand.logo}
            alt=""
            className="h-12 w-12 rounded-full border-2 border-cocoa object-cover"
          />
          <span className="font-display text-2xl tracking-tight">TeddyPups</span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            className="btn btn-whatsapp !min-h-11 !px-4 !py-2 text-base"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp us
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border-2 border-cocoa px-4 py-2 font-semibold lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          Menu
        </button>
      </div>

      {open ? (
        <nav className="border-t border-cocoa/10 bg-milk px-6 py-4 lg:hidden" aria-label="Mobile">
          <ul className="grid gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-2xl px-3 py-3 text-lg font-semibold ${
                      isActive ? "bg-honey-soft text-toffee-ink" : "text-cocoa"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 left-0 h-[22px] w-full"
        style={{
          backgroundImage: HEADER_SCALLOP,
          backgroundRepeat: "repeat-x",
          backgroundSize: "44px 22px",
          backgroundPosition: "left bottom",
        }}
      />
    </header>
  );
}
