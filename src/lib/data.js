const getCategories = async () => {
  const data = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const categoriesData = await data.json();
  const categories = categoriesData.data.news_category;
  return categories;
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
