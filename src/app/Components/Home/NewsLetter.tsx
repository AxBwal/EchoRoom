import React from 'react'

function NewsLetter() {
  return (
    <div className='mb-24'>
        <div className="text-4xl font-bold text-center text-[#FFD700] mb-8">Join Our Newsletter</div>
        <div className="text-center text-[#D8BFD8] mb-8">Stay updated with the latest events and exclusive offers!</div>
        <div className='flex justify-center items-center gap-5'>
            <input type="text" placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder-[#D8BFD8] text-lg px-6 py-2 rounded-lg" />
            <div className="bg-[#FFD700] text-[#1E0A2E] hover:bg-white text-md px-6 py-2 rounded-lg cursor-pointer font-semibold">Subscribe</div>
        </div>

    </div>
  )
}

export default NewsLetter