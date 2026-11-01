import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="wrap py-20 text-center">
      <p className="font-hand text-2xl text-toffee">peekaboo</p>
      <h1 className="mt-3 font-display text-5xl">That page has wandered off</h1>
      <Link className="btn btn-primary mt-6" to="/">
        Back home
      </Link>
    </div>
  );
}
