import { useState } from "react";
import { createEnquiry, getErrorMessage } from "../services/api";
import { whatsappLink } from "../content/site";

const empty = {
  customerName: "",
  phone: "",
  email: "",
  area: "",
  message: "",
  website: "",
};

export default function LetterForm({
  puppies = [],
  puppy = null,
  variant = "letter",
}) {
  const [fields, setFields] = useState({
    ...empty,
    message: puppy
      ? `Hi! I'd love to know more about ${puppy.name} (${puppy.breed}).`
      : "",
  });
  const [puppySlug, setPuppySlug] = useState(puppy?.slug || "");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setFields((current) => ({ ...current, [name]: value }));
  }

  function validate() {
    const next = {};
    if (!fields.customerName.trim()) next.customerName = "Please tell us your name.";
    if (!fields.phone.trim()) next.phone = "A phone or WhatsApp number is required.";
    else if (fields.phone.trim().length < 8) next.phone = "That number looks too short.";
    if (fields.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      next.email = "That email doesn't look quite right.";
    }
    return next;
  }

  async function onSubmit(event) {
    event.preventDefault();
    const next = validate();
    setFieldErrors(next);
    if (Object.keys(next).length) return;
    setSending(true);
    setError("");
    try {
      await createEnquiry({
        customerName: fields.customerName.trim(),
        phone: fields.phone.trim(),
        email: fields.email.trim(),
        area: fields.area.trim(),
        message: fields.message.trim(),
        puppySlug: puppy?.slug || puppySlug,
        website: fields.website,
      });
      setDone(true);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="tp-board bg-honey-soft">
        <p className="font-hand text-2xl text-toffee-ink">with love, received</p>
        <p className="mt-3 text-lg">
          Thank you. Your note is with the TeddyPups team, and they'll reply soon.
        </p>
      </div>
    );
  }

  const nameField = (
    <input
      className="field"
      name="customerName"
      aria-label="Your name (required)"
      placeholder="Your name (required)"
      required
      value={fields.customerName}
      onChange={update}
    />
  );
  const phoneField = (
    <input
      className="field"
      name="phone"
      aria-label="Phone or WhatsApp number with country code (required)"
      placeholder="+971 50 123 4567"
      required
      value={fields.phone}
      onChange={update}
    />
  );
  const emailField = (
    <input
      className="field"
      name="email"
      type="email"
      aria-label="Email (optional)"
      placeholder="optional"
      value={fields.email}
      onChange={update}
    />
  );

  return (
    <form onSubmit={onSubmit} className="tp-board bg-[#fffaf2]" noValidate>
      {variant === "letter" ? (
        <>
          <p className="font-hand text-3xl text-toffee-ink">Dear TeddyPups,</p>
          <p className="mt-4 text-lg leading-loose">
            my name is {nameField}, and you can reach me on {phoneField} or by email at {emailField}.
          </p>
          <p className="mt-3 text-lg leading-loose">
            I live in{" "}
            <input
              className="field"
              name="area"
              aria-label="Your area (optional)"
              placeholder="e.g. Dubai Marina"
              value={fields.area}
              onChange={update}
            />
            , and I'm curious about{" "}
            <select
              className="field max-w-full"
              aria-label="Puppy you're interested in (optional)"
              value={puppySlug}
              onChange={(event) => setPuppySlug(event.target.value)}
            >
              <option value="">any puppy (not sure yet)</option>
              {puppies.map((item) => {
                const sameName = item.breed.toLowerCase() === item.name.toLowerCase();
                const detail = sameName
                  ? item.genderLabel.toLowerCase()
                  : `${item.breed}, ${item.genderLabel.toLowerCase()}`;
                return (
                  <option key={item.slug} value={item.slug}>
                    {item.name} ({detail})
                  </option>
                );
              })}
            </select>
            .
          </p>
        </>
      ) : (
        <div className="grid gap-4">
          <label className="grid gap-1 font-semibold">
            Your name *
            <input className="field" name="customerName" required value={fields.customerName} onChange={update} />
          </label>
          <label className="grid gap-1 font-semibold">
            Phone or WhatsApp *
            <input className="field" name="phone" required placeholder="+971 50 123 4567" value={fields.phone} onChange={update} />
          </label>
          <label className="grid gap-1 font-semibold">
            Email (optional)
            <input className="field" name="email" type="email" value={fields.email} onChange={update} />
          </label>
          <label className="grid gap-1 font-semibold">
            Your area (optional)
            <input className="field" name="area" placeholder="e.g. Dubai Marina" value={fields.area} onChange={update} />
          </label>
        </div>
      )}

      <label className="mt-4 grid gap-2 font-semibold">
        {variant === "letter" ? "Your message (optional)" : "Message (optional)"}
        <textarea
          className="field min-h-28 w-full"
          name="message"
          placeholder={variant === "letter" ? "Anything else you'd like to tell us…" : ""}
          value={fields.message}
          onChange={update}
        />
      </label>

      <label className="sr-only" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" value={fields.website} onChange={update} />
      </label>

      {fieldErrors.customerName ? <p className="mt-3 text-toffee-ink">{fieldErrors.customerName}</p> : null}
      {fieldErrors.phone ? <p className="mt-1 text-toffee-ink">{fieldErrors.phone}</p> : null}
      {fieldErrors.email ? <p className="mt-1 text-toffee-ink">{fieldErrors.email}</p> : null}
      {error ? <p className="mt-3 text-toffee-ink">{error}</p> : null}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button className="btn btn-primary" type="submit" disabled={sending}>
          {sending ? "Sending…" : variant === "letter" ? "Post my letter" : "Send enquiry"}
        </button>
        {puppy ? (
          <a className="btn btn-whatsapp" href={whatsappLink(`Hi TeddyPups! I'd love to know more about ${puppy.name}.`)} target="_blank" rel="noreferrer">
            Ask about {puppy.name} on WhatsApp
          </a>
        ) : null}
      </div>
      {variant === "letter" ? (
        <p className="mt-5 font-hand text-xl text-toffee-ink">with love, a future puppy parent</p>
      ) : null}
    </form>
  );
}
