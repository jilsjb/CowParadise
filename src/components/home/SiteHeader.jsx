import { NavLink } from "react-router-dom";

const nav = [
  { label: "Home", to: "/" },
  { label: "Games", to: "/games" },
  { label: "Stories", to: "/stories" },
  { label: "Moo Family", to: "/moo-family" },
  { label: "About Us", to: "/about-us" },
  { label: "Market", to: "/market" },
  { label: "News", to: "/news" },
];

const linkClass = ({ isActive }) =>
  `whitespace-nowrap border-b-2 transition hover:text-white/90 ${
    isActive
      ? "border-white text-white"
      : "border-transparent hover:border-white/40 hover:text-white/80"
  }`;

export function SiteHeader() {
  return (
    <header className="relative z-20 w-full bg-brand-cyan px-3 py-3 shadow-md sm:px-6 md:px-10">
      <div className="mx-auto flex max-w-[1920px] flex-wrap items-center justify-between gap-3">
        <NavLink to="/" className="flex shrink-0 items-center gap-3" end>
          <img
            src="/images/logo.png"
            alt="Cow Paradise"
            className="h-12 w-auto max-w-[300px] object-contain object-left md:h-20 md:max-w-[400px]"
          />
        </NavLink>
        <nav
          aria-label="Primary"
          className="flex max-w-full flex-1 flex-wrap items-center justify-end gap-x-6 gap-y-2 font-display text-xl font-medium text-white/95 sm:gap-x-4 sm:text-xs md:gap-x-12 md:text-2xl lg:text-2xl"
        >
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/login"
            className="inline-flex shrink-0 items-center border-b-2 border-transparent transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <img
              src="/svg/login_button.svg"
              alt="Login"
              className="h-8 w-auto sm:h-9 md:h-10"
              width={135}
              height={65}
            />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
