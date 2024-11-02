"use client"
import React, { useState } from "react";

const faqData = [
    {
      id: 1,
      question: "How do I book tickets on ShowTime?",
      answer: "Simply search for your desired movie, event, or activity, select your preferred show time and seats, and proceed to checkout. It's quick and easy!",
    },
    {
      id: 2,
      question: "Can I cancel or refund my tickets?",
      answer: "Cancellation and refund policies vary depending on the event organizer. Please check the specific event's terms and conditions for details.",
    },
    {
      id: 3,
      question: "Are there any booking fees?",
      answer: "A small convenience fee is added to each transaction to cover processing costs. The fee amount will be clearly displayed before you complete your purchase.",
    },
  ]

function Faq() {
    const [openid, setOpenid] = useState<number | null>(null)
    function openhandler(id: number) {
        if (openid === null) {
            setOpenid(id)
        }
        else {
            setOpenid(null)
        }
    }
    return (
        <div>
            <div className="mt-24">
                <div className="text-3xl font-bold text-center text-[#FFD700] mb-12"> Have questions about ShowTime? </div>
                <div className="space-y-4">
                    {
                        faqData.map((item) => {
                            return <div key={item.id} className="bg-white/5 rounded-lg overflow-hidden">
                                <div onClick={() => openhandler(item.id)} className="text-[#FFD700] px-6 py-4 flex justify-between items-center text-left w-full  font-semibold cursor-pointer">{item.question} <span className="cursor-pointer">
                                    {
                                        openid === item.id ? ("-") : ("+")
                                    }
                                </span>
                                </div>

                                {
                                    openid === item.id && (<div className="text-[#D8BFD8] px-6 pb-4">{item.answer}</div>)
                                }
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Faq;
