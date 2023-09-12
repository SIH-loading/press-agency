import Gallery from "@/components/User/gallery";
import NewsLetter from "@/components/User/news-letter";
import Carousel from "@/components/common/carousel";
import React from "react";

export default function User() {
  return (
    <>
      <Carousel />
      <NewsLetter />
      <Gallery />
    </>
  );
}
