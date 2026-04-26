/**
 * Site Configuration
 */

export const siteConfig = {
  name: "Dragon News",
  description: "Journalism Without Fear or Favour",
  url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  
  // API Configuration
  api: {
    baseUrl: "https://openapi.programming-hero.com/api/news",
    timeout: 10000,
  },
  
  // Cache Configuration
  cache: {
    categories: "force-cache", // Never expire
    news: 300, // 5 minutes
    newsDetails: 600, // 10 minutes
  },
  
  // Reading Configuration
  reading: {
    wordsPerMinute: 200,
  },
  
  // Social Media Links
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
};
