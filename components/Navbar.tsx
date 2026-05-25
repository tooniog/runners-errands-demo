import Link from "next/link";

const links = [
  ["Book", "/book"],
  ["Track", "/track/demo"],
  ["Waitlist", "/waitlist"],
  ["Chat", "/chat"],
  ["Admin", "/admin"],
  ["Rider", "/rider"],
  ["Partner", "/partner"],
  ["Investors", "/investors"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-lime-300">
            RE
          </div>
          <div>
            <p className="text-sm font-black tracking-tight text-slate-950">
              Runners Errands
            </p>
            <p className="text-xs font-bold text-slate-500">
              Tap. Track. Delivered.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-3 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book"
          className="rounded-full bg-lime-300 px-4 py-2 text-sm font-black text-slate-950 shadow-sm hover:bg-lime-200"
        >
          Book an Errand
        </Link>
      </div>
    </header>
  );
}
