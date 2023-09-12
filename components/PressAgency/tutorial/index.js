import React from "react";
import Image from "next/image";
import image1 from "../../common/assets/image1.svg";
import image2 from "../../common/assets/image2.svg";
import image3 from "../../common/assets/image3.svg";
import image4 from "../../common/assets/image4.svg";
import image5 from "../../common/assets/image5.svg";
export default function TutorialPress() {
  const data = [
    {
      id: 1,
      imageUrl: image1,
      title: "Ideate your video",
      description:
        "Give your video an ideation and work accordingly to make it get approved",
    },
    {
      id: 2,
      imageUrl: image2,
      title: "Ideate your video",
      description:
        "Give your video an ideation and work accordingly to make it get approved",
    },
    {
      id: 3,
      imageUrl: image3,
      title: "Ideate your video",
      description:
        "Give your video an ideation and work accordingly to make it get approved",
    },
    {
      id: 4,
      imageUrl: image4,
      title: "Ideate your video",
      description:
        "Give your video an ideation and work accordingly to make it get approved",
    },
    {
      id: 5,
      imageUrl: image5,
      title: "Ideate your video",
      description:
        "Give your video an ideation and work accordingly to make it get approved",
    },
  ];
  return (
    <div className="flex justify-center items-center text-[#636363] flex-col mb-8">
      <h1 className="text-3xl font-semibold underline underline-offset-4">
        Service for the process of uploading the contents
      </h1>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {data.map((item) => (
          <div
            className="bg-white flex flex-col gap-4 rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105"
            key={item.id}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              className="rounded-lg"
              width={50}
              height={50}
            />
            <h2 className="text-xl font-semibold mt-4 mb-2 border-b-2 border-gray-300 pb-2">
              {item.title}
            </h2>
            <p className="text-gray-700 w-96  ">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
