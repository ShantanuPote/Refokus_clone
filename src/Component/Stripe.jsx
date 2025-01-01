import React from 'react'

function Stripe({val}) {
  return (
      <div className='w-[16.66%] max-w-72 border-b-[1px] border-r-[1px] border-t-[1px] border-zinc-700 flex justify-between items-center px-5 py-4'>
        <img src={val.url} alt="" />
        <span className='font-semibold text-lg'>{val.number}</span>
      </div>
  )
}

export default Stripe