# Mehedi Ahsan Portfolio

Portfolio website built with Next.js App Router, React, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Sanity blog setup

The blog uses Sanity for content and embeds its Studio at `/studio`.

1. Create a Sanity project and a dataset (for example, `production`).
2. Copy the environment template:

   ```powershell
   Copy-Item .env.example .env.local
   ```

3. Add your Sanity project ID and dataset to `.env.local`:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. Install dependencies and start the app:

   ```bash
   npm install
   npm run dev
   ```

5. Open `/studio`. Create a Blog post, add a publication date that is not in the future, then
   publish it. It will appear on `/blog`; each article is available at
   `/blog/<slug>`.

If either environment variable is missing, the blog and Studio routes display
setup instructions instead of attempting a Sanity request.

The Studio config and post schema are in `sanity.config.js` and
`src/sanity/schemas/`. Sanity images are served from `cdn.sanity.io`.
