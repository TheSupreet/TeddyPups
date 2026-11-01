export function LoadingBlock({ label = "Loading puppies…" }) {
  return (
    <p className="rounded-[1.6rem] border-[3px] border-dashed border-cocoa/30 px-5 py-8 text-center text-cocoa-soft" role="status">
      {label}
    </p>
  );
}

export function ErrorBlock({ message }) {
  return (
    <p className="rounded-[1.6rem] border-[3px] border-toffee bg-blush/50 px-5 py-6 text-cocoa" role="alert">
      {message}
    </p>
  );
}

export function EmptyBlock({ message, action }) {
  return (
    <div className="rounded-[1.6rem] border-[3px] border-cocoa bg-honey-soft/50 px-5 py-8 text-center">
      <p className="text-lg">{message}</p>
      {action}
    </div>
  );
}
