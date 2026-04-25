import Image from "next/image";
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
    <section className="container mx-auto grid grid-cols-12 gap-6 mt-15">
      {/* News Categories */}
      <div className="col-span-3 flex flex-col gap-5">
        <h2 className="text-20 text-dark-2 font-semibold">All Category</h2>
        {/* Category Items */}
        <div className="flex flex-col gap-2">
          <button className="bg-dark-6 text-dark-2 rounded-md px-12.5 py-4 text-left text-20 font-semibold w-full">
            National News
          </button>
          <button className="bg-dark-7 text-dark-4 rounded-md px-12.5 py-4 text-left text-20 font-medium w-full">
            Breaking News
          </button>
          <button className="bg-dark-7 text-dark-4 px-12.5 py-4 text-left text-20 font-medium w-full">
            Regular News
          </button>
        </div>

        {/* News Articles Section */}
        <div className="flex flex-col gap-4 mt-6">
          {/* News Article 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative">
              <Image
                src={demoUser}
                alt="News thumbnail"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-18 font-bold text-dark-2 mb-3 leading-tight">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h3>
              <div className="flex items-center gap-2 text-gray-500 text-14">
                <span className="font-medium">Sports</span>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Jan 4, 2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* News Article 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative">
              <Image
                src={demoCardThumbnail}
                alt="News thumbnail"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-18 font-bold text-dark-2 mb-3 leading-tight">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h3>
              <div className="flex items-center gap-2 text-gray-500 text-14">
                <span className="font-medium">Sports</span>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Jan 4, 2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* News Article 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative">
              <Image
                src={swimming}
                alt="News thumbnail"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-18 font-bold text-dark-2 mb-3 leading-tight">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </h3>
              <div className="flex items-center gap-2 text-gray-500 text-14">
                <span className="font-medium">Sports</span>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Jan 4, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Feed */}
      <div className="col-span-6 flex flex-col gap-5">
        <h2 className="text-20 text-dark-2 font-semibold">Dragon News Home</h2>
        <div className="flex flex-col gap-6">
          {/* News Card */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            {/* Author Info */}
            <div className="flex items-center gap-3 p-4 bg-gray-50">
              <Image
                src={demoUser}
                alt="Awlad Hossain"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-16 font-semibold text-dark-2">
                  Awlad Hossain
                </h3>
                <p className="text-14 text-gray-500">2022-08-21</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-200 rounded">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-200 rounded">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* News Content */}
            <div className="p-4">
              <h2 className="text-20 font-bold text-dark-2 mb-4 leading-tight">
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                Military Aid Package Yet
              </h2>

              {/* News Image */}
              <div className="mb-4">
                <Image
                  src={demoCardThumbnail}
                  alt="News thumbnail"
                  width={600}
                  height={256}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* News Description */}
              <div className="mb-4">
                <p className="text-gray-600 text-16 leading-relaxed mb-3">
                  Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                  Europe, Joe Biden, Military, News, Russia, Security, UK,
                  Ukraine, United States, Worthy News (Worthy News) – U.S.
                  President Joe Biden has announced nearly $3 billion in new
                  U.S. military a...
                </p>
                <button className="text-orange-500 font-semibold text-16 hover:text-orange-600 transition-colors">
                  Read More
                </button>
              </div>

              {/* Rating and Views */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-orange-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-18 font-semibold text-gray-700">
                    4.9
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span className="text-16 font-medium">499</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contents Right */}
      <div className="col-span-3 flex flex-col gap-5">
        <h2 className="text-20 text-dark-2 font-semibold">Login With</h2>
        <div className="flex flex-col gap-4">
          {/* Login Buttons */}
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 rounded-md py-2 px-4 hover:bg-blue-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Login with Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-800 text-gray-800 rounded-md py-2 px-4 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Login with GitHub
            </button>
          </div>

          {/* Find Us On */}
          <div className="mt-6">
            <h3 className="text-20 text-dark-2 font-semibold mb-4">
              Find Us On
            </h3>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <a
                href="#"
                className="flex items-center gap-3 p-3 border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <Image src={fbIcon} alt="Facebook" width={24} height={24} />
                <span className="text-16 text-gray-700">Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <Image src={twitterIcon} alt="Twitter" width={24} height={24} />
                <span className="text-16 text-gray-700">Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors"
              >
                <Image
                  src={instagramIcon}
                  alt="Instagram"
                  width={24}
                  height={24}
                />
                <span className="text-16 text-gray-700">Instagram</span>
              </a>
            </div>
          </div>

          {/* Q-Zone */}
          <div className="mt-6 flex flex-col gap-4">
            <h3 className="text-20 text-dark-2 font-semibold">Q-Zone</h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              {/* Swimming Card */}
              <div className="text-center">
                <Image
                  src={swimming}
                  alt="Swimming"
                  width={260}
                  height={220}
                  className="w-full object-cover rounded-lg mb-2"
                />
              </div>

              {/* Class Card */}
              <div className="text-center">
                <Image
                  src={classImg}
                  alt="Class"
                  width={260}
                  height={220}
                  className="w-full object-cover rounded-lg mb-2"
                />
              </div>

              {/* Play Ground Card */}
              <div className="text-center">
                <Image
                  src={playground}
                  alt="Play Ground"
                  width={260}
                  height={220}
                  className="w-full object-cover rounded-lg mb-2"
                />
              </div>
            </div>
            <Image src={bg} alt="bg" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsContainer;
