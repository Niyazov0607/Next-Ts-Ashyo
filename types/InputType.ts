export interface InputType {
    placeholder: string;
    extraStyle?: string;
    type: "text" | "email" | "password" | "number" | "tel"; // Literal types for input type
}
