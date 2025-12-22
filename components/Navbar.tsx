import React, { useState } from 'react';
import { Compass, Menu, X, ArrowRight } from 'lucide-react';

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
              <span className="font-display text-2xl tracking-tight">NungDic</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center font-serif font-bold">
            {['Câu chuyện', 'Từ vựng', 'Cộng đồng'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="py-2 px-3 border-2 border-transparent hover:border-black hover:bg-nung-blue hover:text-white transition-all duration-200"
              >
                {item}
              </a>
            ))}
            <a
              href="#explore"
              className="bg-nung-blue text-white border-2 border-black px-5 py-2 flex items-center gap-2 shadow-brutal hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all"
            >
              <span>Khám phá</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-nung-red focus:outline-none"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-nung-sand border-t-2 border-black p-4 space-y-4">
          {['Câu chuyện', 'Từ vựng', 'Cộng đồng'].map((item) => (
            <a
              key={item}
              href="#"
              className="block font-serif font-bold text-lg hover:text-nung-red"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#explore"
            className="block w-full text-center bg-nung-blue text-white border-2 border-black px-5 py-3 shadow-brutal font-bold"
            onClick={() => setIsOpen(false)}
          >
            Khám phá ngay
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;