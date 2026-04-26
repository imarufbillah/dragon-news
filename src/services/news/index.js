/**
 * News Service - Main Entry Point
 * Combines API calls with business logic
 */

import {
  fetchCategories,
  fetchNewsByCategory,
  fetchNewsById,
  fetchAllNews,
} from "../api/news.service";
import {
  sortCategoriesWithAllNewsFirst,
  getNewsForCategory,
} from "./news.utils";

/**
 * Get all categories sorted with "All News" first
 * @returns {Promise<Array>} Sorted categories
 */
export async function getCategories() {
  const categories = await fetchCategories();
  return sortCategoriesWithAllNewsFirst(categories);
}

/**
 * Get news by category ID
 * Handles special case for "All News" (category 08)
 * @param {string} categoryId - The category ID
 * @returns {Promise<Array>} News articles
 */
export async function getNewsByCategoryId(categoryId) {
  if (categoryId === "08") {
    return await fetchAllNews();
  }
  return await fetchNewsByCategory(categoryId);
}

/**
 * Get news details by ID
 * @param {string} newsId - The news article ID
 * @returns {Promise<Object>} News article details
 */
export async function getNewsDetailsById(newsId) {
  return await fetchNewsById(newsId);
}

// Re-export utilities for convenience
export * from "./news.utils";
