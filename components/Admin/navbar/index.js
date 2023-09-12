import React from "react";
import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";
export default function NavbarAdmin() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#3178CA] via-[#0976F790] to-[#a3c9f5] py-2 px-4 flex justify-between items-center text-lg lg:text-2xl h-16 text-white">
        <Link href="/">Home</Link>
        <div className="flex justify-between items-center gap-8 max-md:hidden">
          <Link className="first-letter:uppercase" href="about">
            about
          </Link>
          <Link className="first-letter:uppercase" href="/team">
            team
          </Link>
          <Link className="first-letter:uppercase" href="admin/status">
            status
          </Link>
          <Link href="press-agency/faq">FAQ</Link>
          <Link
            className="flex justify-center gap-1 items-center px-10 py-0.5 border-2 rounded-xl"
            href="admin/manual"
          >
            <span>Manual</span>
            <MdOutlineArrowDropDown />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>Hi, Sashi</span>
          <HiOutlineUserCircle size={30} />
        </div>
      </section>
    </>
  );
}
