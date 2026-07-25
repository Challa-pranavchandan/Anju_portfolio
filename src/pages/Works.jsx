import React, { useMemo, useState } from 'react'
import Card from '../components/card/Card.jsx'

const categories = ['All', 'Acrylics', 'Charcoal', 'Mandala','Mixed media','Lippen art']

const workItems = [
  {
    id: 1,
    src: '/hero_pic.png',
    name: 'Freshbite',
    medium: 'Mandala Design',
    category: 'Mandala',
  },
  {
    id: 2,
    src: '/anju.png',
    name: 'Leaf & Co.',
    medium: 'Brand Identity',
    category: 'Charcoal',
  },
  {
    id: 3,
    src: '/hero_pic.png',
    name: 'Wander',
    medium: 'Acrylics',
    category: 'Acrylics',
  },
]

function Works() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredWorks = useMemo(() => {
    if (selectedCategory === 'All') return workItems
    return workItems.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-16 text-white">
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
          {filteredWorks.map((item) => (
            <Card key={item.id} src={item.src} name={item.name} medium={item.medium} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works