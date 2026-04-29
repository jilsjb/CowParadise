const STATS = [
  { value: "100+", label: "Kids Learning with Playing" },
  { value: "20+", label: "Games" },
  { value: "10+", label: "Years of Experience" },
  { value: "95%", label: "Parents Satisfaction" },
];

const BULLETS = ["Empower Creativity", "Foster Growth", "Build Community"];

export function WhatIsCowParadise() {
  return (
    <section
      id="about-us"
      className="relative scroll-mt-24 bg-[#FFEDD3] pb-16 pt-0 md:pb-24"
    >
      {/* Sand layer pushed down more than waves so more beach shows below the water art */}
      <div className="relative w-full overflow-hidden pb-10 leading-none md:pb-16">
        <img
          src="/images/waves_sand.png"
          alt=""
          className="relative z-0 block w-full translate-y-12 object-cover object-[center_100%] sm:translate-y-16 md:translate-y-24 lg:translate-y-28"
        />
        <img
          src="/images/waves.png"
          alt=""
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 w-full translate-y-6 object-cover object-[center_100%] sm:translate-y-8 md:translate-y-12"
        />
      </div>

      <div className="mx-auto max-w-[1920px] px-4 pt-10 sm:px-8 md:px-12 lg:px-[100px] lg:pt-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16 xl:gap-24">
          <div className="space-y-8">
            <h2 className="font-display text-4xl font-bold leading-tight text-brand-cyan md:text-5xl lg:text-[2.75rem]">
              What is Cow Paradise ?
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-700 md:text-lg">
              At Cow Paradise, We&apos;re Creating More Than Just
              Games—We&apos;re Building A Playful Universe Filled With Stories,
              Adventures, And Unforgettable Characters.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 md:gap-6">
              {STATS.map((item) => (
                <div key={item.label} className="text-center sm:text-left">
                  <p className="font-display text-3xl font-bold text-neutral-900 md:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-bold leading-snug text-neutral-800 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#about-us"
              className="inline-block transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
            >
              <img
                src="/svg/know_more.svg"
                alt="Know more"
                className="h-[52px] w-auto md:h-[68px]"
                width={136}
                height={68}
              />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[640px] lg:mx-0 lg:max-w-none">
            <div className="relative overflow-hidden rounded-[28px] shadow-lg shadow-black/10">
              <img
                src="/images/characters_group.png"
                alt="Cow Paradise characters on the beach"
                className="block w-full object-cover"
              />
            </div>

            <div className="relative mt-4 w-full max-w-md rounded-2xl border border-white/40 bg-[#e8f9fe]/95 p-4 shadow-md backdrop-blur-sm sm:absolute sm:bottom-6 sm:left-6 sm:mt-0 sm:max-w-[280px]">
              <ul className="space-y-3">
                {BULLETS.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <img
                      src="/svg/pen_icon.svg"
                      alt=""
                      className="mt-0.5 h-7 w-7 shrink-0"
                      width={28}
                      height={28}
                    />
                    <span className="text-sm font-bold leading-snug text-neutral-900 md:text-base">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
