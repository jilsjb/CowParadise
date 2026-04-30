const JOURNEY_POINTS = [
  {
    title: "From Nepal's Dreams",
    description: "A small idea grew into a playful world where kids learn.",
  },
  {
    title: "First Prototype",
    description: "We built our first stories and mini games for children.",
  },
  {
    title: "Next Step",
    description: "Now we are scaling the Moo Family universe globally.",
  },
];

const IMPACT_STATS = [
  {
    id: "spark",
    year: "2022",
    title: "The Spark",
    description:
      "Three indie developers brainstorming in a coffee shop. Someone joked: 'What if cows had jetpacks?' The rest is history.",
    icon: "/images/light-icon.png",
    accent: "from-[#fff8c8] to-[#fff2a1]",
  },
  {
    id: "game-jam",
    year: "2023",
    title: "Game Jam",
    description:
      "48 hours of non-stop coding, designing, and laughs. The first playable prototype was born with Super Moo as the star.",
    icon: "/images/code-icon.png",
    accent: "from-[#dffbff] to-[#c8eff4]",
  },
  {
    id: "launch",
    year: "2024",
    title: "Launch",
    description:
      "Global release across iOS and Android. 2.5M+ downloads in the first year. The herd keeps growing.",
    icon: "/images/rocket-icon.png",
    accent: "from-[#fff3e3] to-[#ffe5c0]",
  },
  {
    id: "updates",
    year: "2026",
    title: "Updates",
    description:
      "We shipped major updates, new mini games, and expanded story chapters for young learners worldwide.",
    icon: "/images/rocket-icon.png",
    accent: "from-[#fff3e3] to-[#ffe5c0]",
  },
];

const TEAM_MEMBERS = [
  {
    id: "ceo",
    name: "John Paul Morris",
    role: "CEO",
    image: "/images/ceo.png",
    bgColor: "#19D5D7",
  },
  {
    id: "cto",
    name: "Joseph Pascal",
    role: "CTO",
    image: "/images/cto.png",
    bgColor: "#FFAD00",
  },
  {
    id: "art-1",
    name: "Jean Antoine Hierro",
    role: "Art Director",
    image: "/images/art-director-1.png",
    bgColor: "#FF947E",
  },
  {
    id: "art-2",
    name: "Thierry Clauson ",
    role: "Art Director",
    image: "/images/art-director-2.png",
    bgColor: "#19D5D7",
  },
  {
    id: "artist-3d",
    name: "Robin Haefeil",
    role: "3D Artist",
    image: "/images/3d-artist.png",
    bgColor: "#37E8BA",
  },
];

