/**
 * News Utility Functions
 * Business logic and data transformations for news
 */

/**
 * Sort categories to put "All News" at the top
 * @param {Array} categories - Array of category objects
 * @returns {Array} Sorted categories
 */
export function sortCategoriesWithAllNewsFirst(categories) {
  return [...categories].sort((a, b) => {
    if (a.category_id === "08") return -1; // "All News" goes first
    if (b.category_id === "08") return 1;
    return 0; // Keep original order for other categories
  });
}

/**
 * Get news for a specific category or all news
 * @param {string} categoryId - The category ID
 * @param {Array} categorizedNews - News from specific category
 * @param {Array} allNews - All news articles
 * @returns {Array} Filtered news array
 */
export function getNewsForCategory(categoryId, categorizedNews, allNews) {
  return categoryId === "08" ? allNews : categorizedNews;
}

/**
 * Category mapping
 */
export const CATEGORY_MAP = {
  0: "All News",
  1: "Breaking News",
  2: "Business",
  3: "Technology",
  4: "Health",
  5: "Sports",
  6: "Entertainment",
  7: "Science",
  8: "Politics",
  9: "Education",
  10: "Lifestyle",
};

/**
 * Category color mapping for badges
 */
export const CATEGORY_COLORS = {
  1: "bg-error text-white", // Breaking News - Red
  2: "bg-primary text-white", // Business - Primary
  3: "bg-info text-white", // Technology - Blue
  4: "bg-success text-white", // Health - Green
  5: "bg-warning text-white", // Sports - Orange
  6: "bg-purple-500 text-white", // Entertainment - Purple
  7: "bg-indigo-500 text-white", // Science - Indigo
  8: "bg-gray-600 text-white", // Politics - Gray
  9: "bg-teal-500 text-white", // Education - Teal
  10: "bg-pink-500 text-white", // Lifestyle - Pink
  0: "bg-dark-3 text-white", // All News - Default
};

/**
 * Calculate reading time based on content length
 * @param {string} text - Article text content
 * @returns {number} Reading time in minutes
 */
export function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const wordCount = text?.split(" ").length || 0;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime > 0 ? readingTime : 1;
}

/**
 * Get category name by ID
 * @param {number|string} categoryId - Category ID
 * @returns {string} Category name
 */
export function getCategoryName(categoryId) {
  return CATEGORY_MAP[categoryId] || "News";
}

/**
 * Get category color by ID
 * @param {number|string} categoryId - Category ID
 * @returns {string} Tailwind CSS classes for category color
 */
export function getCategoryColor(categoryId) {
  return CATEGORY_COLORS[categoryId] || CATEGORY_COLORS[0];
}
