import React from 'react'

const PageTitle = ({title, description}) => {
  return (
    <>
        <div className="w-full sm:w-[350px] pt-28 xl:pt-40 mb-7 xl:mb-10">
            <h2 className='page-header font-yantramanav text-3xl xl:text-5xl uppercase font-bold mb-5 xl:mb-6'>{title}</h2>
            <p className='page-desc text-neutral-900 font-yantramanav text-xl xl:text-2xl font-light tracking-wider'>{description}</p>
        </div>
    </>
  )
}

export default PageTitle
