import { Calendar, Eye } from "lucide-react";
import Image from "next/image";
import demoUser from "@/assets/demo-user.png";
import demoCardThumbnail from "@/assets/demo-card-thumbnail.png";
import swimming from "@/assets/swimming.png";

const FeaturedStories = () => {
  return (
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
  );
};

export default FeaturedStories;
