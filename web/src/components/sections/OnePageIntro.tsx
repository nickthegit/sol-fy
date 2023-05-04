import urlBuilder from "@/utils/urlBuilder";

import { PortableText } from "@portabletext/react";

export function OnePageIntro({
  introText,
  introImage,
  email,
}: {
  introText: any;
  introImage: any;
  email: string;
}) {
  return (
    <section className="wrapper grid-12">
      <div className="relative hidden col-span-4 col-start-1 md:block lg:col-start-2 aspect-3/4">
        <picture>
          <source
            srcSet={`${urlBuilder(introImage.asset)
              .auto("format")
              .focalPoint(
                introImage?.hotspot?.x ? introImage.hotspot.x : 0.5,
                introImage?.hotspot?.y ? introImage.hotspot.y : 0.5
              )
              .crop("focalpoint")
              .fit("crop")
              .dpr(2)
              .width(400)
              .height(533)
              .url()} 2x, ${urlBuilder(introImage.asset)
              .auto("format")
              .focalPoint(
                introImage?.hotspot?.x ? introImage.hotspot.x : 0.5,
                introImage?.hotspot?.y ? introImage.hotspot.y : 0.5
              )
              .crop("focalpoint")
              .fit("crop")
              .width(400)
              .height(533)
              .url()}`}
            media="(min-width: 480px)"
          />
          <img
            src={`${urlBuilder(introImage.asset)
              .auto("format")
              .focalPoint(
                introImage?.hotspot?.x ? introImage.hotspot.x : 0.5,
                introImage?.hotspot?.y ? introImage.hotspot.y : 0.5
              )
              .crop("focalpoint")
              .fit("crop")
              .dpr(2)
              .width(400)
              .height(533)
              .url()}`}
            alt={
              introImage?.introImageAlt
                ? introImage.introImageAlt
                : "image for intro"
            }
            className="relative inset-0 object-cover w-full h-full"
          />
        </picture>
      </div>
      <div className="col-span-12 col-start-1 proseSol md:col-span-7 md:col-start-6 lg:col-span-5 lg:col-start-7 space-y-7">
        {/* <p>{introText}</p> */}
        <PortableText value={introText} />
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center px-5 py-2 border-2 border-solid rounded-full border-yellow text-btn hover:bg-yellow"
        >
          Get in touch
        </a>
      </div>
      {/* <div className="col-span-12 col-start-1 md:col-span-7 md:col-start-6 lg:col-span-5 lg:col-start-7 space-y-7">
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
      </div> */}
    </section>
  );
}
