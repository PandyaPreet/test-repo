import { client } from "@/lib/sanity";

export async function getRetailPage() {
  const query = `*[_type == "retailPage"][0]`;
  return await client.fetch(query);
}
