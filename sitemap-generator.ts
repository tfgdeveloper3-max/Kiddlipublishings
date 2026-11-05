import { SitemapStream, streamToPromise, type SitemapItemLoose, EnumChangefreq } from "sitemap";
import { Readable } from "node:stream";
import { writeFileSync } from "node:fs";
import path from "node:path";

const HOSTNAME = "https://kiddlipublishings.com";

const mainPages: SitemapItemLoose[] = [
    { url: "/", changefreq: EnumChangefreq.WEEKLY, priority: 1.0 },
    { url: "/services", changefreq: EnumChangefreq.MONTHLY, priority: 0.9 },
    { url: "/about", changefreq: EnumChangefreq.MONTHLY, priority: 0.8 },
    { url: "/reviews", changefreq: EnumChangefreq.WEEKLY, priority: 0.8 },
    { url: "/contact", changefreq: EnumChangefreq.MONTHLY, priority: 0.7 },
];

const servicePaths = [
    // Full Book Creation & Publishing
    "creative-writing",
    "professional-editing",
    "interior-formatting",
    "print-setup-isbn",
    "worldwide-distribution",
    // Artwork & Custom Design
    "storybook-artwork",
    "character-design",
    "cover-page-formatting",
    "print-digital-assets",
    // Animation & Digital Magic
    "motion-production",
    "book-trailers",
    "audiobooks-narration",
    "interactive-ebooks",
    // Promotion & Book Launch
    "amazon-marketing",
    "book-launch",
    "social-media-influencers",
    "author-websites",
    "bookstore-outreach",
    "school-marketing",
    // Author World & Branding
    "author-character-branding",
    "character-merchandise",
    "educational-materials",
    "character-licensing",
];

const servicePages: SitemapItemLoose[] = servicePaths.map((slug) => ({
    url: `/services/${slug}`,
    changefreq: EnumChangefreq.MONTHLY,
    priority: 0.8,
}));

/* ---------- legal pages ---------- */
const legalPages: SitemapItemLoose[] = [
    { url: "/privacy-policy", changefreq: EnumChangefreq.YEARLY, priority: 0.3 },
    { url: "/terms-and-conditions", changefreq: EnumChangefreq.YEARLY, priority: 0.3 },
    { url: "/refund-policy", changefreq: EnumChangefreq.YEARLY, priority: 0.3 },
];

const routes: SitemapItemLoose[] = [...mainPages, ...servicePages, ...legalPages];

async function generateSitemap() {
    const sitemapPath = path.resolve("./public/sitemap.xml");
    const lastmod = new Date().toISOString();

    const stream = new SitemapStream({ hostname: HOSTNAME });
    const xml = await streamToPromise(Readable.from(routes.map((r) => ({ ...r, lastmod }))).pipe(stream));

    writeFileSync(sitemapPath, xml.toString());
    console.log(`Sitemap generated with ${routes.length} pages at: ${sitemapPath}`);
}

generateSitemap().catch((err) => {
    console.error("Sitemap generation failed:", err);
    process.exit(1);
});