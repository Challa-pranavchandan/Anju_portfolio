import React from 'react'

function Button({ name }) {
  return (
    <button className='flex items-center text-2xl rounded-full bg-[#152e3a] px-7 py-4 text-amber-50'>
      <span className="mr-5 ml-2">{name ?? 'View Work'}</span>
      <img src='/arrow-right-up-line.svg' alt='Arrow icon' className='h-6 w-6 filter brightness-0 invert' />
    </button>
  )
}

export default Button