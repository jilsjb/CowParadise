const POWERED_BY_ICONS = Array.from({ length: 7 }, (_, i) => ({
  src: `/svg/PoweredBy${i + 1}.svg`,
}));

export function PoweredBy() {
  return (
    <section
      id="marketplace"
      aria-labelledby="powered-by-heading"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-8 md:py-20"
    >
      <div className="mx-auto flex max-w-[1800px] flex-col items-center gap-6 text-center md:gap-8">
        <h2
          id="powered-by-heading"
          className="font-display text-4xl font-bold leading-tight text-brand-cyan md:text-6xl md:leading-[1.1]"
        >
          Powered by the Best in Gaming
        </h2>
        <p className="max-w-3xl text-lg text-neutral-800 md:text-xl md:leading-relaxed">
          Teaming up with industry leaders to build the ultimate gaming
          universe.
        </p>

        <ul className="mt-4 flex w-full max-w-[1600px] list-none flex-wrap justify-center gap-4 sm:gap-5 md:gap-6">
          {POWERED_BY_ICONS.map((item) => (
            <li key={item.src} className="shrink-0">
              <img
                src={item.src}
                alt=""
                className="h-[100px] w-auto sm:h-[110px] md:h-[120px]"
                width={178}
                height={150}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
