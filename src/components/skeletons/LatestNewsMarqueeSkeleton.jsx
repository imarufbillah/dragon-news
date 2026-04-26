const LatestNewsMarqueeSkeleton = () => {
  return (
    <section className="bg-dark-7 border-y border-dark-6 overflow-hidden">
      <div className="container mx-auto flex items-center h-16 px-4">
        {/* Latest Badge Skeleton */}
        <div className="shrink-0 mr-6">
          <div className="inline-flex items-center px-4 py-2 bg-dark-6 rounded-md h-9 w-32 animate-pulse">
            <div className="w-2 h-2 bg-dark-5 rounded-full mr-2"></div>
            <div className="h-3 w-20 bg-dark-5 rounded"></div>
          </div>
        </div>

        {/* News Ticker Skeleton */}
        <div className="flex-1 overflow-hidden h-full flex items-center animate-pulse">
          <div className="flex items-center space-x-12">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-1.5 h-1.5 bg-dark-6 rounded-full mr-3"></div>
                <div className="h-4 bg-dark-6 rounded" style={{ width: `${Math.random() * 200 + 150}px` }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsMarqueeSkeleton;
