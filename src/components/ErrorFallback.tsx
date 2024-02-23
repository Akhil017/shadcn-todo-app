"use client";

import Image from "next/image";
import clientErrImg from "@/assets/client_err.svg";

export default function ErrorFallback() {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <Image
        src={clientErrImg}
        width={300}
        height={300}
        alt="Picture of the author"
      />
    </div>
  );
}
