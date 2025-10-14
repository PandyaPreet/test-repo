import { client } from "@/lib/sanity";

export async function getHomePage() {
  const query = `*[_type == "homePage"][0]`;
  return await client.fetch(query);
}
