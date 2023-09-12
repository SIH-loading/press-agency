import Image from "next/image";
import React from "react";
import news from "../assets/news.svg";
import Link from "next/link";
export default function NewsLetter() {
  return (
    <>
      <Link
        href="/user/news"
        className="my-10 flex justify-center items-center w-full"
      >
        <Image src={news} alt="news" />
      </Link>
    </>
  );
}
