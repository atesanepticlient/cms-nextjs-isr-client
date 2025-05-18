/* eslint-disable @next/next/no-img-element */
import React from "react";
import probe from "probe-image-size";
import { getImageOrientation } from "@/lib/image";

const SectionImage = async ({
  src,
  alt,
  order = "",
}: {
  src: string;
  alt: string;
  order?: string;
}) => {
  const result = await probe(`${process.env.STRAPI_ADMIN}${src}`);
  const orientation = getImageOrientation(result.width, result.height);

  const imageWidth = `${
    orientation === "standard-portrait"
      ? "max-w-[80%]"
      : orientation === "standard-landscape"
      ? "max-w-[90%]"
      : orientation === "ultra-tall-portrait"
      ? "max-w-[250px]"
      : "max-w-[90%]"
  } `;
  return (
    <div className={`relative  mt-0 md:mt-6  overflow-hidden ${order}`}>
      <img
        data-aos="fade-up"
        data-aos-duration="200"
        src={`${process.env.STRAPI_ADMIN}${src}`}
        alt={alt || "Image"}
        loading="lazy"
        className={`${imageWidth}  mx-auto h-full object-cover object-top  transform  transition-transform duration-500`}
      />
    </div>
  );
};

export default SectionImage;
