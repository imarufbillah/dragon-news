import Image from "next/image";
import Logo from "@/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <header className="bg-white border-b border-dark-6">
      <div className="container mx-auto flex flex-col items-center py-12 px-4">
        {/* Logo */}
        <div className="mb-6">
          <Image 
            src={Logo} 
            alt="Dragon News Logo" 
            loading="eager"
            className="h-auto max-w-full"
            priority
          />
        </div>
        
        {/* Tagline */}
        <p className="text-lg text-dark-3 font-medium mb-4 tracking-wide">
          Journalism Without Fear or Favour
        </p>
        
        {/* Date */}
        <time className="text-xl text-dark-2 font-semibold">
          <span className="text-dark-1">
            {format(new Date(), "EEEE,")}
          </span>{" "}
          <span className="text-dark-3 font-medium">
            {format(new Date(), "MMMM dd, yyyy")}
          </span>
        </time>
      </div>
    </header>
  );
};

export default Header;
