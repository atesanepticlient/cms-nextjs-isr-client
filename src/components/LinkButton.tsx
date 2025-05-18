import React from "react";
import { MdOutlineArrowForward } from "react-icons/md";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
const LinkButton: React.FC<ButtonProps> = ({
  href,
  className,
  children,
  ...props
}) => {
  return (
    <div>
      <a
        href={href}
        className={`text-foreground hover:underline text-xs lg:text-sm font-medium flex items-center gap-2 ${className}`}
        {...props}
      >
        {children}
        <MdOutlineArrowForward className="w-4 h-4 lg:w-5 lg:h-5" />
      </a>
    </div>
  );
};

export default LinkButton;
