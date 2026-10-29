import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

export default function BlogPostCard({ post }) {
  const imageUrl = post.mainImage?.asset
    ? urlFor(post.mainImage).width(960).height(600).fit("crop").url()
    : null;

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#123333] bg-[#021820]/50 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-primary/70">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[8/5] overflow-hidden bg-[#06191d]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#0f766e]/40 to-[#000101] text-5xl font-bold text-primary/70">
              {post.title.charAt(0)}
            </div>
          )}
        </div>
        <div className="p-6">
          <time
            dateTime={post.publishedAt}
            className="text-xs font-medium uppercase tracking-widest text-primary"
          >
            {new Date(post.publishedAt).toLocaleDateString("en", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h2 className="mt-3 text-xl font-semibold text-gray-100 transition-colors group-hover:text-primary">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
              {post.excerpt}
            </p>
          )}
          <span className="mt-5 inline-block text-sm font-semibold text-primary">
            Read article <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
