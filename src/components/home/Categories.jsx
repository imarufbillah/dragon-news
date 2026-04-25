const Categories = () => {
  return (
    <nav className="space-y-2">
      <button className="w-full text-left px-5 py-3.5 bg-primary text-white rounded-lg font-semibold text-base transition-all-smooth hover:bg-primary-hover focus-ring">
        National News
      </button>
      <button className="w-full text-left px-5 py-3.5 bg-dark-8 text-dark-3 rounded-lg font-medium text-base hover:bg-dark-7 hover:text-dark-2 transition-all-smooth focus-ring">
        Breaking News
      </button>
      <button className="w-full text-left px-5 py-3.5 bg-dark-8 text-dark-3 rounded-lg font-medium text-base hover:bg-dark-7 hover:text-dark-2 transition-all-smooth focus-ring">
        Regular News
      </button>
    </nav>
  );
};

export default Categories;
