This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Social link previews

The root layout provides Open Graph metadata for WhatsApp, Facebook, Threads,
LinkedIn and other compatible clients, plus a large-image Twitter/X card.
`public/social-preview-v2.jpg` is a static 1200×630 JPEG with its key content
inside the central square to tolerate thumbnail cropping. Regenerate it with
`node scripts/generate-social-preview.mjs` (uses Next.js's installed sharp dependency).

The production origin defaults to `https://ehtesham-ali-portfolio.netlify.app`.
Set `SITE_URL` before building if moving to another domain. Vercel deployments
can also use `VERCEL_PROJECT_PRODUCTION_URL`.

After deployment, check the page source for absolute `og:image` and `twitter:image`
URLs and verify the JPEG returns HTTP 200 with `image/jpeg`. Platforms control
card size, cropping, preview availability and caching; metadata cannot force a
particular layout or make every Instagram surface show a website card.
Refresh Facebook's cache with Sharing Debugger and LinkedIn's with Post Inspector.
Already-sent WhatsApp messages may keep the old preview; test a new share.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
