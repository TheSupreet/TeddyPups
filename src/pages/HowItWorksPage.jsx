import { Link } from "react-router-dom";
import {
  DELIVERY,
  LOCAL_STEPS,
  ORDER_STEPS,
  PROMISE,
  whatsappLink,
} from "../content/site";

function Steps({ steps }) {
  return (
    <ol className="mt-6 grid gap-4">
      {steps.map((step, index) => (
        <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
          <span className="font-hand text-2xl text-toffee">{index + 1}</span>
          <div>
            <h4 className="font-display text-2xl">{step.title}</h4>
            <p className="mt-1 text-cocoa-soft">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="wrap py-12">
      <h1 className="max-w-3xl font-display text-5xl leading-tight sm:text-6xl">How it works</h1>
      <p className="mt-4 max-w-3xl text-lg text-cocoa-soft">
        Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.
      </p>

      <section className="mt-12" aria-label="Two ways home">
        <h2 className="font-display text-4xl">Two ways home</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="tp-board bg-blush">
            <h3 className="font-display text-3xl">Meet your puppy in person</h3>
            <p className="mt-3 text-cocoa-soft">
              Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks.
            </p>
            <p className="mt-3 font-semibold">Downtown Dubai</p>
            <Steps steps={LOCAL_STEPS} />
          </article>
          <article className="tp-board bg-sky">
            <h3 className="font-display text-3xl">Order upon request</h3>
            <p className="mt-3 text-cocoa-soft">
              Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world's most sought-after teacup breeds — ethically sourced from the most reputable, certified breeders across Europe, Korea, and beyond.
            </p>
            <p className="mt-3 text-cocoa-soft">
              From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring the world's finest puppies to Dubai, just for you.
            </p>
            <p className="mt-3 font-semibold">Europe · Korea · Dubai</p>
            <Steps steps={ORDER_STEPS} />
          </article>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-4xl">Our premium puppy promise</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {PROMISE.map((item) => (
            <li key={item.title} className="tp-board">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-2 text-cocoa-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="delivery" className="mt-14 scroll-mt-28">
        <h2 className="font-display text-4xl">Delivery & collection</h2>
        <p className="mt-3 max-w-3xl text-cocoa-soft">
          From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {DELIVERY.map((item) => (
            <li key={item.title} className="tp-board">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-2 text-cocoa-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-4xl">Why choose us</h2>
        <p className="mt-3 max-w-3xl text-cocoa-soft">
          We're here to help you find a new family member. From the moment you visit our site to the joyful day your puppy arrives at your door, we're with you every step of the way. Our mission is to make the entire adoption process smooth, transparent, and full of love.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          <li className="tp-board">
            <h3 className="font-display text-2xl">International cargo</h3>
            <p className="mt-2 text-cocoa-soft">{DELIVERY[3].body}</p>
          </li>
          <li className="tp-board">
            <h3 className="font-display text-2xl">Support 24/7</h3>
            <p className="mt-2 text-cocoa-soft">
              Our team is available 24/7 to answer your questions and assist you through every step of the adoption process. From choosing your puppy to post-delivery support — we're just a message away.
            </p>
          </li>
          <li className="tp-board">
            <h3 className="font-display text-2xl">Health guarantee</h3>
            <p className="mt-2 text-cocoa-soft">
              All our puppies come with a verified health certificate from licensed vets. We ensure every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-14 mb-8 tp-board bg-honey-soft">
        <h2 className="font-display text-4xl">Unique and high quality puppies</h2>
        <p className="mt-3 max-w-3xl text-cocoa-soft">
          When you choose TeddyPups, you can trust that you're getting a puppy of the highest quality. We also provide guidance and support to new pet owners, offering advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="btn btn-primary" to="/puppies">View available puppies</Link>
          <a className="btn btn-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer">Say hello on WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
