import urlBuilder from "@/utils/urlBuilder";
import { PortableText } from "@portabletext/react";

import Image from "next/image";

export function OnePageFooterCTA({
  statement,
  logos,
  affiliateLogos,
}: {
  statement: any;
  logos: any[];
  affiliateLogos: any[];
}) {
  return (
    <section className="w-full bg-primary">
      <div className="py-24 wrapper grid-12 !gap-y-16">
        <div className="col-span-12 col-start-1 space-y-5 md:col-span-9 lg:col-span-6 statement">
          <PortableText value={statement} />
        </div>
        <div className="content-start col-span-12 lg:col-start-8 md:col-span-9 lg:col-span-5 grid-12 !gap-3 place-content-start">
          {logos &&
            logos.map((logo) => (
              <div
                key={logo._key}
                className="col-span-6 md:col-span-3 col-start-auto relative h-0 pb-[56.25%] bg-white"
              >
                <Image
                  src={urlBuilder(logo.asset).url()}
                  alt=""
                  fill={true}
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 20vw, 15vw"
                  className="relative object-contain !w-[75%] !-translate-x-1/2 !left-1/2"
                />
              </div>
            ))}
          <div className="col-span-12 mt-4">Our Affiliates</div>
          {affiliateLogos &&
            affiliateLogos.map((logo) => (
              <div
                key={logo._key}
                className="col-span-6 md:col-span-3 col-start-auto relative h-0 pb-[56.25%] bg-white"
              >
                <Image
                  src={urlBuilder(logo.asset).url()}
                  alt=""
                  fill={true}
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 20vw, 15vw"
                  className="relative object-contain !w-[75%] !-translate-x-1/2 !left-1/2"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
