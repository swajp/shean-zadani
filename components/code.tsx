"use client";

import React, { useEffect, useState } from "react";

export default function Code() {
  const [code, setCode] = useState("");

  useEffect(() => {
    setCode(Math.random().toString(36).substring(2, 8).toUpperCase());
  }, []);

  return (
    <section className="flex items-center ">
      <div className="w-52 md:w-48">
        <p className="text-neutral-500  text-sm md:text-lg tracking-tight font-light">
          Váš dárkový kód je
        </p>
      </div>
      <div className="w-full max-w-xs">
        <div className="p-2 md:p-3 border  text-center">
          <p className="font-bold ">{code}</p>
        </div>
      </div>
    </section>
  );
}
