import { client } from "@/utils/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export default function urlFor(source: object) {
  return builder.image(source);
}
