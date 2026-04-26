import LatestNewsMarquee from "@/components/home/LatestNewsMarquee";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import { LatestNewsMarqueeSkeleton } from "@/components/skeletons";
import { Suspense } from "react";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<LatestNewsMarqueeSkeleton />}>
        <LatestNewsMarquee />
      </Suspense>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
