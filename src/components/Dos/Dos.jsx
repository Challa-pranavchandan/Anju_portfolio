import React from 'react'

function Dos({src,name,tagline}) {
  return (
    <div className='flex  w-1/2 bg-amber-200  font-roboto'>
        <img src={src} alt="" className='w-30 h-30 rounded-2xl m-2 bg-amber-200' />
        <div className='flex items-center justify-center text-wrap flex-col'>
            <h1 className='text-3xl p-2 font-bold mb-0'>{name}</h1>
            <p className='text-left text-sm p-2'>{tagline}</p>
        </div>
    </div>
  )
}

export default Dos