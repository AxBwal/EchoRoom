import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col gap-7 px-5 py-24'>
      <div>
        <p className='text-[#ffffff] text-5xl font-bold leading-tight'>Where Every Voice</p>
        <p className='text-[#FFD700] text-5xl font-bold'>Echoes Clearly</p>
      </div>
      <div className='text-lg py-5'>
        <p className='text-[#D8BFD8]'>Step into a virtual space where your ideas, voices, and</p>
        <p className='text-[#D8BFD8]'>collaborations come to life. EchoRoom ensures crystal-clear communication,</p>
        <p className='text-[#D8BFD8]'> bringing people together as if they're right next to you.</p>
      </div>

      <div className="flex gap-4 text-[#D8BFD8]">
        <div className="bg-[#ffffff] font-semibold text-black rounded-md px-5 py-2 hover:bg-[#FFD700] cursor-pointer">Sign In</div>
        <div className="bg-[#FFD700] font-semibold text-black rounded-md px-5 py-2 hover:bg-[#ffffff] cursor-pointer">Go to WorkSpace</div>
      </div>
    </div>
  )
}

export default Hero