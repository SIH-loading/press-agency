import Link from "next/link";
import { MdVideoLibrary } from "react-icons/md";
import React from "react";
import Status from "@/components/PressAgency/status";

export default function Accept() {
  const Data = [
    {
      id: 1,
      fileInformation: "Agency motorization.mp4",
      fileAuthor: "Sashi",
      fileSize: "132 MB",
      pdfAttach: "Lorem.pdf",
      operation: "Download",
    },
    {
      id: 2,
      fileInformation: "Agency motorization.mp4",
      fileAuthor: "Sashi",
      fileSize: "132 MB",
      pdfAttach: "Lorem.pdf",
      operation: "Download",
    },
    {
      id: 3,
      fileInformation: "Agency motorization.mp4",
      fileAuthor: "Sashi",
      fileSize: "132 MB",
      pdfAttach: "Lorem.pdf",
      operation: "Download",
    },
    {
      id: 4,
      fileInformation: "Agency motorization.mp4",
      fileAuthor: "Sashi",
      fileSize: "132 MB",
      pdfAttach: "Lorem.pdf",
      operation: "Download",
    },
    {
      id: 5,
      fileInformation: "Agency motorization.mp4",
      fileAuthor: "Sashi",
      fileSize: "132 MB",
      pdfAttach: "Lorem.pdf",
      operation: "Download",
    },
    {
      id: 6,
      fileInformation: "Agency motorization.mp4",
      fileAuthor: "Sashi",
      fileSize: "132 MB",
      pdfAttach: "Lorem.pdf",
      operation: "Download",
    },
  ];
  const fields = [
    { Name: "File Information", class: "w-80" },
    { Name: "File Author", class: "w-40" },
    { Name: "File Size", class: "w-40" },
    { Name: "PDF Attach", class: "w-40" },
    { Name: "Operation", class: "" },
  ];
  return (
    <section className="flex justify-center items-center w-full h-full">
      <div className="w-[20vw] h-full">
        <Status />
      </div>
      <div className="w-[80vw] h-full flex justify-center items-center flex-col gap-4">
        <div className="mx-auto">
          <div className="flex gap-1 border border-solid bg-[#D9D9D9] font-semibold border-black">
            {fields.map((el) => {
              return (
                <div
                  key={el.Name}
                  className={`border-l border-black p-5 ${el.class}`}
                >
                  {el.Name}
                </div>
              );
            })}
          </div>
          <div className="">
            {Data.map((el, index) => {
              const isEvenRow = index % 2 === 0;
              const rowBackgroundColor = isEvenRow ? "#FFFFFF" : "#F3F4EE";
              return (
                <div
                  className="flex gap-1"
                  key={el.id}
                  style={{ backgroundColor: rowBackgroundColor }}
                >
                  {/*<div className="w-20 p-5 border-b-2 border-l-2">{el.id}</div>*/}
                  <div className="w-80 p-5 flex justify-start gap-4">
                    {/* <Link href={`/admin/status/accept/$[{el.operation}`}> */}
                    <Link href="/press-agency/status/accept/video-description">
                      <MdVideoLibrary size={30} />
                    </Link>
                    {el.fileInformation}
                  </div>
                  <div className="w-40 p-5">{el.fileAuthor}</div>
                  <div className="w-40 p-5">{el.fileSize}</div>
                  <div className="w-40 p-5 text-[#FF0A0A]">{el.pdfAttach}</div>
                  <div className="w-52 p-5 text-[#3178CA]">{el.operation}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 py-2 px-4 rounded-full">
            Previous Page
          </button>
          <span className="py-2 px-4">1</span>
          <button className="bg-white text-blue-500  hover:bg-blue-500 hover:text-white py-2 px-4 rounded-full">
            Next Page
          </button>
        </div>
      </div>
    </section>
  );
}
