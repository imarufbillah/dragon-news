import { getCategories } from "@/services/news";
import CategoryItem from "./CategoryItem";

/**
 * Categories Component
 * Displays a list of news categories with active state
 */
const Categories = async ({ slug }) => {
  const newsCategories = await getCategories();

  return (
    <nav className="space-y-2" aria-label="News categories">
      {newsCategories.map((category) => (
        <CategoryItem 
          key={category.category_id} 
          category={category} 
          slug={slug} 
        />
      ))}
    </nav>
  );
};

export default Categories;
