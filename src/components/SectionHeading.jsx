export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`font-hand text-xl text-toffee sm:text-2xl ${className}`}>
      <span className="relative inline-block">
        {children}
        <svg
          aria-hidden="true"
          viewBox="0 0 140 10"
          className="absolute -bottom-1 left-0 h-2 w-full"
        >
          <path
            d="M2 6 C 20 2, 40 9, 60 5 S 100 2, 138 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </p>
  );
}

export function SectionHeading({ eyebrow, title, body, align = "center", tone = "light" }) {
  const aligned = align === "left" ? "text-left" : "text-center mx-auto";
  const titleColor = tone === "dark" ? "text-milk" : "text-cocoa";
  const bodyColor = tone === "dark" ? "text-milk/80" : "text-cocoa-soft";
  return (
    <div className={`max-w-3xl ${aligned}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className={`mt-3 font-display text-4xl leading-tight sm:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {body ? (
        <p className={`mt-4 text-lg leading-relaxed ${bodyColor}`}>{body}</p>
      ) : null}
    </div>
  );
}
