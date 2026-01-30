'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import news from '@/components/hooks/News'
import Image from 'next/image'
import { CalendarDays } from 'lucide-react'
const NewsDetails = () => {
    const { slug } = useParams();
  const article = news.find((n) => n.slug === slug);

  if (!article) return <div className="text-white">News Not Found</div>;
  return (
   <section className="max-w-4xl mt-28 mx-auto space-y-8 bg-white py-6">

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            {article.category}
          </span>
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <CalendarDays size={16} />
            <span>{article.date}</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
          {article.title}
        </h1>
      </div>

      <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm border border-slate-100">
        <Image 
          src={article.img || "/placeholder.png"} 
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="max-w-none">
        <p className="text-xl text-slate-700 leading-relaxed font-normal first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-blue-600">
          {article.description}
        </p>
        
        <div className="mt-8 space-y-6 text-slate-600 text-lg leading-relaxed">
          <p>
            This article explores the latest updates regarding {article.title}. 
            Detailed information helps readers understand the full context of the news.
          </p>
          <p>
            With the Roboto font applied, this content is highly readable on a clean white background, 
            providing a minimal and professional reading experience.
          </p>
        </div>
      </div>
      <div className="border-b-2 border-slate-200 pt-10" />
    </section>
  )
}

export default NewsDetails