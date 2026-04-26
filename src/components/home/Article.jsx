import { Bookmark, Eye, Share2, Clock, Tag } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import StarRating from "@/components/ui/StarRating";
import CategoryBadge from "@/components/ui/CategoryBadge";
import { calculateReadingTime } from "@/services/news";
import Link from "next/link";

/**
 * Article Component
 * Displays a single news article with full details
 */
const Article = ({ article }) => {
  const readingTime = calculateReadingTime(article?.details);
  console.log(article);

  return (
    <article className="card">
      {/* Author Header */}
      <div className="flex items-center justify-between p-6 bg-dark-8 border-b border-dark-6">
        <div className="flex items-center space-x-4">
          <Image
            src={article?.author?.img || "/api/placeholder/48/48"}
            alt={article?.author?.name || "Author"}
            width={48}
            height={48}
            className="rounded-full object-cover ring-2 ring-dark-6"
          />
          <div>
            <h3 className="font-semibold text-dark-1">
              {article?.author?.name}
            </h3>
            <time className="text-xs text-dark-4">
              {article?.author?.published_date
                ? format(
                    new Date(article.author.published_date),
                    "MMMM dd, yyyy",
                  )
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
            {article?.title}
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <CategoryBadge categoryId={article?.category_id} />
            {article?.others?.is_trending && (
              <span className="inline-flex items-center px-3 py-1 bg-warning/10 text-warning rounded-full font-medium">
                🔥 Trending
              </span>
            )}
            {article?.others?.is_today_pick && (
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
            src={
              article?.image_url ||
              article?.thumbnail_url ||
              "/api/placeholder/800/400"
            }
            alt={article?.title || "News featured image"}
            width={800}
            height={400}
            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Article Text */}
        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-dark-3 leading-relaxed mb-4 line-clamp-4">
            {article?.details}
          </p>
        </div>

        {/* Tags */}
        {article?.tags && article.tags.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center flex-wrap gap-2">
              <Tag size={16} className="text-dark-4" />
              {article.tags.map((tag, index) => (
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
        <Link
          href={`/news/${article._id || article.id}`}
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all-smooth focus-ring group"
        >
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
        </Link>

        {/* Article Footer */}
        <footer className="flex items-center justify-between pt-6 mt-6 border-t border-dark-6">
          <div className="flex items-center space-x-3">
            <StarRating rating={article?.rating?.number || 0} />
            <span className="text-lg font-semibold text-dark-2">
              {article?.rating?.number || "0"}
            </span>
            {article?.rating?.badge && (
              <span className="text-sm text-dark-4 capitalize">
                ({article.rating.badge})
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2 text-dark-4">
            <Eye size={18} />
            <span className="font-medium">
              {article?.total_view?.toLocaleString() || "0"} views
            </span>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Article;
