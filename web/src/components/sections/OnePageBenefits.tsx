import { PortableText } from "@portabletext/react";
export function OnePageBenefits({ benefits }: { benefits: any[] }) {
  return (
    <section className="wrapper grid-12">
      <h3 className="col-span-12 lg:col-span-4 text-body-lg">BENEFITS</h3>
      <div className="grid grid-cols-1 col-span-12 gap-8 md:grid-cols-2 lg:col-span-8">
        {benefits?.map((benefit, index) => (
          <BenefitItem key={benefit._key}>
            <PortableText value={benefit.benefit} />
          </BenefitItem>
        ))}
      </div>
    </section>
  );
}

export const BenefitItem = ({ children }: { children?: JSX.Element }) => {
  return (
    <article className="grid grid-cols-[28px_1fr] gap-4">
      <div className="w-7 h-7 bg-primary clip-triangle"></div>
      <div className="col-start-2 text-body">{children}</div>
    </article>
  );
};
