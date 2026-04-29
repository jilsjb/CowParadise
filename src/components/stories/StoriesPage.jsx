import { useEffect, useState } from "react";
import {
  MOO_SHORTS,
  QUICK_LEARNING_STORIES,
  STORY_COLLECTIONS,
} from "../../data/stories";

function PlayBadge({ duration }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-black/75 px-3 py-1.5 text-xs font-medium text-white">
      <img src="/svg/play_video.svg" alt="" aria-hidden className="h-3 w-3" />
      <span>{duration}</span>
    </div>
  );
}

function StoryCard({ story }) {
  return (
    <article className="w-[85vw] max-w-[352px] shrink-0 snap-center">
      <div className="relative overflow-hidden rounded-[22px]">
        <img
          src={story.image}
          alt={story.title}
          className="h-[220px] w-full object-cover md:h-[236px]"
        />
        <div className="absolute inset-x-3 top-3 flex justify-between">
          <PlayBadge duration={story.duration} />
        </div>
      </div>
      <h3 className="mt-4 font-display text-[30px] leading-[1.06] text-[#06c7f2]">
        {story.title}
      </h3>
      {story.description ? (
        <p className="mt-2 text-base leading-7 text-neutral-700">
          {story.description}
        </p>
      ) : null}
    </article>
  );
}

function ShortCard({ story }) {
  return (
    <article className="w-[50vw] max-w-[200px] shrink-0 snap-center">
      <div className="relative overflow-hidden rounded-[18px]">
        <img
          src={story.image}
          alt={story.title}
          className="h-[300px] w-full object-cover"
        />
        <div className="absolute inset-x-3 top-3 flex justify-between">
          <PlayBadge duration={story.duration} />
        </div>
      </div>
      <h3 className="mt-3 font-display text-[18px] font-bold leading-tight text-[#06c7f2]">
        {story.title}
      </h3>
    </article>
  );
}

const EDUCATIONAL_BENEFITS = [
  {
    id: "phonics-awareness",
    icon: "/svg/edu_benefit_1.svg",
    text: "Strengthens early phonics and letter-sound awareness",
  },
  {
    id: "independent-thinking",
    icon: "/svg/edu_benefit_2.svg",
    text: "Encourages independent thinking and problem-solving",
  },
  {
    id: "focus-recognition",
    icon: "/svg/edu_benefit_3.svg",
    text: "Improves focus and visual recognition",
  },
  {
    id: "word-blending",
    icon: "/svg/edu_benefit_4.svg",
    text: "Prepares children for word blending and reading",
  },
  {
    id: "vocabulary-building",
    icon: "/svg/edu_benefit_1.svg",
    text: "Builds vocabulary through image and word pairing",
  },
  {
    id: "multi-learning-styles",
    icon: "/svg/edu_benefit_2.svg",
    text: "Supports multiple learning styles for deeper engagement",
  },
];

