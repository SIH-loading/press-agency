import React from "react";
import SocialMedia from "./social-media";
import table from "../assets/table.svg";
export default function Gallery() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full gap-10 my-8">
        <h1 className="text-[#626362] underline underline-offset-4 text-center font-semibold text-3xl">
          Gallery and Blogs
        </h1>
        <div className="flex flex-row justify-center items-center w-full">
          <div className="flex flex-col justify-start items-end w-1/2 gap-8">
            <div
              className="flex flex-row justify-start items-center w-4/5 h-96 "
              style={{
                backgroundImage: `url(${table.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-white p-6 gap-y-8 backdrop-blur opacity-80 rounded-r-xl bg-gradient-to-r from-[#3178CA] via-[#94B9E6] to-[#94B9E6] h-full w-2/3 flex flex-col justify-start items-start">
                <h1 className="font-semibold text-3xl">Heading</h1>
                <p>
                  Lorem ipsum shd sdhgbhg dswdwdewew efewfewe fewfwe dfw df
                  wdfwddsdhjsdj dhjgsjd sdhg
                </p>
                <button className=" py-2 px-16 gap-2 flex justify-center items-center font-semibold text-xl bg-[#000000] rounded-3xl text-white shadow-2xl">
                  Read More
                </button>
              </div>
              <div className="h-full w-/3"></div>
            </div>
            <div className="flex justify-center gap-8 items-center text-center pr-8">
              <div className="py-8 px-4 w-[305px] flex flex-col justify-center items-center h-[46vh] shadow-xl gap-5 bg-gradient-to-b from-[#def4f2] via-[#00F2E1] to-[#009F94]">
                <h1 className="font-semibold text-3xl text-[#01B1A6]">
                  Heading
                </h1>
                <p>
                  Lorem ipsum shd sdhgbhg dswdwdewew efewfewe fewfwe dfw df
                  wdfwddsdhjsdj dhjgsjd sdhg wdfwddsdhjsdj dhjgsjd sdhg
                  wdfwddsdhjsdj dhjgsjd sdhg Lorem ipsum shd sdhgbhg dswdwdewew
                  efewfewe fewfwe dfw df wdfwddsdhjsdj dhjgsjd sdhg
                </p>
                <button className=" py-2 px-16 gap-2 flex justify-center items-center font-semibold text-xl bg-[#009F94] rounded-3xl text-white shadow-2xl">
                  Read More
                </button>
              </div>
              <div className="py-8 px-4 w-[305px] flex flex-col justify-center items-center h-[46vh] shadow-xl gap-5">
                <h1 className="font-semibold text-3xl">Heading</h1>
                <p>
                  Lorem ipsum shd sdhgbhg dswdwdewew efewfewe fewfwe dfw df
                  wdfwddsdhjsdj dhjgsjd sdhg wdfwddsdhjsdj dhjgsjd sdhg
                  wdfwddsdhjsdj dhjgsjd sdhg Lorem ipsum shd sdhgbhg dswdwdewew
                  efewfewe fewfwe dfw df wdfwddsdhjsdj dhjgsjd sdhg
                </p>
                <button className=" py-2 px-16 gap-2 flex justify-center items-center font-semibold text-xl bg-[#009F94] rounded-3xl text-white shadow-2xl">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-start items-start w-1/2 gap-8">
            <div
              className="flex flex-row justify-start items-center w-4/5 h-96 "
              style={{
                backgroundImage: `url(${table.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-white p-6 gap-y-8 backdrop-blur opacity-80 rounded-r-xl bg-gradient-to-r from-[#3178CA] via-[#94B9E6] to-[#94B9E6] h-full w-2/3 flex flex-col justify-start items-start">
                <h1 className="font-semibold text-3xl">Heading</h1>
                <p>
                  Lorem ipsum shd sdhgbhg dswdwdewew efewfewe fewfwe dfw df
                  wdfwddsdhjsdj dhjgsjd sdhg
                </p>
                <button className=" py-2 px-16 gap-2 flex justify-center items-center font-semibold text-xl bg-[#000000] rounded-3xl text-white shadow-2xl">
                  Read More
                </button>
              </div>
              <div className="h-full w-/3"></div>
            </div>
            <div className="flex justify-center gap-8 items-center text-center pl-8 ">
              <div className="py-8 px-4 w-[305px] flex flex-col justify-center items-center h-[46vh] shadow-xl gap-5 bg-gradient-to-b from-[#def4f2] via-[#00F2E1] to-[#009F94]">
                <h1 className="font-semibold text-3xl text-[#01B1A6]">
                  Heading
                </h1>
                <p>
                  Lorem ipsum shd sdhgbhg dswdwdewew efewfewe fewfwe dfw df
                  wdfwddsdhjsdj dhjgsjd sdhg wdfwddsdhjsdj dhjgsjd sdhg
                  wdfwddsdhjsdj dhjgsjd sdhg Lorem ipsum shd sdhgbhg dswdwdewew
                  efewfewe fewfwe dfw df wdfwddsdhjsdj dhjgsjd sdhg
                </p>
                <button className=" py-2 px-16 gap-2 flex justify-center items-center font-semibold text-xl bg-[#009F94] rounded-3xl text-white shadow-2xl">
                  Read More
                </button>
              </div>
              <div className="py-8 px-4 w-[305px] flex flex-col justify-center items-center h-[46vh] shadow-xl gap-5">
                <h1 className="font-semibold text-3xl">Heading</h1>
                <p>
                  Lorem ipsum shd sdhgbhg dswdwdewew efewfewe fewfwe dfw df
                  wdfwddsdhjsdj dhjgsjd sdhg wdfwddsdhjsdj dhjgsjd sdhg
                  wdfwddsdhjsdj dhjgsjd sdhg Lorem ipsum shd sdhgbhg dswdwdewew
                  efewfewe fewfwe dfw df wdfwddsdhjsdj dhjgsjd sdhg
                </p>
                <button className=" py-2 px-16 gap-2 flex justify-center items-center font-semibold text-xl bg-[#009F94] rounded-3xl text-white shadow-2xl">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SocialMedia />
    </>
  );
}
