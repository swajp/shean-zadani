"use client";

import React, { useEffect, useState } from "react";
import Button from "./button";

export default function Form() {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [error, setError] = useState(false);

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

  return (
    <section>
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
              role="img"
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
              aria-label="Váš email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        {emailStatus && (
          <p
            role="status"
            aria-live="polite"
            className={`text-sm font-light ${
              error ? "text-red-500" : "text-neutral-500"
            }`}
          >
            {emailStatus}
          </p>
        )}
        <Button isLoading={loading} />
      </form>
    </section>
  );
}
