import React from 'react'

const Questions = ({data,onClick,isOpen}) => {
  return (
  <div className='border-b border-white/25 last:border-b-0 overflow-hidden bg-amber-50'>
    <div onClick={onClick} className='flex justify-between gap-8 items-start cursor-pointer text-xl py-4 text-black '>
      <h1 className='text-black/90 font-semibold text-2xl'>{data.question}</h1>
     <span
  className={`text-3xl font-bold transition-transform ease-in-out duration-300 ${
    isOpen ? "rotate-180" : ""
  }`}
>
  {isOpen ? "−" : "+"}
</span>

    </div>
    <p className={`text-lg opacity-90 text-black max-h-0 ease-in-out duration-500 ${isOpen?"max-h-96":"max-h-0"}`}>{data.answer}</p>
  </div>
  )
}

export default Questions