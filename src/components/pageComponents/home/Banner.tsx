"use client";

import Image from "next/image";
import news from "@/components/hooks/News";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

export default function NewsBanner() {
  const mainNews = news[0];
  const sideNews = news.slice(0, 6);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    containScroll: "trimSnaps",
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 mb-8 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[510px]">
           
        <div className="md:col-span-3 relative h-[300px] md:h-full group cursor-pointer overflow-hidden rounded-lg">
          <Link href={`/news/${mainNews.slug}`}>
 <Image
            src={mainNews.img}
            alt={mainNews.title}
            fill
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 w-fit rounded uppercase tracking-wider">
              {mainNews.category}
            </span>
            <h1 className="text-white text-2xl md:text-4xl font-bold mt-3 leading-tight">
              {mainNews.title}
            </h1>
          </div>
           </Link>
         
        </div>

        <div className="md:col-span-1 relative h-[400px] md:h-full flex flex-col">
  
          <div className="absolute top-2 right-2 flex gap-1 z-20">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="bg-black/60 hover:bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full transition"
            >
              ↑
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="bg-black/60 hover:bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full transition"
            >
              ↓
            </button>
          </div>

          <div className="overflow-hidden h-full w-full rounded-lg" ref={emblaRef}>
            <div className="flex flex-col h-full">
              {sideNews.map((item) => (
                <div 
                  key={item.id} 
                  className="relative flex-[0_0_160px] md:flex-[0_0_32.5%] min-h-0 mb-[1.25%] last:mb-0"
                >
                  <div className="relative h-full w-full group cursor-pointer overflow-hidden rounded-lg">
                    <Link href={`/news/${item.slug}`}>
                     <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                      <h3 className="text-white text-sm font-semibold line-clamp-2 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    </Link>
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}