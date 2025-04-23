import { ReactNode } from "react";

export interface ButtonType {
    text?: string;
    icon?: ReactNode;
    iconPosition?: "left" | "right"; // Literal types for icon position
    extraStyle?: string;
}
