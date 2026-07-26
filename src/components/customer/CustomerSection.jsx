import React, { useEffect, useState } from 'react'
import CustomerReview from './CustomerReview.jsx'

function CustomerSection() {
  return (
    <section className="mx-auto max-w-[1300px] px-4 m-0 pb-16">
      <div className="overflow-hidden rounded-[2.5rem] bg-[#f7dfb7] p-8 sm:p-12 shadow-[0_35px_80px_rgba(0,0,0,0.16)] border border-white/20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-libre sm:text-4xl lg:text-5xl font-bold text-[#102028]">Wall of Smiles</h2>
          <p className="mt-3 text-sm sm:text-base text-[#102028]/80 font-poppins max-w-xl mx-auto">
            Read what my clients and painting buyers say about their collaborative experience.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            {/* Carousel: renders formatted testimonial cards */}
            <CarouselReviews />
          </div>

          <div className="grid gap-4 grid-cols-3 sm:grid-cols-3 w-full">
            <div className="rounded-[1.75rem] flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-white/40 border border-white/25 backdrop-blur-md shadow-sm transition hover:shadow-md hover:scale-105 hover:bg-white/55 duration-300">
              <p className="text-2xl sm:text-4xl font-bold text-[#102028] font-libre">30+</p>
              <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#102028]/70 font-semibold leading-tight font-poppins">Artworks</p>
            </div>

            <div className="rounded-[1.75rem] flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-white/40 border border-white/25 backdrop-blur-md shadow-sm transition hover:shadow-md hover:scale-105 hover:bg-white/55 duration-300">
              <p className="text-2xl sm:text-4xl font-bold text-[#102028] font-libre">12+</p>
              <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#102028]/70 font-semibold leading-tight font-poppins">Happy<br />Clients</p>
            </div>

            <div className="rounded-[1.75rem] flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-white/40 border border-white/25 backdrop-blur-md shadow-sm transition hover:shadow-md hover:scale-105 hover:bg-white/55 duration-300">
              <p className="text-2xl sm:text-4xl font-bold text-[#102028] font-libre">2+</p>
              <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#102028]/70 font-semibold leading-tight font-poppins">Years Exp.</p>
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
      photo: '/customers/cust1.jpeg',
      name: 'Aman singh',
      role: 'client',
      stars: 5,
      message: "Absolutely amazed by the sketch! ❤️ It looks so real that I still can't believe it's hand-drawn. My entire family loved it, and I even shared your page in our family group because everyone wanted to know the artist. Thank you for creating such a beautiful memory. Highly recommended! ✨🎨"
    },
    {
      photo: '/customers/cust2.jpeg',
      name: 'Suresh Kumar',
      role: 'client',
      stars: 5,
      message: "The moment I opened the package, I was speechless. The Ganesha artwork is even more beautiful in person than in the pictures. Every visitor who comes to our home admires it. Thank you for your dedication and amazing artistry. Wishing you great success!"
    },
    {
      photo: '/customers/cust3.png',
      name: 'Nithin Nayak',
      role: 'client',
      stars: 5,
      message: 'This charcoal portrait of my nephew is simply amazing. It looks exactly like him, and the expressions are so lifelike. My entire family loved it, and everyone was impressed by the level of detail. Thank you for turning a precious moment into a timeless piece of art.'
    },
    {
      photo: '/customers/cust4.png',
      name: 'Anuradha Challa',
      role: 'client',
      stars: 5,
      message: "Thank you so much for this beautiful Ganesha wall art. The quality exceeded my expectations, and the attention to detail is remarkable. My family loved it, and everyone keeps asking where I got it from. I'm truly grateful for such a wonderful piece of handmade art."
    },
    {
      photo: '/customers/cust5.png',
      name: 'Sharma',
      role: 'client',
      stars: 5,
      message: "I ordered this Lord Venkateswara painting as a gift for my loved one, and it turned out to be the most meaningful present. The detailing, colors, and devotion reflected in the artwork are simply breathtaking. The recipient was truly overwhelmed with joy. Thank you for creating such a beautiful masterpiece. 🙏✨"
    }
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
  }, [index, paused, defaultReviews.length])

  return (
    <div>
      <div
        className="relative w-full h-[470px] md:h-[310px] overflow-hidden rounded-[1.5rem]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {defaultReviews.map((r, i) => (
          <div
            key={r.name + i}
            aria-hidden={i !== index}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${i === index ? 'opacity-100 translate-x-0 z-20' : 'opacity-0 translate-x-6 z-10'
              }`}
          >
            <div className="w-full h-full">
              <CustomerReview
                photo={r.photo}
                name={r.name}
                role={r.role}
                stars={r.stars}
                message={r.message}
              />
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
            className={`h-2.5 w-8 rounded-full transition-all duration-300 ${i === index ? 'bg-[#102028]' : 'bg-[#102028]/30'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

export default CustomerSection
