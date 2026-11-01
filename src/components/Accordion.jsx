import { useState } from "react";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="border-y-2 border-cocoa/15">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.question} className="border-b border-cocoa/15 last:border-b-0">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-4 text-left font-display text-xl sm:text-2xl"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? null : index)}
              >
                {item.question}
                <span aria-hidden="true" className="text-toffee">
                  {expanded ? "–" : "+"}
                </span>
              </button>
            </h3>
            {expanded ? (
              <p className="max-w-3xl pb-5 leading-relaxed text-cocoa-soft">{item.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
