import React from 'react'
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { PiLightning } from "react-icons/pi";

const Data = [
  {
    id: 1,
    title: "HD Video Calls",
    desc: "See every detail with our high-definition video conferencing technology.",
    icons: <MdOutlineKeyboardVoice size={"30px"} />
  },
  {
    id: 2,
    title: "Crystal Clear Audio",
    desc: "Experience high-fidelity sound that makes every conversation feel natural.",
    icons: <IoVideocamOutline size={"30px"} />
  },
  {
    id: 3,
    title: "Collaborative Workspaces",
    desc: "Work together seamlessly with our intuitive collaboration tools.",
    icons: <GoPeople size={"30px"} />
  },
  {
    id: 4,
    title: "Lightning Fast",
    desc: "Enjoy lag-free communication with our optimized infrastructure.",
    icons: <PiLightning size={"30px"} />
  },
]

function Hero() {
  return (
    <div className='flex justify-between px-5 py-24 '>
      <div className='flex flex-col gap-7'>
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

      <div>
        <div className='grid grid-cols-2 gap-5'>
          {
            Data.map((item) => {
              return <div key={item.id} className='border rounded-xl border-[#FFD700] p-6 cursor-pointer duration-300 transform transition-all hover:scale-105'>
                <div className='text-[#FFD700]'>{item.icons}</div>
                <div className='text-[#FFD700] text-xl font-semibold mb-2'>{item.title}</div>
                <div className='text-[#D8BFD8] text-sm'>{item.desc}</div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Hero