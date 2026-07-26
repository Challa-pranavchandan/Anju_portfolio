import React, { useMemo, useState } from 'react'
import Card from '../components/card/Card.jsx'

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
  {
    id: 10,
    src: '/charcoal/char4.jpeg',
    name: 'Shaded Motion',
    medium: 'Charcoal Drawing',
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
    <section id="works" className="mx-auto max-w-[1200px] px-4 py-16 text-white">
      <div className="rounded-[2rem] bg-[#0b1d26] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected Works <span className="text-[#ffb366]">✦</span></h2>
            <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
              Here are some of my recent design projects, filtered by category so you can explore the exact work style you want.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? 'border-transparent bg-[#ffb366] text-[#0b1d26] shadow-lg'
                    : 'border-white/20 bg-white/5 text-slate-200 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {visibleWorks.map((item, index) => (
            <Card
              key={item.id}
              src={item.src}
              name={item.name}
              medium={item.medium}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        {showLoadMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + loadAmount)}
              className="rounded-full bg-[#ffb366] px-8 py-3 text-sm font-semibold text-[#0b1d26] shadow-lg transition hover:bg-[#e0a85d]"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Works