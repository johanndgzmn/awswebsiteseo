SEO test using a sample react app.

# Demo
[https://awswebsiteseo-git-main-johanndgzmns-projects.vercel.app/](https://awswebsiteseo.vercel.app/)
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
2. Disable App Router when asked in creating the app.
3. For static site generation:
    - Use getStaticProps for Static Generation
        - In a page component (e.g., pages/index.js), use getStaticProps to fetch data at build time.
    - Use getStaticPaths for Dynamic Routes
        - For dynamic pages (e.g., /posts/[id].js), use getStaticPaths to generate static paths at build time.
4. Run using: npm run dev or npm start

## How to verify if it works?
1. Setup next.config.js
```/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static site generation
};

module.exports = nextConfig;
```
Then run npm run build, then find the static HTML files in the '/out' folder. The folder should have pre-rendered .html files for each static page.

2. You should be able to open index.html in the '/out' folder in a browser without a Node.js server.


# Implementing in Amazon S3
1. Create an S3 Bucket.
2. Enable Static Website Hosting.
3. Upload static files from the '/out' folder.
4. Configure S3 Bucket Permissions.
