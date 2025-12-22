import React from "react";
import { Book, Users, Image as ImageIcon } from "lucide-react";

const Features: React.FC = () => {
  return (
    <section
      id="explore"
      className="py-24 bg-nung-sand border-y-4 border-black relative"
    >
      <div className="absolute inset-0 w-full h-full bg-paper opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black text-outline-light inline-block relative z-10">
            ✨ Khám phá văn hóa & ngôn ngữ ✨
          </h2>
          <div className="absolute top-1/2 left-1/2 w-3/4 h-8 bg-nung-green/30 transform -translate-x-1/2 -translate-y-1/2 -rotate-1 skew-x-12 blur-sm -z-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 px-4">
          {/* Card 1: AI Translation */}
          <div className="bg-nung-red text-white p-8 border-4 border-black shadow-[8px_8px_0px_2px_#A32D2D] transform rotate-1 hover:rotate-0 transition-transform duration-300 relative group">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-white border-4 border-black flex items-center justify-center shadow-brutal transform -rotate-6 group-hover:rotate-12 transition-transform">
              <Book className="text-nung-red w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4 mt-4">
              AI Dịch thuật Thông minh
            </h3>
            <ul className="space-y-3 font-medium">
              <li className="flex items-start">
                <span className="mr-2">•</span>Engine AI tối ưu cụm từ dài
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>Tự động suy luận (Inference) từ
                đơn
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>Phát âm TTS chuẩn Lạng Sơn & Việt
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>Lịch sử tra cứu đồng bộ Cloud
              </li>
            </ul>
          </div>

          {/* Card 2: Community */}
          <div className="bg-nung-blue text-white p-8 border-4 border-black shadow-[8px_8px_0px_2px_#2A475E] transform -rotate-2 hover:rotate-0 transition-transform duration-300 relative group mt-8 md:mt-0">
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-white border-4 border-black flex items-center justify-center shadow-brutal transform rotate-3 group-hover:-rotate-12 transition-transform">
              <Users className="text-nung-blue w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4 mt-4">
              Cộng đồng & Tương tác
            </h3>
            <ul className="space-y-3 font-medium">
              <li className="flex items-start">
                <span className="mr-2">•</span>Thảo luận đa tầng (4 cấp độ
                nested)
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>Đề xuất chỉnh sửa & Đóng góp từ
                mới
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>Xác thực an toàn qua Google OAuth
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>Thư viện cá nhân & Bookmark
              </li>
            </ul>
          </div>

          {/* Card 3: Admin & Tech */}
          <div className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_#5C7F60] transform rotate-2 hover:rotate-0 transition-transform duration-300 relative group mt-8 lg:mt-0">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-nung-green border-4 border-white flex items-center justify-center shadow-brutal transform rotate-1 group-hover:rotate-6 transition-transform">
              <ImageIcon className="text-white w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4 mt-4 text-nung-green">
              Hệ thống Quản trị & Data
            </h3>
            <ul className="space-y-3 font-medium text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-nung-green">•</span>Admin Dashboard
                thống kê real-time
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-nung-green">•</span>Quy trình kiểm
                duyệt đóng góp chặt chẽ
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-nung-green">•</span>Dữ liệu 1000+ từ
                vựng chuẩn hóa
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-nung-green">•</span>Thiết kế Earth &
                Bamboo cao cấp
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
