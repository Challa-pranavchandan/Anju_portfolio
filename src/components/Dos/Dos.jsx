import React from 'react'

function Dos({ Icon, title, tagline, accentClass = 'bg-[#ffb366]/15 text-[#ffb366]' }) {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1d26] p-6 text-white shadow-[0_25px_50px_rgba(0,0,0,0.1)] transition hover:-translate-y-1 hover:bg-[#163342]">
      <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl ${accentClass}`}>
        {Icon ? <Icon className="h-7 w-7" /> : null}
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm leading-6 text-slate-300">{tagline}</p>
      </div>
    </div>
  )
}

export default Dos
