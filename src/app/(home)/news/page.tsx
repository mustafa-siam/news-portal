import MoreNews from '@/components/pageComponents/newsPage/MoreNews'
import NewsList from '@/components/pageComponents/newsPage/NewsList'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="px-[5%] lg:px-0">
        <div className="max-w-7xl mx-auto py-12 mt-32">
          <NewsList />
        </div>
      </div>
    </div>
  )
}

export default page