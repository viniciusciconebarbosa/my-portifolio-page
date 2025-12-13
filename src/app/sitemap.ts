// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.viniciusbarbosadev.tech', // Sua URL principal
      lastModified: new Date(), // Data de hoje
      changeFrequency: 'monthly', // Com que frequência a página muda?
      priority: 1, // A prioridade máxima (1.0) para sua página inicial
    },
  ]
}
