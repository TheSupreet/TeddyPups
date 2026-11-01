import { useEffect, useState } from "react";
import Mascot from "./Mascot";

const STORAGE_KEY = "teddypups-splash-seen";

export default function SplashIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    setVisible(true);
    const timer = window.setTimeout(() => dismiss(), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={dismiss}
      className="diamond-bg fixed inset-0 z-[80] flex cursor-pointer flex-col items-center justify-center gap-6 text-toffee-ink"
      aria-label="Continue to TeddyPups"
    >
      <Mascot className="h-36 w-36" />
      <span className="font-hand text-3xl">every puppy is family</span>
    </button>
  );
}
