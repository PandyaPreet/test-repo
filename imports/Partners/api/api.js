import { client } from "@/lib/sanity";

export async function getPartnersPage() {
  const query = `*[_type == "partnersPage"][0]`;
  return await client.fetch(query);
}
