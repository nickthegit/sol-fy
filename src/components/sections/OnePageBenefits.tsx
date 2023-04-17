export function OnePageBenefits() {
  return (
    <section className="wrapper grid-12">
      <h3 className="col-span-12 lg:col-span-4 text-body-lg">BENEFITS</h3>
      <div className="grid grid-cols-1 col-span-12 gap-8 md:grid-cols-2 lg:col-span-8">
        <BenefitItem />
        <BenefitItem />
        <BenefitItem />
        <BenefitItem />
        <BenefitItem />
        <BenefitItem />
      </div>
    </section>
  );
}

export const BenefitItem = () => {
  return (
    <article className="grid grid-cols-[28px_1fr] gap-4">
      <div className="w-7 h-7 bg-primary clip-triangle"></div>
      <p className="col-start-2 text-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quod, quia.
      </p>
    </article>
  );
};
