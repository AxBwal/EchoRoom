"use client"
import React, { useState } from "react";

const faqData = [
    {
        id: 1,
        question: "How do I join a meeting in EchoRoom?",
        answer:
            "Simply click on the meeting link provided by the host. You can also enter the meeting ID on the homepage to join instantly.",
    },
    {
        id: 2,
        question: "Is EchoRoom compatible with all devices?",
        answer:
            "Yes, EchoRoom is optimized for desktop, tablet, and mobile devices, providing a seamless experience across all platforms.",
    },
    {
        id: 3,
        question: "Can I record my meetings?",
        answer:
            "Absolutely! With one-click recording, you can capture entire sessions to review or share later.",
    },
    {
        id: 4,
        question: "How secure are my meetings on EchoRoom?",
        answer:
            "EchoRoom uses end-to-end encryption to ensure that your conversations, files, and video streams are secure and accessible only to participants.",
    },
    {
        id: 5,
        question: "Does EchoRoom support screen sharing?",
        answer:
            "Yes, you can share your entire screen, specific applications, or browser tabs easily, enhancing collaborative experiences.",
    },
    {
        id: 6,
        question: "Are there any tools for interactive sessions?",
        answer:
            "EchoRoom includes polls, Q&A, and virtual whiteboards to help keep your sessions engaging and interactive.",
    },
    {
        id: 7,
        question: "How do I invite participants to my meeting?",
        answer:
            "When creating a meeting, EchoRoom generates a unique link that you can share with participants. You can also add email invitations directly through the app.",
    },
    {
        id: 8,
        question: "What happens if I have technical issues during a call?",
        answer:
            "EchoRoom offers 24/7 support. Visit the help section in the app or contact our support team for assistance at any time.",
    },
];

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
            <div>
                <div className="text-[#FFD700] text-2xl text-center"> Have questions about EchoRoom? </div>
                <div>
                    {
                        faqData.map((item) => {
                            return <div key={item.id}>
                                <div className="text-[#FFD700] text-center">{item.question} <span className="cursor-pointer" onClick={() => openhandler(item.id)}>
                                    {
                                        openid === item.id ? ("-") : ("+")
                                    }
                                </span>
                                </div>

                                {
                                    openid === item.id && (<div className="text-[#D8BFD8] text-center">{item.answer}</div>)
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
