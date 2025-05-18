/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import SectionImage from "@/components/SectionImage";

import ReactMarkdown from "react-markdown";
import InputCheck from "../form/InputCheck";
import PrimaryButton from "../PrimaryButton";

const HeroWithApplyForm = ({ heroData }: { heroData: any }) => {
  // Validate hero data: must have hero texts and a valid image URL
  console.log({ heroData });
  return (
    <>
      {/* Top left glowing background element (only in dark mode) */}
      {/* <div className="absolute dark:block hidden top-1/2 left-10 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-purple-400 to-transparent blur-xl opacity-70 animate-pulse"></div> */}

      {/* Main hero section with image and content */}
      <section className="section container-c !items-start">
        <SectionImage
          src={`${heroData.hero_image.url}`}
          alt="Digital Platform Interface"
        />
        <div className="  flex flex-col  space-y-6" data-aos="fade-down">
          {/* <div className="absolute dark:block hidden top-2 right-[200px] rotate-[184]  w-64 h-44 rounded-full bg-gradient-to-l from-[#E855DE] to-transparent blur-2xl opacity-60 "></div> */}

          <div className="markdown hero !text-center">
            <ReactMarkdown>{heroData.content}</ReactMarkdown>
          </div>

          <div className="mt-5 px-3 lg:px-5">
            <form>
              <input
                className="block w-full px-4 py-4 rounded-md border border-[#dcdcdc] dark:border-[#353039] focus:ring-2 focus:ring-indigo-600 focus:outline-none text-xs font-medium text-foreground"
                placeholder="Enter mobile phone number"
              />
              <p className="text-[10px] lg:text-xs text-foreground my-2">
                By providing your phone number and clicking “Apply to drive”,
                you consent to receive text messages from Lyft. Text messages
                may be autodialed, and data rates may apply. The frequency of
                text messages varies. You may text STOP to cancel any time.
              </p>

              <div className="flex justify-center items-center py-4 lg:py-6">
                <InputCheck id="term">
                  <p className="text-sm lg:text-base text-foreground">
                    I agree to Lyft&apos;s{" "}
                    <a href="#" className="underline text-indigo-500">
                      Terms of Service
                    </a>
                  </p>
                </InputCheck>
              </div>

              <div className="flex justify-center pb-4">
                <PrimaryButton type="submit" className="mt-3 lg:mt-5 mx-auto">
                  Apply For Drive
                </PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom right glowing background element (only in dark mode) */}
      {/* <div className="absolute dark:block hidden top-[70%] right-10 -translate-y-1/2 w-56 h-56 rounded-full bg-gradient-to-l from-indigo-400 to-transparent blur-2xl opacity-60 animate-pulse delay-150"></div> */}
    </>
  );
};

export default HeroWithApplyForm;
