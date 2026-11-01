import { useEffect } from "react";

export default function Lightbox({ photos, index, onClose, onIndex }) {
  const photo = photos[index];

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onIndex((index + 1) % photos.length);
      if (event.key === "ArrowLeft") onIndex((index - 1 + photos.length) % photos.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, onClose, onIndex, photos.length]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-cocoa/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption || photo.alt || "Family photo"}
    >
      <button type="button" className="absolute inset-0 cursor-zoom-out" aria-label="Close photo" onClick={onClose} />
      <figure className="relative z-10 w-full max-w-3xl">
        <img
          src={photo.src}
          alt={photo.alt || "A happy TeddyPups family with their new puppy"}
          className="max-h-[78vh] w-full rounded-3xl object-contain"
        />
        {photo.caption ? (
          <figcaption className="mt-3 text-center font-hand text-2xl text-honey">
            {photo.caption}
          </figcaption>
        ) : (
          <figcaption className="mt-3 text-center text-sm text-milk/80">
            Photo {index + 1} of {photos.length}
          </figcaption>
        )}
        <div className="mt-4 flex justify-center gap-3">
          <button type="button" className="btn btn-ghost !min-h-11 !border-milk !text-milk" onClick={() => onIndex((index - 1 + photos.length) % photos.length)}>
            Previous
          </button>
          <button type="button" className="btn btn-primary !min-h-11" onClick={() => onIndex((index + 1) % photos.length)}>
            Next
          </button>
          <button type="button" className="btn btn-ghost !min-h-11 !border-milk !text-milk" onClick={onClose}>
            Close
          </button>
        </div>
      </figure>
    </div>
  );
}
