import React from 'react'
import Button from '../components/button/button.jsx'

function Hero() {
  const handleViewWorkClick = (event) => {
    event.preventDefault()
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleContactClick = (event) => {
    event.preventDefault()

    const instagramAppUrl = 'instagram://user?username=livin_in_the_art'
    const instagramWebUrl = 'https://www.instagram.com/livin_in_the_art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='

    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)

    if (isMobile) {
      window.location.href = instagramAppUrl
      window.setTimeout(() => {
        window.open(instagramWebUrl, '_blank', 'noopener,noreferrer')
      }, 800)
    } else {
      window.open(instagramWebUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className='relative overflow-hidden bg-[#fbf2e0] min-h-screen'>
      <div className='hero-accent hero-accent--blob hidden lg:block'></div>
      <div className='hero-accent hero-accent--leaf hidden lg:block'></div>
      <div className='absolute left-6 top-16 z-0 hidden h-24 w-24 rotate-12 rounded-[2rem] border border-[#247aa3]/20 bg-white/60 lg:block'></div>
      <div className='absolute right-8 top-28 z-0 hidden h-16 w-16 rounded-full border border-[#f59e78]/35 bg-[#f7c6a0]/30 lg:block'></div>
      <div className='absolute bottom-10 left-10 z-0 hidden lg:block'>
        <svg viewBox='0 0 200 200' className='h-28 w-28 opacity-80'>
          <path d='M100 18c24 0 45 12 57 31 11 17 14 38 7 58-8 21-27 38-49 45-20 7-42 5-61-5 18-10 31-31 32-52 1-15-2-32 8-48 8-13 21-21 6-29z' fill='#13404f' fillOpacity='0.12' />
        </svg>
      </div>
      <div className='relative mx-auto flex min-h-screen w-full max-w-[1500px] flex-col items-center justify-center gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:flex-row lg:items-end lg:gap-12 lg:px-8 xl:px-10'>
        <div className='left relative z-10 flex w-full flex-col justify-center gap-6 lg:w-[45%]'>
          <h2 className='text-3xl sm:text-4xl lg:text-[3.2rem] text-[#247aa3] font-normal font-libre tracking-tight'>Hello, I'm</h2>
          <h1 className='text-5xl sm:text-6xl lg:text-[5.6rem] font-bold font-libre leading-[0.92] text-[#152e3a]'>Anjani sarvani</h1>
          <span className='text-2xl sm:text-3xl lg:text-[2.3rem] font-semibold font-caveat text-[#f59e78]'>Artist & Art Tutor</span>
          <p className='max-w-xl text-base lg:text-lg leading-8 text-[#1f3f55] font-poppins'>Creating timeless fine art<br/>Inspiring artists through thoughtful teaching<br/>One brushstroke, one story, one legacy.</p>
          <div className='mt-6 flex flex-wrap gap-4'>
            <Button name='View Work' variant='primary' href='#works' onClick={handleViewWorkClick} />
            <Button name='Contact Me' variant='secondary' href='https://www.instagram.com/livin_in_the_art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' onClick={handleContactClick} external />
          </div>
        </div>

        <div className='right relative z-10 w-full lg:w-[55%]'>
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
            <img src='/hero_pic.png' alt='Hero Image' className='h-[560px] w-full rounded-[2.3rem] object-cover sm:h-[620px]' />
            <div className='absolute right-6 bottom-10 h-24 w-24 rounded-full border border-white bg-[#13404f]/10'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero