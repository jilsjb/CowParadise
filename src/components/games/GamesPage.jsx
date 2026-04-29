import { TRENDING_GAMES } from "../../data/trendingGames";
import { TrendingGameCard } from "./TrendingGameCard";

export function GamesPage() {
  const heroGame = TRENDING_GAMES[0];

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      {/* Hero Section — layout: copy + logo + CTAs left; tropical art reads on the right */}
      <section className="relative isolate flex min-h-[min(72vh,820px)] w-full items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/games_background.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1860px] px-4 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 md:px-12 md:pb-24 lg:px-14">
          <div className="max-w-xl text-left">
            <h1 className="font-display text-[2rem] font-bold leading-[1.1] tracking-wide text-brand-cyan drop-shadow-[0_1px_0_rgba(255,255,255,0.95),0_4px_24px_rgba(0,0,0,0.35)] sm:text-4xl md:text-[2.75rem] md:leading-[1.05]">
              Recently Released
            </h1>

            <div className="mt-5 sm:mt-6">
              <img
                src="/svg/cow_run.svg"
                alt="Cow Run"
                className="h-[4.5rem] w-auto max-w-[min(100%,340px)] object-contain object-left drop-shadow-[0_8px_28px_rgba(0,0,0,0.35)] sm:h-28 md:h-32 md:max-w-[380px]"
              />
            </div>

            <p className="mt-6 max-w-[26rem] rounded-2xl p-4 font-sans text-base font-normal leading-relaxed text-neutral-800 sm:mt-7 sm:p-5 sm:text-lg md:max-w-lg md:text-[1.125rem] md:leading-relaxed">
              {heroGame.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <a
                href="#all-games"
                className="inline-block transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <img
                  src="/svg/view_details.svg"
                  alt="View Details"
                  className="h-10 w-auto object-contain sm:h-11 md:h-12"
                  width={160}
                  height={48}
                />
              </a>
              <a
                href="#all-games"
                className="inline-block transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <img
                  src="/svg/play_now.svg"
                  alt="Play Now"
                  className="h-10 w-auto object-contain sm:h-11 md:h-12"
                  width={160}
                  height={48}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="all-games"
        className="scroll-mt-24 px-4 py-16 sm:px-8 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-[1860px]">
          <h2 className="font-display text-5xl font-bold leading-none tracking-wide text-brand-cyan drop-shadow-sm md:text-7xl md:leading-[90px]">
            All Games
          </h2>

          <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-12 md:gap-6">
            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-[10px] bg-[#ffe9c5] px-5 py-2.5 font-display text-xl font-semibold text-neutral-900 shadow-sm transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan md:text-[32px] md:leading-[26px]"
            >
              Platform
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-neutral-900"
                aria-hidden
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-[10px] bg-[#ffe9c5] px-5 py-2.5 font-display text-xl font-semibold text-neutral-900 shadow-sm transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan md:text-[32px] md:leading-[26px]"
            >
              Genre
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-neutral-900"
                aria-hidden
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* Status Filter */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-[10px] bg-[#ffe9c5] px-5 py-2.5 font-display text-xl font-semibold text-neutral-900 shadow-sm transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan md:text-[32px] md:leading-[26px]"
              >
                Status
              </button>
            </div>
            {/* No of Players Filter */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-[10px] bg-[#ffe9c5] px-5 py-2.5 font-display text-xl font-semibold text-neutral-900 shadow-sm transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan md:text-[32px] md:leading-[26px]"
              >
                No of Players
              </button>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-12 xl:gap-16">
            {TRENDING_GAMES.map((game) => (
              <TrendingGameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
