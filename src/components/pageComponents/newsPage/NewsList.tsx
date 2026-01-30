import React from 'react'
import Link from 'next/link'
import news from '@/components/hooks/News' 
import NewsCard from './NewsCard'

const NewsList = () => {
    const newsData = news || [];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {newsData.map((item) => (
                <Link href={`/news/${item.slug}`} key={item.id} className='w-full'>
                    <NewsCard news={item} />
                </Link>
            ))}
        </div>
    )
}

export default NewsList