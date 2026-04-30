import { useMemo, useState } from "react";

const NEWS_CATEGORIES = [
  "All",
  "Game Updates",
  "Stories & Learning",
  "Events",
  "Community",
  "Rewards",
];

const NEWS_ITEMS = [
  {
    id: "news-1",
    image: "/images/news-gallery-1.png",
    title: "A Universe Where Kids Learn While Playing",
    date: "10 Jun 2024",
    category: "Stories & Learning",
  },
  {
    id: "news-2",
    image: "/images/news-gallery-2.png",
    title: "Multiplayer Experiences Are Expanding",
    date: "27 Oct 2024",
    category: "Game Updates",
  },
  {
    id: "news-3",
    image: "/images/news-gallery-3.png",
    title: "Stories That Teach Real-Life Lessons",
    date: "10 Jan 2024",
    category: "Stories & Learning",
  },
  {
    id: "news-4",
    image: "/images/news-gallery-4.png",
    title: "New Adventures Are Coming",
    date: "24 Apr 2024",
    category: "Events",
  },
  {
    id: "news-5",
    image: "/images/news-gallery-5.png",
    title: "Learning With Little Jack",
    date: "04 May 2024",
    category: "Community",
  },
  {
    id: "news-6",
    image: "/images/news-gallery-6.png",
    title: "Play in Competitive Tournaments",
    date: "10 Jun 2024",
    category: "Rewards",
  },
];

export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNewsItems = useMemo(() => {
    if (selectedCategory === "All") {
      return NEWS_ITEMS;
    }

    return NEWS_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="min-h-screen font-sans text-[#222443]">
      <section className="relative isolate overflow-hidden">
        <img
          src="/images/news-banner.png"
          alt="Cow Paradise news banner"
          className="h-auto w-full object-contain object-center"
        />
        <div className="absolute inset-0 z-10 flex items-start px-4 pt-80 sm:px-8 md:px-12">
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl font-bold leading-none text-brand-cyan md:text-[72px]">
              Cow Paradise <br /> News & Updates
            </h1>
            <p className="mt-4 max-w-2xl text-base text-black md:text-[25px] md:leading-[1.35]">
              Stay connected with everything happening across the Cow Paradise
              universe — new games, character stories, tournaments, rewards, and
              more.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 md:px-12">
        <div className="mx-auto max-w-[1300px]">
          <h1 className="font-display text-[52px] font-bold leading-none text-brand-cyan">
            All News Updates
          </h1>

          <div className="mt-8 flex flex-wrap gap-3">
            {NEWS_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-[10px] px-5 py-2 font-bold text-[28px] leading-none ${
                  category === selectedCategory
                    ? "bg-brand-cyan text-white"
                    : "bg-[#E6E6E6] text-brand-cyan"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNewsItems.map((item) => (
              <article key={item.id} className="group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-100 w-100 object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute right-10 top-3 rounded-full bg-brand-cyan px-3 py-1 text-xs font-semibold text-white">
                    {item.category}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-[20px] font-bold leading-[1.05] text-black">
                  {item.title}
                </h2>
                <p className="mt-4 text-[16px] font-light text-black opacity-50">
                  {item.date}
                </p>
              </article>
            ))}
          </div>

          {filteredNewsItems.length === 0 ? (
            <p className="mt-8 text-lg text-[#222443]/70">
              No news updates available for this category yet.
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
