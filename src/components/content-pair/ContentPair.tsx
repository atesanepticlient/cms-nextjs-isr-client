/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import SectionImage from "../SectionImage";
import SectionContent from "./SectionContent";

// import { ContentPairPrimaryProps } from "@/types/components/home";
// import { isOfType, isString } from "@/types/checker";

const ContentPair = ({
  contentPairData,
  isBgShow = false,
}: {
  contentPairData: any;
  isBgShow?: boolean;
}) => {
  return (
    <div className={`   mt-20 md:mt-24`}>
      <section className={`section container-c !items-center`}>
        {/* Content first, Image second */}
        <SectionContent
          content={contentPairData.content}
          featuresList={contentPairData.features_list}
          buttons={contentPairData.buttons}
          order={contentPairData.orientation == "left" ? "order-1" : "order-2"}
        />
        <SectionImage
          src={`${contentPairData.content_image.url}`}
          alt="Analytics Dashboard"
          order={contentPairData.orientation == "left" ? "order-2" : "order-1"}
        />
      </section>
    </div>
  );
};

export default ContentPair;
