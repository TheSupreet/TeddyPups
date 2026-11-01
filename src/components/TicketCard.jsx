import { Link } from "react-router-dom";

export default function TicketCard({ puppy, index = 0 }) {
  const image = puppy.images?.[0];
  const tilt = index % 2 === 0 ? -1.3 : 1.2;
  const detail = [puppy.breed, puppy.genderLabel].filter(Boolean).join(", ");

  return (
    <Link
      to={`/puppies/${puppy.slug}`}
      className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-toffee"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <article className="overflow-hidden rounded-[1.4rem] border-[3px] border-cocoa bg-milk shadow-[0_10px_0_-6px_#2a170e]">
        <div className="grid grid-cols-[5.5rem_1fr] gap-3 p-3">
          <div className="aspect-square overflow-hidden rounded-2xl border-2 border-cocoa bg-honey-soft">
            {image ? (
              <img
                src={image.url}
                alt={image.alt || `${puppy.name} puppy`}
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>
          <div>
            <p className="font-hand text-sm text-toffee">one ticket home</p>
            <h3 className="font-display text-2xl leading-none">{puppy.name}</h3>
            <p className="mt-1 text-sm text-cocoa-soft">{detail}</p>
            <p className="mt-2 text-sm font-semibold">{puppy.homeLabel || puppy.originLabel}</p>
            <p className="font-hand text-honey-soft"> </p>
            <p className="text-sm">
              home <span aria-hidden="true">♥</span> <span className="float-right">admit one</span>
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
