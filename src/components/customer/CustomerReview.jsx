  import React from 'react'

function CustomerReview({ photo = '/anju.png', name = 'Customer' }) {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#f7dfb7] p-4">
      <div className="aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-[1.25rem] bg-white shadow-lg">
        <img src={photo} alt={name} className="h-full w-full object-fill object-center" />
      </div>
    </div>
  )
}

export default CustomerReview
