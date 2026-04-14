export function PlaceholderSections() {
  return (
    <>
      <section
        id="marketplace"
        className="scroll-mt-24 border-t border-neutral-200 bg-white px-4 py-20 text-center sm:px-8"
      >
        <h2 className="font-display text-3xl font-bold text-brand-cyan md:text-4xl">Marketplace</h2>
        <p className="mx-auto mt-4 max-w-lg text-neutral-600">Coming soon — merch, gifts, and farm-fresh finds.</p>
      </section>

      <section
        id="news"
        className="scroll-mt-24 border-t border-neutral-200 bg-neutral-50 px-4 py-20 text-center sm:px-8"
      >
        <h2 className="font-display text-3xl font-bold text-brand-cyan md:text-4xl">News</h2>
        <p className="mx-auto mt-4 max-w-lg text-neutral-600">Updates from Cow Paradise and the Moo Family — check back shortly.</p>
      </section>

      <section
        id="login"
        className="scroll-mt-24 border-t border-neutral-200 bg-white px-4 py-16 text-center sm:px-8"
      >
        <h2 className="font-display text-3xl font-bold text-neutral-800 md:text-4xl">Login</h2>
        <p className="mx-auto mt-4 max-w-lg text-neutral-600">
          Account sign-in will live here. Wire this section to your auth provider when ready.
        </p>
      </section>
    </>
  );
}
