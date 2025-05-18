/* eslint-disable @next/next/no-img-element */
import React from "react";


import { IoIosArrowForward } from "react-icons/io";
import { ContentCardProps } from "@/types/components/usertype2";

const ContentCard = ({ contentCardData }: ContentCardProps) => {
  console.log({ contentCardData });
  return (
    <section className="container-c py-4 lg:py-6 mt-20 md:mt-24">
      <img
        src={process.env.STRAPI_ADMIN + contentCardData.card.url}
        alt="banner"
        className="w-full aspect-[10/2] object-cover"
      />

      <div className="my-3 lg:my-6 ">
        {contentCardData.card_texts[0].children[0].text && (
          <h3 className="text-lg md:text-xl font-semibold  mb-2">
            {contentCardData.card_texts[0].children[0].text}
          </h3>
        )}
        {contentCardData.card_texts[1].children[0].text && (
          <p className="text-xs lg:text-sm max-w-[80%]">
            {contentCardData.card_texts[1].children[0].text}
          </p>
        )}

        {contentCardData?.card_buttons?.length !== 0 &&
          contentCardData.card_buttons?.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="mt-5  hover:underline text-sm gap-2 flex items-center cursor-pointer"
            >
              {item.label} <IoIosArrowForward />
            </a>
          ))}
      </div>
    </section>
  );
};

export default ContentCard;
