import React, { useMemo, useState } from 'react'
import Card from '../components/card/Card.jsx'
import Reveal from '../components/Reveal.jsx'

const categories = ['All', 'Acrylics', 'Charcoal']

const workItems = [
  {
    id: 3,
    src: '/acrylics/acry-1.jpeg',
    name: 'Veeru',
    medium: 'Acrylic Painting',
    category: 'Acrylics',
  },
  {
    id: 5,
    src: '/acrylics/acry-3.jpeg',
    name: 'Golden Drift',
    medium: 'Acrylic Painting',
    category: 'Acrylics',
  },
  {
    id: 6,
    src: '/acrylics/acry-4.jpeg',
    name: 'Velvet Horizon',
    medium: 'Acrylic Painting',
    category: 'Acrylics',
  },
  {
    id: 7,
    src: '/charcoal/char1.jpeg',
    name: 'Stillness',
    medium: 'Charcoal Sketch',
    category: 'Charcoal',
  },
  {
    id: 8,
    src: '/charcoal/char2.jpeg',
    name: 'Depth Study',
    medium: 'Charcoal Sketch',
    category: 'Charcoal',
  },
  {
    id: 9,
    src: '/charcoal/char3.jpeg',
    name: 'Ethereal Form',
    medium: 'Charcoal Portrait',
    category: 'Charcoal',
  },
]

function Works() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(3)
  const loadAmount = 3

  const filteredWorks = useMemo(() => {
    if (selectedCategory === 'All') return workItems
    return workItems.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  const visibleWorks = filteredWorks.slice(0, visibleCount)
  const showLoadMore = filteredWorks.length > visibleCount

  return (
    <section id="works" className="mx-auto max-w-[1300px] px-4 py-16 text-white font-poppins sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#0b1d26] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.15)] sm:p-10">
        <div className="absolute -right-10 top-6 h-36 w-36 rounded-full border border-[#ffb366]/20 bg-[#ffb366]/10 works-decor-circle-1"></div>
        <div className="absolute bottom-6 left-4 h-24 w-24 rounded-full border border-white/10 bg-white/5 works-decor-circle-2"></div>
        <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          <Reveal direction="up" delay={80}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-libre text-white sm:text-4xl">Selected Works <span className="text-[#ffb366]">✦</span></h2>
              <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
                Here are some of my recent design projects, filtered by category so you can explore the exact work style you want.
              </p>
            </div>
          </Reveal>
          <Reveal direction="left" delay={120}>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${selectedCategory === category
                      ? 'border-transparent bg-[#ffb366] text-[#0b1d26] shadow-lg'
                      : 'border-white/20 bg-white/5 text-slate-200 hover:bg-white/10'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative z-10 mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {visibleWorks.map((item, index) => (
            <Reveal key={item.id} direction="up" delay={index * 120}>
              <Card
                src={item.src}
                name={item.name}
                medium={item.medium}
              />
            </Reveal>
          ))}
        </div>

        {showLoadMore && (
          <Reveal direction="up" delay={160}>
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + loadAmount)}
                className="rounded-full bg-[#ffb366] px-8 py-3 text-sm font-semibold text-[#0b1d26] shadow-lg transition hover:bg-[#e0a85d]"
              >
                Load more
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

export default Works