const FeaturedStoriesSkeleton = () => {
  return (
    <div className="card animate-pulse">
      <div className="card-content">
        <div className="h-6 w-40 bg-dark-6 rounded mb-6"></div>
        <div className="space-y-6">
          {[...Array(3)].map((_, index) => (
            <article key={index} className="group">
              {/* Image Skeleton */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="w-full h-48 bg-dark-6"></div>
              </div>

              {/* Content Skeleton */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-20 bg-dark-6 rounded-full"></div>
                  <div className="h-3 w-24 bg-dark-6 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-dark-6 rounded w-full"></div>
                  <div className="h-4 bg-dark-6 rounded w-5/6"></div>
                </div>
              </div>

              {index < 2 && <div className="h-px bg-dark-6 mt-6"></div>}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedStoriesSkeleton;
