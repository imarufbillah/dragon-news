import { getCategories } from "@/lib/data";
import CategoryItem from "./CategoryItem";

const Categories = async ({ slug }) => {
  const newsCategories = await getCategories();

  return (
    <nav className="space-y-2">
      {newsCategories.map((nc) => (
        <CategoryItem key={nc.category_id} nc={nc} slug={slug} />
      ))}
    </nav>
  );
};

export default Categories;
