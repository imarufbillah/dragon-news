import LoginSection from "@/components/home/LoginSection";
import QZoneSection from "@/components/home/QZoneSection";
import SocialSection from "@/components/home/SocialSection";
import ArticleDetails from "@/components/home/ArticleDetails";
import { getNewsDetailsById } from "@/services/news";

const ArticleDetailsPage = async ({ params }) => {
  const { slug: articleId } = await params;

  let article = null;
  let error = null;

  try {
    article = await getNewsDetailsById(articleId);
  } catch (err) {
    error = err.message;
    console.error("Error fetching article:", err);
  }

  return (
    <main className="bg-dark-8 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <section className="lg:col-span-9 space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-dark-1">Dragon News</h1>
            </div>

            {/* News Details */}
            {error ? (
              <div className="card p-8">
                <p className="text-error text-center">
                  Failed to load article: {error}
                </p>
              </div>
            ) : (
              <ArticleDetails article={article} />
            )}
          </section>

          {/* Right Sidebar - Login & Widgets */}
          <aside className="lg:col-span-3 space-y-8">
            {/* Login Section */}
            <LoginSection />

            {/* Social Media */}
            <SocialSection />

            {/* Q-Zone */}
            <QZoneSection />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ArticleDetailsPage;
