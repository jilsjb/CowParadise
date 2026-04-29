export function PlaceholderPage({ title }) {
  return (
    <main className="min-h-[60vh] bg-white px-4 py-16 font-sans text-ink sm:px-8 md:px-12">
      <div className="mx-auto max-w-[1920px]">
        <h1 className="font-display text-4xl font-bold text-brand-cyan md:text-5xl">
          {title}
        </h1>
      </div>
    </main>
  );
}
