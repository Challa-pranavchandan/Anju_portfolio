import React, { useEffect, useRef, useState } from 'react'
import CustomerReview from './CustomerReview.jsx'

function CustomerSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 m-0 pb-16">
      <div className="overflow-hidden rounded-[2rem] bg-[#f7dfb7] p-6 sm:p-10 shadow-[0_35px_80px_rgba(0,0,0,0.16)]">
        <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-center">
          <div>
            {/* Carousel: accepts `reviewsData` prop or uses internal defaults */}
            <CarouselReviews />
          </div>

          <div className="grid gap-3 sm:gap-4 grid-cols-3 sm:grid-cols-3 w-full">
            <div className="rounded-[1.5rem] sm:rounded-[1.75rem]  p-3 sm:p-6 text-center ">
              <p className="text-2xl sm:text-4xl font-bold text-[#102028]">30+</p>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.22em] text-[#102028]/75 leading-tight">Artworks</p>
            </div>
            <div className="rounded-[1.5rem] sm:rounded-[1.75rem]  p-3 sm:p-6 text-center  align-center justify-center">
              <p className="text-2xl sm:text-4xl font-bold text-[#102028]">12+</p>
              <p className="mt-2 sm:mt-3 text-s sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.22em] text-[#102028]/75 leading-tight">Happy<br/>Clients</p>
            </div>
            <div className="rounded-[1.5rem] sm:rounded-[1.75rem]   p-3 sm:p-6 text-center  ">
              <p className="text-2xl sm:text-4xl font-bold text-[#102028]">5+</p>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.22em] text-[#102028]/75 leading-tight">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CarouselReviews({ reviewsData }) {
  const defaultReviews = reviewsData || [
    {
      photo: '/anju.png',
      name: 'Daniel James',
      title: 'Founder, Freshbite',
      message:
        '“Mariana is a rare mix of creativity, precision and joy to work with. The results speak for themselves!”',
    },
    {
      photo: '/anju.png',
      name: 'Aisha Khan',
      title: 'Creative Director',
      message: '“A joy to collaborate with — thoughtful and detail-oriented.”',
    },
    {
      photo: '/anju.png',
      name: 'Carlos M.',
      title: 'Product Designer',
      message: '“Delivered outstanding work on time and exceeded expectations.”',
    },
    {
      photo: '/anju.png',
      name: 'Lea R.',
      title: 'Marketing Head',
      message: '“Her designs elevated our brand and converted more users.”',
    },
  ]

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const delay = 4500

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % defaultReviews.length)
    }, delay)
    return () => clearTimeout(t)
  }, [index, paused])

  return (
    <div>
      <div
        className="relative w-full h-[260px] sm:h-[300px] overflow-hidden rounded-[1.5rem]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {defaultReviews.map((r, i) => (
          <div
            key={r.name + i}
            aria-hidden={i !== index}
            className={`absolute inset-0 flex items-center justify-center p-4 transition-all duration-700 ease-in-out ${
              i === index ? 'opacity-100 translate-x-0 z-20' : 'opacity-0 translate-x-6 z-10'
            }`}
          >
            <div className="w-full max-w-[980px]">
              <CustomerReview photo={r.photo} name={r.name} title={r.title} message={r.message} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        {defaultReviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to review ${i + 1}`}
            className={`h-2.5 w-8 rounded-full transition-all duration-300 ${
              i === index ? 'bg-[#102028]' : 'bg-[#102028]/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default CustomerSection
