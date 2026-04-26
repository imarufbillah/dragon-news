import ArticleSkeleton from "./ArticleSkeleton";

const NewsSkeleton = ({ count = 3 }) => {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <ArticleSkeleton key={index} />
      ))}
    </>
  );
};

export default NewsSkeleton;
