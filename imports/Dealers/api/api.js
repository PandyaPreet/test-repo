import { client } from "@/lib/sanity";

export async function getDealerPage(slug) {
  const query = `*[_type == "dealersPage" && slug.current == $slug][0]{
    ...,
    ctas[]{
      ...,
      "pdfUrlResolved": coalesce(pdfUrl, pdfFile.asset->url)
    }
  }`;

  return await client.fetch(query, { slug });
}
