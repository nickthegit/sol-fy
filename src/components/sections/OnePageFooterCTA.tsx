export function OnePageFooterCTA() {
  return (
    <section className="w-full bg-primary">
      <div className="py-24 wrapper grid-12">
        <h3 className="col-span-12 col-start-1 md:col-span-9 lg:col-span-7 text-heading-3">
          Sol-ify your Life...
        </h3>
        <p className="col-span-12 col-start-1 md:col-span-9 lg:col-span-7 text-cta">
          Solar energy is renewable and clean. Switching to it reduces our
          reliance on fossil fuels and lowers electricity bills.
        </p>
        <p className="col-span-12 col-start-1 md:col-span-9 lg:col-span-7 text-cta">
          To find out more or for free quote please{" "}
          <a href="mailto:" className="underline">
            get in touch.
          </a>
        </p>
      </div>
    </section>
  );
}
