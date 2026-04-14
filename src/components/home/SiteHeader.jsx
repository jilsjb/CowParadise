const nav = [
  { label: 'Home', href: '#top' },
  { label: 'Games', href: '#games' },
  { label: 'Stories', href: '#stories' },
  { label: 'Moo Family', href: '#moo-family' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'News', href: '#news' }
];

export function SiteHeader() {
  return (
    <header className="relative z-20 w-full bg-brand-cyan px-3 py-3 shadow-md sm:px-6 md:px-10">
      <div className="mx-auto flex max-w-[1920px] flex-wrap items-center justify-between gap-3">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Cow Paradise"
            className="h-9 w-auto max-w-[200px] object-contain object-left md:h-11 md:max-w-[240px]"
          />
        </a>
        <nav
          aria-label="Primary"
          className="flex max-w-full flex-1 flex-wrap items-center justify-end gap-x-3 gap-y-2 text-[11px] font-medium text-white/95 sm:gap-x-4 sm:text-xs md:gap-x-5 md:text-sm lg:text-base"
        >
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-white/80">
              {item.label}
            </a>
          ))}
          <a
            href="#login"
            className="inline-flex shrink-0 items-center transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <img
              src="/svg/login_button.svg"
              alt="Login"
              className="h-8 w-auto sm:h-9 md:h-10"
              width={135}
              height={65}
            />
          </a>
        </nav>
      </div>
    </header>
  );
}
