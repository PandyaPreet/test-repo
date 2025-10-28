import { client } from "@/lib/sanity";

export async function getMVNOPage() {
  const query = `*[_type == "mvnoPage"][0]`;
  return await client.fetch(query);
}
