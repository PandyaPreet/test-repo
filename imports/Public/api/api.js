import { client } from "@/lib/sanity";

export async function getPublicAttachments(slug) {
  const query = `*[_type == "public" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    // Prefer uploaded PDF if available, otherwise use external link
    "pdfUrl": coalesce(pdfUpload.asset->url, pdfLink)
  }`;

  return await client.fetch(query, { slug });
}
