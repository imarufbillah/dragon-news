import { getNewsByCategoryId } from "@/lib/data";
import Article from "./Article";
import EmptyNews from "./EmptyNews";

const News = async ({ slug }) => {
  const data = await fetch("http://localhost:3000/news.json");
  const allNews = await data.json();

  const categorizedNews = await getNewsByCategoryId(slug);

  const news = slug === "08" ? allNews : categorizedNews;

  if (!categorizedNews.length) return <EmptyNews />;

  return news.map((n, index) => <Article key={index} n={n} />);
};

export default News;
