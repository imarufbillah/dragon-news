/**
 * News API Service
 * Handles all news-related API calls with proper caching strategies
 */

const API_BASE_URL = "https://openapi.programming-hero.com/api/news";

/**
 * Fetch all news categories
 * @returns {Promise<Array>} Array of category objects
 */
export async function fetchCategories() {
  const response = await fetch(`${API_BASE_URL}/categories`, {
    cache: "force-cache", // Cache indefinitely (categories rarely change)
    next: { tags: ["categories"] }, // For revalidation
  });

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await response.json();
  return data.data.news_category;
}

/**
 * Fetch news by category ID
 * @param {string} categoryId - The category ID
 * @returns {Promise<Array>} Array of news articles
 */
export async function fetchNewsByCategory(categoryId) {
  const id = Number(categoryId);
  const response = await fetch(`${API_BASE_URL}/category/0${id}`, {
    next: { revalidate: 300 }, // Revalidate every 5 minutes
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch news for category ${categoryId}`);
  }

  const data = await response.json();
  return data.data;
}

/**
 * Fetch news details by ID
 * @param {string} newsId - The news article ID
 * @returns {Promise<Object>} News article details
 */
export async function fetchNewsById(newsId) {
  const response = await fetch(`${API_BASE_URL}/${newsId}`, {
    next: { revalidate: 600 }, // Revalidate every 10 minutes
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch news with ID ${newsId}`);
  }

  const data = await response.json();
  return data.data;
}

/**
 * Fetch all news (from local JSON)
 * @returns {Promise<Array>} Array of all news articles
 */
export async function fetchAllNews() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/news.json`, {
    next: { revalidate: 300 }, // Revalidate every 5 minutes
  });

  if (!response.ok) {
    throw new Error("Failed to fetch all news");
  }

  return response.json();
}
