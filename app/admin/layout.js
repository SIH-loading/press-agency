"use client";

import NavbarAdmin from "@/components/Admin/navbar";
import React from "react";

export default function Layout(props) {
  return (
    <html>
      <body className="">
        <NavbarAdmin />
        <div className="">{props.children}</div>
      </body>
    </html>
  );
}
