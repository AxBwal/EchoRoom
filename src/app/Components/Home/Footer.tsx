import React from 'react'

function Footer() {
    return (
        <div>
            <div className='flex justify-between items-center text-[#D8BFD8] px-4 py-8 mt-24'>
            <div>© 2024 ShowTime. All rights reserved.</div>
            <div className='flex gap-5 text-[#D8BFD8]'>
                <div className="hover:text-[#FFD700] cursor-pointer">Privacy</div>
                <div className="hover:text-[#FFD700] cursor-pointer">Terms</div>
                <div className="hover:text-[#FFD700] cursor-pointer">Contact</div>
            </div>
            </div>
        </div>
    )
}

export default Footer