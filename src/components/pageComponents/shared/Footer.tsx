import Image from "next/image";
import React from "react";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Mail, 
} from "lucide-react";

type SocialLink = { icon: React.ReactNode; url: string };
type SectionLink = string | SocialLink;

interface LinkSection {
  title: string;
  links: SectionLink[];
}

const Footer = () => {
  const linkSections: LinkSection[] = [
    {
      title: "Quick Links",
      links: ["Home", "Portfolio", "About Us", "Testimonial"],
    },
    {
      title: "Resources",
      links: ["Support", "Privacy Policy", "Terms & Conditions"],
    },
    {
      title: "Social Media",
      links: [
        { icon: <Instagram size={18} />, url: "#" },
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Facebook size={18} />, url: "#" },
        { icon: <Youtube size={18} />, url: "#" },
      ],
    },
  ];

  return (
    <footer className="px-6 bg-[#282A3A]">
      <div className="max-w-6xl flex flex-col md:flex-row items-start justify-between md:gap-20 gap-12 py-12 border-b border-gray-500/30 mx-auto">
        <div className="max-w-[362px] mr-auto">
          <div className="flex items-center gap-4 ">
            <Image src="/logo2.png" alt="logo" width={40} height={40} 
            className="md:w-10 md:h-10 w-8 h-8" 
            />
            <p className="text-white font-semibold text-2xl md:text-3xl leading-[1.2]">
              Ngopi
            </p>
          </div>

          <p className=" mt-6 text-white text-sm md:text-base leading-relaxed font-normal">
            Discover tranquility at Ngopi a sanctuary for unwinding, where your
            evenings are perfected with relaxation and rich flavors.
          </p>

          <p className="md:text-base text-sm pt-8 text-white leading-relaxed font-normal">
            hello@ngopi.com <br />
            Phone : +01 23456789
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-8 max-w-[600px]">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-normal md:text-2xl text-lg text-white mb-6 leading-[1.4] font-playfair">
                {section.title}
              </h3>

              {section.title !== "Social Media" ? (
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-white text-sm font-inter hover:text-[#6B3709] transition font-normal leading-[1.2]"
                      >
                        {/* Type check করার জন্য typeof ব্যবহার করা হয়েছে */}
                        {typeof link === 'string' ? link : ""}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="flex gap-4">
                  {section.links.map((item, i) => (
                    <li key={i}>
                      {/* item যদি অবজেক্ট হয় তবেই সেটি রেন্ডার হবে */}
                      {typeof item !== 'string' && (
                        <a
                          href={item.url}
                          className="w-10 h-10 flex items-center justify-center rounded-none bg-white/10 text-white"
                        >
                          {item.icon}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="flex w-full mt-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm" />
                <input
                  type="email"
                  placeholder="name@domain.com"
                  className="w-full h-11 pl-10 pr-3 rounded-l  bg-white/12 text-white/40 text-sm outline-none"
                />
              </div>
              <button className="py-3 px-10 bg-white text-sm font-normal font-inter rounded-none">
                Send
              </button>
            </div>
          </div>

        </div>
    </footer>
  );
};

export default Footer;