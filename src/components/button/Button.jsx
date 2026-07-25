import React from 'react'

function Button({ name, variant = 'primary', icon = true }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-7 py-4 text-2xl font-poppins transition-all duration-200'
  const variants = {
    primary: 'bg-[#152e3a] text-amber-50 hover:scale-[1.2]',
    secondary: 'bg-[#f59e78] text-[#152e3a] hover:bg-[#f7b896]'
  }

  return (
    <button className={`${baseStyles} ${variants[variant] ?? variants.primary}`}>
      <span className='mr-3'>{name ?? 'View Work'}</span>
      {icon && (
        <img src='/arrow-right-up-line.svg' alt='Arrow icon' className='h-6 w-6 filter brightness-0 invert' />
      )}
    </button>
  )
}

export default Button