import React from "react";
import Image from "next/image";

const FeatureImage = ({ banner }: { banner: { url: string } }) => {
  return (
    <section className="py-6 lg:py-12">
      <div className="image-wrapper aspect-[4/1] ">
        <Image
          src={`${process.env.STRAPI_ADMIN}${banner.url}`}
          fill
          alt="Fade Image"
          className="fade-image object-cover"
        />
      </div>
    </section>
  );
};

export default FeatureImage;
