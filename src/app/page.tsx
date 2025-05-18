/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import Hero from "@/components/hero/Hero";
import ReviewSection from "@/components/review-section/ReviewSection";
import ContentPair from "@/components/content-pair/ContentPair";

import AppLayout from "@/components/AppLayout";
import ServerError from "@/components/ServerError";
import FeatureImage from "@/components/FeatureImage";
import LogRocket from "logrocket";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Fetch homepage data based on the selected locale
const fetchHomePage = async (locale_language: string) => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_ADMIN}/api/home?pLevel=3&locale=${locale_language}`,
      { next: { revalidate: 100 } }
    );
    if (!response.ok) {
      // If server responds with non-200 status, throw an error
      throw Error;
    }

    const data = (await response.json()).data;
    return data;
  } catch (error: any) {
    console.log({ error });
    // Capture and log the error using LogRocket for monitoring
    LogRocket.captureException(error);
    return { error: true };
  }
};

const App = async ({ searchParams }: Props) => {
  // Resolve the locale_language from searchParams, fallback to 'en' if undefined
  const locale_language =
    (await searchParams).locale_language?.toString() || "en";

  const data = await fetchHomePage(locale_language);
  // Handle API fetch failure by showing a server error component
  if (data.error) {
    return <ServerError />;
  }
  return (
    <div className="min-h-screen transition-colors duration-300">
      <AppLayout locale_language={locale_language}>
        <main className="pt-20  mx-auto">
          {/* Main hero section */}
          <Hero heroData={data.hero} />
          {/* Primary content pair section with background */}
          <ContentPair
            isBgShow={true}
            contentPairData={data.content_pair_primary}
          />
          {/* Customer review section */}
          <ReviewSection reviewSectionData={data.review_section} />
          {/* Secondary content pair section */}
          <ContentPair contentPairData={data.content_pair_secondary} />
          {/* Tools section showcasing features/tools */}
          {/* <ToolsSection toolsSectionData={data.tools_section} /> */}
          {/* Ternary content pair section */}
          <ContentPair contentPairData={data.content_pair_ternery} />
          {/* Fourth content pair section */}
          <ContentPair contentPairData={data.content_pair_fourth} />
          {/* Feature image/banner section */}
          <FeatureImage banner={data.banner} />
        </main>
      </AppLayout>
    </div>
  );
};

export default App;
