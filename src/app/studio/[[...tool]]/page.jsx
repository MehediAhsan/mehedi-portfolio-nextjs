"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  const missingEnvironment = [
    !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
      "NEXT_PUBLIC_SANITY_PROJECT_ID",
    !process.env.NEXT_PUBLIC_SANITY_DATASET && "NEXT_PUBLIC_SANITY_DATASET",
  ].filter(Boolean);

  if (missingEnvironment.length > 0) {
    return (
      <main className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000101] px-6 text-gray-200">
        <section className="max-w-xl rounded-2xl border border-primary/40 bg-[#021820] p-8">
          <h1 className="text-2xl font-bold text-primary">
            Sanity Studio needs configuration
          </h1>
          <p className="mt-4 leading-7 text-gray-300">
            Add the following values to your .env.local file, then restart the
            development server:
          </p>
          <ul className="mt-4 list-inside list-disc font-mono text-sm text-gray-100">
            {missingEnvironment.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>
      </main>
    );
  }

  return (
    <main className="fixed inset-0 z-[100]">
      <NextStudio config={config} />
    </main>
  );
}
