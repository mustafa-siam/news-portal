'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import news from '@/components/hooks/News';
import NewsCard from './NewsCard';
const MoreNews = () => {
    const { slug } = useParams();
  const otherNews = news.filter((item) => item.slug !== slug).slice(0, 3);
  if (otherNews.length === 0) return null;
  return (
    <section>
      <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
  <div>
    {/* font-jost এর বদলে font-sans (Roboto) ব্যবহার করা হয়েছে আপনার থিম অনুযায়ী */}
    <h2 className="text-3xl font-bold text-slate-900 font-sans tracking-tight">
      More News
    </h2>
    <p className="text-slate-500 text-sm mt-2 font-light">
      Check out our latest updates
    </p>
  </div>
  
  <Link 
    href="/news" 
    className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-semibold border-b border-blue-100 hover:border-blue-600 pb-1"
  >
    View All
  </Link>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherNews.map((item) => (
          <Link href={`/news/${item.slug}`} key={item.id} className="w-full">
            <NewsCard news={item} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default MoreNews