/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import LogRocket from "logrocket";

import AppLayout from "@/components/AppLayout";
import MobileShowcaseBanner from "@/components/mobile-showcase-banner/MobileShowcaseBanner";
import FeaturesList from "@/components/features-list/FeaturesList";
import ContentPair from "@/components/content-pair/ContentPair";
import Hero from "@/components/hero/Hero";
import ServerError from "@/components/ServerError";
import HeroSupportingText from "@/components/hero/HeroSupportingText";
import PillsContent from "@/components/PillsContent";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const fetchUserType1Page = async (locale_language: string) => {
  try {
    console.log("process.env.STRAPI_ADMIN ", process.env.STRAPI_ADMIN);
    const response = await fetch(
      `${process.env.STRAPI_ADMIN}/api/usertype1?pLevel=5&locale=${locale_language}`,
      { next: { revalidate: 100 } }
    );

    if (!response.ok) {
      return Error;
    }

    const { usertype1: userType1Data } = (await response.json()).data;
    return userType1Data;
  } catch (error: any) {
    LogRocket.captureException(error);
    return { error: true };
  }
};

const UserType1 = async ({ searchParams }: Props) => {
  const locale_language =
    (await searchParams).locale_language?.toString() || "en";

  const userType1Data = await fetchUserType1Page(locale_language);
  if (userType1Data.error) {
    return <ServerError />;
  }
  return (
    <div className={`min-h-screen  transition-colors duration-300 `}>
      <AppLayout locale_language={locale_language}>
        <main className="pt-20 mx-auto">
          <Hero heroData={userType1Data.hero_usertype1} />
          <HeroSupportingText
            heroSupportingTextData={userType1Data.supporting_text_content}
          />
          <ContentPair
            contentPairData={userType1Data.content_pair_primary_usertype1}
          />
          <MobileShowcaseBanner
            mobileShowcaseData={userType1Data.mobile_showcase}
          />
          <ContentPair
            contentPairData={userType1Data.content_pair_secondary_usertype1}
          />
          <PillsContent data={userType1Data.pill_content} />
          {/* <Image src={todoCard} className="w-[300px]" /> */}
          <FeaturesList featuresListData={userType1Data.features_list} />
          {/* <FeatureImage banner={userType1Data.banner_usertype1} /> */}
        </main>
      </AppLayout>
    </div>
  );
};

export default UserType1;
