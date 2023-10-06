import Link from "next/link";
import React from "react";

export default function Rights() {
  return (
    <div className="pt-4 md:pt-8 px-3 md:px-0">
      <p className="text-xs md:text-sm font-light text-neutral-500">
        Ochrana osobních údajů je pro nás prioritou, <br />
        Více informací, jak zacházíme s vašimi daty, najdete v{" "}
        <Link className="underline text-red-400" href="#">
          tomto dokomentu.
        </Link>
      </p>
    </div>
  );
}