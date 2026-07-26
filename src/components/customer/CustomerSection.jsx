import React, { useEffect, useRef, useState } from 'react'
import CustomerReview from './CustomerReview.jsx'

function CustomerSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 m-0 pb-16">
      <div className="overflow-hidden rounded-[2rem] bg-[#f7dfb7] p-6 sm:p-10 shadow-[0_35px_80px_rgba(0,0,0,0.16)]">
        <div className="mb-6 text-center">
          <h2 className="text-3xl  font-libre sm:text-4xl font-bold text-[#102028]">Wall of Smiles</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-center">
          <div>
            {/* Carousel: accepts `reviewsData` prop or uses internal defaults */}
            <CarouselReviews />
          </div>

          <div className="grid gap-3 sm:gap-4 grid-cols-3 sm:grid-cols-3 w-full">
            <div className="rounded-[1.5rem] sm:rounded-[1.75rem] flex flex-col items-center justify-center p-3 sm:p-6 text-center ">
              <p className="text-2xl sm:text-4xl font-bold text-[#102028]">30+</p>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.22em] text-[#102028]/75 leading-tight">Artworks</p>
            </div>
            <div className="rounded-[1.5rem] sm:rounded-[1.75rem] flex flex-col items-center justify-center p-3 sm:p-6 text-center  align-center justify-center">
              <p className="text-2xl sm:text-4xl font-bold text-[#102028]">12+</p>
              <p className="mt-2 sm:mt-3 text-s sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.22em] text-[#102028]/75 leading-tight">Happy<br/>Clients</p>
            </div>
            <div className="rounded-[1.5rem] sm:rounded-[1.75rem]  flex flex-col items-center justify-center p-3 sm:p-6 text-center  ">
              <p className="text-2xl sm:text-4xl font-bold text-[#102028]">2+</p>
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
    { photo: '/customers/cust1.jpeg', name: 'Customer 1' },
    { photo: '/customers/cust2.jpeg', name: 'Customer 2' },
    { photo: '/customers/cust3.png', name: 'Customer 3' },
    { photo: '/customers/cust4.png', name: 'Customer 4' },
    { photo: '/customers/cust5.png', name: 'Customer 5' },
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
        className="relative w-full h-[420px] sm:h-[520px] overflow-hidden rounded-[1.5rem]"
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
