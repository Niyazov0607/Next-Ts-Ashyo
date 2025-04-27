import { InputType } from "@/types/InputType";
import React from "react";

const Input: React.FC<InputType> = ({
    placeholder,
    extraStyle,
    type,
    onchange,
    value,
}) => {
    return (
        <input
            onChange={onchange}
            className={`bg-[#EBEFF3] ${extraStyle} py-[17px]  px-[26px] rounded-[6px] outline-none cursor-pointer `}
            type={type}
            placeholder={placeholder}
            value={value}
        />
    );
};

export default Input;
