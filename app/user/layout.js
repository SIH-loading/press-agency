"use client";

import NavbarUser from "@/components/User/navbar";
import React from "react";

export default function Layout(props) {
  return (
    <>
      <NavbarUser />
      <div>{props.children}</div>
    </>
  );
}
