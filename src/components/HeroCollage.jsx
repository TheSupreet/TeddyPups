import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Mascot from "./Mascot";

const LEFT = [
  { height: "clamp(5.4rem, 13vw, 8.4rem)", label: false },
  { height: "clamp(8rem, 20vw, 13.2rem)", label: false },
  { height: "clamp(6.8rem, 17vw, 11rem)", label: true },
];

const RIGHT = [
  { height: "clamp(7rem, 17vw, 11.2rem)", label: true },
  { height: "clamp(8.4rem, 21vw, 13.6rem)", label: false },
  { height: "clamp(5.8rem, 14vw, 9rem)", label: false },
];

const FENCE = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="40" viewBox="0 0 52 40"><path d="M0 8A26 14 0 0 0 52 8" fill="none" stroke="#2a170e" stroke-width="2.6"/><path d="M0 22A26 14 0 0 0 52 22" fill="none" stroke="#2a170e" stroke-width="2.3"/></svg>`,
)}")`;
const SCALLOP_MASK = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64"><path fill="white" d="M0 8A26 14 0 0 0 52 8V64H0Z"/></svg>`,
)}")`;

const PAWS = [
  { top: "0.1rem", left: "0.15rem", turn: "-20deg", size: "1.05rem", delay: "0s" },
  { top: "1.15rem", left: "1.05rem", turn: "16deg", size: "0.82rem", delay: "0.2s" },
  { top: "0.2rem", left: "2.05rem", turn: "-6deg", size: "0.72rem", delay: "0.45s" },
  { top: "1.25rem", left: "2.2rem", turn: "24deg", size: "0.9rem", delay: "0.15s" },
];

function Arch({ puppy, height, label }) {
  if (!puppy) {
    return (
      <div
        className="w-[13%] shrink-0 rounded-t-[999px] border-[3px] border-b-0 border-cocoa bg-honey-soft"
        style={{ height }}
      />
    );
  }

  return (
    <Link
      to={`/puppies/${puppy.slug}`}
      aria-label={`Meet ${puppy.name}, ${puppy.breed}`}
      className="relative z-10 block w-[13%] shrink-0"
      style={{ height }}
    >
      {label ? (
        <span className="absolute -top-8 left-1/2 z-20 hidden -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-cocoa bg-milk px-2.5 py-1 text-[0.72rem] font-semibold text-cocoa sm:inline-flex">
          {puppy.breed}
        </span>
      ) : null}
      <span className="block h-full overflow-hidden rounded-t-[999px] border-[3px] border-b-0 border-cocoa bg-honey-soft">
        <img
          key={puppy.slug}
          src={puppy.images[0].url}
          alt=""
          className="arch-photo h-full w-full object-cover object-[center_30%]"
        />
      </span>
    </Link>
  );
}

export function PawScatter() {
  return (
    <div className="pointer-events-none absolute -right-1 -top-6 hidden h-12 w-16 sm:block lg:left-[calc(100%+0.5rem)] lg:right-auto lg:top-1" aria-hidden="true">
      {PAWS.map((paw) => (
        <img
          key={`${paw.left}-${paw.top}`}
          src="/images/brand/paw-cursor.png"
          alt=""
          className="paw-mark absolute"
          style={{
            top: paw.top,
            left: paw.left,
            width: paw.size,
            height: paw.size,
            "--paw-turn": paw.turn,
            animationDelay: paw.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroCollage({ puppies }) {
  const [tick, setTick] = useState(0);
  const photos = puppies.filter((puppy) => puppy.images?.[0]?.url);

  useEffect(() => {
    if (photos.length < 2) return undefined;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return undefined;
    const id = window.setInterval(() => setTick((value) => value + 1), 2800);
    return () => window.clearInterval(id);
  }, [photos.length]);

  const pick = (slot) => (photos.length ? photos[(slot + tick) % photos.length] : null);

  return (
    <div className="relative mt-6 flex min-h-[18rem] flex-1 flex-col sm:mt-8">
      <div className="relative">
        <div className="flex w-[112%] -ml-[6%] items-end justify-center gap-[1.1%] pt-10">
          {LEFT.map((slot, index) => (
            <Arch key={`left-${index}`} puppy={pick(index)} height={slot.height} label={slot.label} />
          ))}
          <div className="w-[16%] max-w-[10.5rem] shrink-0" />
          {RIGHT.map((slot, index) => (
            <Arch key={`right-${index}`} puppy={pick(index + 3)} height={slot.height} label={slot.label} />
          ))}
        </div>

        <div className="pointer-events-none relative z-20 -mt-12 h-16">
          <div
            className="diamond-bg h-16 w-full"
            style={{
              WebkitMaskImage: SCALLOP_MASK,
              maskImage: SCALLOP_MASK,
              WebkitMaskSize: "52px 64px",
              maskSize: "52px 64px",
              WebkitMaskRepeat: "repeat-x",
              maskRepeat: "repeat-x",
              WebkitMaskPosition: "left top",
              maskPosition: "left top",
            }}
          />
          <div
            className="absolute inset-x-0 top-0 h-10 w-full"
            style={{
              backgroundImage: FENCE,
              backgroundRepeat: "repeat-x",
              backgroundSize: "52px 40px",
              backgroundPosition: "left top",
            }}
          />
        </div>

        <div className="pointer-events-none absolute bottom-14 left-1/2 z-30 w-[20%] max-w-[12rem] -translate-x-1/2">
          <Mascot className="h-auto w-full" />
        </div>
      </div>
      <div className="diamond-bg -mt-px min-h-16 flex-1" />
    </div>
  );
}
