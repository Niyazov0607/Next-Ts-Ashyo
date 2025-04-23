import { ButtonType } from "@/types/ButtonType";
import React from "react";

const Button: React.FC<ButtonType> = ({
    // Generic type for button props
    icon,
    iconPosition,
    text,
    extraStyle,
}) => {
    return (
        <button className="bg-[#134E9B] ${extraStyle} justify-center text-white  font-bold py-[17px] px-[25px] rounded-[6px] flex items-center justify-center gap-2 hover:bg-[#0E3A7D] transition duration-300 ease-in-out cursor-pointer">
            {icon && iconPosition === "left" && icon}
            {text}
            {icon && iconPosition === "right" && icon}
        </button>
    );
};

export default Button;
