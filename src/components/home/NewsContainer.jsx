import Image from "next/image";
import bg from "@/assets/bg.png";
import Categories from "./Categories";
import FeaturedStories from "./FeaturedStories";
import Article from "./Article";
import LoginSection from "./LoginSection";
import SocialSection from "./SocialSection";
import QZoneSection from "./QZoneSection";

const NewsContainer = () => {
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
                <Categories />
              </div>
            </div>

            {/* Featured Articles */}
            <FeaturedStories />
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

            {/* Article / News */}
            <Article />
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
