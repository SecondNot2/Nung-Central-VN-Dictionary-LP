import React from 'react';
import { BookOpen, Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-[850px] overflow-hidden bg-nung-blue pb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuABPhTUPoZpXNb6YZjY6RazWEqX6fvQ3i2SiNRPFpBBJujiQMsILKnHDxXaYyTm02WgvU3HPD0hSeGHzuAQn5sDauqtlqWhyAvBUEdgvLax5g0iS3mMLapS2iwKoRz6qbussX2zuKnxWDEzCZfEVrzHlxg1XU_EOKRVE7ClqsV5TyKGmLA_vrXdOKv2Op-o1pfgpPCcOAodQk2tcFb_ffDHB9OxR0IYzcdqEWvF4FAPWHmLzEmlrUqvqI8V-YseaQM3I2h-FihyQGGH"
          alt="Nung Landscape"
          className="absolute w-[120%] h-[120%] object-cover object-center opacity-70 top-[-10%] left-[-10%] cultural-filter"
        />
        <div className="absolute inset-0 bg-nung-blue mix-blend-multiply opacity-40"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 z-20 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Column: Text */}
        <div className="w-full lg:w-3/5 text-white text-left relative z-30">
          <div className="relative inline-block">
             <div className="bg-nung-red border-2 border-black text-white font-bold px-4 py-2 mb-6 inline-block transform -rotate-2 shadow-brutal text-lg md:text-xl">
               📖 Từ điển & Văn hóa
             </div>
             <span className="absolute -top-6 -right-8 font-hand text-nung-sand text-3xl transform rotate-12 hidden sm:block">
               Tra cứu nhanh!
             </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]" style={{ textShadow: '4px 4px 0 #000' }}>
            Tra cứu <br />
            <span className="relative inline-block mt-2 md:mt-4">
              <span className="relative z-10 bg-black text-white px-6 py-2 border-2 border-white inline-block transform rotate-1">
                Tiếng Nùng
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-nung-green border-2 border-black transform translate-x-2 translate-y-2 -z-10"></span>
            </span>
          </h1>

          <div className="mt-8 relative max-w-2xl">
            <div className="bg-nung-blue/90 border-2 border-black p-6 shadow-[8px_8px_0px_2px_#A32D2D] text-nung-sand text-lg md:text-xl font-medium leading-relaxed backdrop-blur-sm">
              Công cụ tra cứu từ điển song ngữ Việt - Nùng chính xác, 
              kết hợp khám phá văn hóa và phong tục tập quán độc đáo của người Nùng.
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <a href="#explore" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-nung-red border-2 border-black shadow-brutal-lg hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
              <Search className="w-5 h-5 mr-2" />
              <span>Tra từ ngay</span>
            </a>
            <a href="#stories" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-black border-2 border-white shadow-brutal-lg hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
              <BookOpen className="w-5 h-5 mr-2" />
              <span>Xem câu chuyện</span>
            </a>
          </div>
        </div>

        {/* Right Column: Image Composition */}
        <div className="w-full lg:w-2/5 mt-12 lg:mt-0 relative flex justify-center lg:justify-end">
          <div className="relative w-[300px] h-[400px] md:w-[380px] md:h-[480px]">
            {/* Green backdrop rectangle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-nung-green/80 border-2 border-black shadow-brutal transform -rotate-6 z-10"></div>
            
            {/* Main Image Card */}
            <div className="absolute inset-0 bg-nung-sand border-2 border-black shadow-brutal transform rotate-3 z-20 flex flex-col">
              <div className="flex-grow overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXAA9NDtZG-Ck0H7nktglXDZ6FKSqg54q1YBkblJ8cKxUuFsCV_9C6jzc9ibKr6XweRfcA5GRXTAM-NFrfgbVpv2EjpZv5fYekjPmFMEBCabiSIcStcoHm2yU571XLyfuOFFhi_29qtR8zmuW3AFLTsRlsnvmqo-V0Cqf23EojZQy0jZ7kAgI-rUjznx7PnEN43PJ1dnzgR3NL_Zdb-vERG55087uJ9gyy-HDdvAmKIbVJKQDFTv4IJiF1xZ7VKhKvyoUSMalAkhVD"
                  alt="Traditional Weaving"
                  className="w-full h-full object-cover cultural-filter"
                />
              </div>
              <div className="p-3 bg-nung-blue/90 text-white border-t-2 border-black text-center">
                <p className="font-serif text-xs md:text-sm italic">
                  Hình ảnh: Nghệ thuật dệt vải truyền thống của người Nùng.
                </p>
              </div>
            </div>
            
            {/* Decorative Tape/Corner */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-nung-red border-2 border-black z-30 transform rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Floating tags strip */}
      <div className="absolute bottom-20 left-0 w-full z-30 transform translate-y-1/2">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="flex flex-wrap justify-center gap-3 p-4">
             {['📚 Ngôn ngữ', '🎨 Nghệ thuật', '🌿 Phong cảnh', '🗣️ Giao tiếp'].map((tag, idx) => {
               const colors = ['bg-white text-black', 'bg-nung-red text-white', 'bg-nung-blue text-white', 'bg-nung-green text-white'];
               return (
                 <span key={idx} className={`${colors[idx]} border-2 border-black px-4 py-1 font-serif font-bold text-sm shadow-brutal-sm transform hover:-translate-y-1 transition-transform`}>
                   {tag}
                 </span>
               );
             })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;