import Image from "next/image";
import demoUser from "@/assets/demo-user.png";
import demoCardThumbnail from "@/assets/demo-card-thumbnail.png";

const NewsContainer = () => {
  return (
    <section className="container mx-auto grid grid-cols-12 gap-6 mt-15">
      {/* News Categories */}
      <div className="col-span-3 flex flex-col gap-5">
        <h2 className="text-20 text-dark-2 font-semibold">All Category</h2>
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
        <div className=""></div>
      </div>
    </section>
  );
};

export default NewsContainer;
