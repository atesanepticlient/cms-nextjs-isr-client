"use client";
import * as React from "react";

import Drawer from "@mui/material/Drawer";
import { RiMenu5Line } from "react-icons/ri";
import Link from "next/link";
import { Nav } from "@/types/components/home";

export default function Sidebar({ nav }: { nav: Nav[] }) {
  const [isSideBarOpen, setSideBarOpen] = React.useState(false);

  return (
    <div className="lg:hidden ">
      <button onClick={() => setSideBarOpen(true)} className="!w-max  ">
        <RiMenu5Line className="w-5 h-5 text-white cursor-pointer" />
      </button>
      <Drawer
        anchor={"right"}
        open={isSideBarOpen}
        onClose={() => setSideBarOpen(false)}
        className="!bg-red"
      >
        <div className="w-[250px] h-screen  bg-background   overflow-hidden">
          <nav className="flex flex-col gap-3 pl-8 pt-12">
            {nav.map((n, i) => (
              <Link
                href={n.link}
                key={i}
                className="text-sm border-b pb-3 border-b-foreground/50 font-bold md:font-semibold text-white uppercase hover:text-indigo-600 hover:transition-all focus-within:text-indigo-600 focus:text-indigo-600 focus-visible:text-indigo-600 transition-colors flex items-center gap-2"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </Drawer>
    </div>
  );
}
