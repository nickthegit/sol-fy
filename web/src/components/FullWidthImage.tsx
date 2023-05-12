"use client";
import { motion } from "framer-motion";

import urlBuilder from "@/utils/urlBuilder";

export default function FullWidthImage({
  className,
  imgObj,
}: {
  className?: string;
  imgObj?: any;
}) {
  return (
    <motion.picture
      initial={{ height: "0%" }}
      animate={{ height: ["0%", "100%"], opacity: [0, 1] }}
      className={`relative block w-full h-full ${className}`}
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
          .width(600)
          .height(1067)
          .url()} 2x, ${urlBuilder(imgObj.asset)
          .auto("format")
          .focalPoint(
            imgObj?.hotspot?.x ? imgObj.hotspot.x : 0.5,
            imgObj?.hotspot?.y ? imgObj.hotspot.y : 0.5
          )
          .crop("focalpoint")
          .fit("crop")
          .width(600)
          .height(1067)
          .url()}`}
        media="(max-width: 600px)"
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
          .width(1920)
          .height(1080)
          .url()} 2x, ${urlBuilder(imgObj.asset)
          .auto("format")
          .focalPoint(
            imgObj?.hotspot?.x ? imgObj.hotspot.x : 0.5,
            imgObj?.hotspot?.y ? imgObj.hotspot.y : 0.5
          )
          .crop("focalpoint")
          .fit("crop")
          .width(1920)
          .height(1080)
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
          .width(1920)
          .height(1080)
          .url()} 2x`}
        src={`${urlBuilder(imgObj.asset)
          .auto("format")
          .focalPoint(
            imgObj?.hotspot?.x ? imgObj.hotspot.x : 0.5,
            imgObj?.hotspot?.y ? imgObj.hotspot.y : 0.5
          )
          .crop("focalpoint")
          .fit("crop")
          .width(1920)
          .height(1080)
          .url()}`}
        alt={
          imgObj?.heroImageAlt ? imgObj.heroImageAlt : "image for hero section"
        }
        className="relative object-cover w-full h-full"
      />
    </motion.picture>
  );
}
