"use client";

import Link from "next/link";
export default function Home() {
  const data = [
    {
      id: 1,
      title: "admin",
      description:
        "vamus gravida, eros nec tristique iaculis, ante urna tincidunt velit, sed cursus dui ante sed mi. Praesent maximus nunc in nulla tincidunt viverra. In luctus et odio quis aliquam. Morbi vehicula nunc sed imperdiet ultricies. Sed tincidunt porttitor elementum. Aenean id ante enim. Nulla ullamcorper, sapien ut facilisis fringilla, lorem tellus tristique enim, et posuere sapien metus sit amet elit. Donec sit amet imperdiet dui. Integer efficitur mattis eros eu fermentum",
    },
    {
      id: 2,
      title: "press-agency",
      description:
        "vamus gravida, eros nec tristique iaculis, ante urna tincidunt velit, sed cursus dui ante sed mi. Praesent maximus nunc in nulla tincidunt viverra. In luctus et odio quis aliquam. Morbi vehicula nunc sed imperdiet ultricies. Sed tincidunt porttitor elementum. Aenean id ante enim. Nulla ullamcorper, sapien ut facilisis fringilla, lorem tellus tristique enim, et posuere sapien metus sit amet elit. Donec sit amet imperdiet dui. Integer efficitur mattis eros eu fermentum",
    },
    {
      id: 3,
      title: "user",
      description:
        "vamus gravida, eros nec tristique iaculis, ante urna tincidunt velit, sed cursus dui ante sed mi. Praesent maximus nunc in nulla tincidunt viverra. In luctus et odio quis aliquam. Morbi vehicula nunc sed imperdiet ultricies. Sed tincidunt porttitor elementum. Aenean id ante enim. Nulla ullamcorper, sapien ut facilisis fringilla, lorem tellus tristique enim, et posuere sapien metus sit amet elit. Donec sit amet imperdiet dui. Integer efficitur mattis eros eu fermentum",
    },
  ];

  return (
    <div className="mb-20 mt-10 flex justify-start items-center gap-10 flex-col">
      <h1 className="text-3xl font-mono">
        Click on the cards to visit the panel
      </h1>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        {data.map((item) => {
          return (
            <Link href={`/${item.title}`}>
              <div
                key={item.id}
                className="flex p-8 justify-center text-white items-center gap-6 flex-col w-72 md:w-96 bg-gradient-to-b from-[#3178CA] via-[#0976F790] to-[#a3c9f5] rounded-xl"
              >
                <h1 className="uppercase text-3xl font-bold  underline underline-offset-4">
                  {item.title}
                </h1>
                <p className="text-center">{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
