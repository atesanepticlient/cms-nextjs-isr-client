/* eslint-disable @next/next/no-img-element */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import ReactMarkdown from "react-markdown";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

const MobileShowcaseBanner = ({ mobileShowcaseData }: any) => {
  // Calculate the phone screen's position based on the provided position in mobileShowcaseData
  // const phoneScreenStyle = ` ${
  //   mobileShowcaseData.position === "right"
  //     ? "md:!left-[auto]  md:right-32 md:!-top-32 md:-translate-y-[auto]"
  //     : ""
  // }`;
  console.log({ mobileShowcaseData });
  return (
    <section className={`mt-28 lg:mt-32 w-full`} >
      <Swiper
        // style={{
        //   "--swiper-navigation-color": "#fff",
        //   "--swiper-pagination-color": "#fff",
        // }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className=" !w-full !px-0"
      >
        <div
          slot="container-start"
          className="relative w-[130%] h-[300px] md:h-[320px] lg:h-[500px] bg-cover bg-center bg-no-repeat "
          style={{
            background: `url(${process.env.STRAPI_ADMIN}${mobileShowcaseData.showcase_banner.url})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        {mobileShowcaseData.mobile_showcase_content.map(
          (mc: any, i: number) => (
            <SwiperSlide key={i}>
              <div className="container-c grid grid-cols-1 lg:grid-cols-3 py-6 md:py-8 lg:py-10 gap-10 lg:gap-0">
                <div className="hidden lg:block">
                  <h2 className="text-foreground text-4xl font-semibold max-w-[280px]">
                    {mc.title}
                  </h2>
                </div>
                <div className="relative h-[130px]">
                  <img
                    src={`${process.env.STRAPI_ADMIN}${mc.screen.url}`}
                    alt="phone screen"
                    className="max-w-[400px] h-auto mx-auto absolute -top-[300px] left-1/2 -translate-x-1/2"
                  />
                </div>
                <div className="text-start markdown mobile-showcase">
                  <h2 className="text-foreground !text-2xl mb-4 !text-start !font-semibold lg:hidden ">
                    {mc.title}
                  </h2>
                  <ReactMarkdown>{mc.description}</ReactMarkdown>

                 
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default MobileShowcaseBanner;
