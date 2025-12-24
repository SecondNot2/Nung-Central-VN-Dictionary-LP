import React, { useState } from "react";
import { Compass, Menu, X, ArrowRight } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-nung-sand border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center bg-nung-red text-white border-2 border-black p-2 shadow-brutal transform hover:-translate-y-1 transition-transform">
              <Compass className="w-8 h-8 mr-2" />
              <span className="font-display text-2xl tracking-tight">
                NungDic
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center font-serif font-bold text-sm">
            {[
              { name: "Tính năng", href: "#explore" },
              { name: "Trải nghiệm", href: "#app-showcase" },
              { name: "Câu chuyện", href: "#stories" },
              { name: "Từ vựng", href: "#words" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-2 px-3 border-2 border-transparent hover:border-black hover:bg-nung-blue hover:text-white transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-4 border-l-2 border-black pl-6 ml-2">
              <a
                href="https://nungdic-app.vercel.app//"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-nung-red text-white border-2 border-black px-5 py-2 flex items-center gap-2 shadow-brutal hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all group"
              >
                <span className="group-hover:scale-110 transition-transform">
                  🚀 App
                </span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-nung-red focus:outline-none"
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-nung-sand border-t-2 border-black p-4 space-y-4">
          {[
            { name: "Tính năng", href: "#explore" },
            { name: "Trải nghiệm", href: "#app-showcase" },
            { name: "Câu chuyện", href: "#stories" },
            { name: "Từ vựng", href: "#words" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block font-serif font-bold text-lg hover:text-nung-red"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://nungdic-app.vercel.app//"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-nung-red text-white border-2 border-black px-5 py-3 shadow-brutal font-bold"
            onClick={() => setIsOpen(false)}
          >
            🚀 Mở ứng dụng ngay
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
