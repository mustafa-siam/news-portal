import React from 'react'
 type headerProps={
        title:string,
    }
const SectionHeader = ({title}:headerProps) => {
  return (
    <div>
         <h1 className='font-bold text-2xl leading-none'>{title}</h1>
    </div>
  )
}

export default SectionHeader