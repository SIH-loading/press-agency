import Image from "next/image";
import React from "react";
import footerHero from "../../assets/footerHero.svg";
import playStore from "../../assets/playStore.svg";
export default function FooterHeroSection() {
  return (
    <>
      <div className="h-60 w-full flex flex-col justify-center items-center gap-y-6">
        <Image src={footerHero} alt="heroFooter" />
        <button>
          <Image src={playStore} alt="playStore" />
        </button>
      </div>
      <div className="h-48 w-full flex flex-col justify-center items-center bg-[#D9D9D9]"></div>
    </>
  );
}
