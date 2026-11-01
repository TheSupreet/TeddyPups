import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "../content/site";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cocoa/15 bg-milk/95 p-3 backdrop-blur lg:hidden">
      <p className="mb-2 text-center text-sm font-semibold text-cocoa-soft">{PHONE_DISPLAY}</p>
      <div className="mx-auto flex max-w-md gap-2">
        <a className="btn btn-whatsapp flex-1" href={whatsappLink()} target="_blank" rel="noreferrer">
          WhatsApp us
        </a>
        <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
          Call
        </a>
      </div>
    </div>
  );
}
