const ArticleSkeleton = () => {
  return (
    <article className="card animate-pulse">
      {/* Author Header Skeleton */}
      <div className="flex items-center justify-between p-6 bg-dark-8 border-b border-dark-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-dark-6 rounded-full"></div>
          <div className="space-y-2">
            <div className="h-4 w-32 bg-dark-6 rounded"></div>
            <div className="h-3 w-24 bg-dark-6 rounded"></div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-dark-6 rounded-lg"></div>
          <div className="w-10 h-10 bg-dark-6 rounded-lg"></div>
        </div>
      </div>

      {/* Article Content Skeleton */}
      <div className="p-6">
        {/* Title and Badges */}
        <div className="mb-6">
          <div className="h-8 bg-dark-6 rounded mb-4 w-3/4"></div>
          <div className="h-6 bg-dark-6 rounded mb-2 w-full"></div>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <div className="h-6 w-24 bg-dark-6 rounded-full"></div>
            <div className="h-6 w-20 bg-dark-6 rounded-full"></div>
            <div className="h-6 w-28 bg-dark-6 rounded-full"></div>
          </div>
        </div>

        {/* Featured Image Skeleton */}
        <div className="mb-6 overflow-hidden rounded-xl">
          <div className="w-full h-96 bg-dark-6"></div>
        </div>

        {/* Article Text Skeleton */}
        <div className="space-y-3 mb-6">
          <div className="h-4 bg-dark-6 rounded w-full"></div>
          <div className="h-4 bg-dark-6 rounded w-full"></div>
          <div className="h-4 bg-dark-6 rounded w-5/6"></div>
          <div className="h-4 bg-dark-6 rounded w-4/5"></div>
        </div>

        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="h-6 w-20 bg-dark-6 rounded-full"></div>
          <div className="h-6 w-24 bg-dark-6 rounded-full"></div>
          <div className="h-6 w-16 bg-dark-6 rounded-full"></div>
        </div>

        {/* Button Skeleton */}
        <div className="h-12 bg-dark-6 rounded-lg w-full mb-6"></div>

        {/* Footer Skeleton */}
        <div className="flex items-center justify-between pt-6 border-t border-dark-6">
          <div className="flex items-center space-x-1">
            <div className="h-4 w-4 bg-dark-6 rounded"></div>
            <div className="h-4 w-4 bg-dark-6 rounded"></div>
            <div className="h-4 w-4 bg-dark-6 rounded"></div>
            <div className="h-4 w-4 bg-dark-6 rounded"></div>
            <div className="h-4 w-4 bg-dark-6 rounded"></div>
            <div className="h-4 w-16 bg-dark-6 rounded ml-2"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 bg-dark-6 rounded"></div>
            <div className="h-4 w-20 bg-dark-6 rounded"></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleSkeleton;
