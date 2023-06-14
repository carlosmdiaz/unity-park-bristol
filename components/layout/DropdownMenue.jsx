import Link from "next/link";
import React from "react";

const DropdownMenue = (props) => {
    const { open, setOpen } = props;

  return (
    <div className="absolute top-[4.5rem] w-20  p-4 overflow-hidden flex justify-center" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} >
      <ul>
        <Link href="/about">
          <li className="hover:border-b text-xl hover:text-[#AE895A] transition-all list-none">About</li>
        </Link>
        <Link href="/story">
          <li className="hover:border-b text-xl hover:text-[#AE895A] transition-all list-none">Story</li>
        </Link>
      </ul>
    </div>
  );
};

export default DropdownMenue;
