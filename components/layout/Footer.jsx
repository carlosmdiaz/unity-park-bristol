import Link from "next/link";
import Image from "next/image";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsYelp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 h-1/2 w-full bg-[#0C1E28] flex flex-col mt-auto bg-red">
      <div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-5">
        <div >
          <Image
            src="/images/unity-park-logo-design3.png"
            alt="Logo"
            width="200"
            height="50"
            className="cursor-pointer"
            priority
          />
        </div>
        <div className="p-5">
          <ul>
            <Link href="/">
              <li className="text-white text-xl pb-2 font-semibold hover:text-[#AE895A]">
                Home
              </li>
            </Link>
            <Link href="/events">
              <li className="text-white text-xl pb-2 font-semibold hover:text-[#AE895A]">
                Events
              </li>
            </Link>
            <Link href="/gallery">
              <li className="text-white text-xl pb-2 font-semibold hover:text-[#AE895A]">
                Gallery
              </li>
            </Link>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <Link href="/story">
              <li className="text-white text-xl pb-2 font-semibold hover:text-[#AE895A]">
                Story
              </li>
            </Link>
            <Link href="/visit">
              <li className="text-white text-xl pb-2 font-semibold hover:text-[#AE895A]">
                Visit
              </li>
            </Link>
            <Link href="/contact">
              <li className="text-white text-xl pb-2 font-semibold hover:text-[#AE895A]">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="p-5">
          <h1 className="md:text-2xl text-xl text-white font-cyreal font-bold">
            500 Wood St,
            <br />
            Bristol, RI 02809
          </h1>
        </div>
      </div>
      <div className="w-full border-t-2 border-white" />
      <div className="flex md:flex-row flex-col justify-center items-center text-center p-5 bg-[#0C1E28]">
        <h1 className="text-white font-semibold">©2023 UNITY PARK LLC</h1>
        <p className="hidden md:flex font-semibold text-white px-4">|</p>
        <div className="pt-2">
            <ul className="flex md:flex-row flex-col">
                <Link href="/privacy">
                    <li className="text-white pb-2 font-semibold hover:text-[#AE895A]">PRIVACY</li>
                </Link>
                <p className="hidden md:flex font-semibold text-white px-4">|</p>
                <Link href="/termsofuse">
                    <li className="text-white pb-2 font-semibold hover:text-[#AE895A]">TERMS OF USE</li>
                </Link>
                <p className="hidden md:flex font-semibold text-white px-4">|</p>
                <Link href="/community">
                    <li className="text-white pb-2 font-semibold hover:text-[#AE895A]">COMMUNITY RULES</li>
                </Link>
            </ul>
        </div>
        <p className="hidden md:flex font-semibold text-white px-4">|</p>
        <h1 className="text-white font-semibold">MADE BY CARLOS DIAZ</h1>
      </div>
    </footer>
  );
};

export default Footer;
