import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return null;
      }

      const imageUrl = urlFor(value).width(1400).auto("format").url();

      return (
        <figure className="my-10">
          <Image
            src={imageUrl}
            alt={value.alt || ""}
            width={1400}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full rounded-xl border border-[#123333]"
          />
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-gray-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mb-4 mt-12 text-2xl font-semibold text-gray-100 md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-9 text-xl font-semibold text-gray-100 md:text-2xl">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="my-5 leading-8 text-gray-300">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-primary pl-5 text-lg italic text-gray-300">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-5 list-disc space-y-2 pl-6 leading-7 text-gray-300">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-5 list-decimal space-y-2 pl-6 leading-7 text-gray-300">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-primary underline underline-offset-4 hover:text-teal-300"
      >
        {children}
      </a>
    ),
  },
};

export default function PortableTextRenderer({ value }) {
  return <PortableText value={value} components={components} />;
}
