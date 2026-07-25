import React from 'react'
import Button from '../components/button/button.jsx'

function Hero() {
  return (
    <section className='relative overflow-hidden bg-[#fbf2e0] min-h-screen'>
      <div className='absolute right-0 top-24 h-40 w-40 rounded-full bg-[#13404f]/20 blur-2xl'></div>
      <div className='absolute left-0 bottom-8 h-44 w-44 rounded-full bg-[#f7c6a0]/25 blur-2xl'></div>
      <div className='relative mx-auto flex min-h-screen max-w-[1320px] flex-col items-center justify-center gap-12 px-6 py-12 lg:flex-row lg:items-end lg:px-16'>
        <div className='left flex w-full flex-col justify-center gap-6 lg:w-1/2'>
          <h2 className='text-4xl lg:text-[3.5rem] text-[#247aa3] font-normal font-libre tracking-tight text-[]'>Hello, I'm</h2>
          <h1 className='text-7xl lg:text-[6rem] font-bold font-libre leading-[0.92] text-[#152e3a]'>Anjani sarvani</h1>
          <span className='text-3xl lg:text-[2.5rem] font-semibold font-caveat text-[#f59e78]'>Artist & Art Tutor</span>
          <p className='max-w-xl text-base lg:text-lg leading-8 text-[#1f3f55] font-poppins'>Creating timeless fine art<br/>Inspiring artists through thoughtful teaching<br/>One brushstroke, one story, one legacy.</p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <Button name='View Work' variant='primary' />
            <Button name='Contact Me' variant='secondary' />
          </div>
        </div>

        <div className='right relative w-full lg:w-1/2'>
          <div className='relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[3rem] bg-[#ffffff] p-4 shadow-[0_42px_110px_rgba(21,46,58,0.14)]'>
            <div className='absolute left-0 bottom-0 z-20 w-[88vw] max-w-[20rem] sm:w-auto'>
              <div style={{ clipPath: 'polygon(12% 0%, 100% 0%, 100% 78%, 88% 100%, 0% 100%, 0% 18%)' }} className='w-full bg-[#0f3b45] px-5 py-5 text-amber-50 shadow-[0_24px_70px_rgba(15,59,69,0.24)] sm:px-6 sm:py-6'>
                <p className='font-caveat text-xl leading-[1.1] text-[#f7d5a4] sm:text-2xl'>Turning ideas into delightful experiences</p>
                <div className='mt-4 flex flex-wrap items-center gap-2 text-sm font-medium text-[#f9d8b0]'>
                  <span className='text-xl'>❤️</span>
                </div>
              </div>
            </div>
            <div className='absolute -left-10 top-10 h-28 w-28 rounded-full bg-[#f7c6a0]/30'></div>
            <div className='absolute right-8 top-8 rounded-full border border-white bg-[#0f2d36] px-3 py-2 text-xs font-semibold text-amber-50 shadow-lg shadow-[#1b3a47]/20'>
              <span className='mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#f9c28f]'></span>
              Available for Projects
            </div>
            <img src='/hero_pic.png' alt='Hero Image' className='h-[620px] w-full rounded-[2.3rem] object-cover' />
            <div className='absolute right-6 bottom-10 h-24 w-24 rounded-full border border-white bg-[#13404f]/10'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero