import Link from "next/link";
import BlogPostCard from "@/components/blog/BlogPostCard";
import {
  getPublishedPosts,
  sanityConfigurationError,
} from "@/lib/sanity";

export const metadata = {
  title: "Blog | Mehedi Ahsan",
  description: "Notes, lessons, and ideas from Mehedi Ahsan.",
};

export const revalidate = 60;

export default async function BlogPage() {
  if (sanityConfigurationError) {
    return (
      <main className="min-h-screen bg-gradient-to-r from-[#000808] via-[#000101] to-[#000808] px-6 py-24 text-gray-200">
        <ConfigurationMessage />
      </main>
    );
  }

  const posts = await getPublishedPosts();

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#000808] via-[#000101] to-[#000808] px-5 py-16 text-gray-200 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="text-sm font-medium text-primary transition hover:text-teal-300"
        >
          ← Back to portfolio
        </Link>
        <header className="mx-auto mb-14 mt-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Notes & ideas
          </p>
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            The <span className="text-primary">Blog</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Writing about software, the web, and things I learn along the way.
          </p>
          <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-primary" />
        </header>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center text-gray-400">
            No published posts yet. Publish your first article in Sanity Studio.
          </p>
        )}
      </div>
    </main>
  );
}

function ConfigurationMessage() {
  return (
    <section className="mx-auto max-w-xl rounded-2xl border border-primary/40 bg-[#021820] p-8">
      <h1 className="text-2xl font-bold text-primary">Blog setup required</h1>
      <p className="mt-4 leading-7 text-gray-300">{sanityConfigurationError}</p>
      <p className="mt-3 text-sm text-gray-400">
        Restart the development server after adding the variables.
      </p>
    </section>
  );
}
