import React, { useState } from "react";
import {
  Search,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const AppShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "translate" | "community" | "admin"
  >("translate");

  const content = {
    translate: {
      title: "Engine Dịch thuật AI",
      desc: "Sử dụng kết hợp AI để cung cấp bản dịch chính xác nhất, có khả năng suy luận ngữ cảnh và bóc tách cụm từ thông minh.",
      features: [
        "Ưu tiên khớp cụm từ dài (Matching)",
        "Suy luận từ đơn (Inference)",
        "Ngăn chặn lặp từ & lỗi chuỗi con",
      ],
      image: "/nungdic_app_mockup.png",
    },
    community: {
      title: "Hệ thống Thảo luận Đa tầng",
      desc: "Nơi cộng đồng cùng nhau hoàn thiện bản sắc ngôn ngữ qua các cuộc thảo luận sâu sắc và hệ thống đóng góp minh bạch.",
      features: [
        "Nested Replies (4 cấp độ)",
        "Phê duyệt đóng góp real-time",
        "Bookmarking & Thư viện cá nhân",
      ],
      image: "/nungdic_app_mockup.png",
    },
    admin: {
      title: "Dashboard Quản trị Chuyên sâu",
      desc: "Hệ thống backend mạnh mẽ giúp quản trị viên kiểm soát chất lượng dữ liệu, xử lý báo cáo và theo dõi sự phát triển của hệ sinh thái.",
      features: [
        "Thống kê biểu đồ Real-time",
        "Phân quyền người dùng chi tiết",
        "Quản lý góp ý & Báo lỗi",
      ],
      image: "/nungdic_app_mockup.png",
    },
  };

  return (
    <section
      id="app-showcase"
      className="py-24 bg-nung-green relative overflow-hidden border-y-4 border-black"
    >
      {/* Background Texture & Image */}
      <div className="absolute inset-0 w-full h-full opacity-10 bg-paper pointer-events-none"></div>
      <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXAA9NDtZG-Ck0H7nktglXDZ6FKSqg54q1YBkblJ8cKxUuFsCV_9C6jzc9ibKr6XweRfcA5GRXTAM-NFrfgbVpv2EjpZv5fYekjPmFMEBCabiSIcStcoHm2yU571XLyfuOFFhi_29qtR8zmuW3AFLTsRlsnvmqo-V0Cqf23EojZQy0jZ7kAgI-rUjznx7PnEN43PJ1dnzgR3NL_Zdb-vERG55087uJ9gyy-HDdvAmKIbVJKQDFTv4IJiF1xZ7VKhKvyoUSMalAkhVD"
          alt="Cultural Background"
          className="w-full h-full object-cover cultural-filter"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-12 lg:gap-20">
          {/* Row 1: Header and App UI Simulation */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Top Left: Title */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block bg-white text-nung-green border-2 border-black px-4 py-1 font-bold text-sm mb-6 shadow-brutal-sm transform -rotate-1">
                ✨ CÔNG NGHỆ BẢO TỒN
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white text-outline lowercase">
                Trải nghiệm <br />
                ứng dụng <br />
                <span className="bg-white text-black px-4 py-1 inline-block transform rotate-1 border-2 border-black uppercase mt-2">
                  HIỆN ĐẠI
                </span>
              </h2>
            </div>

            {/* Top Right: UI Simulation */}
            <div className="w-full lg:w-1/2 relative">
              {/* Decorative frames */}
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-white/20 -z-10 transform -rotate-3"></div>
              <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-nung-red/30 blur-3xl -z-10"></div>

              <div className="relative bg-white p-2 border-4 border-black shadow-brutal-lg rounded-sm overflow-hidden aspect-[4/3] md:aspect-video group">
                {/* Fake App UI */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href="https://nungdic-app.vercel.app//"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-nung-red text-white border-2 border-black px-8 py-4 font-bold text-xl shadow-brutal hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all transform -rotate-1"
                  >
                    DÙNG THỬ NGAY 🚀
                  </a>
                </div>

                <div className="w-full h-full bg-nung-dark p-0 text-white font-mono text-sm overflow-hidden relative">
                  {/* Mockup as Background */}
                  <img
                    src={content[activeTab].image}
                    alt="App Mockup"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-nung-dark via-nung-dark/40 to-transparent p-6 flex flex-col justify-end">
                    <div className="flex gap-2 absolute top-4 left-4 z-20">
                      <div className="w-3 h-3 rounded-full bg-red-500 border border-black/20"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black/20"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 border border-black/20"></div>
                    </div>

                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 border border-white/20 text-[10px] text-white/50 rounded-full">
                      SYSTEM_ACTIVE: V2.1
                    </div>

                    {activeTab === "translate" && (
                      <div className="space-y-3 animate-in fade-in slide-in-from-bottom-8 duration-700 relative z-20">
                        <div className="inline-flex items-center gap-2 text-nung-green text-xs font-black tracking-widest uppercase bg-white/10 px-2 py-1 rounded">
                          <div className="w-1.5 h-1.5 rounded-full bg-nung-green animate-ping"></div>
                          AI ENGINE ONLINE
                        </div>
                        <div className="p-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-xl shadow-2xl">
                          <p className="text-nung-sand font-bold text-xl md:text-2xl mb-1">
                            "Khọp chai mần dã chốm pày"
                          </p>
                          <div className="flex items-center gap-2 text-xs text-white/40">
                            <span className="px-1.5 py-0.5 bg-white/10 rounded">
                              Bản dịch từ
                            </span>
                            <span className="italic font-serif">
                              "Cảm ơn bạn đã đồng hành"
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "community" && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 relative z-20">
                        <div className="flex gap-4 items-start bg-white/5 backdrop-blur-xl p-4 border-2 border-white/10 rounded-xl">
                          <div className="w-12 h-12 rounded-full bg-nung-blue border-2 border-white/20 flex-shrink-0 overflow-hidden shadow-lg">
                            <img
                              src="https://api.dicebear.com/7.x/avataaars/svg?seed=NungDic"
                              alt="User"
                            />
                          </div>
                          <div className="flex-grow">
                            <p className="font-bold text-nung-sand flex items-center gap-2">
                              Đường Quốc Thắng{" "}
                              <span className="text-[10px] bg-nung-red px-1 rounded">
                                ADMIN
                              </span>
                            </p>
                            <p className="text-sm text-white/80 mt-1">
                              "Cụm từ này cần trau chuốt thêm phần âm vần
                              SLEI..."
                            </p>
                            <div className="flex gap-4 mt-3 text-[10px] font-bold uppercase tracking-tighter">
                              <span className="text-nung-red cursor-pointer hover:underline">
                                PHẢN HỒI (4)
                              </span>
                              <span className="text-white/40 cursor-pointer hover:underline">
                                YÊU THÍCH
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "admin" && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 relative z-20">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/5 backdrop-blur-xl p-4 border-2 border-white/10 rounded-xl">
                            <p className="text-3xl font-black text-white">
                              1,024
                            </p>
                            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">
                              Từ vựng gốc
                            </p>
                            <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-nung-green w-[85%]"></div>
                            </div>
                          </div>
                          <div className="bg-white/5 backdrop-blur-xl p-4 border-2 border-white/10 rounded-xl">
                            <p className="text-3xl font-black text-nung-red">
                              28
                            </p>
                            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">
                              Pending Approval
                            </p>
                            <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-nung-red w-[40%] animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Tag decorative */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 font-bold text-xs shadow-brutal whitespace-nowrap z-40 transform rotate-1">
                INTERFACE_PREVIEW_BUILD_9104
              </div>
            </div>
          </div>

          {/* Row 2: Tabs and Detailed Description */}
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            {/* Bottom Left: Navigation Tabs */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4">
                {(Object.keys(content) as Array<keyof typeof content>).map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex items-center gap-4 p-5 border-4 transition-all duration-300 ${
                        activeTab === tab
                          ? "border-black bg-nung-sand shadow-brutal translate-x-1 translate-y-1"
                          : "border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/20 backdrop-blur-sm"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 flex-shrink-0 flex items-center justify-center border-2 border-black ${
                          activeTab === tab
                            ? "bg-nung-red text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {tab === "translate" && <Sparkles />}
                        {tab === "community" && <MessageSquare />}
                        {tab === "admin" && <ShieldCheck />}
                      </div>
                      <div className="text-left">
                        <h4
                          className={`font-bold text-lg ${
                            activeTab === tab ? "text-black" : "text-white"
                          }`}
                        >
                          {content[tab].title}
                        </h4>
                      </div>
                      <ChevronRight
                        className={`ml-auto transform transition-transform ${
                          activeTab === tab
                            ? "rotate-90 text-black"
                            : "text-white"
                        }`}
                      />
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Bottom Right: Feature Description Box */}
            <div className="w-full lg:w-1/2">
              <div className="bg-nung-sand/90 p-8 border-4 border-black shadow-brutal relative overflow-hidden group min-h-[250px] flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-16 h-16 bg-nung-red/10 group-hover:bg-nung-red/20 transition-colors -mr-6 -mt-6 transform rotate-45"></div>
                <p className="text-xl text-black font-medium leading-relaxed italic mb-8 relative z-10">
                  "{content[activeTab].desc}"
                </p>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {content[activeTab].features.map((f, i) => (
                    <span
                      key={i}
                      className="text-xs font-bold uppercase tracking-wider bg-black text-white px-4 py-2 border-2 border-black shadow-brutal-sm"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
