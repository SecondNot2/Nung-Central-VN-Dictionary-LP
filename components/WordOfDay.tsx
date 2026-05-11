import React, { useState } from 'react';
import { Volume2, SpellCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const WordOfTheDay: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const cards = [
    { type: 'word' as const, id: 'word' },
    { type: 'proverb' as const, id: 'farming' },
    { type: 'proverb' as const, id: 'wisdom' }
  ];

  const nextCard = () => setActiveIndex((prev) => (prev + 1) % cards.length);
  const prevCard = () => setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + cards.length) % cards.length;
    
    if (diff === 0) {
      return 'z-30 opacity-100 scale-100 translate-y-0 rotate-0 cursor-default';
    } else if (diff === 1) {
      return 'z-20 opacity-60 scale-95 translate-y-12 md:translate-y-20 rotate-2 cursor-pointer hover:translate-y-10 md:hover:translate-y-16';
    } else {
      return 'z-10 opacity-30 scale-90 translate-y-24 md:translate-y-36 rotate-4 cursor-pointer';
    }
  };

  return (
    <section id="words" className="py-24 bg-nung-red border-y-4 border-black relative overflow-hidden">
       {/* Texture overlay */}
       <div className="absolute inset-0 w-full h-full bg-fabric opacity-20 pointer-events-none"></div>

       <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
         <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-white text-outline">
            Từ vựng nổi bật: <span className="italic">Cửa sổ tâm hồn</span>
         </h2>
         <p className="text-xl md:text-2xl mb-12 font-medium text-nung-sand max-w-2xl mx-auto leading-relaxed">
            Mỗi từ là một mảnh ghép của bức tranh văn hóa Tày & Nùng. Khám phá những từ vựng đặc biệt mang ý nghĩa sâu sắc.
         </p>

          <div className="relative mx-auto max-w-2xl min-h-[650px] md:min-h-[580px]">
            {/* Handwritten annotation */}
            <span className="absolute -top-12 -right-6 md:-right-12 font-hand text-4xl text-white transform rotate-12 z-40 pointer-events-none">
              Mới mỗi ngày!
            </span>

            {/* Navigation Buttons */}
            <div className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
              <button 
                onClick={prevCard}
                className="bg-white border-4 border-black p-3 shadow-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-6 h-6 text-black" />
              </button>
            </div>
            <div className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
              <button 
                onClick={nextCard}
                className="bg-white border-4 border-black p-3 shadow-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                aria-label="Next card"
              >
                <ChevronRight className="w-6 h-6 text-black" />
              </button>
            </div>

            {/* Card 1: Word of the Day */}
            <div 
              onClick={() => activeIndex !== 0 && setActiveIndex(0)}
              className={`absolute inset-0 bg-nung-sand text-left p-8 md:p-10 border-4 border-black shadow-[12px_12px_0px_0px_#000] transition-all duration-500 ease-in-out ${getCardStyle(0)}`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 border-b-2 border-black pb-4">
                <SpellCheck className="w-8 h-8 text-nung-red" />
                <h3 className="font-serif font-bold text-2xl">Từ của ngày</h3>
              </div>

              <div className="bg-nung-blue/10 border-2 border-dashed border-nung-blue p-6 mb-8">
                <div className="mb-4">
                  <span className="block text-sm font-bold uppercase tracking-wider text-nung-blue mb-1">Từ Tày - Nùng</span>
                  <h4 className="text-4xl font-display text-nung-red font-bold">"Mừa"</h4>
                  <p className="text-gray-700 mt-2 font-medium">Nghĩa: Về, trở về</p>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <button className="bg-black text-white p-2 rounded-full hover:bg-nung-red transition-colors">
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-lg">/mɯə˨/</span>
                </div>

                <div className="mb-4">
                  <span className="font-bold">Ví dụ:</span> <span className="italic">"Mừa rờn" (Về nhà)</span>
                </div>
              </div>

              <div className="bg-white p-6 border-2 border-black">
                <h5 className="font-bold text-lg mb-2 flex items-center text-nung-brown">
                  💡 Ý nghĩa văn hóa
                </h5>
                <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                  Từ <strong>"Mừa"</strong> mang ý nghĩa của sự gắn kết gia đình, nguồn cội, và sự an lành khi quay về nơi chốn quen thuộc.
                </p>
              </div>
            </div>

            {/* Card 2: Folk Saying (Farming) */}
            <div 
              onClick={() => activeIndex !== 1 && setActiveIndex(1)}
              className={`absolute inset-0 bg-white text-left p-8 md:p-10 border-4 border-black shadow-[12px_12px_0px_0px_#2A475E] transition-all duration-500 ease-in-out ${getCardStyle(1)}`}
            >
              <div className="flex items-center gap-3 mb-6 border-b-2 border-black pb-4">
                <div className="w-8 h-8 bg-nung-blue flex items-center justify-center text-white font-bold rounded-sm text-lg">
                  📜
                </div>
                <h3 className="font-serif font-bold text-2xl">Ca dao & Tục ngữ</h3>
              </div>

              <div className="bg-nung-sand/30 border-2 border-black p-6 mb-6">
                <p className="text-2xl md:text-3xl font-display text-nung-blue mb-4 leading-tight italic">
                  "Bươn slí lồng chả, bươn hả đăm nà"
                </p>
                <div className="border-l-4 border-nung-red pl-4">
                  <p className="text-lg font-medium text-gray-700">
                    <span className="font-bold">Dịch nghĩa:</span> "Tháng Tư Âm lịch gieo mạ, tháng Năm cấy lúa"
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic mb-8">
                Câu ca dao phản ánh kinh nghiệm sản xuất nông nghiệp lâu đời của đồng bào Tày - Nùng.
              </p>

              <div className="mt-auto text-center">
                <a 
                  href="https://nungdic-app.vercel.app/#dictionary_list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-nung-blue transition-colors border-2 border-transparent hover:border-black shadow-none hover:shadow-brutal text-center"
                >
                  Khám phá kho tàng
                </a>
              </div>
            </div>

            {/* Card 3: Proverb (Wisdom) */}
            <div 
              onClick={() => activeIndex !== 2 && setActiveIndex(2)}
              className={`absolute inset-0 bg-nung-green text-white text-left p-8 md:p-10 border-4 border-black shadow-[12px_12px_0px_0px_#1a1a1a] transition-all duration-500 ease-in-out ${getCardStyle(2)}`}
            >
              <div className="flex items-center gap-3 mb-6 border-b-2 border-white/50 pb-4">
                <div className="w-8 h-8 bg-white flex items-center justify-center text-nung-green font-bold rounded-sm text-lg shadow-brutal-sm">
                  💡
                </div>
                <h3 className="font-serif font-bold text-2xl">Thành ngữ & Trí tuệ</h3>
              </div>

              <div className="bg-black/20 border-2 border-white/30 p-6 mb-6">
                <p className="text-xl md:text-2xl font-display text-white mb-4 leading-snug italic">
                  "Cáy tấp pích slam pày chắng khăn<br/>
                  Cần quai nẳm slam pày chắng chẳng"
                </p>
                <div className="border-l-4 border-white pl-4">
                  <p className="text-lg font-medium text-nung-sand">
                    <span className="font-bold">Ý nghĩa:</span> "Gà trống vỗ cánh ba lần rồi mới gáy. Người khôn cân nhắc ba lần rồi mới nói."
                  </p>
                </div>
              </div>

              <p className="text-white/80 text-sm leading-relaxed italic mb-8">
                Bài học về sự cẩn trọng và chín chắn trong giao tiếp, một giá trị cốt lõi trong ứng xử của người Tày - Nùng.
              </p>

              <div className="mt-auto text-center">
                <a 
                  href="https://nungdic-app.vercel.app/#dictionary_list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors border-2 border-transparent hover:border-black shadow-none hover:shadow-brutal text-center"
                >
                  Học thêm đạo lý
                </a>
              </div>
            </div>
          </div>

          {/* Tab indicators */}
          <div className="mt-36 md:mt-56 flex justify-center gap-4">
            {cards.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-4 h-4 border-2 border-black transform rotate-45 transition-all ${activeIndex === idx ? 'bg-white scale-125' : 'bg-black/30'}`}
                aria-label={`Go to card ${idx + 1}`}
              />
            ))}
          </div>
       </div>
    </section>
  );
};

export default WordOfTheDay;