import { HeroButton, HeroProps } from "@/types/components/home";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import Link from "next/link";

const SectionContent = ({ heroData }: { heroData: HeroProps }) => {
  return (
    <div className="  flex flex-col  space-y-6" data-aos="fade-down">
      {/* <div className="absolute dark:block hidden top-2 right-[200px] rotate-[184]  w-64 h-44 rounded-full bg-gradient-to-l from-[#E855DE] to-transparent blur-2xl opacity-60 "></div> */}

      <h1 className="text-3xl mt-0 md:mt-4 tracking-tighter relative md:text-4xl uppercase px-2 lg:px-4 text-center font-bold leading-tight subpixel-antialiased">
        {heroData.hero_texts[0].children[0].text}
      </h1>

      <p className="text-lg opacity-80 text-center px-2 lg:px-4">
        {heroData.hero_texts[1]?.children[0].text}
      </p>

      {heroData.checkbox.length !== 0 && (
        <div className="flex justify-center">
          {heroData.checkbox.map((item, index) => (
            <label key={index} className="checkbox-container ">
              <input type="checkbox" />
              <span className="checkmark"></span>
              {item.label}
            </label>
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {heroData.hero_buttons.map((item: HeroButton, index: number) => {
          if (item.type == "transparent") {
            return (
              <Link href={item.link} key={index}>
                <PrimaryButton textClassName="!text-[#FE638E]">
                  {item.label}
                </PrimaryButton>
              </Link>
            );
          } else {
            return (
              <Link href={item.link} key={index}>
                <PrimaryButton>{item.label}</PrimaryButton>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SectionContent;