export function StoriesPage() {
  const STORY_GALLERY = [
    {
      id: "gallery-1",
      title: "Helping a Friend",
      description: "Lulu shows how kindness helps everyone feel safe.",
      image: "/images/trending_game_1.png",
    },
    {
      id: "gallery-2",
      title: "Bedtime Smiles",
      description: "A calm bedtime routine turns into a playful adventure.",
      image: "/images/trending_game_2.png",
    },
    {
      id: "gallery-3",
      title: "Curious Explorer",
      description: "Little Jack learns by asking questions with friends.",
      image: "/images/trending_game_3.png",
    },
  ];
  const [activeCollection, setActiveCollection] = useState(
    STORY_COLLECTIONS[0]
  );
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isAutoScrollOn, setIsAutoScrollOn] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const activeStory = STORY_GALLERY[galleryIndex];

  const goNext = () => {
    setGalleryIndex((prev) => (prev + 1) % STORY_GALLERY.length);
  };

  const goPrev = () => {
    setGalleryIndex((prev) =>
      prev === 0 ? STORY_GALLERY.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!isAutoScrollOn) return undefined;
    const timer = window.setInterval(goNext, 3500);
    return () => window.clearInterval(timer);
  }, [isAutoScrollOn]);

  return (
    <main className="min-h-screen bg-white font-sans text-[#222443]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/games_background.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/60" aria-hidden />
        </div>

        <div className="relative z-10 mx-auto max-w-[1860px] px-4 pb-20 pt-24 sm:px-8 md:px-12 lg:px-14 lg:pt-28">
          <div className="max-w-[820px]">
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-brand-cyan md:text-7xl">
              Stories from the Moo Family World
            </h1>
            <p className="mt-5 max-w-[760px] text-lg leading-relaxed text-[#222443]/80 md:text-[22px] md:leading-[1.55]">
              Every story sparks laughter, friendship, and a little bit of
              magic. Explore adventures with Little Jack and his friends.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:px-12">
        <div className="mx-auto max-w-[1860px]">
          <div className="text-center">
            <h2 className="font-display text-5xl font-bold leading-[0.95] text-brand-cyan md:text-7xl">
              Quick Learning Stories
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-lg text-neutral-700 md:text-[25px]">
              Short 2-minute adventures that teach simple life lessons.
            </p>
          </div>

          <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:mt-12 md:gap-8 [&::-webkit-scrollbar]:hidden">
            {QUICK_LEARNING_STORIES.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-[1860px] bg-[#D7F6FF] px-6 py-10 sm:px-10 md:px-14 md:py-12">
          <div className="text-center">
            <h2 className="font-display text-5xl font-bold leading-[0.95] text-brand-cyan md:text-7xl">
              Moo Shorts
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-700 md:text-[22px]">
              Funny and quick moments from Moo Family adventures.
            </p>
          </div>

          <div className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:mt-10 md:gap-6 [&::-webkit-scrollbar]:hidden justify-center">
            {MOO_SHORTS.map((story) => (
              <ShortCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-6 pt-8">
        <div className="mx-auto max-w-[1860px] overflow-hidden">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="block h-12 w-full md:h-14"
            aria-hidden
          >
            <path
              d="M0 18C360 66 1080 66 1440 18V80H0V18Z"
              fill="rgb(255 173 0 / 0.4)"
            />
          </svg>
          <div className="bg-[#FFAD00]/40 px-5 py-12 sm:px-10 md:px-14 md:py-14">
            <div className="text-center">
              <h2 className="font-display text-5xl font-bold leading-none text-brand-cyan md:text-7xl">
                Educational benefits
              </h2>
              <p className="mx-auto mt-3 max-w-4xl text-base text-[#222443]/65 md:text-[22px]">
                Run through colorful environments filled with movement and
                surprises.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {EDUCATIONAL_BENEFITS.map((benefit) => (
                <article
                  key={benefit.id}
                  className="flex min-h-[100px] items-center gap-4 rounded-2xl bg-white px-5 py-4"
                >
                  <img
                    src={benefit.icon}
                    alt=""
                    aria-hidden
                    className="h-10 w-10 shrink-0 object-contain"
                  />
                  <p className="text-lg font-medium leading-tight text-[#3b3b3b]">
                    {benefit.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="block h-12 w-full md:h-14"
            aria-hidden
          >
            <path
              d="M0 62C360 14 1080 14 1440 62V0H0V62Z"
              fill="rgb(255 173 0 / 0.4)"
            />
          </svg>
        </div>
      </section>

      <section className="pt-4">
        <div className="mx-auto max-w-[1860px] overflow-hidden">
          <div className="px-4 pb-12 pt-8 sm:px-8 md:px-12 md:pb-16">
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="font-display text-6xl font-bold text-brand-cyan md:text-7xl">
                Story Collections
              </h2>
              <p className="mt-4 text-xl text-[#1f1f1f] md:text-[28px]">
                New Moo Family stories and lessons arrive every week.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-5">
                {STORY_COLLECTIONS.map((collection, idx) => (
                  <button
                    key={collection}
                    type="button"
                    onClick={() => setActiveCollection(collection)}
                    className={`rounded-[10px] px-6 py-2.5 font-display text-[30px] leading-none transition ${
                      activeCollection === collection
                        ? "bg-brand-cyan text-white"
                        : "bg-[#e6e6e6] text-brand-cyan hover:brightness-95"
                    }`}
                  >
                    {collection}
                  </button>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-6 md:mt-14">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous story"
                className="hidden transition hover:opacity-90 md:block"
              >
                <img
                  src="/svg/prev-button.svg"
                  alt="Previous"
                  className="h-14 w-auto"
                />
              </button>

              <article className="mx-auto w-full max-w-[400px] overflow-hidden rounded-[12px] bg-white shadow-sm sm:max-w-[450px]">
                <div className="relative">
                  <img
                    src={activeStory.image}
                    alt={activeStory.title}
                    className="h-[430px] w-full object-cover sm:h-[520px]"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/80 via-white/90 to-transparent px-4 pb-5 pt-12 text-left">
                    <h3 className="font-display font-bold text-[28px] leading-[1.05] text-brand-cyan">
                      {activeStory.title}
                    </h3>
                    <p className="mt-2 text-base leading-6 text-neutral-700">
                      {activeStory.description}
                    </p>
                  </div>
                </div>
              </article>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next story"
                className="hidden transition hover:opacity-90 md:block"
              >
                <img
                  src="/svg/next-button.svg"
                  alt="Next"
                  className="h-14 w-auto"
                />
              </button>
            </div>

            <div className="mx-auto mt-[-80px] flex max-w-6xl items-center justify-between md:justify-end md:gap-10">
              <div className="flex gap-3 md:hidden">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous story"
                  className="transition hover:opacity-90"
                >
                  <img
                    src="/svg/prev-button.svg"
                    alt="Previous"
                    className="h-12 w-auto"
                  />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next story"
                  className="transition hover:opacity-90"
                >
                  <img
                    src="/svg/next-button.svg"
                    alt="Next"
                    className="h-12 w-auto"
                  />
                </button>
              </div>

              <div className="flex items-end gap-6">
                <button
                  type="button"
                  onClick={() => setIsAutoScrollOn((prev) => !prev)}
                  aria-pressed={isAutoScrollOn}
                  className="text-center transition hover:opacity-90"
                >
                  <img
                    src="/svg/auto-scroll-button.svg"
                    alt="Auto Scroll"
                    className={`h-14 w-auto ${
                      isAutoScrollOn ? "" : "opacity-50"
                    }`}
                  />
                  <span className="mt-1 block text-sm font-semibold text-black">
                    Auto Scroll
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsMuted((prev) => !prev)}
                  aria-pressed={isMuted}
                  className="text-center transition hover:opacity-90"
                >
                  <img
                    src="/svg/mute-button.svg"
                    alt="Mute"
                    className={`h-14 w-auto ${isMuted ? "" : "opacity-50"}`}
                  />
                  <span className="mt-1 block text-sm font-semibold text-black">
                    Mute
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* More Adventures Coming Soon */}
      <section>
        <div className="mx-auto max-w-[1860px] overflow-hidden">
          <div className="relative">
            <img
              src="/images/more-adventures-bg.png"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0" aria-hidden />

            <div className="relative z-10 p-8 text-center md:p-12">
              <h2 className="font-display text-[72px] font-bold leading-none text-brand-cyan">
                More Adventures Coming Soon
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-black md:text-xl">
                New Moo Family stories and lessons arrive every week.
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href="#"
                  className="inline-flex transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
                >
                  <img
                    src="/svg/subscribe-for-more-button.svg"
                    alt="Subscribe for new stories"
                    className="h-auto w-[220px] sm:w-[260px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
