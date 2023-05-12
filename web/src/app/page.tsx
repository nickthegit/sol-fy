import { client } from "@/utils/sanity";
import { onePager } from "@/utils/queries";

import {
  OnePageHero,
  OnePageIntro,
  OnePageServices,
  OnePageGallery,
  OnePageBenefits,
  OnePageTestimonials,
  OnePageFooterCTA,
} from "@/components/sections";

async function getData() {
  const posts = await client.fetch(onePager);
  return posts;
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="w-full space-y-20 font-sans lg:space-y-28">
      {/* hero */}
      <OnePageHero
        heading1={data?.hero?.heading1}
        heading2={data?.hero?.heading2}
        heroImage={data?.hero?.heroImage}
      />
      {/* intro */}
      <OnePageIntro
        introText={data?.intro?.introText}
        introImage={data?.intro?.introImage}
        email={data?.intro?.introCtaLink}
      />
      {/* services */}
      <OnePageServices />
      {/* gallery */}
      <OnePageGallery images={data?.gallery} />
      {/* benefits */}
      <OnePageBenefits benefits={data?.benefits} />
      <div>
        {/* testimonials */}
        <OnePageTestimonials testimonials={data?.testimonials} />
        {/* footer cta */}
        <OnePageFooterCTA
          statement={data?.footerCta?.footerStatement}
          logos={data?.footerCta?.logos}
        />
      </div>
    </main>
  );
}
