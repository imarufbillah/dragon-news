import Categories from "@/components/home/Categories";
import FeaturedStories from "@/components/home/FeaturedStories";
import LoginSection from "@/components/home/LoginSection";
import News from "@/components/home/News";
import QZoneSection from "@/components/home/QZoneSection";
import SocialSection from "@/components/home/SocialSection";
import Image from "next/image";
import bg from "@/assets/bg.png";
import { Suspense } from "react";
import CategoriesSkeleton from "@/components/skeletons/CategoriesSkeleton";
import NewsSkeleton from "@/components/skeletons/NewsSkeleton";
import FeaturedStoriesSkeleton from "@/components/skeletons/FeaturedStoriesSkeleton";

const NewsContainer = async ({ params }) => {
  const { slug } = await params;

  return (
    <main className="bg-dark-8 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Categories & Articles */}
          <aside className="lg:col-span-3 space-y-8">
            {/* Categories Section */}
            <div className="card">
              <div className="card-content">
                <h2 className="text-xl font-bold text-dark-1 mb-6">
                  All Categories
                </h2>
                <Suspense fallback={<CategoriesSkeleton />}>
                  <Categories slug={slug} />
                </Suspense>
              </div>
            </div>

            {/* Featured Articles */}
            <Suspense fallback={<FeaturedStoriesSkeleton />}>
              <FeaturedStories />
            </Suspense>
          </aside>

          {/* Main Content - News Feed */}
          <section className="lg:col-span-6 space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-dark-1">
                Dragon News Home
              </h1>
              <div className="flex items-center space-x-2 text-sm text-dark-4">
                <span>Latest Updates</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* News */}
            <Suspense fallback={<NewsSkeleton count={5} />}>
              <News slug={slug} />
            </Suspense>
          </section>

          {/* Right Sidebar - Login & Widgets */}
          <aside className="lg:col-span-3 space-y-8">
            {/* Login Section */}
            <LoginSection />

            {/* Social Media */}
            <SocialSection />

            {/* Q-Zone */}
            <QZoneSection />

            {/* Advertisement */}
            <div className="relative overflow-hidden rounded-xl">
              <Image src={bg} alt="Advertisement" className="w-full h-auto" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default NewsContainer;
