import { Link } from "react-router-dom";

export default function PuppyCard({ puppy }) {
  const image = puppy.images?.[0];
  const hasVideo = (puppy.videos || []).length > 0;
  const meta = [puppy.breed, puppy.genderLabel, puppy.age].filter(Boolean).join(" · ");

  return (
    <Link
      to={`/puppies/${puppy.slug}`}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-toffee"
      aria-label={`Meet ${puppy.name}, ${puppy.breed}`}
    >
      <article className="h-full overflow-hidden rounded-[1.6rem] border-[3px] border-cocoa bg-milk transition-transform duration-300 group-hover:-translate-y-1">
        <div className="relative aspect-[3/4] overflow-hidden bg-honey-soft">
          {image ? (
            <img
              src={image.url}
              alt={image.alt || `${puppy.name}, ${puppy.breed} puppy`}
              className="h-full w-full object-cover"
            />
          ) : null}
          <span className="absolute left-3 top-3 rounded-full bg-honey-soft px-3 py-1 text-sm font-semibold">
            Available
          </span>
          {hasVideo ? (
            <span className="absolute right-3 top-3 rounded-full bg-cocoa px-3 py-1 text-sm font-semibold text-milk">
              Video
            </span>
          ) : null}
        </div>
        <div className="p-4">
          <h3 className="font-display text-2xl leading-none">{puppy.name}</h3>
          <p className="mt-2 text-sm text-cocoa-soft">{meta}</p>
        </div>
      </article>
    </Link>
  );
}
