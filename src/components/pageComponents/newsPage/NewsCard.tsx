import React from 'react'
import Image from 'next/image'
import { News } from '@/components/hooks/News'
import { CalendarDays, ArrowUpRight } from "lucide-react"

interface Props {
  news: News
}

const NewsCard = ({ news }: Props) => {
  if (!news) return null;

  return (
    <div  className="group w-full h-full bg-transparent border border-white/10  overflow-hidden hover:bg-white/[0.03] transition-all duration-300 flex flex-col">
      <div className="relative w-full h-56  overflow-hidden">
        <Image 
          src={news.img || "/placeholder-news.png"} 
          alt={news.title}
          fill
          className="object-cover  group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
           <span className="bg-blue-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-tighter backdrop-blur-sm">
            {news.category}
          </span>
        </div>
      </div>

      <div  className="py-5 px-2 space-y-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs ">
          <CalendarDays size={14} />
          <span>{news.date}</span>
        </div>
        
        <h3 className="text-xl font-medium leading-tight hover:text-blue-400 transition-colors line-clamp-2">
          {news.title}
        </h3>

        <p className="text-sm  line-clamp-2 font-light">
          {news.description}
        </p>

        <div className=" mt-auto flex items-center text-blue-500 text-sm font-medium gap-1 group/btn">
  Read Full Article
  <ArrowUpRight
    size={16}
    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
  />
</div>
      </div>
    </div>
  )
}

export default NewsCard