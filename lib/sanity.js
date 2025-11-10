import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "c7xzft9k",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
  perspective: "published",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
