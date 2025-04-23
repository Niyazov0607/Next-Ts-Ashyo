import { InputType } from "@/types/InputType";
import React from "react";

const Input: React.FC<InputType> = ({ placeholder, extraStyle, type }) => {
    return (
        <input
            className={`bg-[#EBEFF3] ${extraStyle} py-[17px]  px-[26px] rounded-[6px] outline-none cursor-pointer `}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default Input;
