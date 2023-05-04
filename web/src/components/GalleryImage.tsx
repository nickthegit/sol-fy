import urlBuilder from "@/utils/urlBuilder";

export default function GalleryImage({
  className,
  imgObj,
}: {
  className?: string;
  imgObj?: any;
}) {
  return (
    <picture
      className={`relative block aspect-square md:aspect-video ${className}`}
    >
      <source
        srcSet={`${urlBuilder(imgObj.asset)
          .auto("format")
          .focalPoint(
            imgObj?.hotspot?.x ? imgObj.hotspot.x : 0.5,
            imgObj?.hotspot?.y ? imgObj.hotspot.y : 0.5
          )
          .crop("focalpoint")
          .fit("crop")
          .dpr(2)
          .width(480)
          .height(480)
          .url()} 2x, ${urlBuilder(imgObj.asset)
          .auto("format")
          .focalPoint(
            imgObj?.hotspot?.x ? imgObj.hotspot.x : 0.5,
            imgObj?.hotspot?.y ? imgObj.hotspot.y : 0.5
          )
          .crop("focalpoint")
          .fit("crop")
          .width(480)
          .height(480)
          .url()}`}
        media="(max-width: 480px)"
      />
      <source
        srcSet={`${urlBuilder(imgObj.asset)
          .auto("format")
          .focalPoint(
            imgObj?.hotspot?.x ? imgObj.hotspot.x : 0.5,
            imgObj?.hotspot?.y ? imgObj.hotspot.y : 0.5
          )
          .crop("focalpoint")
          .fit("crop")
          .dpr(2)
          .width(1000)
          .height(563)
          .url()} 2x, ${urlBuilder(imgObj.asset)
          .auto("format")
          .focalPoint(
            imgObj?.hotspot?.x ? imgObj.hotspot.x : 0.5,
            imgObj?.hotspot?.y ? imgObj.hotspot.y : 0.5
          )
          .crop("focalpoint")
          .fit("crop")
          .width(1000)
          .height(563)
          .url()}`}
        media="(max-width: 1000px)"
      />
      <source
        srcSet={`${urlBuilder(imgObj.asset)
          .auto("format")
          .focalPoint(
            imgObj?.hotspot?.x ? imgObj.hotspot.x : 0.5,
            imgObj?.hotspot?.y ? imgObj.hotspot.y : 0.5
          )
          .crop("focalpoint")
          .fit("crop")
          .dpr(2)
          .width(1240)
          .height(698)
          .url()} 2x, ${urlBuilder(imgObj.asset)
          .auto("format")
          .focalPoint(
            imgObj?.hotspot?.x ? imgObj.hotspot.x : 0.5,
            imgObj?.hotspot?.y ? imgObj.hotspot.y : 0.5
          )
          .crop("focalpoint")
          .fit("crop")
          .width(1240)
          .height(698)
          .url()}`}
        media="(min-width: 1001px)"
      />
      <img
        srcSet={`${urlBuilder(imgObj.asset)
          .auto("format")
          .focalPoint(
            imgObj?.hotspot?.x ? imgObj.hotspot.x : 0.5,
            imgObj?.hotspot?.y ? imgObj.hotspot.y : 0.5
          )
          .crop("focalpoint")
          .fit("crop")
          .dpr(2)
          .width(1240)
          .height(698)
          .url()} 2x`}
        src={`${urlBuilder(imgObj.asset)
          .auto("format")
          .focalPoint(
            imgObj?.hotspot?.x ? imgObj.hotspot.x : 0.5,
            imgObj?.hotspot?.y ? imgObj.hotspot.y : 0.5
          )
          .crop("focalpoint")
          .fit("crop")
          .width(1240)
          .height(698)
          .url()}`}
        alt="solify gallery image"
        className="relative object-cover w-full h-full"
      />
    </picture>
  );
}
