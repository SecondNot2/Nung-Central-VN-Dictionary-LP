import React from "react";
import { Database, Users, MessageSquare, Zap } from "lucide-react";

const StatsSection: React.FC = () => {
  const stats = [
    {
      label: "Từ vựng chuẩn hóa",
      value: "1,000+",
      icon: Database,
      color: "text-nung-red",
    },
    {
      label: "Bản dịch/ngày",
      value: "500+",
      icon: Zap,
      color: "text-nung-blue",
    },
    {
      label: "Thành viên cộng đồng",
      value: "200+",
      icon: Users,
      color: "text-nung-green",
    },
    {
      label: "Thảo luận & Góp ý",
      value: "1,500+",
      icon: MessageSquare,
      color: "text-nung-brown",
    },
  ];

  return (
    <section className="py-20 bg-nung-blue text-white relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-fabric"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-white flex items-center justify-center border-4 border-black mb-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                <stat.icon className={`${stat.color} w-8 h-8`} />
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="font-serif text-sm md:text-base font-medium text-gray-300 uppercase tracking-widest px-4">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 border-4 border-white inline-block relative left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-sm">
          <p className="font-serif text-xl italic text-nung-sand text-center max-w-2xl">
            "Dữ liệu được cập nhật và chuẩn hóa định kỳ bởi đội ngũ quản trị
            viên và cộng đồng người Nùng bản địa."
          </p>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};

export default StatsSection;
