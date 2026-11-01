import { useMemo, useState } from "react";
import Lightbox from "../components/Lightbox";
import { TESTIMONIAL } from "../content/site";
import families from "../data/families.json";

export default function HappyFamiliesPage() {
  const [index, setIndex] = useState(null);
  const photos = useMemo(() => families.filter((photo) => photo.src), [families]);

  return (
    <div>
      <section className="wrap py-12">
        <h1 className="font-display text-5xl sm:text-6xl">Happy families</h1>
        <p className="mt-4 max-w-3xl text-lg text-cocoa-soft">
          Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends.
        </p>
        <p className="mt-4 font-hand text-2xl text-toffee-ink">{photos.length} moments and counting</p>
        <blockquote className="mt-8 max-w-3xl">
          <p className="font-display text-2xl leading-snug">“{TESTIMONIAL.quote}”</p>
          <footer className="mt-3 font-hand text-xl text-toffee">
            {TESTIMONIAL.author}, {TESTIMONIAL.location}
          </footer>
        </blockquote>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo, photoIndex) => (
            <li key={`${photo.src}-${photoIndex}`}>
              <button
                type="button"
                className="block w-full overflow-hidden rounded-3xl border-[3px] border-cocoa bg-honey-soft text-left"
                onClick={() => setIndex(photoIndex)}
              >
                <img
                  src={photo.src}
                  alt={photo.caption || photo.alt}
                  className="aspect-square w-full object-cover"
                />
                {photo.caption ? (
                  <span className="block px-3 py-2 text-sm font-semibold">{photo.caption}</span>
                ) : null}
                <span className="sr-only">
                  Open photo {photoIndex + 1} of {photos.length}
                  {photo.caption ? `: ${photo.caption}` : ""}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-cocoa py-16 text-center text-milk">
        <p className="font-hand text-3xl text-honey">every one of them was a Teddy Pup once</p>
        <p className="mt-3 font-display text-4xl">Home, at last.</p>
      </section>
      {index !== null ? (
        <Lightbox photos={photos} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
      ) : null}
    </div>
  );
}
