import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import classes from "./dropdown.module.css";
import {
  AiOutlineMenu,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineClose,
} from "react-icons/ai";
import { BsYelp } from "react-icons/bs";
import MyDropdown from "./MyDropdown";
import DropdownMenue from "./DropdownMenue";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos && currentScrollPos >= 25) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  const handleNav = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <nav
      className={`fixed w-[100vw] md:h-14 h-[6rem] text-white m-0 z-[1000]  ${visible ? 'top-0 opacity-100 transition-opacity duration-300' : 'opacity-0 transition-opacity duration-500 cursor-default'}`}
    >
   
      <div className="flex justify-between items-center h-full w-[100vw] px-4 2xl:px-16">
        <Link href="/" className={`${visible ? "hidden sm:flex h-full " : "hidden sm:flex h-full pointer-events-none cursor-default"}`}>
          <Image
            src="/images/unity-park-nl.png"
            alt="Logo"
            width="400"
            height="100"
            className={`${visible ? "cursor-pointer" : "cursor-default"}`}
            priority
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
        <div className="hidden sm:flex h-full w-[180px] ">
          <Image
            src="/images/unity-park-logo-design3.png"
            alt="Logo"
            width="400"
            height="100"
            className="h-full"
            priority
            style={{ width: "100%", height: "100%", objectFit: "contain"}}
          />
        </div>
        <Link href='/' className={`${visible ? "sm:hidden h-full mt-5" : "sm:hidden h-full mt-5 pointer-events-none cursor-default"}`}>
          <Image
              src="/images/unity-park-bristol-new.png"
              alt="Logo"
              width="400"
              height="100"
              className={`${visible ? "cursor-pointer" : "cursor-default"}`}
              priority
              style={{ width: "800px", height: "100%" }}
            />
        </Link>
        <div className="hidden sm:flex justify-evenly">
          <ul className="hidden sm:flex">
            <Link href="/events" className={`${visible ? "" : "pointer-events-none cursor-default"}`}>
              <li className={`${visible ? "hover:border-b transition-all hover:text-[#AE895A] text-xl list-none" : "hover:border-b transition-all text-xl hover:text-[#AE895A] list-none cursor-default"}`}>
                Events
              </li>
            </Link>
            <Link href="/gallery" className={`${visible ? "" : "pointer-events-none cursor-default"}`}>
              <li className={`${visible ? "ml-5 hover:border-b transition-all text-xl hover:text-[#AE895A] list-none" : "ml-5 hover:border-b transition-all text-xl hover:text-[#AE895A] list-none cursor-default"}`}>
                Gallery
              </li>
            </Link>
            <div className="ml-5">
              <MyDropdown visible={visible}/>
            </div>
            <Link href="/visit" className={`${visible ? "" : "pointer-events-none cursor-default"}`}>
              <li className={`${visible ? "ml-5 hover:border-b transition-all text-xl hover:text-[#AE895A] list-none" : "ml-5 hover:border-b transition-all text-xl hover:text-[#AE895A] list-none cursor-default"}`}>
                Directory
              </li>
            </Link>
          </ul>
          <ul className="hidden sm:flex items-center ml-5">
            <Link
              href="https://www.instagram.com/unityparkbristol/"
              target="_blank"
              className={`${visible ? "pl-1 hover:text-[#AE895A]" : "pl-1 pointer-events-none cursor-default"}`}
            >
              <AiOutlineInstagram size={30} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100093514986419"
              target="_blank"
              className={`${visible ? "pl-1 hover:text-[#AE895A]" : "pl-1 pointer-events-none cursor-default"}`}
            >
              <AiOutlineFacebook size={30} />
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-10 pt-5">
          <AiOutlineMenu size={30} />
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
                className="py-4 cursor-pointer hover:text-[#AE895A] transition-all"
              >
                Events
              </li>
            </Link>
            <Link href="/gallery">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:text-[#AE895A] transition-all"
              >
                Gallery
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:text-[#AE895A] transition-all"
              >
                About
              </li>
            </Link>
            <Link href="/story">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:text-[#AE895A] transition-all"
              >
                Story
              </li>
            </Link>
            <Link href="/visit">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer hover:text-[#AE895A] transition-all"
              >
                Directory
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-center pt-5 items-center">
          <Link
            href="https://www.instagram.com/unityparkbristol/"
            target="_blank"
            
          >
            <AiOutlineInstagram
              size={30}
              className="cursor-pointer hover:text-[#AE895A]"
            />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100093514986419"
            target="_blank"
            className="ml-10"
          >
            <AiOutlineFacebook
              size={30}
              className="cursor-pointer hover:text-[#AE895A]"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center pt-20">
          <Link href="/">
            <Image
              src="/images/unity-park-logo-new.png"
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
