import { client } from "@/lib/sanity";

export async function getPrivacyPage() {
  const query = `*[_type == "privacyPage"][0]`;
  return await client.fetch(query);
}
