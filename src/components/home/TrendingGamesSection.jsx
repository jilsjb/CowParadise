import { useCallback, useEffect, useRef, useState } from "react";
import { TRENDING_GAMES } from "../../data/trendingGames";
import { TrendingGameCard } from "../games/TrendingGameCard";

function ArrowIcon({ dir }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="text-neutral-900"
    >
      {dir === "left" ? (
        <path
          d="M15 18l-6-6 6-6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M9 18l6-6-6-6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export function TrendingGamesSection() {
  const scrollerRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanPrev(scrollLeft > 2);
    setCanNext(scrollLeft < scrollWidth - clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [updateArrows]);

  const scrollByDir = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-game-card]");
    const delta = card
      ? card.getBoundingClientRect().width + 16
      : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  return (
    <section
      id="games"
      className="scroll-mt-24 bg-white px-4 py-16 sm:px-8 md:px-12"
    >
      <div className="mx-auto max-w-[1860px] text-center">
        <h2 className="font-display text-5xl font-bold leading-none tracking-wide text-brand-cyan drop-shadow-sm md:text-6xl lg:text-[74px] lg:leading-[68px]">
          Explore Trending Games
        </h2>
        <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-neutral-900 md:text-[26px] md:leading-[31px]">
          Teaming up with industry leaders to build the ultimate gaming
          universe.
        </p>

        <div className="relative mt-12 md:px-12 lg:px-14">
          <button
            type="button"
            aria-label="Previous games"
            disabled={!canPrev}
            onClick={() => scrollByDir(-1)}
            className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center text-neutral-900 shadow-md transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-40 md:flex"
          >
            <img
              src="/svg/left_arrow_slidder.svg"
              alt="Previous games"
              className="h-12 w-auto object-contain"
            />
          </button>
          <button
            type="button"
            aria-label="Next games"
            disabled={!canNext}
            onClick={() => scrollByDir(1)}
            className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center text-neutral-900 shadow-md transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-40 md:flex"
          >
            <img
              src="/svg/right_arrow_slidder.svg"
              alt="Next games"
              className="h-12 w-auto object-contain"
            />
          </button>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-16 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-16 [&::-webkit-scrollbar]:hidden"
          >
            {TRENDING_GAMES.map((game) => (
              <TrendingGameCard
                key={game.id}
                game={game}
                className="w-[85vw] max-w-[420px] shrink-0 snap-center"
              />
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Previous"
              disabled={!canPrev}
              onClick={() => scrollByDir(-1)}
              className="flex h-11 w-11 items-center justify-center rounded bg-brand-cyan text-neutral-900 shadow disabled:opacity-40"
            >
              <ArrowIcon dir="left" />
            </button>
            <button
              type="button"
              aria-label="Next"
              disabled={!canNext}
              onClick={() => scrollByDir(1)}
              className="flex h-11 w-11 items-center justify-center rounded bg-brand-cyan text-neutral-900 shadow disabled:opacity-40"
            >
              <ArrowIcon dir="right" />
            </button>
          </div>
        </div>

        <div className="relative mt-24 overflow-hidden rounded-[48px] bg-[#fff6e5] px-7 py-14 text-left sm:px-14 sm:py-16 lg:px-20 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <img
              src="/images/cow_run.png"
              alt=""
              className="absolute left-6 top-6 h-24 w-auto sm:h-28"
            />
            <img
              src="/images/flying_moo.png"
              alt=""
              className="absolute left-1/4 top-11 h-14 w-auto sm:h-16"
            />
            <img
              src="/images/moo_rash.png"
              alt=""
              className="absolute right-1/3 top-6 h-14 w-auto sm:h-16"
            />
            <img
              src="/images/palm_image.png"
              alt=""
              className="absolute right-20 top-4 h-24 w-24 sm:h-28 sm:w-28"
            />
            <img
              src="/images/palm_image.png"
              alt=""
              className="absolute bottom-8 left-6 h-24 w-24 sm:h-28 sm:w-28"
            />
            <img
              src="/images/flying_moo.png"
              alt=""
              className="absolute bottom-10 left-1/4 h-14 w-auto sm:h-16"
            />
            <img
              src="/images/moo_rash.png"
              alt=""
              className="absolute bottom-7 right-1/3 h-14 w-auto sm:h-16"
            />
            <img
              src="/images/cow_run.png"
              alt=""
              className="absolute bottom-8 right-6 h-24 w-auto sm:h-28"
            />
          </div>

          <div
            id="moo-family"
            className="relative z-10 grid scroll-mt-28 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20"
          >
            <div>
              <h3 className="font-display text-7xl font-bold leading-[0.92] tracking-tight text-brand-cyan sm:text-8xl">
                Featured
                <br />
                Characters
              </h3>
              <p className="mt-7 max-w-xl text-2xl leading-relaxed text-neutral-800">
                Aliquam erat volutpat. Donec a justo eu arcu congue ultricies.
                Vivamus nec erat ac turpis interdum viverra.
              </p>
              <a
                href="#stories"
                className="mt-12 inline-block transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
              >
                <img
                  src="/svg/browse_characters.svg"
                  alt="Browse Characters"
                  className="h-[52px] w-auto md:h-[68px]"
                  width={136}
                  height={68}
                />
              </a>
            </div>

            <div className="relative mx-auto h-[420px] w-full max-w-[920px] sm:h-[500px] lg:-translate-x-10">
              <div className="absolute right-0 top-1/2 z-10 h-[280px] w-[190px] -translate-y-1/2 overflow-hidden rounded-[32px] bg-[#d8a5df] sm:h-[340px] sm:w-[230px]">
                <img
                  src="/images/character_3.png"
                  alt="Featured character 3"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute right-38 top-1/2 z-20 h-[350px] w-[240px] -translate-y-1/2 overflow-hidden rounded-[32px] bg-[#b7ef97] sm:right-52 sm:h-[410px] sm:w-[290px]">
                <img
                  src="/images/character_2.png"
                  alt="Featured character 2"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute right-26 top-1/2 z-30 h-[430px] w-[300px] -translate-y-1/2 overflow-hidden rounded-[40px] bg-[#1ecdd2] shadow-xl sm:right-34 sm:h-[510px] sm:w-[360px]">
                <img
                  src="/images/character_1.png"
                  alt="Featured character 1"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
