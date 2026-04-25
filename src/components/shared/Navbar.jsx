"use client";

import { UserRound, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-dark-6 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-dark-3 hover:text-dark-1 hover:bg-dark-8 transition-colors focus-ring"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                href="/" 
                className="text-base font-medium text-dark-2 hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-base font-medium text-dark-3 hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/career" 
                className="text-base font-medium text-dark-3 hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary"
              >
                Career
              </Link>
            </li>
          </ul>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full border-2 border-dark-5 text-dark-3 hover:border-primary hover:text-primary transition-colors focus-ring">
              <UserRound size={20} />
            </button>
            <Link
              href="/login"
              className="btn-primary px-6 py-2.5 rounded-md text-sm font-semibold"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-dark-6 py-4">
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="block px-4 py-3 text-base font-medium text-dark-2 hover:text-primary hover:bg-dark-8 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block px-4 py-3 text-base font-medium text-dark-3 hover:text-primary hover:bg-dark-8 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/career" 
                  className="block px-4 py-3 text-base font-medium text-dark-3 hover:text-primary hover:bg-dark-8 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
