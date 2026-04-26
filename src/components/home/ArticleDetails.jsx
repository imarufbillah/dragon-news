import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const ArticleDetails = ({ article }) => {
  // Handle both array and object responses
  const displayArticle = Array.isArray(article) ? article[0] : article;

  // Fallback if no article data
  if (!displayArticle) {
    return (
      <article className="card p-8">
        <p className="text-dark-4 text-center">Article not found</p>
      </article>
    );
  }

  return (
    <article className="card">
      {/* Featured Image */}
      <div className="overflow-hidden rounded-t-xl">
        <Image
          src={
            displayArticle.image_url ||
            displayArticle.thumbnail_url ||
            "/api/placeholder/800/450"
          }
          alt={displayArticle.title || "Article image"}
          width={800}
          height={450}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <div className="p-6 md:p-8">
        {/* Article Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-1 leading-tight mb-6">
          {displayArticle.title}
        </h1>

        {/* Article Body with embedded metadata */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-dark-4 leading-relaxed text-base mb-6">
            {displayArticle.details}
          </p>
        </div>

        {/* Back to Category Button */}
        <div className="pt-6">
          <Link
            href={`/category/${displayArticle.category_id || "08"}`}
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all-smooth focus-ring group"
          >
            <ArrowLeft
              size={20}
              className="transition-transform group-hover:-translate-x-1"
            />
            All news in this category
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleDetails;
