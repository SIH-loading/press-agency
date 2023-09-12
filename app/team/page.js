import React from "react";

export default function TeamPage() {
  return (
    <>
      <div className="h-[80vh]">
        TeamPage
        <div className="flex justify-center items-center mt-20">
          <div className="border-2 shadow-lg h-60 w-60 rounded-bl-[50px] rounded-tr-[50px]"></div>
          <div className="border-2 shadow-lg h-60 w-60 rounded-br-[50px] rounded-tl-[50px]"></div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-2 shadow-lg h-60 w-60 rounded-tl-[50px] rounded-br-[50px]"></div>
          <div className="border-2 shadow-lg h-60 w-60 rounded-bl-[50px] rounded-tr-[50px]"></div>
        </div>
      </div>
    </>
  );
}
