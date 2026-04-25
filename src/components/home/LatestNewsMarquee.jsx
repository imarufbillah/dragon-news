import Marquee from "react-fast-marquee";

const LatestNewsMarquee = async () => {
  const data = await fetch("http://localhost:3000/news.json");
  const news = await data.json();

  return (
    <section className="p-4 container mx-auto bg-[#F3F3F3] flex items-center">
      <button className="text-white text-[1.25rem] font-medium px-6 py-2.5 bg-[#D72050]">
        Latest
      </button>
      <Marquee
        gradient
        gradientColor="#F3F3F3"
        gradientWidth={100}
        pauseOnHover
      >
        {news.map((n) => (
          <span
            className="text-[1.125rem] text-[#403F3F] font-semibold mr-30"
            key={n.id}
          >
            ▣ {n.title}
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default LatestNewsMarquee;
