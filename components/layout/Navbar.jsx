import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineClose,
} from "react-icons/ai";
import { BsYelp } from "react-icons/bs";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  return (
    <nav className="fixed w-[100vw] h-24 shadow-xl bg-[#0C1E28] text-white m-0 z-[1000]">
      <div className="flex justify-between items-center h-full w-[100vw] px-4 2xl:px-16">
        <Link href="/" className="h-full md:p-2 p-5">
          <Image
            src='/images/unity-park-logo.png'
            alt="Logo"
            width="400"
            height="100"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex justify-evenly">
          <ul className="hidden sm:flex">
            <Link href="/events">
              <li className="hover:border-b hover:text-[#AE895A] text-xl list-none">Events</li>
            </Link>
            <Link href="/gallery">
              <li className="ml-5 hover:border-b text-xl hover:text-[#AE895A] list-none">Gallery</li>
            </Link>
            <Link href="/story">
              <li className="ml-5 hover:border-b text-xl hover:text-[#AE895A] list-none">Story</li>
            </Link>
            <Link href="/visit">
              <li className="ml-5 hover:border-b text-xl hover:text-[#AE895A] list-none">Visit</li>
            </Link>
          </ul>
          <ul className="hidden sm:flex items-center px-3">
            <Link href="https://www.yelp.com" target="_blank" className="pl-1 hover:text-[#AE895A]">
              <BsYelp size={30} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" className="pl-1 hover:text-[#AE895A]">
              <AiOutlineInstagram size={30} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" className="pl-1 hover:text-[#AE895A]">
              <AiOutlineFacebook size={30} />
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[85%] sm:hidden h-[100%] bg-[#0C1E28] p-10 ease-out duration-500 z-[1000]"
            : "fixed left-[-100%] h-[100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/events">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:text-[#AE895A]"
              >
                Events
              </li>
            </Link>
            <Link href="/gallery">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:text-[#AE895A]"
              >
                Gallery
              </li>
            </Link>
            <Link href="/story">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:text-[#AE895A]"
              >
                Story
              </li>
            </Link>
            <Link href="/visit" >
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:text-[#AE895A]"
              >
                Visit
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-5 items-center">
          <Link href="https://www.yelp.com" target="_blank">
            <BsYelp size={30} className="cursor-ponter hover:text-[#AE895A]" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <AiOutlineInstagram size={30} className="cursor-pointer hover:text-[#AE895A]" />
          </Link>
          <Link href="https://www.twitter.com" target="_blank">
            <AiOutlineFacebook size={30} className="cursor-pointer hover:text-[#AE895A]" />
          </Link>
        </div>
        <div>
          <Link href="/">
            <Image
              src='/images/unity-park-logo.png'
              alt="Logo"
              width="205"
              height="75"
              className="cursor-pointer pt-6"
              onClick={() => setMenuOpen(false)}
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
