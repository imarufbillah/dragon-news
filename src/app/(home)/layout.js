import LatestNewsMarquee from "@/components/home/LatestNewsMarquee";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <LatestNewsMarquee />
      <Navbar />
      {children}
    </>
  );
};

export default layout;
