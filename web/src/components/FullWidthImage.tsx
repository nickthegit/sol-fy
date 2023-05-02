import urlBuilder from "@/utils/urlBuilder";

export default function FullWidthImage({
  image,
  altText,
  className,
}: {
  image: object;
  altText?: string;
  className?: string;
}) {
  const theImage = urlBuilder(image).url();
  console.log(theImage);

  return (
    <picture className={`relative block w-full h-full ${className}`}>
      <source
        srcSet={`${urlBuilder(image)
          .auto("format")
          .dpr(2)
          .width(600)
          .height(1067)
          .url()} 2x, ${urlBuilder(image)
          .auto("format")
          .width(600)
          .height(1067)
          .url()}`}
        media="(max-width: 600px)"
      />
      <source
        srcSet={`${urlBuilder(image)
          .auto("format")
          .dpr(2)
          .width(1000)
          .height(563)
          .url()} 2x, ${urlBuilder(image)
          .auto("format")
          .width(1000)
          .height(563)
          .url()}`}
        media="(max-width: 1000px)"
      />
      <source
        srcSet={`${urlBuilder(image)
          .auto("format")
          .dpr(2)
          .width(1920)
          .height(1080)
          .url()} 2x, ${urlBuilder(image)
          .auto("format")
          .width(1920)
          .height(1080)
          .url()}`}
        media="(min-width: 1001px)"
      />
      <img
        srcSet={`${urlBuilder(image)
          .auto("format")
          .dpr(2)
          .width(1920)
          .height(1080)
          .url()} 2x`}
        src={`${urlBuilder(image)
          .auto("format")
          .width(1920)
          .height(1080)
          .url()}`}
        alt={altText ? altText : "image for hero section"}
        className="relative object-cover w-full h-full"
      />
    </picture>
  );
}
