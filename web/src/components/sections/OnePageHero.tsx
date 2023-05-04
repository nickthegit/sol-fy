import FullWidthImage from "@/components/FullWidthImage";

export function OnePageHero({
  heading1,
  heading2,
  heroImage,
}: {
  heading1: string;
  heading2: string;
  heroImage: any;
}) {
  return (
    <section className="relative w-full h-screen bg-indigo-400">
      <FullWidthImage imgObj={heroImage} className="z-10" />
      <div className="absolute top-0 left-0 z-20 w-full h-full bg-black opacity-60"></div>
      <div className="absolute top-0 left-0 z-30 flex items-center content-center w-full h-full text-background">
        <div className="wrapper grid-12">
          {heading1 && (
            <h1 className="col-span-12 col-start-1 font-bold text-hero md:col-span-10 lg:col-span-8">
              {heading1}
            </h1>
          )}
          {heading2 && (
            <h2 className="col-span-12 col-start-1 text-hero-subtitle md:col-span-10 lg:col-span-8">
              {heading2}
            </h2>
          )}
        </div>
      </div>
    </section>
  );
}
