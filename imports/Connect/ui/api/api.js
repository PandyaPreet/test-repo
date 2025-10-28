import { client } from "@/lib/sanity";

export async function getConnectPage() {
  const query = `*[_type == "connectPage"][0]`;
  return await client.fetch(query);
}
