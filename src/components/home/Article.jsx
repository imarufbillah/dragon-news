import { Bookmark, Eye, Share2, Star } from "lucide-react";
import Image from "next/image";
import demoUser from "@/assets/demo-user.png";
import demoCardThumbnail from "@/assets/demo-card-thumbnail.png";

const Article = () => {
  return (
    <article className="card">
      {/* Author Header */}
      <div className="flex items-center justify-between p-6 bg-dark-8 border-b border-dark-6">
        <div className="flex items-center space-x-4">
          <Image
            src={demoUser}
            alt="Awlad Hossain"
            width={48}
            height={48}
            className="rounded-full object-cover ring-2 ring-dark-6"
          />
          <div>
            <h3 className="font-semibold text-dark-1">Awlad Hossain</h3>
            <p className="text-sm text-dark-4">Senior Correspondent</p>
            <time className="text-xs text-dark-4">August 21, 2022</time>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2.5 rounded-lg text-dark-4 hover:text-primary hover:bg-primary-light transition-all-smooth focus-ring">
            <Bookmark size={18} />
          </button>
          <button className="p-2.5 rounded-lg text-dark-4 hover:text-primary hover:bg-primary-light transition-all-smooth focus-ring">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-6">
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-dark-1 leading-tight mb-4">
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
            Aid Package Yet
          </h2>
          <div className="flex items-center space-x-4 text-sm text-dark-4">
            <span className="inline-flex items-center px-3 py-1 bg-primary-light text-primary rounded-full font-medium">
              Breaking News
            </span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-6 overflow-hidden rounded-xl">
          <Image
            src={demoCardThumbnail}
            alt="News featured image"
            width={800}
            height={400}
            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Article Text */}
        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-dark-3 leading-relaxed mb-4">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
            Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
            United States, Worthy News (Worthy News) – U.S. President Joe Biden
            has announced nearly $3 billion in new U.S. military aid for Ukraine
            and other European allies, marking the largest single package of
            assistance since the conflict began.
          </p>
          <p className="text-dark-3 leading-relaxed">
            This unprecedented commitment demonstrates the administration&apos;s
            continued support for Ukraine&apos;s defense efforts and regional
            stability in Eastern Europe...
          </p>
        </div>

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
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-warning fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold text-dark-2">4.9</span>
            <span className="text-sm text-dark-4">(127 reviews)</span>
          </div>
          <div className="flex items-center space-x-2 text-dark-4">
            <Eye size={18} />
            <span className="font-medium">2,499 views</span>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Article;
