import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PortableTextRenderer from "@/components/blog/PortableTextRenderer";
import {
  getPostBySlug,
  getPublishedPostSlugs,
  sanityConfigurationError,
  urlFor,
} from "@/lib/sanity";

export const revalidate = 60;

export async function generateStaticParams() {
  if (sanityConfigurationError) {
    return [];
  }

  const slugs = await getPublishedPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  if (sanityConfigurationError) {
    return {
      title: "Blog | Mehedi Ahsan",
      description: "Notes, lessons, and ideas from Mehedi Ahsan.",
    };
  }

  const post = await getPostBySlug(params.slug);

  if (!post) {
    return { title: "Post not found | Mehedi Ahsan" };
  }

  const imageUrl = post.mainImage?.asset
    ? urlFor(post.mainImage).width(1200).height(630).fit("crop").url()
    : undefined;

  return {
    title: `${post.title} | Mehedi Ahsan`,
    description: post.excerpt || `Read ${post.title} on Mehedi Ahsan's blog.`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  if (sanityConfigurationError) {
    return (
      <main className="min-h-screen bg-[#000101] px-6 py-24 text-gray-200">
        <section className="mx-auto max-w-xl rounded-2xl border border-primary/40 bg-[#021820] p-8">
          <h1 className="text-2xl font-bold text-primary">
            Blog setup required
          </h1>
          <p className="mt-4 leading-7 text-gray-300">
            {sanityConfigurationError}
          </p>
        </section>
      </main>
    );
  }

  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage?.asset
    ? urlFor(post.mainImage).width(1600).height(900).fit("crop").url()
    : null;

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#000808] via-[#000101] to-[#000808] px-5 py-12 text-gray-200 md:px-10 md:py-16">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/blog"
          className="text-sm font-medium text-primary transition hover:text-teal-300"
        >
          ← All articles
        </Link>
        <header className="mb-10 mt-10">
          <time
            dateTime={post.publishedAt}
            className="text-sm font-medium uppercase tracking-widest text-primary"
          >
            {new Date(post.publishedAt).toLocaleDateString("en", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-6 text-lg leading-8 text-gray-400">
              {post.excerpt}
            </p>
          )}
        </header>

        {imageUrl && (
          <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl border border-[#123333]">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        )}

        {post.body && (
          <div className="mx-auto max-w-3xl">
            <PortableTextRenderer value={post.body} />
          </div>
        )}
      </article>
    </main>
  );
}
