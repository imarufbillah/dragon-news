import Marquee from "react-fast-marquee";

const LatestNewsMarquee = async () => {
  const data = await fetch("http://localhost:3000/news.json");
  const news = await data.json();

  return (
    <section className="bg-dark-7 border-y border-dark-6 overflow-hidden">
      <div className="container mx-auto flex items-center h-16 px-4">
        {/* Latest Badge */}
        <div className="flex-shrink-0 mr-6">
          <span className="inline-flex items-center px-4 py-2 bg-primary text-white font-semibold text-sm uppercase tracking-wider rounded-md shadow-sm">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Latest News
          </span>
        </div>
        
        {/* News Ticker */}
        <div className="flex-1 overflow-hidden h-full flex items-center">
          <Marquee
            gradient
            gradientColor="#f3f3f3"
            gradientWidth={60}
            pauseOnHover
            speed={50}
            style={{ height: '100%' }}
            className="flex items-center"
          >
            {news.map((n) => (
              <span
                className="inline-flex items-center text-base text-dark-2 font-medium mr-12 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
                key={n.id}
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                {n.title}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsMarquee;
