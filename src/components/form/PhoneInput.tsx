"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export function PhoneInput() {
  return (
    <div>
      <label htmlFor="phone" className="mb-2 text-sm text-neutral-400">
        Phone Number
      </label>
      <div
        style={{
          background: "linear-gradient(223deg, #27242C 58%, #0C0B0E 100%)",
          border: "3.54px #FE3C72 solid",
        }}
        className="flex items-center p-0.5  rounded-[102px]"
      >
        <button
          style={{
            position: "relative",
            background: "linear-gradient(318deg, #CD479F 0%, #DD123C 100%)",
            boxShadow: "2px 2px 0 #C01237 , -2px -2px 0 #CD479F",
          }}
          className="rounded-4xl px-4 py-3 flex items-center gap-1 "
        >
          +92 <IoIosArrowDown className="text-foreground w-4 h-4" />
        </button>

        <input
          id="phone"
          type="text"
          placeholder="Phone number"
          className="p-2 w-full text-base border-[none] text-neutral-400  focus:outline-none"
        />
      </div>
      <p className="mt-2 text-sm text-rose-500">Required</p>
    </div>
  );
}
