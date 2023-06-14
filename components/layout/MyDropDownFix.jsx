import React, { useState } from "react";
import DropdownMenue from "./DropdownMenue";
import Link from "next/link";

const MyDropdownFix = ({visible}) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="">
      <a
        href="#"
        className="hover:border-b transition-all text-xl hover:text-[#AE895A] list-none flex justify-center"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        About
      </a>
      {open && (
        <div
          className={`absolute top-[4rem] w-20  p-4 overflow-hidden flex justify-center ${open ? "opacity-100 transition-opacity duration-500 bg-[#0C1E28] bg-opacity-[1]" : "opacity-0 transition-opacity duration-500"}`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <ul>
            <Link href="/about">
              <li className="hover:border-b transition-all text-xl hover:text-[#AE895A] list-none flex justify-center">
                About
              </li>
            </Link>
            <Link href="/story">
              <li className="hover:border-b transition-all text-xl hover:text-[#AE895A] list-none flex justify-center">
                Story
              </li>
            </Link>
          </ul>
        </div>
      )}
    </li>
  );
};

export default MyDropdownFix;
