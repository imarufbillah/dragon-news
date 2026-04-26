import {
  Bookmark,
  Eye,
  Share2,
  Star,
  StarHalf,
  Clock,
  Tag,
} from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";

// Category mapping
const categories = {
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

// Category colors
const categoryColors = {
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

// Calculate reading time based on content length
const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const wordCount = text?.split(" ").length || 0;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime > 0 ? readingTime : 1;
};

// Render star rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          size={16}
          className="text-warning fill-current"
        />
      ))}
      {hasHalfStar && (
        <StarHalf size={16} className="text-warning fill-current" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={16} className="text-dark-5" />
      ))}
    </>
  );
};

const Article = ({ n }) => {
  const categoryName = categories[n?.category_id] || "News";
  const categoryColor = categoryColors[n?.category_id] || categoryColors[0];
  const readingTime = calculateReadingTime(n?.details);

  return (
    <article className="card">
      {/* Author Header */}
      <div className="flex items-center justify-between p-6 bg-dark-8 border-b border-dark-6">
        <div className="flex items-center space-x-4">
          <Image
            src={n?.author?.img || "/api/placeholder/48/48"}
            alt={n?.author?.name || "Author"}
            width={48}
            height={48}
            className="rounded-full object-cover ring-2 ring-dark-6"
          />
          <div>
            <h3 className="font-semibold text-dark-1">{n?.author?.name}</h3>
            <time className="text-xs text-dark-4">
              {n?.author?.published_date
                ? format(new Date(n.author.published_date), "MMMM dd, yyyy")
                : "Date not available"}
            </time>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="p-2.5 rounded-lg text-dark-4 hover:text-primary hover:bg-primary-light transition-all-smooth focus-ring"
            aria-label="Bookmark article"
          >
            <Bookmark size={18} />
          </button>
          <button
            className="p-2.5 rounded-lg text-dark-4 hover:text-primary hover:bg-primary-light transition-all-smooth focus-ring"
            aria-label="Share article"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-6">
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-dark-1 leading-tight mb-4">
            {n?.title}
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full font-medium ${categoryColor}`}
            >
              {categoryName}
            </span>
            {n?.others?.is_trending && (
              <span className="inline-flex items-center px-3 py-1 bg-warning/10 text-warning rounded-full font-medium">
                🔥 Trending
              </span>
            )}
            {n?.others?.is_today_pick && (
              <span className="inline-flex items-center px-3 py-1 bg-success/10 text-success rounded-full font-medium">
                ⭐ Editor&apos;s Pick
              </span>
            )}
            <span className="flex items-center text-dark-4">
              <Clock size={14} className="mr-1" />
              {readingTime} min read
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-6 overflow-hidden rounded-xl">
          <Image
            src={n?.image_url || n?.thumbnail_url || "/api/placeholder/800/400"}
            alt={n?.title || "News featured image"}
            width={800}
            height={400}
            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Article Text */}
        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-dark-3 leading-relaxed mb-4 line-clamp-4">
            {n?.details}
          </p>
        </div>

        {/* Tags */}
        {n?.tags && n.tags.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center flex-wrap gap-2">
              <Tag size={16} className="text-dark-4" />
              {n.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 bg-dark-7 text-dark-3 text-xs rounded-md hover:bg-dark-6 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Read More Button */}
        <button className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all-smooth focus-ring group">
          Read Full Article
          <svg
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Article Footer */}
        <footer className="flex items-center justify-between pt-6 mt-6 border-t border-dark-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              {renderStars(n?.rating?.number || 0)}
            </div>
            <span className="text-lg font-semibold text-dark-2">
              {n?.rating?.number || "0"}
            </span>
            {n?.rating?.badge && (
              <span className="text-sm text-dark-4 capitalize">
                ({n.rating.badge})
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2 text-dark-4">
            <Eye size={18} />
            <span className="font-medium">
              {n?.total_view?.toLocaleString() || "0"} views
            </span>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Article;
