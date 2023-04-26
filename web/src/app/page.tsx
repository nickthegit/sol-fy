import {
  OnePageHero,
  OnePageIntro,
  OnePageServices,
  OnePageGallery,
  OnePageBenefits,
  OnePageFooterCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="w-full space-y-20 font-sans lg:space-y-28">
      {/* hero */}
      <OnePageHero />
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
