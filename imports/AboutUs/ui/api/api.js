import { client } from "@/lib/sanity";

export async function getAboutUsPage() {
  const query = `*[_type == "aboutUsPage"][0]`;
  return await client.fetch(query);
}
