import { client } from "@/lib/sanity";

export async function getISPPage() {
  const query = `*[_type == "ispPage"][0]`;
  return await client.fetch(query);
}
