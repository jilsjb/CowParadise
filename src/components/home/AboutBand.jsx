export function AboutBand() {
  return (
    <section id="about-us" className="relative scroll-mt-24 bg-brand-peach pt-0">
      <div
        className="h-6 w-full bg-gradient-to-b from-[#ffd89f]/80 to-brand-peach md:h-10"
        aria-hidden
      />
      <div className="mx-auto grid max-w-[1920px] gap-10 px-4 py-14 sm:px-8 md:grid-cols-2 md:gap-16 md:px-12 lg:px-[100px]">
        <div id="moo-family" className="scroll-mt-28 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-cyan">About</p>
          <h2 className="font-display text-4xl font-bold leading-tight text-neutral-800 md:text-5xl">
            Where the herd feels like family
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-neutral-700">
            Cow Paradise celebrates ethical care, open meadows, and the joy of farm life—brought to life
            for kids and grown-ups through games, shorts, and stories from the Moo Family universe.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="aspect-[4/3] w-full max-w-lg rounded-[32px] bg-gradient-to-br from-brand-cyan/20 via-white to-brand-gold/30 p-1 shadow-soft">
            <div className="flex h-full min-h-[240px] items-center justify-center rounded-[30px] bg-white/80 text-center text-neutral-500">
              <p className="px-6 font-medium">Your farm art, photos, or mascot can live here.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
