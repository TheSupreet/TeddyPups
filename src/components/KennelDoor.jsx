import { Link } from "react-router-dom";

const WOODS = ["#9a5a32", "#6a3b22", "#c4894f", "#7a4630", "#b56b3a", "#5c331c"];

function details(puppy) {
  const parts = [puppy.breed, puppy.genderLabel?.toLowerCase(), puppy.age].filter(Boolean);
  if ((puppy.videos || []).length > 0) parts.push("with video");
  return parts.join(", ");
}

export default function KennelDoor({ puppy, index = 0 }) {
  const image = puppy.images?.[0];
  const wood = WOODS[index % WOODS.length];

  return (
    <Link
      to={`/puppies/${puppy.slug}`}
      className="kennel group block w-40 shrink-0 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-toffee sm:w-44"
      aria-label={`Meet ${puppy.name}, ${puppy.breed}`}
    >
      <h3 className="font-display text-2xl leading-none text-cocoa">{puppy.name}</h3>
      <p className="mx-auto mt-2 min-h-10 max-w-[11rem] text-sm leading-snug text-cocoa-soft">{details(puppy)}</p>
      <div className="kennel-arch mt-3">
        {image ? (
          <img
            src={image.url}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        <div className="kennel-door" style={{ backgroundColor: wood }}>
          <span className="kennel-grain" aria-hidden="true" />
          <span className="kennel-badge">Available</span>
          <svg viewBox="0 0 64 64" className="kennel-paw" aria-hidden="true">
            <circle cx="18" cy="22" r="7" />
            <circle cx="32" cy="16" r="7.5" />
            <circle cx="46" cy="22" r="7" />
            <ellipse cx="32" cy="40" rx="14" ry="11" />
          </svg>
          <span className="kennel-knob" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
