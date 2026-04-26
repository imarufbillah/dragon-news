import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Eye,
  Star,
  TrendingUp,
  Award,
} from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import CategoryBadge from "@/components/ui/CategoryBadge";

const ArticleDetails = ({ article }) => {
  // Handle both array and object responses
  const displayArticle = Array.isArray(article) ? article[0] : article;

  // Fallback if no article data
  if (!displayArticle) {
    return (
      <article className="card p-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-dark-7 rounded-full flex items-center justify-center mx-auto">
            <Eye size={32} className="text-dark-4" />
          </div>
          <h3 className="text-xl font-semibold text-dark-2">
            Article not found
          </h3>
          <p className="text-dark-4">
            The article you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link
            href="/category/08"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all-smooth focus-ring mt-4"
          >
            <ArrowLeft size={18} />
            Back to All News
          </Link>
        </div>
      </article>
    );
  }

  const {
    title,
    image_url,
    thumbnail_url,
    details,
    author,
    category_id,
    rating,
    total_view,
    others_info,
  } = displayArticle;

  return (
    <article className="space-y-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-dark-4">
        <Link
          href="/category/08"
          className="hover:text-primary transition-colors"
        >
          Home
        </Link>
        <span>/</span>
        <Link
          href={`/category/${category_id}`}
          className="hover:text-primary transition-colors"
        >
          Category
        </Link>
        <span>/</span>
        <span className="text-dark-2 font-medium">Article</span>
      </nav>

      {/* Main Article Card */}
      <div className="card overflow-hidden">
        {/* Featured Image */}
        <div className="relative overflow-hidden bg-dark-8">
          <Image
            src={image_url || thumbnail_url || "/api/placeholder/1200/600"}
            alt={title || "Article image"}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />

          {/* Overlay Badges */}
          <div className="absolute top-6 left-6 flex flex-wrap gap-3">
            <CategoryBadge categoryId={category_id} />
            {others_info?.is_trending && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-warning text-white rounded-lg font-semibold text-sm shadow-lg backdrop-blur-sm bg-opacity-95">
                <TrendingUp size={16} />
                Trending
              </span>
            )}
            {others_info?.is_todays_pick && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-success text-white rounded-lg font-semibold text-sm shadow-lg backdrop-blur-sm bg-opacity-95">
                <Award size={16} />
                Today&apos;s Pick
              </span>
            )}
          </div>
        </div>

        {/* Article Content */}
        <div className="p-6 md:p-10">
          {/* Article Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-1 leading-tight mb-8">
            {title}
          </h1>

          {/* Author & Meta Information */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 mb-8 border-b border-dark-6">
            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src={author?.img || "/api/placeholder/56/56"}
                  alt={author?.name || "Author"}
                  width={56}
                  height={56}
                  className="rounded-full object-cover ring-2 ring-dark-6"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white"></div>
              </div>
              <div>
                <p className="font-semibold text-dark-1 text-lg">
                  {author?.name || "Unknown Author"}
                </p>
                <div className="flex items-center gap-2 text-sm text-dark-4">
                  <Calendar size={14} />
                  <time>
                    {author?.published_date
                      ? format(
                          new Date(author.published_date),
                          "MMMM dd, yyyy 'at' hh:mm a",
                        )
                      : "Date not available"}
                  </time>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6">
              {/* Rating */}
              {rating && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 px-3 py-2 bg-warning/10 rounded-lg">
                    <Star size={18} className="text-warning fill-warning" />
                    <span className="font-bold text-dark-1">
                      {rating.number}
                    </span>
                  </div>
                  {rating.badge && (
                    <span className="text-sm font-medium text-dark-3 capitalize">
                      {rating.badge}
                    </span>
                  )}
                </div>
              )}

              {/* Views */}
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-7 rounded-lg">
                <Eye size={18} className="text-dark-4" />
                <span className="font-semibold text-dark-2">
                  {total_view?.toLocaleString() || "0"}
                </span>
                <span className="text-sm text-dark-4">views</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-dark-2 leading-relaxed text-lg mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
              {details}
            </p>
          </div>

          {/* Article Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 mt-8 border-t border-dark-6">
            {/* Back Button */}
            <Link
              href={`/category/${category_id || "08"}`}
              className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all-smooth focus-ring group"
            >
              <ArrowLeft
                size={20}
                className="transition-transform group-hover:-translate-x-1"
              />
              All news in this category
            </Link>

            {/* Share Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-dark-4 font-medium">Share:</span>
              <button
                className="p-3 rounded-lg bg-dark-7 text-dark-3 hover:bg-primary hover:text-white transition-all-smooth focus-ring"
                aria-label="Share on Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button
                className="p-3 rounded-lg bg-dark-7 text-dark-3 hover:bg-info hover:text-white transition-all-smooth focus-ring"
                aria-label="Share on Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              <button
                className="p-3 rounded-lg bg-dark-7 text-dark-3 hover:bg-success hover:text-white transition-all-smooth focus-ring"
                aria-label="Share on WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleDetails;
