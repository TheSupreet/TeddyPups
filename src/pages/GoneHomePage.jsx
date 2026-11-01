import { Eyebrow } from "../components/SectionHeading";
import { EmptyBlock, ErrorBlock, LoadingBlock } from "../components/Status";
import TicketCard from "../components/TicketCard";
import { usePuppies } from "../hooks/usePuppies";

export default function GoneHomePage() {
  const { puppies, loading, error } = usePuppies({
    availability: "gone-home",
    limit: 60,
  });

  return (
    <div className="wrap py-12">
      <Eyebrow>admit one</Eyebrow>
      <h1 className="mt-3 font-display text-5xl sm:text-6xl">Gone home</h1>
      <p className="mt-4 max-w-2xl text-lg text-cocoa-soft">
        Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we'll help you find your match.
      </p>
      <div className="mt-10">
        {loading ? <LoadingBlock label="Printing tickets…" /> : null}
        {error ? <ErrorBlock message={error} /> : null}
        {!loading && !error && puppies.length === 0 ? (
          <EmptyBlock message="No gone-home puppies are listed yet." />
        ) : null}
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {puppies.map((puppy, index) => (
            <li key={puppy.slug}>
              <TicketCard puppy={puppy} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
