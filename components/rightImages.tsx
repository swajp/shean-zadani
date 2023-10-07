import React from "react";
import Image from "next/image";

export default function RightImages() {
  return (
    <div className="relative flex content-end items-end overflow-hidden">
      <div className=" ">
        <Image src="/background.png" alt="Pozadí" fill />
      </div>
      <div className="absolute right-0 bottom-[-5rem]">
        <Image src="/sheep.png" alt="Shean ovce" width="450" height="700" />
      </div>
    </div>
  );
}
