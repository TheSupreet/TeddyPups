import { useEffect, useRef } from "react";

export default function Walker() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const stage = node?.closest(".kennel-stage");
    const scroller = stage?.parentElement;
    if (!node || !stage || !scroller) return undefined;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let walkingTimer = 0;

    const place = () => {
      frame = 0;
      if (media.matches) {
        node.style.transform = "translate3d(0.8rem, 0, 0)";
        node.classList.remove("is-walking");
        return;
      }

      const scroller = stage.parentElement;
      const stageRect = stage.getBoundingClientRect();
      const scrollerRect = scroller.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const start = view * 0.92;
      const end = view * 0.22;
      const progress = Math.min(1, Math.max(0, (start - stageRect.top) / (start - end || 1)));
      const drop = Math.min(1, progress / 0.3);
      const walk = Math.max(0, (progress - 0.3) / 0.7);
      const maxX = Math.max(scroller.clientWidth - node.offsetWidth - 28, 0);
      const x = walk * maxX + (scrollerRect.left - stageRect.left);
      const y = (1 - drop) * -120;
      node.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      node.classList.add("is-walking");
      window.clearTimeout(walkingTimer);
      walkingTimer = window.setTimeout(() => node.classList.remove("is-walking"), 180);
      if (frame) return;
      frame = window.requestAnimationFrame(place);
    };

    place();
    window.addEventListener("scroll", onScroll, { passive: true });
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", place);
    media.addEventListener?.("change", place);

    return () => {
      window.removeEventListener("scroll", onScroll);
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", place);
      media.removeEventListener?.("change", place);
      window.clearTimeout(walkingTimer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="kennel-walker" aria-hidden="true">
      <svg viewBox="0 0 150 108" className="walker-sprite h-auto w-full">
        <g className="walker-tail">
          <path
            d="M28 58c-14 2-22-10-18-20 3-8 12-8 16-2"
            fill="none"
            stroke="#2a170e"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M28 58c-14 2-22-10-18-20 3-8 12-8 16-2"
            fill="none"
            stroke="#f2c98a"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>
        <ellipse cx="62" cy="62" rx="34" ry="22" fill="#f2c98a" stroke="#2a170e" strokeWidth="3" />
        <ellipse cx="78" cy="70" rx="16" ry="10" fill="#e7b56a" />
        <g className="walker-leg walker-leg-a">
          <path d="M48 74 L42 96" stroke="#2a170e" strokeWidth="5" strokeLinecap="round" />
          <path d="M78 76 L84 98" stroke="#2a170e" strokeWidth="5" strokeLinecap="round" />
        </g>
        <g className="walker-leg walker-leg-b">
          <path d="M58 76 L64 98" stroke="#2a170e" strokeWidth="5" strokeLinecap="round" />
          <path d="M88 74 L96 96" stroke="#2a170e" strokeWidth="5" strokeLinecap="round" />
        </g>
        <circle cx="108" cy="40" r="22" fill="#f2c98a" stroke="#2a170e" strokeWidth="3" />
        <ellipse cx="112" cy="18" rx="8" ry="12" fill="#f2c98a" stroke="#2a170e" strokeWidth="3" />
        <ellipse cx="128" cy="22" rx="7" ry="10" fill="#f2c98a" stroke="#2a170e" strokeWidth="3" />
        <circle cx="116" cy="38" r="3" fill="#2a170e" />
        <circle cx="117" cy="37" r="1" fill="#fffdf8" />
        <ellipse cx="126" cy="46" rx="5" ry="3.4" fill="#2a170e" />
        <path d="M96 48c8 6 10 14 6 18" fill="none" stroke="#c2622b" strokeWidth="4" strokeLinecap="round" />
        <circle cx="94" cy="50" r="3.2" fill="#f2be6b" stroke="#2a170e" strokeWidth="1.4" />
      </svg>
    </div>
  );
}
