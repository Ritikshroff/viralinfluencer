const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/Services', changefreq: 'weekly', priority: 0.8 },
    { url: '/submit-form', changefreq: 'monthly', priority: 0.7 },
    { url: '/Influencer', changefreq: 'monthly', priority: 0.7 },
    // { url: '/submit-form', changefreq: 'monthly', priority: 0.7 },
    // Add more pages as needed
  ];

  const sitemapStream = new SitemapStream({ hostname: 'https://viralfluencer.com' });

  links.forEach((link) => {
    sitemapStream.write(link);
  });

  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream).then((data) => data.toString());
  createWriteStream('./public/sitemap.xml').write(sitemap);
  console.log('Sitemap successfully generated!');
}

generateSitemap();
