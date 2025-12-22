import React from 'react';
import { Volume2, SpellCheck } from 'lucide-react';

const WordOfTheDay: React.FC = () => {
  return (
    <section id="words" className="py-24 bg-nung-red border-y-4 border-black relative">
       {/* Texture overlay */}
       <div className="absolute inset-0 w-full h-full bg-fabric opacity-20 pointer-events-none"></div>

       <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
         <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-white text-outline">
            Từ vựng nổi bật: <span className="italic">Cửa sổ tâm hồn</span>
         </h2>
         <p className="text-xl md:text-2xl mb-12 font-medium text-nung-sand max-w-2xl mx-auto leading-relaxed">
            Mỗi từ là một mảnh ghép của bức tranh văn hóa Nùng. Khám phá những từ vựng đặc biệt mang ý nghĩa sâu sắc.
         </p>

         <div className="relative mx-auto max-w-2xl">
           {/* Handwritten annotation */}
           <span className="absolute -top-10 -right-6 md:-right-12 font-hand text-4xl text-white transform rotate-12 z-20">
             Mới mỗi ngày!
           </span>

           {/* Card */}
           <div className="bg-nung-sand text-left p-8 md:p-10 border-4 border-black shadow-[12px_12px_0px_0px_#000] relative">
             {/* Header */}
             <div className="flex items-center gap-3 mb-6 border-b-2 border-black pb-4">
               <SpellCheck className="w-8 h-8 text-nung-red" />
               <h3 className="font-serif font-bold text-2xl">Từ của ngày</h3>
             </div>

             {/* Content Box */}
             <div className="bg-nung-blue/10 border-2 border-dashed border-nung-blue p-6 mb-8">
               <div className="mb-4">
                 <span className="block text-sm font-bold uppercase tracking-wider text-nung-blue mb-1">Từ Nùng</span>
                 <h4 className="text-4xl font-display text-nung-red font-bold">"Sli"</h4>
                 <p className="text-gray-700 mt-2 font-medium">Nghĩa: Về, trở về</p>
               </div>
               
               <div className="flex items-center gap-2 mb-4">
                 <button className="bg-black text-white p-2 rounded-full hover:bg-nung-red transition-colors">
                   <Volume2 className="w-4 h-4" />
                 </button>
                 <span className="font-mono text-lg">/ʃli/</span>
               </div>

               <div className="mb-4">
                 <span className="font-bold">Ví dụ:</span> <span className="italic">"Pền Sli" (Trở về nhà)</span>
               </div>
             </div>

             {/* Cultural Context */}
             <div className="bg-white p-6 border-2 border-black">
               <h5 className="font-bold text-lg mb-2 flex items-center text-nung-brown">
                 💡 Ý nghĩa văn hóa
               </h5>
               <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                 Từ <strong>"Sli"</strong> không chỉ đơn thuần là "trở về" mà còn mang ý nghĩa của sự gắn kết gia đình, nguồn cội, và sự an lành khi quay về nơi chốn quen thuộc. Nó thể hiện tầm quan trọng của gia đình và cộng đồng trong văn hóa Nùng.
               </p>
             </div>

             <div className="mt-8 text-center">
               <button className="w-full md:w-auto bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-nung-blue transition-colors border-2 border-transparent hover:border-black shadow-none hover:shadow-brutal">
                 Khám phá thêm từ vựng
               </button>
             </div>
           </div>
         </div>
       </div>
    </section>
  );
};

export default WordOfTheDay;