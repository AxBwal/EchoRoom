import React from "react";

const data = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "About",
  },
  {
    id: 3,
    title: "Contact",
  },
  {
    id: 4,
    title: "Career",
  },
];

function Navbar() {
  return (
    <div className="flex justify-between px-5 mt-5">
      <div className="text-[#FFD700] text-3xl font-bold tracking-tighter">EchoRoom</div>
      <div className="flex gap-4 text-[#D8BFD8] items-center cursor-pointer">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div className="hover:text-[#FFD700]">{item.title}</div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-4 px-5 text-[#D8BFD8]">
        <div className="bg-[#ffffff] font-semibold text-black rounded-md px-5 py-2 hover:bg-[#FFD700] cursor-pointer text-sm">Signup</div>
        <div className="bg-[#FFD700] font-semibold text-black rounded-md px-5 py-2 hover:bg-[#ffffff] cursor-pointer text-sm">Login</div>
      </div>
    </div>
  );
}

export default Navbar;
