import { client } from "@/lib/sanity";

export async function getSolutionsPage() {
  const query = `*[_type == "solutionsPage"][0]`;
  return await client.fetch(query);
}
