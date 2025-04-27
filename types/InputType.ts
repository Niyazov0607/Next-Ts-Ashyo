import { ChangeEventHandler } from "react";

export interface InputType {
    placeholder: string;
    extraStyle?: string;
    type: "text" | "email" | "password" | "number" | "tel"; // Literal types for input type
    onchange?: ChangeEventHandler<HTMLInputElement>; // Optional event handler for input change
    value?: string;
}
