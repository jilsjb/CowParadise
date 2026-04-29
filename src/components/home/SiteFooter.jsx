import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Games", to: "/games" },
  { label: "Stories", to: "/stories" },
  { label: "Moo Family", to: "/moo-family" },
];

const communityLinks = [
  { label: "Token", href: "#token" },
  { label: "Discord", href: "#discord" },
  { label: "Contact", href: "#contact" },
];

const supportLinks = [
  { label: "Privacy Policy", href: "#privacy-policy" },
  { label: "Terms", href: "#terms" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    className: "bg-[#1877F2] text-white",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" aria-hidden>
        <path
          fill="currentColor"
          d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    className:
      "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    className: "bg-[#1DA1F2] text-white",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" aria-hidden>
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    ),
  },
];

function FooterLinkList({ title, links }) {
  return (
    <div className="text-center sm:text-left">
      <h3 className="footer-heading font-display text-xl font-bold md:text-2xl">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-base font-medium text-neutral-900 md:text-lg">
        {links.map((item) => (
          <li key={item.href ?? item.to}>
            {"to" in item ? (
              <Link
                to={item.to}
                className="transition hover:text-brand-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
              >
                {item.label}
              </Link>
            ) : (
              <a
                href={item.href}
                className="transition hover:text-brand-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="news"
      className="relative isolate mt-16 min-h-[min(100vh,720px)] w-full overflow-hidden scroll-mt-24"
    >
      <div
        className="absolute inset-0 bg-[#99d9f2] bg-[url('/images/footer_bg.png')] bg-cover bg-[center_bottom] bg-no-repeat"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-sky-200/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1920px] px-4 pb-10 pt-12 sm:px-6 md:px-10 md:pb-14 md:pt-16">
        <div className="rounded-[40px] border border-white/55 bg-white/60 p-4 shadow-[0_8px_40px_rgba(6,199,242,0.12)] backdrop-blur-md sm:rounded-[40px] sm:p-6 md:rounded-[52px] md:p-2 lg:px-8 lg:py-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,260px)_repeat(3,minmax(0,1fr))_minmax(0,280px)] lg:items-start lg:gap-8 xl:gap-12">
            <div className="flex flex-col items-center gap-5 sm:items-start">
              <Link
                to="/"
                className="inline-block transition hover:opacity-90"
              >
                <img
                  src="/svg/logo_2.svg"
                  alt="Cow Paradise"
                  className="h-28 w-auto max-w-[400px] object-contain object-left md:h-32"
                  width={400}
                  height={100}
                />
              </Link>
              <div className="flex w-full max-w-[240px] flex-col items-center gap-4 sm:items-start mt-12">
                <img
                  src="/images/footer_logo1.png"
                  alt=""
                  className="h-auto w-full max-w-[220px] object-contain"
                  width={220}
                  height={180}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <FooterLinkList title="Quick Links" links={quickLinks} />
            <FooterLinkList title="Community" links={communityLinks} />
            <FooterLinkList title="Support" links={supportLinks} />

            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/footer_logo2.png"
                alt="Moo Family"
                className="h-auto w-full max-w-[280px] object-contain lg:max-w-[300px]"
                width={300}
                height={360}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
