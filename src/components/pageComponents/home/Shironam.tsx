"use client";
import Marquee from "react-fast-marquee";

const Shironam = () => {
  const newsItems = [
    "বাংলাদেশ আজ দুর্দান্ত জয় পেয়েছে •",
    "আন্তর্জাতিক বাজারে তেলের দাম বৃদ্ধি •",
    "নতুন সিনেমা মুক্তি পাচ্ছে শুক্রবার •",
    "বিপিএলে আজ মুখোমুখি ঢাকা ও চট্টগ্রাম •",
    "ডলারের বিপরীতে টাকার মান আরও কমেছে •",
    "রাজধানীতে যানজট বেড়েছে, ভোগান্তিতে মানুষ •",
    "আন্তর্জাতিক বাজারে স্বর্ণের দাম বৃদ্ধি পেয়েছে •",
    "শিক্ষাপ্রতিষ্ঠানে আগামীকাল ছুটি ঘোষণা •"
  ];

  return (
    <div className="w-full bg-red-700 text-white border-y border-red-800 shadow-sm">
      <div className="max-w-screen-xl  flex items-center h-10 overflow-hidden">
      
        <div className="bg-black px-4 h-full flex items-center font-bold text-sm md:text-base whitespace-nowrap z-10">
          শিরোনাম
        </div>
        
        <div className="flex-1">
          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover={true}
          >
            {newsItems.map((item, index) => (
              <span key={index} className="mx-8 text-sm md:text-base font-medium tracking-wide">
                {item}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default Shironam;