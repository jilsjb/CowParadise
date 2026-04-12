const highlights = [
  { value: '4.9/5', label: 'visitor experience rating' },
  { value: '120+', label: 'happy, pasture-raised cows' },
  { value: '24h', label: 'fresh dairy delivery cycle' }
];

const offerings = [
  {
    title: 'Farm Fresh Dairy',
    text: 'Small-batch milk, cream, paneer, and yogurt delivered with same-day freshness.',
    tone: 'from-hay/70 to-white'
  },
  {
    title: 'Cow Adoption Program',
    text: 'Sponsor a cow, follow her care journey, and receive seasonal gift boxes from the farm.',
    tone: 'from-white to-emerald-50'
  },
  {
    title: 'Family Farm Visits',
    text: 'Curated weekend tours with feeding sessions, open meadows, and hands-on dairy workshops.',
    tone: 'from-orange-50 to-white'
  }
];

const pillars = [
  'Open grazing zones and clean shelters designed around animal comfort.',
  'Transparent nutrition, veterinary care, and ethical dairy practices.',
  'A warm destination brand that blends agriculture, wellness, and community.'
];

const stories = [
  {
    title: 'Sunrise Milking',
    copy: 'Watch the morning rhythm of the farm and learn how humane handling shapes every product.',
    accent: 'bg-emerald-100'
  },
  {
    title: 'Butter & Cheese Lab',
    copy: 'Interactive tastings and guided workshops turn the dairy process into a memorable experience.',
    accent: 'bg-amber-100'
  },
  {
    title: 'Pasture Picnics',
    copy: 'Open-air seating, seasonal menus, and wide green views make the site feel like a retreat.',
    accent: 'bg-rose-100'
  }
];

const testimonials = [
  {
    quote:
      'The branding feels premium, but the heart of the place is still deeply rural and genuine.',
    author: 'Aarav Mehta',
    role: 'Farm stay guest'
  },
  {
    quote:
      'It is the kind of homepage that can sell farm products and family experiences at the same time.',
    author: 'Sara Khan',
    role: 'Creative consultant'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-cream bg-pasture font-body text-ink">
      <header className="px-6 pb-10 pt-6 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/70 bg-white/80 px-6 py-5 shadow-soft backdrop-blur md:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-moss">
                Cow Paradise
              </p>
              <h1 className="font-display text-4xl text-meadow md:text-6xl">
                Where happy cattle and slow farm living become a lifestyle brand.
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#offerings"
                className="rounded-full bg-meadow px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="rounded-full border border-meadow/20 bg-white px-5 py-3 text-sm font-semibold text-meadow transition hover:border-meadow hover:bg-emerald-50"
              >
                Book a Visit
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 pb-16 lg:px-10">
        <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex rounded-full border border-meadow/15 bg-white px-4 py-2 text-sm font-semibold text-moss shadow-sm">
                Ethical dairy, immersive tours, and a premium rural identity
              </span>
              <p className="max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">
                This React template gives Cow Paradise a polished landing page with warm storytelling,
                product discovery, and space for bookings, reviews, and community trust.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[28px] border border-white/70 bg-white p-5 shadow-soft"
                >
                  <p className="text-3xl font-extrabold text-meadow">{item.value}</p>
                  <p className="mt-2 text-sm text-stone-600">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -rotate-6 rounded-[36px] bg-gradient-to-br from-hay to-orange-200 blur-2xl opacity-60" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-meadow p-8 text-white shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-hay/80">Signature Experience</p>
                  <h2 className="mt-3 font-display text-3xl md:text-4xl">
                    A boutique farm destination with a soft luxury feel.
                  </h2>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em]">
                  Since 2012
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[28px] bg-white/10 p-5">
                  <p className="text-sm text-white/75">Best for</p>
                  <p className="mt-2 text-lg font-semibold">
                    Organic dairy brands, agri-tourism businesses, and family-run farms
                  </p>
                </div>
                <div className="rounded-[28px] border border-white/15 p-5">
                  <p className="text-sm text-white/75">Template personality</p>
                  <p className="mt-2 text-lg font-semibold">
                    Earthy, uplifting, premium, and easy to customize section by section
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="offerings" className="mx-auto mt-20 max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-moss">Core Offerings</p>
              <h2 className="mt-3 font-display text-3xl text-meadow md:text-5xl">
                A homepage built to sell products and the farm story together.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-stone-600">
              Tailwind utilities keep the UI fast to iterate on while leaving room for the final
              Figma-level polish once exact screenshots or tokens are available.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {offerings.map((item) => (
              <article
                key={item.title}
                className={`rounded-[30px] border border-stone-200 bg-gradient-to-br ${item.tone} p-7 shadow-soft`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-meadow text-lg font-bold text-white">
                  {item.title.charAt(0)}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-meadow">{item.title}</h3>
                <p className="mt-3 leading-7 text-stone-700">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] bg-[#fff1dd] p-8 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-clay">Care Promise</p>
            <h2 className="mt-3 font-display text-3xl text-meadow">Animal welfare sits at the center of the brand.</h2>
            <div className="mt-6 space-y-4">
              {pillars.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/80 p-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-clay" />
                  <p className="text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {stories.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-soft">
                <div className={`h-36 ${item.accent}`} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-meadow">{item.title}</h3>
                  <p className="mt-3 leading-7 text-stone-600">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl rounded-[36px] bg-meadow px-7 py-10 text-white shadow-soft md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-hay/80">Testimonials</p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl">
                A visual system that feels wholesome, trustworthy, and premium.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {testimonials.map((item) => (
                <blockquote key={item.author} className="rounded-[28px] bg-white/10 p-6">
                  <p className="text-lg leading-8 text-white/90">"{item.quote}"</p>
                  <footer className="mt-5">
                    <p className="font-semibold">{item.author}</p>
                    <p className="text-sm text-white/65">{item.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto mt-20 grid max-w-7xl gap-6 rounded-[36px] border border-stone-200 bg-white p-8 shadow-soft lg:grid-cols-[1fr_0.8fr]"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-moss">Get Started</p>
            <h2 className="mt-3 font-display text-3xl text-meadow md:text-5xl">
              Ready to turn Cow Paradise into a live product and experience website?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-stone-600">
              This template is set up for quick iteration. You can replace placeholder copy with
              your actual farm story, product list, booking form, and media assets without changing
              the overall layout system.
            </p>
          </div>

          <form className="grid gap-4 rounded-[30px] bg-stone-50 p-6">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-meadow"
            />
            <input
              type="email"
              placeholder="Email address"
              className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-meadow"
            />
            <textarea
              rows="4"
              placeholder="Tell us what you'd like to launch"
              className="rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-meadow"
            />
            <button
              type="button"
              className="rounded-full bg-meadow px-5 py-3 font-semibold text-white transition hover:bg-moss"
            >
              Send Enquiry
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
