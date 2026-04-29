import { useEffect, useState } from "react";
import { FigmaHeroBackground } from "./FigmaMediaVideo";
import { HOME_MEDIA } from "../../data/home-assets";

const SLIDES = [
  {
    id: "slide-1",
    kicker: "Welcome to Cow Paradise",
    title: "One World. Many Ways to Play.",
  },
  {
    id: "slide-2",
    kicker: "Welcome to Cow Paradise",
    title: "Play the Adventure. Earn the Rewards.",
  },
  {
    id: "slide-3",
    kicker: "Welcome to Cow Paradise",
    title: "Where Games Become a Universe",
  },
];

const INTERVAL_MS = 6000;

export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[min(85vh,920px)] w-full overflow-hidden bg-neutral-900"
    >
      <div className="absolute inset-0">
        <FigmaHeroBackground
          poster={HOME_MEDIA.hero.poster}
          videoSrc={HOME_MEDIA.hero.video}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/35"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-[min(85vh,920px)] flex-col">
        <div className="flex flex-1 flex-col justify-center px-4 pb-16 pt-8 sm:px-8 md:px-12 lg:px-16">
          <div className="mx-auto w-full max-w-[1028px] text-left">
            <div
              className="relative min-h-[min(32vh,280px)] md:min-h-[min(36vh,340px)]"
              role="region"
              aria-roledescription="carousel"
              aria-label="Hero highlights"
            >
              {SLIDES.map((slide, i) => (
                <div
                  id={slide.id}
                  key={slide.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${SLIDES.length}`}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-700 ease-out ${
                    i === active
                      ? "z-10 opacity-100"
                      : "z-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="font-sans text-3xl font-light leading-tight text-brand-gold drop-shadow-md md:text-4xl lg:text-[2rem] lg:leading-[1.2]">
                    {slide.kicker}
                  </p>
                  <h2 className="hero-slide-title mt-4 max-w-4xl font-display text-[clamp(1.75rem,5.5vw,3.5rem)] font-bold leading-[1.08] tracking-tight md:mt-5">
                    {slide.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
