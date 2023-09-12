"use client";
import React from "react";
import Status from "@/components/Admin/status";

export default function StatusLayout(params) {
  return (
    <section className="flex justify-center items-center w-full h-full">
      <div className="w-[20vw] h-full">
        <Status />
      </div>
      {params.children}
    </section>
  );
}
