import { client } from "@/lib/sanity";

export async function getGraphics(slug) {
  const query = `*[_type == "graphics" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    alt
  }`;

  return await client.fetch(query, { slug });
}
