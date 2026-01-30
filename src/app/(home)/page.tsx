import AllNews from '@/components/pageComponents/home/AllNews'
import Banner from '@/components/pageComponents/home/Banner'
import Shironam from '@/components/pageComponents/home/Shironam'
import Navbar from '@/components/pageComponents/shared/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-12 px-4'>
      <main className="pt-20">
           <Banner />
           <AllNews></AllNews>
</main>
    </div>
  )
}

export default page