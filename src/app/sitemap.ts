import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kalaimagalmatric.edu.in';
  const pages = ['', '/about', '/academics', '/facilities', '/gallery', '/contact', '/apply', '/admissions'];
  
  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '' ? 1.0 : 0.8,
  }));
}
