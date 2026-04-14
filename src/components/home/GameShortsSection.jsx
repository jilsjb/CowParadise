import { FigmaMediaVideo } from "./FigmaMediaVideo";
import { HOME_MEDIA } from "../../data/home-assets";

export function GameShortsSection() {
  return (
    <section
      id="stories"
      className="scroll-mt-24 rounded-[40px] bg-[#FFEDD3] px-4 py-14 sm:px-8 md:rounded-[40px] md:px-12 md:py-16 mt-20 mr-16 ml-16"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="text-center">
          <h2 className="font-display text-5xl font-bold text-brand-cyan md:text-7xl md:leading-[90px]">
            Game Shorts
          </h2>
          <p className="mx-auto mt-10 max-w-4xl text-[25px] leading-[30px] text-neutral-800">
            Jump into the Moo Family&apos;s world and enjoy tiny adventures full
            of fun and wonder. Short, sweet, and always a little magical!
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-[72px] xl:gap-[100px]">
          {HOME_MEDIA.shorts.map((item, i) => (
            <figure
              key={item.nodeId}
              className={`relative w-full max-w-[420px] overflow-hidden rounded-[40px] border-2 border-brand-cyan bg-black/5 shadow-[0_4px_54px_rgba(255,255,255,0.35)] ${
                i === 1 ? "lg:scale-105 lg:border-8" : "border-2"
              }`}
            >
              <FigmaMediaVideo
                poster={item.poster}
                videoSrc={item.video}
                alt={item.title}
                className="aspect-[363/537] w-full object-cover md:aspect-auto md:min-h-[400px]"
              />
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#stories"
            className="inline-block transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
          >
            <img
              src="/svg/view_more_stories.svg"
              alt="View more stories"
              className="h-[52px] w-auto md:h-[68px]"
              width={234}
              height={68}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
