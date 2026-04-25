import Image from "next/image";
import fbIcon from "@/assets/fb.png";
import twitterIcon from "@/assets/twitter.png";
import instagramIcon from "@/assets/instagram.png";

const SocialSection = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="text-xl font-bold text-dark-1 mb-6">Find Us On</h3>
        <div className="space-y-1 -mx-2">
          <a
            href="#"
            className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-dark-8 transition-all-smooth group"
          >
            <Image
              src={fbIcon}
              alt="Facebook"
              width={24}
              height={24}
              className="shrink-0"
            />
            <span className="font-medium text-dark-2 group-hover:text-primary">
              Facebook
            </span>
            <span className="ml-auto text-xs text-dark-4">12.5k followers</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-dark-8 transition-all-smooth group"
          >
            <Image
              src={twitterIcon}
              alt="Twitter"
              width={24}
              height={24}
              className="shrink-0"
            />
            <span className="font-medium text-dark-2 group-hover:text-primary">
              Twitter
            </span>
            <span className="ml-auto text-xs text-dark-4">8.2k followers</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-dark-8 transition-all-smooth group"
          >
            <Image
              src={instagramIcon}
              alt="Instagram"
              width={24}
              height={24}
              className="shrink-0"
            />
            <span className="font-medium text-dark-2 group-hover:text-primary">
              Instagram
            </span>
            <span className="ml-auto text-xs text-dark-4">15.8k followers</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