export function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#222443]">
      <section className="relative isolate overflow-hidden">
        <img
          src="/images/about-us-banner.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/65" aria-hidden />
        <div className="relative mx-auto max-w-[1860px] px-4 pb-14 pt-24 text-center sm:px-8 md:px-12 md:pt-28">
          <h1 className="font-display text-[46px] font-bold leading-none text-brand-cyan md:text-[72px]">
            The Story Behind Cow Paradise
          </h1>
          <p className="mt-4 text-[20px] font-medium text-[#475569]">
            From a simple sketch to a cosmic phenomenon
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:px-12">
        <div className="mx-auto grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h2 className="font-display text-[72px] font-bold leading-none text-brand-cyan">
              About Us
            </h2>
            <p className="mt-5 text-[24px] leading-8 text-[#475569]">
              At Cow Paradise Games, we believe gaming should feel like magic,
              fun, surprising, and full of heart. We're a Web3 gaming studio
              where blockchain blends seamlessly into everyday life, and players
              don’t just play; they explore, create, and earn in worlds that
              feel truly alive. <br />
              <br />
              Our mission is simple: build games that families can enjoy
              together, craft stories that spark curiosity, and create
              adventures that reward you in ways that matter. By combining rich
              storytelling, innovative gameplay, and cutting-edge blockchain
              technology, we deliver experiences where every decision counts and
              every adventure is uniquely yours to own.
            </p>
          </div>
          <div className="overflow-hidden rounded-[24px]">
            <img
              src="/images/about-us-bg.png"
              alt="Moo Family team adventure artwork"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative mx-auto w-full">
          <img
            src="/images/about-us-bg-2.png"
            alt="Cow Paradise growth journey timeline"
            className="mx-auto block h-auto w-full object-contain"
          />
          <div className="pointer-events-none absolute inset-x-0 top-[10%] z-10 px-4 text-center">
            <h2
              className="font-display text-[74px] font-bold leading-none text-brand-cyan drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)]"
              style={{
                WebkitTextStroke: "8px #ffffff",
                paintOrder: "stroke fill",
              }}
            >
              THE MOO JOURNEY
            </h2>
            <p className="mt-3 text-[38px] font-bold leading-tight text-black drop-shadow-[0_1px_8px_rgba(255,255,255,0.95)] md:mt-4">
              From Napkin Doodles to Game Hero
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="px-4 py-14 sm:px-8 md:px-12">
        <div className="mx-auto grid max-w-[1600px] gap-5 md:grid-cols-2 xl:grid-cols-4">
          {IMPACT_STATS.map((stat) => (
            <article
              key={stat.id}
              className="relative overflow-hidden rounded-[20px] border border-[#e9edf1] bg-white px-5 py-5 shadow-[0_2px_16px_rgba(31,41,55,0.06)]"
            >
              <div
                className={`absolute right-0 top-0 h-[72px] w-[72px] rounded-bl-[30px] bg-gradient-to-br ${stat.accent}`}
                aria-hidden
              />
              <img
                src={stat.icon}
                alt=""
                aria-hidden
                className="h-14 w-14 object-contain"
              />
              <p className="mt-4 font-display text-[24px] font-bold leading-none text-[#1E293B]">
                {stat.year}: {stat.title}
              </p>
              <p className="mt-3 max-w-[95%] text-[16px] leading-8 text-[#475569]">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="relative overflow-hidden bg-[#FFE9C5] px-4 py-16 sm:px-8 md:px-12 mt-10">
        <div className="grid w-full gap-16 lg:grid-cols-[2fr_4fr_2fr] lg:items-center justify-self-center">
          <div>
            <h2 className="font-display text-5xl font-bold leading-none text-brand-cyan md:text-7xl">
              Mission
            </h2>
            <p className="mt-4 text-[24px] leading-8 text-[#2e2e2e]">
              To turn every play session into a little spark of joy, wonder, and
              discovery. Through our Web3 gaming adventures, we connect people,
              stories, and rewards powered by LAIT Token in a world where gaming
              meets lifestyle naturally.
            </p>
          </div>

          <div className="relative mx-auto flex min-h-[280px] w-full max-w-[760px] items-center justify-center px-2 py-10 sm:min-h-[360px] md:min-h-[420px] lg:min-h-[460px]">
            <h2 className="relative z-[1] text-center font-display text-[clamp(2.25rem,7vw,6.25rem)] font-bold leading-[0.95] text-brand-cyan">
              WHERE <br /> WE&apos;RE <br /> HEADED
            </h2>
            <img
              src="/images/mission-vission-1.png"
              alt=""
              aria-hidden
              className="pointer-events-none absolute left-[0%] top-1/2 z-[2] h-auto max-h-[min(200px,42vw)] w-auto max-w-[min(240px,46%)] -translate-y-1/2 object-contain md:max-h-[260px] md:max-w-[42%] lg:max-h-[300px]"
            />
            <img
              src="/images/mission-vission-2.png"
              alt=""
              aria-hidden
              className="pointer-events-none absolute right-[-3%] top-1/2 z-[2] h-auto max-h-[min(200px,42vw)] w-auto max-w-[min(240px,46%)] -translate-y-1/2 object-contain md:max-h-[260px] md:max-w-[42%] lg:max-h-[300px]"
            />
          </div>

          <div className="lg:mt-0">
            <h2 className="font-display text-5xl font-bold leading-none text-brand-cyan md:text-7xl">
              Vision
            </h2>
            <p className="mt-4 text-[24px] leading-8 text-[#2e2e2e]">
              To create a space where friends and families come together, laugh,
              and explore. A world where fun, learning, and adventure are one,
              and technology adds magic to every day. The next generation
              entertainment platform that feels alive and human.
            </p>
          </div>
        </div>

        {/* <img
          src="/images/mission-vission-2.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 hidden w-[720px] -translate-x-1/2 opacity-70 lg:block"
        /> */}
      </section>

      {/* Our Team */}
      <section className="px-4 py-16 sm:px-8 md:px-12">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="text-center font-display text-[72px] font-bold leading-none text-brand-cyan">
            Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-center text-[25px] leading-7 text-[#393939]">
            Meet the team making blockchain feel human bringing stories, games,
            and real rewards to life in the Cow Paradise universe.
          </p>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {TEAM_MEMBERS.map((member, index) => (
              <article
                key={member.id}
                className={`text-center ${index % 2 === 1 ? "lg:mt-20" : ""}`}
              >
                <div
                  className={`relative mx-auto flex h-[600px] w-[240px] items-end justify-center overflow-hidden rounded-[120px] bg-[${member.bgColor}]`}
                >
                  <div className="absolute inset-x-0 top-20 z-10 px-3 text-center">
                    <h3 className="font-display text-[22px] leading-none text-[#0A0811] uppercase font-semibold">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[16px] font-light italic uppercase tracking-[0.16em] text-[#0A0811]">
                      {member.role}
                    </p>
                  </div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-auto object-contain"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Community */}
      <section>
        <div className="mx-auto w-full overflow-hidden">
          <div className="relative h-[600px]">
            <img
              src="/images/more-adventures-bg.png"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-contain"
            />
            <div className="absolute inset-0" aria-hidden />

            <div className="relative z-10 p-8 text-center md:p-32">
              <h2 className="font-display text-[72px] font-bold leading-none text-brand-cyan">
                Join Our Community
              </h2>

              <p className="mx-auto mt-5 max-w-6xl text-[24px] text-black">
                Sign up for our newsletter and be the first to know about new
                articles, features, and announcements.
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
