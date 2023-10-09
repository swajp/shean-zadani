import React from "react";
import Image from "next/image";

export default function TitleImage() {
  return (
    <Image
      src="/title.png"
      alt="Oslavte s námi naše 15. narozeniny!"
      width="0"
      height="0"
      sizes="100vw"
      className="w-full h-auto"
    />
  );
}
