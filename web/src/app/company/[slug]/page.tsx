import { client } from "@/utils/sanity";
import { companyPage } from "@/utils/queries";

import { PortableText } from "@portabletext/react";

async function getData(slug: string) {
  const posts = await client.fetch(companyPage(slug));
  return posts;
}

export default async function CompanyPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);

  return (
    <main className="py-32 wrapper grid-12">
      <article className="w-full min-h-[85vh] col-span-12 lg:col-span-7">
        <h1 className="mb-8 text-heading">{data.title}</h1>
        <PortableText value={data.content} />
      </article>
    </main>
  );
}
