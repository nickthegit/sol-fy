import Image from "next/image";

export function OnePageFooterCTA() {
  return (
    <section className="w-full bg-primary">
      <div className="py-24 wrapper grid-12 !gap-y-16">
        <div className="col-span-12 col-start-1 space-y-5 md:col-span-9 lg:col-span-6">
          <h3 className="text-heading-3">Sol-ify your Life...</h3>
          <p className="text-cta">
            Solar energy is renewable and clean. Switching to it reduces our
            reliance on fossil fuels and lowers electricity bills.
          </p>
          <p className=" text-cta">
            To find out more or for free quote please{" "}
            <a href="mailto:" className="underline">
              get in touch.
            </a>
          </p>
        </div>
        <div className="content-start col-span-12 lg:col-start-8 md:col-span-9 lg:col-span-5 grid-12 !gap-3 place-content-start">
          {Array.from(Array(6).keys()).map((i) => (
            <div
              key={i}
              className="col-span-6 md:col-span-3 col-start-auto relative h-0 pb-[56.25%]"
            >
              <Image
                src="https://via.placeholder.com/1080x1080/2d2df0/ffffff"
                alt=""
                fill={true}
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>
          ))}
          <div className="col-span-12 mt-4">Our Affiliates</div>
          {Array.from(Array(3).keys()).map((i) => (
            <div
              key={i}
              className="col-span-6 md:col-span-3 col-start-auto relative h-0 pb-[56.25%]"
            >
              <Image
                src="https://via.placeholder.com/1080x1080/2d2df0/ffffff"
                alt=""
                fill={true}
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}