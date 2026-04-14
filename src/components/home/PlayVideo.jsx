export function PlayVideo() {
  return (
    <section id="play-video" className="w-full bg-white py-0">
      <div className="relative w-full">
        <img
          src="/images/play_video_section.png"
          alt="Tropical island scene"
          className="block h-auto w-full max-w-none"
        />

        <div className="absolute inset-0 flex items-start justify-center px-8 pt-20 sm:px-16 md:pt-24 lg:px-[clamp(1.5rem,12vw,18%)]">
          <div className="max-w-[800px] text-justify">
            <h3 className="font-display text-3xl font-bold uppercase leading-tight text-brand-cyan md:text-4xl">
              Where Adventure Comes To Life
            </h3>
            <p className="mt-4 text-base leading-relaxed text-neutral-800 md:text-[1.35rem] md:leading-[1.45]">
              In Cow Paradise, stories unfold across tropical islands, hidden
              treasures, and vibrant digital realms. It&apos;s a world filled
              with charm, creativity, and opportunity - where players discover
              lovable characters, complete exciting challenges, and collect
              unique items that shape their identity. More than just a game, Cow
              Paradise is a universe built to grow with its community.
            </p>
          </div>

          <a
            href="#play-video"
            className="mt-[18rem] hidden shrink-0 transition hover:scale-105 hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan lg:inline-block"
          >
            <img
              src="/svg/play_video.svg"
              alt="Play video"
              className="h-[96px] w-auto xl:h-[120px]"
              width={159}
              height={159}
            />
          </a>
        </div>

        <div className="absolute bottom-6 right-6 lg:hidden">
          <a
            href="#play-video"
            className="inline-block transition hover:scale-105 hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
          >
            <img
              src="/svg/play_video.svg"
              alt="Play video"
              className="h-[74px] w-auto sm:h-[88px]"
              width={159}
              height={159}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
