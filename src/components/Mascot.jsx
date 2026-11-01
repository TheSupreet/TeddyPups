export default function Mascot({ className = "h-28 w-28" }) {
  return (
    <svg viewBox="0 0 160 176" className={className} aria-hidden="true">
      <ellipse cx="80" cy="150" rx="46" ry="28" fill="#f2c98a" stroke="#2a170e" strokeWidth="3.2" />
      <ellipse cx="80" cy="158" rx="34" ry="16" fill="#e7b56a" stroke="#2a170e" strokeWidth="3.2" />
      <ellipse cx="58" cy="162" rx="14" ry="9" fill="#f6d7a4" stroke="#2a170e" strokeWidth="3" />
      <ellipse cx="102" cy="162" rx="14" ry="9" fill="#f6d7a4" stroke="#2a170e" strokeWidth="3" />
      <circle cx="80" cy="78" r="48" fill="#f2c98a" stroke="#2a170e" strokeWidth="3.2" />
      <circle cx="46" cy="40" r="16" fill="#f2c98a" stroke="#2a170e" strokeWidth="3.2" />
      <circle cx="114" cy="40" r="16" fill="#f2c98a" stroke="#2a170e" strokeWidth="3.2" />
      <circle cx="48" cy="42" r="7" fill="#f8e2bc" />
      <circle cx="112" cy="42" r="7" fill="#f8e2bc" />
      <circle cx="58" cy="86" r="9" fill="#f4b6b0" opacity="0.95" />
      <circle cx="102" cy="86" r="9" fill="#f4b6b0" opacity="0.95" />
      <circle cx="68" cy="76" r="4.2" fill="#2a170e" />
      <circle cx="92" cy="76" r="4.2" fill="#2a170e" />
      <circle cx="69.4" cy="74.6" r="1.3" fill="#fffdf8" />
      <circle cx="93.4" cy="74.6" r="1.3" fill="#fffdf8" />
      <ellipse cx="80" cy="88" rx="6.5" ry="4.6" fill="#2a170e" />
      <path d="M68 98 Q80 110 92 98" fill="none" stroke="#2a170e" strokeWidth="3" strokeLinecap="round" />
      <path d="M118 96 q18 6 10 22" fill="none" stroke="#2a170e" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}
