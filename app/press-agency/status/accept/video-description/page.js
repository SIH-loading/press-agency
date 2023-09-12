"use client";
import React, { useState } from "react";

export default function VideoDescription() {
  const [dropdown, setdropdownOpen] = useState(false);

  const handleFunction = () => {
    setdropdownOpen(!dropdown);
  };
  return (
    <section className="flex justify-center items-start flex-row w-full h-full p-12">
      <div className=" w-2/5 h-full flex justify-end items-center">
        <div className="flex flex-col justify-center items-center w-4/5 border-black border-2">
          <h1 className="w-full bg-[#6789B2] py-4 text-center font-semibold text-2xl text-[#F7F7F7]">
            Video Description
          </h1>
          <div className="text-justify p-8 overflow-y-auto h-[70vh] flex flex-col gap-y-8">
            <p>
              We use the text-transparent class to make the text transparent so
              that the gradient background shows through the text. We use the
              bg-clip-text class to make sure the background gradient only
              applies to the text itself. We use the text-5xl class to increase
              the text size to 5xl you can adjust this size as needed. We use
              the font-bold class to make the text bold optional. With these
              classes, your text will have a gradient background from FF0A0A to
              D08C26. You can further customize the text size, font weight, and
              other styles to match your design preferences.
            </p>
            <p>
              We use the text-transparent class to make the text transparent so
              that the gradient background shows through the text. We use the
              bg-clip-text class to make sure the background gradient only
              applies to the text itself. We use the text-5xl class to increase
              the text size to 5xl you can adjust this size as needed. We use
              the font-bold class to make the text bold optional. With these
              classes, your text will have a gradient background from FF0A0A to
              D08C26. You can further customize the text size, font weight, and
              other styles to match your design preferences.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-3/5 h-full">
        <div className="flex flex-col justify-center items-center w-4/5 gap-6">
          <div className="flex justify-center items-center w-full border-black border-2 min-h-[60vh] p-8"></div>
          <div className="flex justify-start items-start gap-4">
            <input
              type="checkbox"
              id="myCheckbox"
              class="form-checkbox text-green-600 h-6 w-6"
            />
            <p className="text-[#626362]">
              I have read the following pdf and seen the video ,now i would
              acknowledge the following data according to my own precisions.
            </p>
          </div>
          <div className="w-full justify-between items-center px-4 flex">
            <button
              onClick={handleFunction}
              className=" py-2 px-20 gap-2 flex justify-center items-center font-semibold text-2xl bg-[#11CF24] rounded-3xl text-white shadow-2xl"
            >
              Approve
            </button>
            <button className=" py-2 px-20 gap-2 flex justify-center items-center font-semibold text-2xl bg-[#FF0A0A] rounded-3xl text-white shadow-2xl">
              Reject
            </button>
          </div>
        </div>
      </div>
      {dropdown && (
        <div className="absolute backdrop-blur-xl bg-[#ffffff50] h-4/5 w-full flex justify-center items-center">
          <div className="border-2 border-black w-[900px] flex justify-center items-start h-[500px] bg-white">
            <div className="h-full w-full flex justify-center items-center gap-y-10 flex-col">
              <h1 className="text-2xl text-center w-2/3">
                Your decision would be declared and will be forwarded to the
                respective user with approval letter.
              </h1>
              <button
                onClick={handleFunction}
                className=" py-2 px-20 gap-2 flex justify-center items-center font-semibold text-2xl bg-[#F58513] rounded-3xl text-white shadow-2xl"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
