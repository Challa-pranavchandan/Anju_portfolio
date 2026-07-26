import React from 'react'

function CustomerReview({ photo = '/anju.png', name = 'Customer', role = 'Student', stars = 5, message = 'Wonderful experience!' }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 bg-white/40 border border-white/20 backdrop-blur-md rounded-[2.2rem] p-6 sm:p-8 h-full w-full shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:bg-white/50 transition duration-300">
      {/* Photo frame: Polaroid / Artistic style */}
      <div className="flex-shrink-0 relative">
        <div className="absolute -inset-1 rounded-[1.8rem] bg-gradient-to-tr from-[#f59e78]/25 to-[#ffb366]/20 blur-sm"></div>
        <div className="relative aspect-[3/4] w-[140px] sm:w-[160px] overflow-hidden rounded-[1.5rem] border-4 border-white bg-white shadow-lg rotate-[-2deg] transition-transform duration-300 hover:rotate-0">
          <img src={photo} alt={name} className="h-full w-full object-cover object-center" />
        </div>
      </div>

      {/* Review Content */}
      <div className="flex-grow flex flex-col justify-between text-left h-full">
        <div>
          {/* Quote mark ornament */}
          <div className="text-5xl font-libre text-[#ffb366]/30 leading-none h-4 select-none animate-pulse">“</div>

          {/* Rating */}
          <div className="flex gap-1 mb-3 text-amber-500 text-lg">
            {Array.from({ length: Math.min(5, Math.max(1, stars)) }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          {/* Message */}
          <blockquote className="font-poppins text-[#102028]/90 text-sm sm:text-base leading-relaxed font-semibold italic relative z-10 mb-4 sm:mb-6 pr-2">
            "{message}"
          </blockquote>
        </div>

        {/* Profile metadata */}
        <div>
          <h3 className="font-libre text-lg sm:text-xl font-bold text-[#102028] leading-tight">{name}</h3>
          <p className="font-caveat text-[#f59e78] text-lg sm:text-xl font-bold mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerReview
