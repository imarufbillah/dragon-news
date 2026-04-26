import { Star, StarHalf } from "lucide-react";

/**
 * StarRating Component
 * Displays a star rating with full, half, and empty stars
 */
export default function StarRating({ rating = 0, size = 16, className = "" }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          size={size}
          className="text-warning fill-current"
        />
      ))}
      {hasHalfStar && (
        <StarHalf size={size} className="text-warning fill-current" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={size} className="text-dark-5" />
      ))}
    </div>
  );
}
