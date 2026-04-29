import { QUICK_LEARNING_STORIES } from "../../data/stories";

const FAMILY_MEMBERS = [
  {
    id: "character-1",
    name: "Little Jack",
    image: "/images/character_1.png",
    cardBg: "bg-[#1ecdd2]",
    glowBg: "bg-[#b7ef97]",
    description: "Curious, kind, and always ready for a new adventure.",
  },
  {
    id: "character-2",
    name: "Tina",
    image: "/images/character_2.png",
    cardBg: "bg-[#b7ef97]",
    glowBg: "bg-[#d8a5df]",
    description:
      "Brings creativity to the herd and loves learning through play.",
  },
  {
    id: "character-3",
    name: "Milo",
    image: "/images/character_3.png",
    cardBg: "bg-[#d8a5df]",
    glowBg: "bg-[#1ecdd2]",
    description: "Brave heart, big smiles, and a knack for teamwork.",
  },
];

function PlayBadge({ duration }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-black/75 px-3 py-1.5 text-xs font-medium text-white">
      <img src="/svg/play_video.svg" alt="" aria-hidden className="h-3 w-3" />
      <span>{duration}</span>
    </div>
  );
}

function StoryPreviewCard({ story }) {
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
];

const LEARNING_WITH_FAMILY_CARDS = [
  {
    id: "fun-characters",
    icon: "/svg/edu_benefit_1.svg",
    title: "Fun Characters",
    description:
      "Moo Family characters make learning feel like playing with friends.",
  },
  {
    id: "interactive-games",
    icon: "/svg/edu_benefit_2.svg",
    title: "Interactive Games",
    description: "Games turn practice into fun challenges children enjoy.",
  },
  {
    id: "playful-stories",
    icon: "/svg/edu_benefit_3.svg",
    title: "Playful Stories",
    description:
      "Adventures help children understand lessons through imagination.",
  },
  {
    id: "creative-activities",
    icon: "/svg/edu_benefit_4.svg",
    title: "Creative Activities",
    description:
      "Songs, puzzles, and activities spark curiosity and creativity.",
  },
];

const LEARNING_BENEFITS = [
  {
    id: "stories",
    number: "1.",
    title: "Learning Through Stories",
    description:
      "Adventures with Moo Family characters help children understand values like kindness, courage, and curiosity.",
  },
  {
    id: "feelings",
    number: "2.",
    title: "Understanding Feelings",
    description:
      "Characters help children recognize emotions and learn how to express feelings in healthy ways.",
  },
  {
    id: "discovery",
    number: "3.",
    title: "Curiosity and Discovery",
    description:
      "Questions, exploration, and playful challenges encourage children to learn about the world around them.",
  },
  {
    id: "problem-solving",
    number: "4.",
    title: "Problem Solving Skills",
    description:
      "Fun puzzles and activities help children think critically and find creative solutions.",
  },
  {
    id: "teamwork",
    number: "5.",
    title: "Teamwork and Friendship",
    description:
      "Stories and games show how cooperation, kindness, and helping others make friendships stronger.",
  },
  {
    id: "life-skills",
    number: "6.",
    title: "Everyday Life Skills",
    description:
      "Simple lessons teach responsibility, good habits, and positive behaviors children can use every day.",
  },
];

const GAME_CATEGORIES = [
  "Alphabet",
  "Words",
  "Spelling",
  "Reading",
  "Writing",
  "Numbers",
  "Brain Games",
  "Creativity",
];

const EDUCATIONAL_GAME_CARDS = [
  {
    id: "abc-puzzles",
    title: "ABC Puzzles",
    description: "Learn to identify initial letter sounds in words.",
    bg: "bg-[#19D5D7]",
    icon: "/svg/138524.svg",
  },
  {
    id: "alphabet-adventures",
    title: "Alphabet adventures",
    description: "Learn to identify the letters that form words.",
    bg: "bg-[#FF947E]",
    icon: "/svg/138524.svg",
  },
  {
    id: "candy-words",
    title: "Candy words",
    description: "Combine letters to form words and learn new vocabulary.",
    bg: "bg-[#FFE9C5]",
    icon: "/svg/138524.svg",
  },
  {
    id: "letters-seek-find",
    title: "Letters seek & find",
    description:
      "Build letter recognition skills and strengthen alphabet memory.",
    bg: "bg-[#37E8BA]",
    icon: "/svg/138524.svg",
  },
];

