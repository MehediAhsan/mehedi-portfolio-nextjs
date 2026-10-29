import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const sanityConfigurationError =
  !projectId || !dataset
    ? "Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in your .env.local file."
    : null;

const client = createClient({
  projectId: projectId || "missing-project-id",
  dataset: dataset || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const imageBuilder = imageUrlBuilder(client);

export function urlFor(source) {
  return imageBuilder.image(source);
}

const postFields = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage {
    asset,
    alt
  }
`;

function requireSanityConfiguration() {
  if (sanityConfigurationError) {
    throw new Error(sanityConfigurationError);
  }
}

export async function getPublishedPosts() {
  requireSanityConfiguration();

  return client.fetch(
    `*[_type == "post" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()] | order(publishedAt desc) {
      ${postFields}
    }`,
    {},
    { next: { revalidate: 60 } },
  );
}

export async function getPostBySlug(slug) {
  requireSanityConfiguration();

  return client.fetch(
    `*[_type == "post" && slug.current == $slug && defined(publishedAt) && publishedAt <= now()][0] {
      ${postFields},
      body[] {
        ...,
        _type == "image" => {
          ...,
          asset
        }
      }
    }`,
    { slug },
    { next: { revalidate: 60 } },
  );
}

export async function getPublishedPostSlugs() {
  requireSanityConfiguration();

  return client.fetch(
    `*[_type == "post" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()]{"slug": slug.current}.slug`,
    {},
    { next: { revalidate: 60 } },
  );
}
