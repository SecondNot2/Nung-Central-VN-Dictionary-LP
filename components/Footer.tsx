import React from 'react';
import { Compass, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-nung-red p-2 border-2 border-white shadow-[4px_4px_0px_0px_#fff]">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <span className="ml-3 font-display font-bold text-3xl">NungDic</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
              Dự án được tạo ra với tình yêu dành cho việc bảo tồn và phát huy ngôn ngữ cùng văn hóa Nùng. Hãy cùng chúng tôi gìn giữ di sản quý giá này.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-serif font-bold text-xl mb-6 relative inline-block">
              <span className="relative z-10">Về chúng tôi</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-nung-red -z-0"></span>
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="font-bold text-white">Nhóm phát triển NungDic</li>
              <li><a href="#" className="hover:text-nung-red transition-colors">Liên hệ</a></li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@nungdic.com" className="hover:text-white">Email Hỗ trợ</a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
             <h4 className="font-serif font-bold text-xl mb-6 relative inline-block">
              <span className="relative z-10">Điều hướng</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-nung-blue -z-0"></span>
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-nung-red transition-colors">Trang chủ</a></li>
              <li><a href="#explore" className="hover:text-nung-red transition-colors">Khám phá</a></li>
              <li><a href="#stories" className="hover:text-nung-red transition-colors">Câu chuyện</a></li>
              <li><a href="#words" className="hover:text-nung-red transition-colors">Từ vựng</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 NungDic Project. Mọi quyền được bảo lưu.</p>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-2 bg-nung-green text-white px-3 py-1 border-2 border-white shadow-[2px_2px_0px_0px_#888] font-bold text-xs">
              <Heart className="w-3 h-3 fill-current" />
              Cảm ơn sự quan tâm của bạn!
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;