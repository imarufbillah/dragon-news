"use client";
import { Search, FileX, ArrowLeft, Newspaper } from "lucide-react";
import Link from "next/link";

const EmptyNews = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      {/* Empty State Illustration */}
      <div className="relative mb-8">
        {/* Main Icon Container */}
        <div className="relative">
          <div className="w-32 h-32 bg-linear-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center mb-4">
            <Newspaper size={64} className="text-primary/40" />
          </div>

          {/* Floating Icons */}
          <div className="absolute -top-2 -right-2">
            <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center animate-pulse">
              <Search size={16} className="text-warning" />
            </div>
          </div>

          <div className="absolute -bottom-1 -left-3">
            <div className="w-6 h-6 bg-info/20 rounded-full flex items-center justify-center animate-bounce">
              <FileX size={12} className="text-info" />
            </div>
          </div>
        </div>
      </div>

      {/* Empty State Content */}
      <div className="text-center max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-1 mb-4">
          No News Found
        </h2>

        <p className="text-lg text-dark-3 mb-8 leading-relaxed">
          We couldn&apos;t find any articles in this category right now. Our
          newsroom is constantly updating with fresh stories.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/"
            className="btn-primary px-6 py-3 rounded-lg font-semibold hover-lift focus-ring group inline-flex items-center"
          >
            <ArrowLeft
              size={18}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />
            Back to All News
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyNews;
