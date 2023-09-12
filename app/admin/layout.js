"use client";

import NavbarAdmin from "@/components/Admin/navbar";
import React from "react";

export default function Layout(props) {
  return (
    <>
      <NavbarAdmin />
      <div>{props.children}</div>
    </>
  );
}
