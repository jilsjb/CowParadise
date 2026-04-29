import { PLATFORM_ICONS } from "../../data/trendingGames";

export function TrendingGameCard({ game, className = "" }) {
  return (
    <article
      data-game-card
      className={`group relative w-full max-w-[420px] overflow-hidden rounded-[28px] shadow-lg ${className}`}
    >
      <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-200">
        <div className="h-full w-full transition-transform duration-500 ease-out will-change-transform group-hover:scale-110">
          <img
            src={game.image}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"
        aria-hidden
      />

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col p-4 text-left sm:p-5">
        <p className="font-display text-lg font-bold tracking-wide text-white drop-shadow md:text-xl">
          COW RUN
        </p>
        <p className="mt-2 text-xs leading-snug text-white/95 sm:text-sm">
          {game.description}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {PLATFORM_ICONS.map((icon) => (
            <img
              key={icon.src}
              src={icon.src}
              alt={icon.label}
              className="h-7 w-auto object-contain opacity-95 sm:h-8"
            />
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 pointer-events-none">
          <img
            src="/svg/view_details.svg"
            alt="View Details"
            className="h-8 w-auto object-contain"
          />
          <img
            src="/svg/play_now.svg"
            alt="Play Now"
            className="h-8 w-auto object-contain"
          />
        </div>
      </div>
    </article>
  );
}
