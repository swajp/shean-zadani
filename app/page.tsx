import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="p-16">
      <div className="border-4 rounded-2xl border-[#F7F7F7] ">
        <div className="grid grid-cols-2">
          <div className="flex items-center flex-col p-20 content-center ">
            <div>
              <Image src="/title.png" alt="" width="560" height="230" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="py-6 ">
                <p className="text-neutral-500 text-lg font-light">
                  <span className="font-bold">Slavíme 15. let!</span> Vyzvedněte
                  si od nás dárek, který vám vykouzlí úsměv na tváři. Po zadání
                  emailu se vám ozveme a domluvíme se společně, jak váš dárek
                  budete chtít využít.
                </p>
              </div>

              <div className="flex flex-col gap-3 ">
                <div className="flex items-center">
                  <div className="w-1/3">
                    <p className="text-neutral-500 text-lg tracking-tight font-light">
                      Váš dárkový kód je
                    </p>
                  </div>
                  <div className="p-3 border w-1/2 text-center">
                    <p className="font-bold ">SHEAN15</p>
                  </div>
                </div>
                <form className="flex flex-col gap-4">
                  <div className="flex items-center ">
                    <div className="w-1/3">
                      <p className="text-neutral-500 text-lg font-light tracking-tight">
                        Vyplňte email
                      </p>
                    </div>
                    <input
                      type="text"
                      className="p-3 border w-1/2 ring-0 outline-none placeholder:text-neutral-300"
                      placeholder="vas@email.cz"
                    />
                  </div>
                  <div className="py-4 px-7 w-fit rounded-full bg-gradient-to-r from-red-600 to-orange-600">
                    <button className="text-white font-bold tracking-tight">
                      ZÍSKAT DÁREK
                    </button>
                  </div>
                </form>
              </div>

              <div className="">
                <p className="text-sm font-light text-neutral-500">
                  Ochrana osobních údajů je pro nás prioritou, <br />
                  Více informací, jak zacházíme s vašimi daty, najdete v{" "}
                  <Link className="underline text-red-400" href="#">
                    tomto dokomentu.
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex content-end items-end">
            <div className=" ">
              <Image src="/background.png" alt="" fill />
            </div>
            <div className="absolute right-0">
              <Image src="/sheep.png" alt="" width="500" height="700" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
