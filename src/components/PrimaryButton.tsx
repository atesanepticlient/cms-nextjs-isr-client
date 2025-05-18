import React from "react";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  textClassName?: string;
};
const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  className,
  textClassName = "",
  ...props
}) => {
  console.log({ textClassName });
  return (
    <button
      className={`w-[180px] lg:w-[220px] h-[35px] lg:h-[40px] cursor-pointer  ${className} `}
      style={{ position: "relative" }}
      {...props}
    >
      <div
        className="w-full h-full bg-[linear-gradient(90deg,_#f5f5f5_1%,_#eaeaea_97%)] dark:bg-[linear-gradient(90deg,#353039_1%,#29252D_97%)]"
        style={{
          left: 0,
          top: 0,
          position: "absolute",
          borderRadius: 19.49,
          filter: "blur(3.90px)",
        }}
      />
      <div
        className="w-full h-full bg-button-bg inset-shadow-primary shadow-lg dark:shadow-[0_0_30px_#29252d]"
        style={{
          left: 3.99,
          top: 3.27,
          position: "absolute",
          background: ``,
          borderRadius: 19.49,

          outlineOffset: "-0.29px",
        }}
      />

      <span
        className={`absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  text-sm lg:text-base font-semibold mt-0.5 ${textClassName} `}
      >
        {children}
      </span>
    </button>
  );
};

export default PrimaryButton;
