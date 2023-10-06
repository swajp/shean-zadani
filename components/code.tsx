"use client";

import React, { useEffect, useState } from "react";

export default function Code() {
  const [code, setCode] = useState("");

  useEffect(() => {
    setCode(Math.random().toString(36).substring(2, 8).toUpperCase());
  }, []);

  return (
    <div className="flex items-center">
      <div className=" w-2/5 md:w-1/3 px-3 md:px-0">
        <p className="text-neutral-500 text-base md:text-lg tracking-tight font-light">
          Váš dárkový kód je
        </p>
      </div>
      <div className="p-2 md:p-3 border w-1/2 text-center">
        <p className="font-bold ">{code}</p>
      </div>
    </div>
  );
}
