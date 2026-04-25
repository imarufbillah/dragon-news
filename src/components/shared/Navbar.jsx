import { UserRound } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between mt-5">
      {/* placeholder div - same width as Login Side */}
      <div className="w-[162.28px]" />
      {/* NavLinks */}
      <ul className="flex items-center gap-5 text-[1.125rem] text-[#706F6F]">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/career"}>Career</Link>
      </ul>
      {/* Login Side */}
      <div className="flex gap-2.5 items-center">
        <div className="p-1 rounded-full border-2">
          <UserRound size={28} />
        </div>

        <Link
          href={"/login"}
          className="text-white text-[1.25rem] font-semibold px-6 py-2.5 bg-[#403F3F]"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
