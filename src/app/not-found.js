import Image from "next/image";
import Link from "next/link";
import { Home, Search, ArrowLeft, FileX, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-8 via-white to-primary-light flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Visual */}
          <div className="relative mb-12">
            {/* Large 404 Text */}
            <div className="relative">
              <h1 className="text-[12rem] md:text-[16rem] font-black text-transparent bg-gradient-to-r from-primary via-primary-hover to-error bg-clip-text leading-none select-none">
                404
              </h1>
              
              {/* Floating Icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <FileX 
                    size={80} 
                    className="text-primary/20 animate-pulse absolute -top-8 -left-12 transform rotate-12" 
                  />
                  <AlertTriangle 
                    size={60} 
                    className="text-warning/30 animate-bounce absolute -bottom-4 -right-8 transform -rotate-12" 
                  />
                  <Search 
                    size={50} 
                    className="text-info/25 animate-pulse absolute top-4 right-16 transform rotate-45" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-dark-3 max-w-2xl mx-auto leading-relaxed">
              The news story you're looking for seems to have disappeared into the digital void. 
              Don't worry, our newsroom is always buzzing with fresh content!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center mb-16">
            <Link 
              href="/"
              className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold hover-lift focus-ring group"
            >
              <Home size={20} className="mr-3 group-hover:scale-110 transition-transform" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}