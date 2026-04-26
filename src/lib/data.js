const getCategories = async () => {
  const data = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    { next: { revalidate: 3600 } },
  );
  const categoriesData = await data.json();
  const categories = categoriesData.data.news_category;

  // Sort categories to put "All News" (category_id: "08") at the top
  const sortedCategories = categories.sort((a, b) => {
    if (a.category_id === "08") return -1; // "All News" goes first
    if (b.category_id === "08") return 1; // "All News" goes first
    return 0; // Keep original order for other categories
  });

  return sortedCategories;
};

const getNewsByCategoryId = async (category_id) => {
  const id = Number(category_id);
  const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
  const data = await fetch(
    `https://openapi.programming-hero.com/api/news/category/0${id}`,
  );
  const newsData = await data.json();
  const news = newsData.data;
  return news;
};

const getNewsDetailsById = async (news_id) => {
  const data = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`,
  );
  const newsDetails = data.json();
  return newsDetails;
};

export { getCategories, getNewsByCategoryId, getNewsDetailsById };
