import LandingPress from "@/components/PressAgency/landing";
import TutorialPress from "@/components/PressAgency/tutorial";
import Carousel from "@/components/common/carousel";
import React from "react";

export default function PressAgency() {
  return (
    <>
      <LandingPress />
      <TutorialPress />
      <Carousel />
    </>
  );
}
