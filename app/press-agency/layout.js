"use client";

import React from "react";
import NavbarPress from "@/components/PressAgency/navbar";

export default function Layout(props) {
  return (
    <html>
      <body className="">
        <NavbarPress />
        <div className="">{props.children}</div>
      </body>
    </html>
  );
}
