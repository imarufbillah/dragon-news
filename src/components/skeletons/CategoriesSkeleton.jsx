const CategoriesSkeleton = () => {
  return (
    <nav className="space-y-2 animate-pulse">
      {[...Array(11)].map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-dark-7 rounded-lg"
        >
          <div className="h-4 w-32 bg-dark-6 rounded"></div>
          <div className="h-4 w-4 bg-dark-6 rounded"></div>
        </div>
      ))}
    </nav>
  );
};

export default CategoriesSkeleton;
