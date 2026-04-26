import Header from "@/components/shared/Header";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default layout;
