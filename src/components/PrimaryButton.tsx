import React from "react";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  textClassName?: string;
};
const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  textClassName = "",
  ...props
}) => {
  return (
    <button
      className="button-bg-svg w-[160px] lg:w-[200px] h-[65px] lg:h-[80px] flex items-center justify-center gap-2 cursor-pointer"
      {...props}
    >
      <span
        className={`-mt-2 text-foreground text-sm lg:text-base font-normal ${textClassName}`}
      >
        {children}
      </span>
    </button>
  );
};

export default PrimaryButton;
