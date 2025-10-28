import { client } from "@/lib/sanity";

export async function getOemPage() {
  const query = `*[_type == "oemPage"][0]`;
  return await client.fetch(query);
}
