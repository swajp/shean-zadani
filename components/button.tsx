import React from "react";

export default function Button({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="py-2 md:py-4 px-4 md:px-7 w-fit rounded-full bg-gradient-to-r from-red-600 to-orange-600 ml-3 md:ml-0">
      <button
        disabled={isLoading}
        className="text-white text-sm md:text-base font-bold tracking-tight "
      >
        ZÍSKAT DÁREK
      </button>
    </div>
  );
}