const LEARNING_IMPACT_STATS = [
  { id: "activities", value: "120+", label: "Learning Activities" },
  { id: "characters", value: "15+", label: "Moo Family Characters" },
  { id: "categories", value: "8", label: "Learning Categories" },
  { id: "skills", value: "5 Core", label: "Skills Developed" },
];

const SMART_LEARNING_POINTS = [
  "Build confidence with playful learning challenges",
  "Improve memory and concentration through mini games",
  "Develop teamwork and social skills with story-led tasks",
  "Practice language and problem solving every day",
];

export function MooFamilyPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-ink">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#FFE9C5]">
        {/* Bottom curve transition into the next white section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="h-[90px] w-full"
            aria-hidden
          >
            <path
              d="M0 60C180 95 360 95 540 60C720 25 900 25 1080 60C1260 95 1350 95 1440 60V120H0V60Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1860px] px-2 pb-16 pt-24 sm:px-8 md:pl-12 md:pr-0 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <h1 className="font-display text-[64px] font-bold leading-[1.05] tracking-tight text-brand-cyan md:text-7xl">
                Meet the Moo Family
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-neutral-800 md:text-[22px] md:leading-[1.6]">
                Friendly characters who make learning fun through stories,
                games, songs, and adventures. Join Little Jack and his friends
                as they explore letters, numbers, emotions, and life lessons
                together.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#family-characters"
                  className="transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
                >
                  <img
                    src="/svg/meet-characters-button.svg"
                    alt="Meet characters"
                    className="h-[52px] w-auto md:h-[68px]"
                    width={136}
                    height={68}
                  />
                </a>
                <a
                  href="#family-stories"
                  className="transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
                >
                  <img
                    src="/svg/start-learning-button.svg"
                    alt="Start learning"
                    className="h-[52px] w-auto md:h-[68px]"
                    width={160}
                    height={68}
                  />
                </a>
              </div>
            </div>

            {/* Character collage */}
            <div className="relative ml-auto h-[480px] w-full max-w-[900px] overflow-hidden">
              {/* Front (blue) */}
              <div className="absolute left-[8%] top-1/2 z-30 h-[clamp(360px,46vw,470px)] w-[clamp(260px,34vw,380px)] -translate-y-1/2 overflow-hidden rounded-[48px] bg-[#1ecdd2]">
                <img
                  src="/images/character_1.png"
                  alt="Featured character 1"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              {/* Middle (green) */}
              <div className="absolute left-[45%] top-1/2 z-20 h-[clamp(310px,40vw,390px)] w-[clamp(210px,25vw,270px)] -translate-y-1/2 overflow-hidden rounded-[40px] bg-[#b7ef97]">
                <img
                  src="/images/character_2.png"
                  alt="Featured character 2"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              {/* Back (purple) */}
              <div className="absolute left-[75%] top-1/2 z-10 h-[clamp(250px,33vw,320px)] w-[clamp(160px,20vw,210px)] -translate-y-1/2 overflow-hidden rounded-[36px] bg-[#d8a5df]">
                <img
                  src="/images/character_3.png"
                  alt="Featured character 3"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-8 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1860px]">
          <div className="text-center">
            <h2 className="font-display text-5xl font-bold leading-[0.95] text-brand-cyan md:text-7xl">
              Learning with the Moo Family
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-lg leading-relaxed text-neutral-700 md:text-[22px] md:leading-[1.55]">
              Run through colorful environments filled with movement and
              surprises.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3 px-10">
            {LEARNING_BENEFITS.map((benefit) => (
              <article
                key={benefit.id}
                className="grid grid-cols-[auto_1fr] gap-4"
              >
                <span className="font-display text-5xl font-bold leading-none text-brand-cyan md:text-6xl">
                  {benefit.number}
                </span>
                <div>
                  <h3 className="font-display text-[32px] leading-[1.05] text-black font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-7 text-black">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Browse Moo Family Stories */}
      <section>
        <div className="relative overflow-hidden rounded-[48px] bg-[#fff6e5] px-7 py-14 text-left sm:px-14 sm:py-16 lg:px-20 lg:py-20">
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
            <div className="min-w-[850px]">
              <h3 className="font-display text-[89px] font-bold leading-[0.92] tracking-tight text-brand-cyan">
                Meet the Friends Who
                <br />
                Make Learning Fun
              </h3>
              <p className="mt-7 max-w-xl text-[25px] leading-relaxed text-neutral-800">
                Each Moo Family character brings unique personality, lessons,
                and adventures that help children learn while playing.
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
              <div className="absolute right-56 top-1/2 z-20 h-[350px] w-[240px] -translate-y-1/2 overflow-hidden rounded-[32px] bg-[#b7ef97] sm:right-32 sm:h-[410px] sm:w-[290px]">
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
      </section>

      {/* Learning with the Moo Family */}
      <section className="px-4 py-14 sm:px-8 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1860px]">
          <div className="text-center">
            <h2 className="font-display text-5xl font-bold leading-[0.95] text-[#2f2f2f] md:text-7xl">
              Why Kids Love Learning with{" "}
              <span className="text-brand-cyan">Moo Family</span>
            </h2>
            <p className="mx-auto mt-4 text-lg leading-relaxed text-neutral-700 md:text-[25px]">
              Friendly characters, playful stories, and fun challenges turn
              learning into an exciting adventure for kids.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-14">
            <div className="space-y-10 flex flex-col items-end">
              {[
                LEARNING_WITH_FAMILY_CARDS[0],
                LEARNING_WITH_FAMILY_CARDS[2],
              ].map((item) => (
                <article key={item.id} className="max-w-[340px] text-right">
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden
                    className="mx-auto h-11 w-11 object-contain float-right"
                  />
                  <div className="float-left">
                    <h3 className="mt-3 font-display text-[32px] font-semibold leading-[1.02] text-[#242446]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[20px] leading-7 text-[#585a68] md:text-[18px] md:leading-[1.35]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-full border-4 border-[#e7e7e7] shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:max-w-[360px] lg:max-w-[380px]">
              <img
                src="/images/family.png"
                alt="Parent and child learning together"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-10 flex flex-col items-start">
              {[
                LEARNING_WITH_FAMILY_CARDS[1],
                LEARNING_WITH_FAMILY_CARDS[3],
              ].map((item) => (
                <article
                  key={item.id}
                  className="mx-auto max-w-[340px] text-center lg:mx-0"
                >
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden
                    className="mx-auto h-11 w-11 object-contain float-left"
                  />
                  <div className="float-left">
                    <h3 className="mt-3 font-display text-[34px] font-semibold leading-[1.02] text-[#242446] md:text-[40px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-[#585a68] md:text-[18px] md:leading-[1.35]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Variety of Educational Games */}
      <section className="relative overflow-hidden bg-[#D7F6FF] px-4 py-14 sm:px-8 md:px-12 md:py-20">
        <img
          src="/svg/Cloud.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-0 top-8 w-[170px] opacity-90 md:w-[220px]"
        />
        <img
          src="/svg/Cloud.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-0 top-4 w-[170px] opacity-90 md:w-[240px] rotate-180"
        />

        <div className="relative mx-auto max-w-[1860px]">
          <div className="text-center">
            <h2 className="font-display text-[89px] font-bold leading-[0.95] text-brand-cyan">
              Variety of Educational Games
            </h2>
            <p className="mx-auto mt-4 max-w-6xl leading-relaxed text-[#393939] text-[25px] md:leading-[1.45]">
              Explore a wide range of games designed to help children learn
              letters, numbers, language, and thinking skills while having fun.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {GAME_CATEGORIES.map((category, idx) => (
              <button
                key={category}
                type="button"
                className={`rounded-[10px] px-5 py-2.5 font-display text-[34px] font-semibold leading-none transition ${
                  idx === 0
                    ? "bg-brand-cyan text-white"
                    : "bg-white/90 text-brand-cyan hover:brightness-95"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-16 mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {EDUCATIONAL_GAME_CARDS.map((card, idx) => (
              <article
                key={card.id}
                className={`relative rounded-[18px] p-4 shadow-sm ring-1 ring-black/5 ${
                  card.bg
                } h-[220px] ${idx % 2 === 0 ? "mt-0" : "mt-10"}`}
              >
                <div className="relative z-10 max-w-[72%]">
                  <h3 className="font-display text-[28px] font-semibold leading-[1.02] text-[#100F06]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-5 text-[#2b2b2b]">
                    {card.description}
                  </p>
                  <button
                    type="button"
                    className="mt-10 inline-flex transition hover:opacity-90 cursor-pointer bottom-0"
                  >
                    <img
                      src="/svg/play-button.svg"
                      alt="Play"
                      className="h-15 w-auto"
                    />
                  </button>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute right-[-25px] top-[70px] -translate-y-1/2 font-display text-[74px] font-bold leading-[0.85] text-brand-cyan/90"
                >
                  <img
                    src={card.icon}
                    alt="Play"
                    className="h-30 w-30 object-contain"
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-8">
            <button
              type="button"
              aria-label="Previous games"
              className="transition hover:opacity-90"
            >
              <img
                src="/svg/prev-button.svg"
                alt="Previous"
                className="h-14 w-auto"
              />
            </button>
            <div className="flex items-center gap-2.5" aria-hidden>
              <span className="h-3 w-3 rounded-full bg-brand-cyan" />
              <span className="h-3 w-3 rounded-full bg-white/90" />
              <span className="h-3 w-3 rounded-full bg-white/90" />
            </div>
            <button
              type="button"
              aria-label="Next games"
              className="transition hover:opacity-90"
            >
              <img
                src="/svg/next-button.svg"
                alt="Next"
                className="h-14 w-auto"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Learning That Makes a Difference */}
      <section className="relative overflow-hidden bg-[#ffd85b] px-4 pb-16 pt-14 sm:px-8 md:px-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-[1860px]">
          <div className="text-center">
            <h2 className="font-display text-[89px] font-bold leading-[0.95] text-brand-cyan">
              Learning That Makes a Difference
            </h2>
            <p className="mx-auto mt-4 max-w-6xl text-[25px] leading-relaxed text-[#393939]">
              Explore a wide range of games designed to help children learn
              letters, numbers, language, and thinking skills while having fun.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <img
              src="/images/Ornament.png"
              alt="Learning moments collage"
              className="h-auto w-full max-w-[760px] object-contain"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {LEARNING_IMPACT_STATS.map((item) => (
              <article key={item.id} className="text-center">
                <p className="font-display text-[56px] font-bold leading-none text-black">
                  {item.value}
                </p>
                <p className="mx-auto mt-3 inline-flex rounded-[14px] bg-brand-cyan px-2.5 py-2.5 font-display text-[34px] leading-none text-white">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 1440 110"
            preserveAspectRatio="none"
            className="h-[70px] w-full md:h-[90px]"
            aria-hidden
          >
            <path
              d="M0 78C210 40 430 24 720 24C1010 24 1230 40 1440 78V110H0V78Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* Smart Learning with Moo Family */}
      <section className="px-4 py-14 sm:px-8 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1860px]">
          <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-14">
            <div className="mx-auto w-full max-w-[500px]">
              <div className="overflow-hidden rounded-[32px]">
                <img
                  src="/images/smart-learning-kids.png"
                  alt="Kids enjoying smart learning activities"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="max-w-[600px]">
              <h2 className="font-display text-5xl font-bold leading-[0.95] text-brand-cyan md:text-7xl mb-10">
                Smart Learning
                <br />
                with Moo Family
              </h2>
              <span className="text-[24px] text-black">
                Stories, games, and characters that help children understand
                emotions, teamwork, and problem solving.
              </span>
              <div className="mt-10 space-y-4">
                {SMART_LEARNING_POINTS.map((point) => (
                  //vertical line

                  <div
                    key={point}
                    className="flex items-center justify-between border-b border-black/20 pb-3"
                  >
                    <p className="pr-4 text-base leading-relaxed md:text-[20px]">
                      {point}
                    </p>
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-cyan text-sm font-bold text-white">
                      v
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
