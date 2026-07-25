import React from 'react'

function CustomerReview({
  photo = '/anju.png',
  name = 'Daniel James',
  title = 'Founder, Freshbite',
  message = '“Mariana is a rare mix of creativity, precision and joy to work with. The results speak for themselves!”',
}) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')

  return (
    <div className="w-full">
      <div className="grid bg-transparent" style={{ gridTemplateColumns: '70% 30%' }}>
        <div className="h-full">
          <img src={photo} alt={name} className="w-full h-full object-cover rounded-[1.5rem]" />
        </div>

        <div className="flex flex-col justify-center p-6">
          <p className="text-base leading-relaxed text-[#102028]">{message}</p>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#102028] text-white font-semibold">
              {initials}
            </div>
            <div>
              <p className="text-base font-semibold text-[#102028]">{name}</p>
              <p className="text-sm text-[#102028]/75">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerReview
