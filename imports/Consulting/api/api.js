import { client } from "@/lib/sanity";

export async function getConsultingPage() {
  const query = `*[_type == "consultingPage"][0]`;
  return await client.fetch(query);
}
