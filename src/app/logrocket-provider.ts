"use client";

import { useEffect } from "react";

export default function LogRocketProvider() {
  useEffect(() => {
    const loadLogRocket = async () => {
      const LogRocket = (await import("logrocket")).default;
      LogRocket.init(
        `${process.env.NEXT_PUBLIC_LOGROCKET_API_ID}/${process.env.NEXT_PUBLIC_LOGROCKET_PROJECT_NAME}`
      );
    };

    // Defer until the window is fully loaded
    if (typeof window !== "undefined") {
      window.addEventListener("load", loadLogRocket);
    }

    return () => {
      window.removeEventListener("load", loadLogRocket);
    };
  }, []);

  return null;
}
