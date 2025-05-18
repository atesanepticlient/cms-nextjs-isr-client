/* eslint-disable @typescript-eslint/no-explicit-any */
import { HeroButton,  } from "@/types/components/home";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import Link from "next/link";

import ReactMarkdown from "react-markdown";

const SectionContent = ({
  content,
  hero_buttons,
}: {
  content: string;
  hero_buttons: any;
}) => {
  return (
    <div className="  flex flex-col  space-y-6" data-aos="fade-down">
      {/* <div className="absolute dark:block hidden top-2 right-[200px] rotate-[184]  w-64 h-44 rounded-full bg-gradient-to-l from-[#E855DE] to-transparent blur-2xl opacity-60 "></div> */}

      <div className="markdown hero">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      {/* {heroData.checkbox.length !== 0 && (
        <div className="flex justify-center">
          {heroData.checkbox.map((item, index) => (
            <label key={index} className="checkbox-container ">
              <input type="checkbox" />
              <span className="checkmark"></span>
              {item.label}
            </label>
          ))}
        </div>
      )} */}

      <div className="flex flex-wrap justify-center gap-2 md:gap-3 hero-btns mt-2 md:mt-3 lg:mt-5">
        {hero_buttons.map((item: HeroButton, index: number) => {
          return (
            <Link href={item.link} key={index}>
              <PrimaryButton textClassName={`primary-btn-text-${index + 1}`}>
                {item.label}
              </PrimaryButton>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SectionContent;
