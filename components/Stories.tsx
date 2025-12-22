import React from 'react';
import { ChevronRight } from 'lucide-react';

const Stories: React.FC = () => {
  return (
    <section id="stories" className="py-24 bg-nung-brown relative overflow-hidden">
      {/* Background Texture Image */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_0gV27vUJwl1jDYqxtNJ-Gr3T2Ob6lH6hPgTcbzddoRrUX_rxJuSEz8ywA9JcG6RVqxxezcbQU4tIjJnrwN04y03rqSjN3eIaxDUKhy9bUbrAPWYuZB5SH8E2bQobWfs8op4GnF69TFvV_JRojxjYN0nZeyrfR15g3NWIBfuZRc_Ji_JWfOz2UxjyVjz1M551YGQHUxhSXkdCzlN5gSB3cqLTQKU6SwApkXQmq5A63qrvDb3651SYTvvwHLgV-VjzfGGh3TvHKqkd" 
          alt="Pattern" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Story Text Column */}
          <div className="relative group">
            <div className="inline-block relative mb-6">
              <div className="bg-black text-white font-display font-bold text-2xl px-6 py-3 border-2 border-white shadow-[6px_6px_0px_0px_#fff] transform -rotate-2 relative z-10">
                📚 Câu chuyện Văn hóa Nùng
              </div>
              <span className="font-hand text-4xl text-nung-sand absolute -top-8 -right-10 transform rotate-[-15deg] animate-pulse">
                Độc đáo!
              </span>
            </div>

            <div className="bg-nung-sand p-8 border-4 border-black shadow-brutal-lg transform rotate-1 transition-transform group-hover:rotate-0">
              <h3 className="font-serif text-3xl font-bold mb-4 text-black">Hành trình bảo tồn di sản</h3>
              <p className="mb-4 text-base leading-relaxed text-gray-800">
                Đắm mình vào những câu chuyện sâu sắc về văn hóa Nùng, từ những truyền thuyết cổ xưa đến cuộc sống hàng ngày đương đại. 
                Chúng tôi mang đến cho bạn cái nhìn chân thực về phong tục, lễ hội, và giá trị tinh thần đã định hình nên cộng đồng người Nùng qua nhiều thế kỷ.
              </p>
              <div className="my-6 border-t-2 border-dashed border-black"></div>
              <ul className="space-y-2 font-bold text-nung-red">
                <li>• Nghệ thuật thủ công truyền thống</li>
                <li>• Lễ hội và nghi thức độc đáo</li>
                <li>• Kiến trúc nhà sàn và làng bản</li>
              </ul>
              <button className="mt-8 bg-nung-red text-white border-2 border-black font-serif font-bold py-3 px-6 shadow-brutal hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all flex items-center">
                Đọc thêm các câu chuyện <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative mt-12 lg:mt-0">
            <div className="inline-block relative mb-6 lg:mb-0 lg:absolute lg:-top-12 lg:-left-8 z-20">
               <div className="bg-nung-red text-white font-display font-bold text-xl px-4 py-2 border-2 border-black shadow-brutal transform rotate-3">
                🖼️ Bộ sưu tập hình ảnh
               </div>
            </div>

            <div className="bg-nung-blue p-6 border-4 border-black shadow-brutal-lg transform -rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="relative border-2 border-black overflow-hidden mb-4 h-64 sm:h-80">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXWIcJFeX7LXILY6pX6vmNI-Y0QSLeElPANti1UO1e_hkN5xh5a0VNUFkEQCVEmUBBBLN94KVh9Tl6BTziwM9Q7tY-SC98VE0iFQp_cFOY766MM6ggi8yYaOG5h6iLVGJyS_jzcwaxjzLbnYAbVFfniE6SBs-x_IXQGFNsSHUS-YxWOBRIG27-TL5zuLkY6llE3ACkMvlPrTu3mF7iFitxH-apcybc4OFq1mOevRWHW0IdU5G-buYodCWa1oJUOna3WvNcnZRxSRfQ" 
                  alt="Nung Village Life" 
                  className="w-full h-full object-cover cultural-filter hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h4 className="text-nung-sand font-serif font-bold text-xl mb-2">Cuộc sống làng bản Nùng</h4>
              <p className="text-white/90 text-sm mb-6">
                Hình ảnh chân thực về cuộc sống sinh hoạt, lao động và vui chơi của người dân tộc Nùng.
              </p>
              <button className="bg-black text-white border-2 border-white font-bold py-2 px-4 shadow-brutal hover:bg-white hover:text-black transition-colors w-full">
                Xem thêm ảnh
              </button>
            </div>
            
            {/* Decorative element underneath */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-nung-green/50 border-4 border-black -z-10 transform rotate-3"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stories;