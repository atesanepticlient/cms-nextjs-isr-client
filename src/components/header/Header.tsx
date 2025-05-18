/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { isLinkButton, isNavArray, isOfType, isString } from "@/types/checker";
import { HeaderProps, LinkButton, Nav } from "@/types/components/home";
import PrimaryButton from "../PrimaryButton";

const Header = (props: HeaderProps) => {
  const { brand, nav, button } = props;

  const [showHeader, setShowHeader] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed bg-background  py-2 px-2 md:px-5 lg:px-20 w-full border-b border-b-[#dcdcdc] dark:border-b-[#353039]  z-50 transition-all duration-300 ${
          showHeader ? "top-0 " : "-top-20 "
        }`}
      >
        <div className=" mx-auto h-[60px]   flex items-center justify-between ">
          {/* ---brand--- */}
          {isOfType<string>(brand, isString) && (
            <div className="flex items-center ">
              <Link href="/" className="text-xl font-bold">
                <img
                  src={`http://localhost:1338${brand}`}
                  className="w-[45px] md:w-[50px] h-auto"
                  alt="brand"
                />
              </Link>
            </div>
          )}
          {!isOfType<string>(brand, isString) && (
            <div className="flex items-center ">
              <div className="w-[100px] md:w-[120px] h-[40px] dark:bg-[#ddd] bg-[#222] flex justify-center items-center">
                <span className="text-sm text-black">brand</span>
              </div>
            </div>
          )}
          {/* ---brand--- */}

          <div className="flex items-center gap-5">
            {isOfType<LinkButton>(button, isLinkButton) && (
              <Link href={button.link}>
                <PrimaryButton className="!w-[150px] lg:w-[220px]">
                  {button.label}
                </PrimaryButton>
              </Link>
            )}

            {!isOfType<LinkButton>(button, isLinkButton) && (
              <div className="w-[130px] md:w-[160px] h-[30px] dark:bg-[#ddd] bg-[#222] flex justify-center items-center">
                <span className="text-sm text-black">button</span>
              </div>
            )}
            {isOfType<Nav[]>(nav, isNavArray) && <Sidebar nav={nav} />}
          </div>
          <nav className="hidden nav-list md:flex items-center ">
            {isOfType<Nav[]>(nav, isNavArray) && (
              <>
                {nav.map((n, i) => (
                  <Link
                    key={i}
                    href={n.link}
                    className="relative hover:text-indigo-600 leading-relaxed tracking-wider hover:transition-all focus:text-indigo-600 focus-visible:text-indigo-600   md:px-6 lg:px-8 transition-colors cursor-pointer uppercase text-xs font-semibold "
                  >
                    {n.label}

                    <div className=" vertical-line bg-gradient-to-b from-transparent dark:via-gray-400 via-gray-800 to-transparent absolute -top-[20px]  right-0 h-[56px] w-px "></div>
                  </Link>
                ))}
              </>
            )}

            {!isOfType<Nav[]>(nav, isNavArray) && (
              <>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-[100px] md:w-[120px] h-[25px] bg-[#ddd] dark:bg-[#222 flex justify-center items-center "
                  >
                    <span className="text-sm text-black">nav{i + 1}</span>
                  </div>
                ))}
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
