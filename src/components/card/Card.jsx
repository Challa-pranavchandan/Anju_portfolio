import React from 'react'

function Card({src,name,medium}) {
  return (
     <div className="w-1/4 flex flex-col rounded-2xl bg-[#fbf1df] text-white min-h-[19rem] font-roboto overflow-hidden">
      <div>
        <img
          src={src}
          alt={name}
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex items-center justify-between mt-4 text-[#152e3a] py-3 px-3 pb-10 gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className="font-medium text-m">{medium}</p>
        </div>
        <img src="/arrow-right-up-line.svg" alt="Arrow icon" className="h-7 w-7 bg-[#a64321] rounded-full" />
      </div>
    </div>
  )
}

export default Card