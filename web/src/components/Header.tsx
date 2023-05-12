"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import urlBuilder from "@/utils/urlBuilder";

export default function Header({
  siteLogo,
  siteTitle,
  email,
  instagramLink,
}: {
  siteLogo: any;
  siteTitle: string;
  email: string;
  instagramLink: string;
}) {
  const pathname = usePathname();

  const isHome = useMemo(() => {
    return pathname === "/";
  }, [pathname]);

  return (
    <header className="absolute top-0 left-0 z-50 w-full ">
      <div className="flex items-center justify-between wrapper p-9">
        <section>
          <Link href="/">
            {siteLogo ? (
              <Image
                src={urlBuilder(siteLogo.asset)
                  .width(200)
                  .height(78)
                  .auto("format")
                  .url()}
                alt={siteTitle}
                width={100}
                height={39}
              />
            ) : (
              <h1
                className={`text-2xl font-bold ${
                  isHome ? "text-background" : "text-foreground"
                }`}
              >
                {siteTitle ? siteTitle : "Sol-ify"}
              </h1>
            )}
          </Link>
        </section>
        <section
          className={`flex items-center gap-6 ${
            isHome ? "text-background" : "text-foreground"
          }`}
        >
          {instagramLink && (
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-7 h-7"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-full"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="currentColor"
                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63a5.876 5.876 0 0 0-2.126 1.384A5.855 5.855 0 0 0 .63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0Zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85 0 3.204-.015 3.585-.074 4.85-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03Zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324ZM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center px-5 py-2 border-2 border-solid rounded-full border-yellow text-btn hover:bg-yellow"
            >
              Get in touch
            </a>
          )}
        </section>
      </div>
    </header>
  );
}
