import Link from "next/link";

const CategoryItem = ({ nc, slug }) => {
  const isActive = Number(nc.category_id) === Number(slug);

  return (
    <Link
      href={`/category/${nc.category_id}`}
      className={`w-full block text-left px-5 py-3.5 ${isActive ? "bg-primary text-white font-semibold hover:bg-primary-hover" : "bg-dark-8 text-dark-3 font-medium hover:bg-dark-7 hover:text-dark-2"} rounded-lg text-base transition-all-smooth focus-ring`}
    >
      {nc.category_name}
    </Link>
  );
};

export default CategoryItem;
