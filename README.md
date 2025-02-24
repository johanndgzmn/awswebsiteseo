SEO test using a sample react app for AWS Website.

# Demo
https://awswebsiteseo-git-main-johanndgzmns-projects.vercel.app/
# Static Site Generation (SSG)
## What is it?
- It basically generates the page HTML at build time, instead of generating them dynamically on the server or client-side.

## Benefits of SSG
1. Improved site performance
2. Better search engine optimization (SEO), since search engine crawlers can easily discover and index the content of your website due to pre-rendered HTML pages.
3. Lower hosting costs

## How to implement?
Using Next.js:
1. Install next js using: npx create-next-app@latest
2. For static site generation:
    - Use getStaticProps for Static Generation
        - In a page component (e.g., pages/index.js), use getStaticProps to fetch data at build time.
    - Use getStaticPaths for Dynamic Routes
        - For dynamic pages (e.g., /posts/[id].js), use getStaticPaths to generate static paths at build time.
3. Run using: npm run dev or npm start

## How to verify if it is actually working:
Run 
