"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";

export default function Home() {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [error, setError] = useState(false);

  const [code, setCode] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(email);
  };

  const validateEmail = (email: string) => {
    return emailRegex.test(email);
  };

  const sendEmail = (email: string) => {
    setLoading(true);
    if (validateEmail(email)) {
      setEmailStatus("Email byl odeslán.");
      setError(false);
    } else {
      setEmailStatus("Zadejte prosím email.");
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    setCode(Math.random().toString(36).substring(2, 8).toUpperCase());
  }, []);

  return (
    <main className="p-2 md:p-8 max-w-screen-xl mx-auto h-screen flex items-center ">
      <div className="border-4 rounded-xl md:rounded-[2.3rem] border-[#F7F7F7] ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center flex-col p-4 md:p-16 content-center ">
            <div className="">
              {/* 
              <Image src="/title.png" alt="" width={500} height={200} />
              */}
              <Image src="/title.png" alt="" width={250} height={200} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="py-6 px-3 md:px-0 ">
                <p className="text-neutral-500 text-base md:text-lg font-light">
                  <span className="font-bold">Slavíme 15. let!</span> Vyzvedněte
                  si od nás dárek, který vám vykouzlí úsměv na tváři. Po zadání
                  emailu se vám ozveme a domluvíme se společně, jak váš dárek
                  budete chtít využít.
                </p>
              </div>

              <div className="flex flex-col gap-3 ">
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex items-center ">
                    <div className="w-2/5 md:w-1/3 ">
                      <p className="text-neutral-500 text-base md:text-lg font-light tracking-tight">
                        Vyplňte email
                      </p>
                    </div>
                    <div className="relative flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/ssvg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke=""
                        className="absolute stroke-neutral-300 left-2 w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      <input
                        type="text"
                        className="p-3 border pl-10 ring-0 outline-none placeholder:text-neutral-300"
                        placeholder="vas@email.cz"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  {emailStatus && (
                    <p
                      className={`text-sm font-light ${
                        error ? "text-red-500" : "text-neutral-500"
                      }`}
                    >
                      {emailStatus}
                    </p>
                  )}
                  <div className="py-2 md:py-4 px-4 md:px-7 w-fit rounded-full bg-gradient-to-r from-red-600 to-orange-600 ml-3 md:ml-0">
                    <button
                      disabled={loading}
                      className="text-white text-sm md:text-base font-bold tracking-tight "
                    >
                      ZÍSKAT DÁREK
                    </button>
                  </div>
                </form>
              </div>

              <div className="pt-4 md:pt-8 px-3 md:px-0">
                <p className="text-xs md:text-sm font-light text-neutral-500">
                  Ochrana osobních údajů je pro nás prioritou, <br />
                  Více informací, jak zacházíme s vašimi daty, najdete v{" "}
                  <Link className="underline text-red-400" href="#">
                    tomto dokomentu.
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex content-end items-end overflow-hidden">
            <div className=" ">
              <Image src="/background.png" alt="" fill />
            </div>
            <div className="absolute right-0 bottom-[-5rem]">
              <Image src="/sheep.png" alt="" width="450" height="700" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
