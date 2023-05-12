"use client";

import { motion } from "framer-motion";

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
    <section className="relative w-full h-screen">
      <FullWidthImage imgObj={heroImage} className="z-10" />
      <motion.div
        initial={{ height: "0%" }}
        animate={{ height: ["0%", "100%"] }}
        className="absolute top-0 left-0 z-20 w-full h-full bg-black opacity-60"
      ></motion.div>
      <div className="absolute top-0 left-0 z-30 flex items-center content-center w-full h-full text-background">
        <div className="wrapper grid-12">
          {heading1 && (
            <motion.h1
              animate={{ y: [30, 0], opacity: [0, 1] }}
              transition={{ delay: 0.2 }}
              className="col-span-12 col-start-1 font-bold text-hero md:col-span-10 lg:col-span-8"
            >
              {heading1}
            </motion.h1>
          )}
          {heading2 && (
            <motion.h2
              animate={{ y: [30, 0], opacity: [0, 1] }}
              transition={{ delay: 0.25 }}
              className="col-span-12 col-start-1 text-hero-subtitle md:col-span-10 lg:col-span-8"
            >
              {heading2}
            </motion.h2>
          )}
        </div>
      </div>
    </section>
  );
}
