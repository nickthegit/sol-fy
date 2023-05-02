import { client } from "@/utils/sanity";
import { onePager } from "@/utils/queries";

import {
  OnePageHero,
  OnePageIntro,
  OnePageServices,
  OnePageGallery,
  OnePageBenefits,
  OnePageFooterCTA,
} from "@/components/sections";

async function getData() {
  const posts = await client.fetch(onePager);
  return posts;
}

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <main className="w-full space-y-20 font-sans lg:space-y-28">
      {/* hero */}
      <OnePageHero
        heading1={data?.hero?.heading1}
        heading2={data?.hero?.heading2}
        heroImage={data?.hero?.heroImage}
      />
      {/* intro */}
      <OnePageIntro />
      {/* services */}
      <OnePageServices />
      {/* gallery */}
      <OnePageGallery />
      {/* benefits */}
      <OnePageBenefits />
      {/* footer cta */}
      <OnePageFooterCTA />
    </main>
  );
}
