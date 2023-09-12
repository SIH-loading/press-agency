import Link from "next/link";
import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
export default function Upload() {
  // const [slidesPerView, setSlidesPerView] = useState(3);

  // useEffect(() => {
  //   // Function to update slidesPerView based on screen width
  //   const handleResize = () => {
  //     const newSlidesPerView = window.innerWidth <= 767 ? 1 : 3;
  //     setSlidesPerView(newSlidesPerView);
  //   };

  //   // Set initial value of slidesPerView
  //   handleResize();

  //   // Attach the event listener to handle resize changes
  //   window.addEventListener("resize", handleResize);

  //   // Clean up the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <section className="flex justify-start items-center flex-col min-h-screen bg-[#ecf3f7] ">
      <form
        type="submit"
        className="flex flex-row w-full pt-20 justify-center items-start text-xl"
      >
        <div className="flex flex-col justify-center items-center gap-y-12 w-1/2">
          <div className="w-4/5">
            <label
              for="name"
              className="block text-xl font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 border border-gray-300 text-gray-900  text-lg rounded-lg w-full p-5"
              placeholder="Type heres"
              required
            />
          </div>
          <div className="w-4/5">
            <label
              for="videoName"
              className="block text-xl font-medium text-gray-900"
            >
              Video Name
            </label>
            <input
              type="text"
              id="videoName"
              className="mt-2 border border-gray-300 text-gray-900 text-lg rounded-lg w-full p-5"
              placeholder="Name of the video"
              required
            />
          </div>
          <div className="w-4/5">
            <label
              for="document"
              className="block text-xl font-medium text-gray-900"
            >
              Upload your pdf
            </label>
            <input
              type="file"
              id="document"
              className="mt-2 border border-gray-300 text-gray-900  text-lg rounded-lg w-full p-5 bg-white"
              placeholder="sample.pdf"
              required
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-10 w-1/2">
          <div className="w-4/5">
            <label
              for="description"
              className="block text-xl font-medium text-gray-900"
            >
              Describe your video
            </label>
            <textarea
              id="description"
              rows="12"
              className="mt-2 border border-gray-300 text-gray-900 w-full text-lg rounded-lg p-5"
              placeholder="Type heres "
              required
            ></textarea>
          </div>
        </div>
      </form>
      <Link href={"/press-agency/upload/video"} className="mt-24">
        <button
          className=" py-3 px-24 gap-2 flex justify-center items-center font-semibold text-2xl bg-[#517CD7] rounded-3xl text-white shadow-2xl"
          type="submit"
        >
          Submit
        </button>
      </Link>
    </section>
  );
}
