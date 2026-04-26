import { getNewsByCategoryId } from "@/lib/data";
import Article from "./Article";
import EmptyNews from "./EmptyNews";

const News = async ({ slug }) => {
  const data = await fetch("http://localhost:3000/news.json");
  const allNews = await data.json();

  const categorizedNews = await getNewsByCategoryId(slug);

  const news = slug === "08" ? allNews : categorizedNews;

  console.log(categorizedNews);
  if (!categorizedNews.length) return <EmptyNews />;

  return news.map((n) => <Article key={n.id} n={n} />);
};

export default News;
