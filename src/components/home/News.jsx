import { getNewsByCategoryId } from "@/services/news";
import Article from "./Article";
import EmptyNews from "./EmptyNews";

/**
 * News Component
 * Displays a list of news articles for a specific category
 */
const News = async ({ slug }) => {
  const news = await getNewsByCategoryId(slug);

  if (!news || news.length === 0) {
    return <EmptyNews />;
  }

  return (
    <div className="space-y-8">
      {news.map((article, index) => (
        <Article key={article._id || index} article={article} />
      ))}
    </div>
  );
};

export default News;
