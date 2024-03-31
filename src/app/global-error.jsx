"use client";
import ErrorMessage from "@/components/shared/ErrorMessage";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <ErrorMessage error={error} reset={reset} />
      </body>
    </html>
  );
}
