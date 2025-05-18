/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import ReactMarkdown from "react-markdown";
import { FancyPill, GlossyPill } from "./PillArea";

const PillsContent = ({ data }: { data: any }) => {
  console.log("Pill Content ", data);
  return (
    <section className="mt-20 md:mt-24 container-c px-4 md:px-20 lg:px-40  flex flex-col md:flex-row gap-5 md:gap-0">
      <div className="w-full md:w-[50%]">
        <div className="markdown mb-2">
          <ReactMarkdown>{data.content}</ReactMarkdown>
        </div>
        <GlossyPill text={data.pill_text_1} />
      </div>
      <div className="w-full md:w-[50%]">
        <div className="relative  md:-translate-x-[60px] md:translate-y-9">
          <FancyPill text={data.pill_text_2} />
        </div>
      </div>
    </section>
  );
};

export default PillsContent;
