import React from 'react'
import Dos from '../components/Dos/Dos.jsx'

const categoryCards = [
  {
    title: 'online tution',
    tagline: 'Live online art coaching with one-on-one support and practice plans.',
    Icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    ),
  },
  {
    title: 'Acrylics',
    tagline: 'Bold acrylic work with expressive color, texture, and modern finish.',
    Icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path d="M6 4h12l2 14H4L6 4z" />
        <circle cx="9" cy="10" r="1.5" />
        <circle cx="12" cy="7" r="1.5" />
        <circle cx="15" cy="11" r="1.5" />
      </svg>
    ),
  },
  {
    title: 'Charcoal',
    tagline: 'Atmospheric charcoal sketches and rich textured drawing studies.',
    Icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path d="M7 17l5-5 5 5" />
        <path d="M12 12v6" />
        <path d="M9 4l6 6" />
      </svg>
    ),
  },
  {
    title: 'Mandala',
    tagline: 'Intricate mandala compositions with detailed pattern work and balance.',
    Icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="M5.6 5.6l2.1 2.1" />
        <path d="M16.3 16.3l2.1 2.1" />
        <path d="M5.6 18.4l2.1-2.1" />
        <path d="M16.3 7.7l2.1-2.1" />
      </svg>
    ),
  },
  {
    title: 'Mixed media',
    tagline: 'Layered mixed media pieces combining paint, paper, and digital texture.',
    Icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 8h8v8H8z" />
      </svg>
    ),
  },
  {
    title: 'Lippen art',
    tagline: 'Stylized lip art pieces with soft gradients and vivid color accents.',
    Icon: ({ className }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path d="M4 12c2-2 4-4 8-4s6 2 8 4c-2 2-4 4-8 4s-6-2-8-4z" />
        <path d="M6 14c1.5 1 3 1 6 1s4.5 0 6-1" />
      </svg>
    ),
  },
]

function Ido() {
  return (
    <section className="mx-auto max-w-[1300px] px-4 py-16 font-poppins sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] items-center">
        <div className="relative">
          <div className="absolute -left-4 top-6 h-24 w-24 rounded-full border border-[#13404f]/15 bg-[#13404f]/10"></div>
          <div className="absolute bottom-4 right-4 h-20 w-20 rounded-full border border-[#ffb366]/20 bg-[#ffb366]/10"></div>
          <img
            src="/anju.png"
            alt="Anju portrait"
            className="relative w-full rounded-[2rem] border border-[#152e3a]/10 object-cover shadow-[0_35px_80px_rgba(0,0,0,0.18)]"
          />
        </div>

        <div className="space-y-8">
          <div className="rounded-[2rem] bg-[#f5ede6] p-10 shadow-[0_25px_60px_rgba(0,0,0,0.1)]">
            <h2 className="mt-4 text-4xl font-bold text-[#152e3a] sm:text-5xl">
              What I Do <span className="text-[#ffb366]">✦</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              I offer online tuition  and creative art services across multiple expressive mediums. Every category is crafted to help you learn, grow, or display beautiful artwork that reflects your unique style.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {categoryCards.map((card) => (
              <Dos
                key={card.title}
                title={card.title}
                tagline={card.tagline}
                Icon={card.Icon}
                accentClass="bg-[#a64321]/15 text-[#a64321]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ido
