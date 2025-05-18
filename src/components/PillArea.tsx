import React from "react";

export const GlossyPill = ({ text }: { text: string }) => {
  return (
    <div
      className="w-full overflow-hidden h-[70px] md:h-[75px] lg:h-[100px] rounded-full relative flex items-center justify-center text-white text-xl
  bg-[radial-gradient(circle_at_center,_#fe3c739b,_#fe3c732d)]
  shadow-[inset_0_2px_8px_rgba(255,255,255,0.06),inset_0_-2px_12px_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.5)]
  border border-[rgba(255,255,255,0.05)]"
    >
      <span className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold line-clamp-1">
        {text}
      </span>
      <div
        className="absolute top-0 left-0 right-0 h-[10%]
    bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-transparent
    rounded-t-full pointer-events-none"
      />
    </div>
  );
};

export const FancyPill = ({ text }: { text: string }) => {
  return (
    <div
      className="w-full  h-[70px] md:h-[75px] lg:h-[100px] rounded-full relative flex items-center justify-center text-white text-xl overflow-hidden
      bg-[radial-gradient(circle_at_center,_#7b6472,_#262325)]
      shadow-[inset_0_2px_8px_rgba(255,255,255,0.06),inset_0_-2px_12px_rgba(0,0,0,0.35),0_4px_12px_rgba(0,0,0,0.5)]
      border border-[rgba(255,255,255,0.03)]"
    >
      <span className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold line-clamp-1">
        {text}
      </span>
      <div
        className="absolute top-0 left-0 right-0 h-[10%]
        bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-transparent
        rounded-t-full pointer-events-none"
      />
    </div>
  );
};
