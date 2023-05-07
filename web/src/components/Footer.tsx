"use client";

import Link from "next/link";
import { useMemo } from "react";

export default function Footer({
  siteTitle,
  footerLinks,
}: {
  siteTitle: string;
  footerLinks?: {
    _id: string;
    title: string;
    slug: { current: string };
  }[];
}) {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);
  return (
    <footer className="w-full text-white bg-black">
      <div className="py-5 wrapper">
        <p className="text-xs">
          © {siteTitle && siteTitle} {year}. All rights reserved.{" "}
          <span className="inline-flex gap-2">
            {footerLinks &&
              footerLinks?.map((link) => (
                <Link
                  href={`/company/${link.slug.current}`}
                  key={link._id}
                  className="underline hover:opacity-80"
                >
                  {link.title}
                </Link>
              ))}
          </span>
        </p>
      </div>
    </footer>
  );
}
