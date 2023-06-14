import React, { useState } from "react";
import DropdownMenue from "./DropdownMenue";
import Link from "next/link";

const MyDropdown = ({visible}) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="">
      <a
        href="#"
        className={`${visible ? "hover:border-b transition-all text-xl hover:text-[#AE895A] list-none flex justify-center" : "hover:border-b transition-all text-xl hover:text-[#AE895A] list-none cursor-default flex justify-center"}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        About
      </a>
      {open && (
        <div
          className={`absolute top-[5rem] w-20  p-4 overflow-hidden flex justify-center ${open ? "opacity-100 transition-opacity duration-500 bg-gray-400 bg-opacity-[0.15]" : "opacity-0 transition-opacity duration-500"}`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <ul>
            <Link href="/about" className={`${visible ? "" : "pointer-events-none"}`}>
              <li className={`${visible ? "hover:border-b transition-all text-xl hover:text-[#AE895A] list-none flex justify-center" : "hover:border-b transition-all text-xl hover:text-[#AE895A] list-none cursor-default flex justify-center"}`}>
                About
              </li>
            </Link>
            <Link href="/story" className={`${visible ? "" : "pointer-events-none"}`}>
              <li className={`${visible ? "hover:border-b transition-all text-xl hover:text-[#AE895A] list-none flex justify-center" : "hover:border-b transition-all text-xl hover:text-[#AE895A] list-none cursor-default flex justify-center"}`}>
                Story
              </li>
            </Link>
          </ul>
        </div>
      )}
    </li>
  );
};

export default MyDropdown;
