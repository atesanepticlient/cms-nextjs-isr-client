"use client";
import { useEffect } from "react";
const TawkProvider = () => {
  console.log(
    "process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID",
    process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID
  );
  console.log(
    "process.env.NEXT_PUBLIC_TAWK_WIDGET_ID",
    process.env.NEXT_PUBLIC_TAWK_WIDGET_ID
  );
  useEffect(() => {
    const loadTawk = () => {
      const s1 = document.createElement("script");
      s1.src = `https://embed.tawk.to/${process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID}/${process.env.NEXT_PUBLIC_TAWK_WIDGET_ID}`;
      s1.async = true;
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      document.body.appendChild(s1);
      window.removeEventListener("scroll", loadTawk);
    };

    window.addEventListener("scroll", loadTawk); // or "click", etc.

    return () => window.removeEventListener("scroll", loadTawk);
  }, []);

  return null;
};

export default TawkProvider;
