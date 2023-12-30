import { InputHTMLAttributes } from "react";

export type TCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    children: React.ReactNode;
    defaultChecked?: boolean;
    id: string;
};
