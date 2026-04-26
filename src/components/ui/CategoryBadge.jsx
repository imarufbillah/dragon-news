import { getCategoryName, getCategoryColor } from "@/services/news";

/**
 * CategoryBadge Component
 * Displays a colored badge for a news category
 */
export default function CategoryBadge({ categoryId, className = "" }) {
  const categoryName = getCategoryName(categoryId);
  const categoryColor = getCategoryColor(categoryId);

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full font-medium ${categoryColor} ${className}`}
    >
      {categoryName}
    </span>
  );
}
