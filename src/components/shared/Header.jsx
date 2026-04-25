import Image from "next/image";
import Logo from "@/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <section className="container mx-auto flex flex-col gap-2.5 items-center pt-12.5 mb-7.5">
      <Image src={Logo} alt="Logo" loading="eager" />
      <p className="text-[1.125rem] text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-[1.25rem] text-[#706F6F] font-medium">
        <span className="text-[#403F3F]">{format(new Date(), "EEEE,")}</span>{" "}
        {format(new Date(), "MMMM dd, yyyy")}
      </p>
    </section>
  );
};

export default Header;
