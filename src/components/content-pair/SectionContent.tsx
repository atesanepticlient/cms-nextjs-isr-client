/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { CiClock2 } from "react-icons/ci";
import { BiMoney } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";
// import { Content, ContentPairPrimaryProps } from "@/types/components/home";
import PrimaryButton from "../PrimaryButton";
import ReactMarkdown from "react-markdown";
import LinkButton from "../LinkButton";
const SectionContent = ({
  content,
  featuresList,
  buttons,
  order = "order-1",
}: {
  content: string;
  featuresList: any;
  buttons: any;
  order?: string;
}) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="200"
      className={`md:mt-16 ${order}`}
    >
      <div className="markdown">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      {featuresList && (
        <div className="space-y-2 mt-5 lg:mt-8">
          {featuresList.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`p-2 rounded-full `}>
                {item.icon === "bimoney" ? (
                  <BiMoney className=" w-4 h-4 lg:w-5 lg:h-5 " />
                ) : item.icon === "ciclock2" ? (
                  <CiClock2 className=" w-4 h-4 lg:w-5 lg:h-5" />
                ) : (
                  <FaArrowAltCircleRight className=" w-4 h-4 lg:w-5 lg:h-5" />
                )}
              </div>
              <div>
                {item.subject && (
                  <h3 className="font-medium !text-sm  ">
                    {item.subject}
                  </h3>
                )}
                {item.description && (
                  <p className="font-normal text-foreground/90 text-xs  max-w-[420px] line-clamp-3">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {buttons && (
        <div className="flex gap-5 items-center   mt-8 md:mt-12">
          {buttons.map((item: any, index: number) => {
            if (index == 0) {
              return (
                <a href={item.link} key={index}>
                  <PrimaryButton>{item.label}</PrimaryButton>
                </a>
              );
            }
            return (
              <LinkButton key={index} href={item.link}>
                {item.label}
              </LinkButton>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SectionContent;
