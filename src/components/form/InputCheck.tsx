"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */


import React, { useState } from "react";

import { IoCheckbox, IoCheckboxOutline } from "react-icons/io5";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  onChecked?: (checked: boolean) => void;
}

const InputCheck: React.FC<CheckboxProps> = ({
  children,
  id,
  name,
  onChecked,
}) => {
  const [isChecked, setChecked] = useState(true);

  const handleCheck = (e: any) => {
    setChecked(e.target.checked);
    if (onchange) {
      onChecked!(e.target.checked);
    }
  };

  return (
    <div>
      <input
        checked={isChecked}
        onChange={handleCheck}
        type="checkbox"
        className="hidden"
        name={name}
        id={id}
      />
      <label
        htmlFor={id}
        className="text-xs text-indigo-600 font-medium flex items-center gap-2"
      >
        {isChecked ? (
          <IoCheckbox className="w-5 h-5 text-indigo-600 cursor-pointer" />
        ) : (
          <IoCheckboxOutline className="w-5 h-5 text-indigo-600 cursor-pointer" />
        )}
        {children}
      </label>
    </div>
  );
};

export default InputCheck;
