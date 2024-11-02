import React from 'react'
import { TbMovie } from "react-icons/tb";
import { CiMusicNote1 } from "react-icons/ci";
import { GiTheater } from "react-icons/gi";
import { TbActivityHeartbeat } from "react-icons/tb";

const Data = [
  {
    id: 1,
    title: "Latest Movies",
    desc: "Book tickets for the best latest movies in your city.",
    icons: <TbMovie size={"30px"} />
  },
  {
    id: 2,
    title: "Live Events",
    desc: "Book tickets for the best live events in your city.",
    icons: <CiMusicNote1 size={"30px"} />
  },
  {
    id: 3,
    title: "Theater & Arts",
    desc: "Book tickets for the best theater & arts in your city.",
    icons: <GiTheater size={"30px"} />
  },
  {
    id: 4,
    title: "Sports & More",
    desc: "Book tickets for the best sports & more in your city.",
    icons: <TbActivityHeartbeat size={"30px"} />
  },
]

function Hero() {
  return (
    <div className='flex justify-between px-5 py-24 '>
      <div className='flex flex-col gap-7'>
        <div>
          <p className='text-[#ffffff] text-5xl font-bold leading-tight'>Your Gateway to</p>
          <p className='text-[#FFD700] text-5xl font-bold'>Entertainment</p>
        </div>
        <div className='text-lg py-5'>
          <p className='text-[#D8BFD8]'>Discover and book tickets for the latest movies, live events,</p>
          <p className='text-[#D8BFD8]'>plays, sports, and activities. ShowTime brings the best</p>
          <p className='text-[#D8BFD8]'>entertainment right to your fingertips.</p>
        </div>

        <div className="flex gap-4 text-[#D8BFD8]">

          <input
            className="bg-white/10 border-white/20 text-white placeholder-[#D8BFD8] text-lg px-6 py-2 rounded-lg"
            placeholder="Search for movies, events, plays, sports..."
            type="text"
          />

          <div>
            <div className="bg-[#FFD700] text-[#1E0A2E] hover:bg-white text-lg px-6 py-2 rounded-lg cursor-pointer font-semibold">Search</div>
          </div>
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