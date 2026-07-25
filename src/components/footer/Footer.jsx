import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-[#152e3a] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 py-6 px-4 sm:px-6 lg:px-14 font-poppins">
      <div className="w-full lg:w-auto  border-transparent lg:border-current text-amber-50 rounded-xl p-3 sm:p-4 lg:p-6">
        <div className="flex items-start gap-3">
          <div className="h-8 w-8 flex items-center justify-center rounded-full bg-amber-500/20 text-amber-300 animate-pulse transition-transform duration-300 hover:scale-110">
            <span className="text-xl">✦</span>
          </div>
          <p className="font-libre text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight max-w-lg">
            Let's create<br />
            something <span className="font-ephesis text-amber-500">amazing!</span>
          </p>
        </div>
      </div>
      <div className="text-white w-full lg:w-1/3 font-poppins border-t-2 lg:border-t-0 lg:border-l-2 border-amber-50 pt-4 lg:pt-0 lg:px-8 flex flex-col gap-3 text-sm sm:text-base">
        <h1 className="text-base sm:text-lg lg:text-3xl font-semibold">Get in touch</h1>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 text-sm items-center">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p>challasarvani601@gmail.com</p>
          </div>
          <div className="flex gap-2   text-sm items-center">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10.5c0 7.5-9 12-9 12s-9-4.5-9-12S7.125 3 12 3s9 3.375 9 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="10.5" r="2.25" fill="currentColor" />
            </svg>
            <p>All over India</p>
          </div>
          <div className="flex gap-2  text-sm  items-center">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 15L20 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 9L20 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.0004 20.8182L11.2862 21.5181C11.4742 21.7101 11.7317 21.8182 12.0004 21.8182C12.2691 21.8182 12.5265 21.7101 12.7146 21.5181L12.0004 20.8182ZM12.0004 3.18188L12.7146 2.48198C12.5265 2.29005 12.2691 2.18188 12.0004 2.18188C11.7317 2.18188 11.4742 2.29005 11.2861 2.48198L12.0004 3.18188ZM14.6004 12.0001C14.6004 15.1611 13.3373 18.0251 11.2862 20.1183L12.7146 21.5181C15.1173 19.0662 16.6004 15.7053 16.6004 12.0001H14.6004ZM11.2861 3.88178C13.3373 5.97501 14.6004 8.83903 14.6004 12.0001H16.6004C16.6004 8.29478 15.1173 4.93389 12.7146 2.48198L11.2861 3.88178ZM9.40039 12.0001C9.40039 8.83903 10.6634 5.97501 12.7146 3.88178L11.2861 2.48198C8.88347 4.93389 7.40039 8.29478 7.40039 12.0001H9.40039ZM12.7146 20.1183C10.6634 18.0251 9.40039 15.1611 9.40039 12.0001H7.40039C7.40039 15.7053 8.88348 19.0662 11.2862 21.5181L12.7146 20.1183Z" fill="currentColor" />
            </svg>
            <p>livin_in_the_art.com</p>
          </div>
        </div>
      </div>
      <div className="flex border-t-2 lg:border-t-0 lg:border-l-2 border-amber-50 w-full lg:w-1/3 px-0 lg:px-20 pt-4 lg:pt-0 text-xl sm:text-2xl flex-col font-poppins">
        <h1 className="text-white text-base sm:text-lg lg:text-xl">Follow me</h1>
        <div className="flex flex-wrap gap-4 sm:gap-6 items-center mt-3">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99H7.898v-2.888h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.462h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.444 2.888h-2.329v6.99C18.343 21.128 22 16.991 22 12z" />
          </svg>
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403.59.222 1.01.488 1.45.928.44.44.706.86.928 1.45.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43-.222.59-.488 1.01-.928 1.45-.44.44-.86.706-1.45.928-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403-.59-.222-1.01-.488-1.45-.928-.44-.44-.706-.86-.928-1.45-.163-.46-.349-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43.222-.59.488-1.01.928-1.45.44-.44.86-.706 1.45-.928.46-.163 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.167 0-3.548.011-4.797.069-1.003.043-1.55.218-1.912.363-.48.191-.823.42-1.185.782-.362.362-.591.705-.782 1.185-.145.362-.32.909-.363 1.912-.058 1.249-.069 1.63-.069 4.797s.011 3.548.069 4.797c.043 1.003.218 1.55.363 1.912.191.48.42.823.782 1.185.362.362.705.591 1.185.782.362.145.909.32 1.912.363 1.249.058 1.63.069 4.797.069s3.548-.011 4.797-.069c1.003-.043 1.55-.218 1.912-.363.48-.191.823-.42 1.185-.782.362-.362.591-.705.782-1.185.145-.362.32-.909.363-1.912.058-1.249.069-1.63.069-4.797s-.011-3.548-.069-4.797c-.043-1.003-.218-1.55-.363-1.912-.191-.48-.42-.823-.782-1.185-.362-.362-.705-.591-1.185-.782-.362-.145-.909-.32-1.912-.363-1.249-.058-1.63-.069-4.797-.069z" />
            <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
          </svg>
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.851-3.036-1.853 0-2.136 1.445-2.136 2.94v5.665h-3.553V9h3.414v1.561h.049c.476-.902 1.637-1.852 3.369-1.852 3.602 0 4.268 2.37 4.268 5.456v6.287zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .775 0 1.731v20.538C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.269V1.731C24 .775 23.2 0 22.225 0z" />
          </svg>
        </div>
      </div>
    </footer>
  )
}

export default Footer