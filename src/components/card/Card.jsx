import React from 'react'

function Card({ src, name, medium }) {
  return (
    <div className="group overflow-hidden rounded-[2rem] bg-[#fbf1df] text-[#152e3a] shadow-[0_30px_80px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:shadow-[0_35px_70px_rgba(0,0,0,0.18)]">
      <div className="overflow-hidden rounded-t-[2rem] bg-slate-100">
        <img src={src} alt={name} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex items-center justify-between gap-4 px-6 py-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-sm font-medium text-slate-600">{medium}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a64321] text-white shadow-sm">
          <img src="/arrow-right-up-line.svg" alt="Arrow icon" className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}

export default Card