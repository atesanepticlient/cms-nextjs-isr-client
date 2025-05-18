/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import ReactMarkdown from "react-markdown";

const HeroSupportingText = ({ heroSupportingTextData }: any) => {
  console.log({ heroSupportingTextData });
  return (
    <div className="px-2 md:px-8 mt-20 md:mt-24 text-center">
      <div className="markdown supporting-text mx-auto w-[90%] md:w-[70%] lg:w-[60%]  ">
        <ReactMarkdown>
          {heroSupportingTextData.supporting_text_content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default HeroSupportingText;
