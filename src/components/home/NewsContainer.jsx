import Image from "next/image";
import { Eye, Bookmark, Share2, Calendar, Star } from "lucide-react";
import demoUser from "@/assets/demo-user.png";
import demoCardThumbnail from "@/assets/demo-card-thumbnail.png";
import swimming from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playground from "@/assets/playground.png";
import fbIcon from "@/assets/fb.png";
import twitterIcon from "@/assets/twitter.png";
import instagramIcon from "@/assets/instagram.png";
import bg from "@/assets/bg.png";

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
                <h2 className="text-xl font-bold text-dark-1 mb-6">All Categories</h2>
                <nav className="space-y-2">
                  <button className="w-full text-left px-5 py-3.5 bg-primary text-white rounded-lg font-semibold text-base transition-all-smooth hover:bg-primary-hover focus-ring">
                    National News
                  </button>
                  <button className="w-full text-left px-5 py-3.5 bg-dark-8 text-dark-3 rounded-lg font-medium text-base hover:bg-dark-7 hover:text-dark-2 transition-all-smooth focus-ring">
                    Breaking News
                  </button>
                  <button className="w-full text-left px-5 py-3.5 bg-dark-8 text-dark-3 rounded-lg font-medium text-base hover:bg-dark-7 hover:text-dark-2 transition-all-smooth focus-ring">
                    Regular News
                  </button>
                </nav>
              </div>
            </div>

            {/* Featured Articles */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-dark-1">Featured Stories</h3>
              
              {/* Article 1 */}
              <article className="card group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={demoUser}
                    alt="News thumbnail"
                    width={300}
                    height={180}
                    className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      Sports
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-base font-bold text-dark-1 mb-3 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    Bayern Slams Authorities Over Flight Delay to Club World Cup
                  </h4>
                  <div className="flex items-center text-sm text-dark-4 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>Jan 4, 2022</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye size={14} />
                      <span>1.2k</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Article 2 */}
              <article className="card group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={demoCardThumbnail}
                    alt="News thumbnail"
                    width={300}
                    height={180}
                    className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-info text-white text-xs font-semibold rounded-full">
                      Politics
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-base font-bold text-dark-1 mb-3 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    Major Policy Changes Announced in Parliament Session
                  </h4>
                  <div className="flex items-center text-sm text-dark-4 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>Jan 3, 2022</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye size={14} />
                      <span>856</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Article 3 */}
              <article className="card group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={swimming}
                    alt="News thumbnail"
                    width={300}
                    height={180}
                    className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-success text-white text-xs font-semibold rounded-full">
                      Health
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-base font-bold text-dark-1 mb-3 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    Swimming Benefits for Mental Health Research Study
                  </h4>
                  <div className="flex items-center text-sm text-dark-4 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>Jan 2, 2022</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye size={14} />
                      <span>642</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </aside>

          {/* Main Content - News Feed */}
          <section className="lg:col-span-6 space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-dark-1">Dragon News Home</h1>
              <div className="flex items-center space-x-2 text-sm text-dark-4">
                <span>Latest Updates</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Featured Article */}
            <article className="card">
              {/* Author Header */}
              <div className="flex items-center justify-between p-6 bg-dark-8 border-b border-dark-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={demoUser}
                    alt="Awlad Hossain"
                    width={48}
                    height={48}
                    className="rounded-full object-cover ring-2 ring-dark-6"
                  />
                  <div>
                    <h3 className="font-semibold text-dark-1">Awlad Hossain</h3>
                    <p className="text-sm text-dark-4">Senior Correspondent</p>
                    <time className="text-xs text-dark-4">August 21, 2022</time>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2.5 rounded-lg text-dark-4 hover:text-primary hover:bg-primary-light transition-all-smooth focus-ring">
                    <Bookmark size={18} />
                  </button>
                  <button className="p-2.5 rounded-lg text-dark-4 hover:text-primary hover:bg-primary-light transition-all-smooth focus-ring">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <header className="mb-6">
                  <h2 className="text-2xl font-bold text-dark-1 leading-tight mb-4">
                    Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-dark-4">
                    <span className="inline-flex items-center px-3 py-1 bg-primary-light text-primary rounded-full font-medium">
                      Breaking News
                    </span>
                    <span>5 min read</span>
                  </div>
                </header>

                {/* Featured Image */}
                <div className="mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={demoCardThumbnail}
                    alt="News featured image"
                    width={800}
                    height={400}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Article Text */}
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-dark-3 leading-relaxed mb-4">
                    Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Ukraine and other European allies, marking the largest single package of assistance since the conflict began.
                  </p>
                  <p className="text-dark-3 leading-relaxed">
                    This unprecedented commitment demonstrates the administration's continued support for Ukraine's defense efforts and regional stability in Eastern Europe...
                  </p>
                </div>

                {/* Read More Button */}
                <button className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all-smooth focus-ring group">
                  Read Full Article
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Article Footer */}
                <footer className="flex items-center justify-between pt-6 mt-6 border-t border-dark-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-warning fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-dark-2">4.9</span>
                    <span className="text-sm text-dark-4">(127 reviews)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-dark-4">
                    <Eye size={18} />
                    <span className="font-medium">2,499 views</span>
                  </div>
                </footer>
              </div>
            </article>
          </section>

          {/* Right Sidebar - Login & Widgets */}
          <aside className="lg:col-span-3 space-y-8">
            {/* Login Section */}
            <div className="card">
              <div className="card-content">
                <h2 className="text-xl font-bold text-dark-1 mb-6">Login With</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center space-x-3 px-4 py-3 border-2 border-blue-500 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all-smooth focus-ring group">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span>Continue with Google</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-3 px-4 py-3 border-2 border-dark-3 text-dark-2 rounded-lg font-medium hover:bg-dark-8 transition-all-smooth focus-ring group">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>Continue with GitHub</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card">
              <div className="card-content">
                <h3 className="text-xl font-bold text-dark-1 mb-6">Find Us On</h3>
                <div className="space-y-1 -mx-2">
                  <a
                    href="#"
                    className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-dark-8 transition-all-smooth group"
                  >
                    <Image src={fbIcon} alt="Facebook" width={24} height={24} className="flex-shrink-0" />
                    <span className="font-medium text-dark-2 group-hover:text-primary">Facebook</span>
                    <span className="ml-auto text-xs text-dark-4">12.5k followers</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-dark-8 transition-all-smooth group"
                  >
                    <Image src={twitterIcon} alt="Twitter" width={24} height={24} className="flex-shrink-0" />
                    <span className="font-medium text-dark-2 group-hover:text-primary">Twitter</span>
                    <span className="ml-auto text-xs text-dark-4">8.2k followers</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-dark-8 transition-all-smooth group"
                  >
                    <Image src={instagramIcon} alt="Instagram" width={24} height={24} className="flex-shrink-0" />
                    <span className="font-medium text-dark-2 group-hover:text-primary">Instagram</span>
                    <span className="ml-auto text-xs text-dark-4">15.8k followers</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Q-Zone */}
            <div className="card">
              <div className="card-content">
                <h3 className="text-xl font-bold text-dark-1 mb-6">Q-Zone</h3>
                <div className="space-y-4">
                  <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={swimming}
                        alt="Swimming"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 text-sm font-medium text-dark-2 text-center">Swimming Championship 2024</p>
                  </div>

                  <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={classImg}
                        alt="Class"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 text-sm font-medium text-dark-2 text-center">Education Excellence Program</p>
                  </div>

                  <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={playground}
                        alt="Playground"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 text-sm font-medium text-dark-2 text-center">Community Playground Initiative</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advertisement */}
            <div className="relative overflow-hidden rounded-xl">
              <Image 
                src={bg} 
                alt="Advertisement" 
                className="w-full h-auto"
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default NewsContainer;