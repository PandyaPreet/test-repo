import { client } from "@/lib/sanity";

export async function getEnterprisePage(params) {
  const query = `*[_type == "enterprisePage"][0]`;
  return await client.fetch(query);
}
