
import MoreNews from '@/components/pageComponents/newsPage/MoreNews'
import NewsDetails from '@/components/pageComponents/newsPage/NewsDetails'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen ">

      <div className="px-[5%]">
        <div className="max-w-7xl mx-auto py-12 space-y-12">
          <NewsDetails/>
          <MoreNews />
        </div>
      </div>
    </div>
  )
}

export default page