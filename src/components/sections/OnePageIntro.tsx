export function OnePageIntro() {
  return (
    <section className="wrapper grid-12">
      <div className="hidden md:block col-span-4 col-start-1 lg:col-start-2 relative h-0 pb-[150%] bg-gray-400"></div>
      <div className="col-span-12 col-start-1 md:col-span-7 md:col-start-6 lg:col-span-5 lg:col-start-7 space-y-7">
        <h3 className="text-heading">
          We are <span className="text-yellow">Solar Solution Experts</span> and
          are committed to helping provide a greener future.
        </h3>
        <p>
          Our team is MCS Accredited, experienced, and fully qualified to
          install solar panels and battery storage systems for your home or
          business.
        </p>
        <p>
          Using solar panels to produce electricity helps lower your carbon
          impact on the planet and will reduce your electricity costs
          significantly, based on the system you choose.
        </p>
        <a
          href="mailto:"
          className="inline-flex items-center px-5 py-2 border-2 border-solid rounded-full border-yellow text-btn hover:bg-yellow"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
