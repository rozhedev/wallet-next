import { InputHTMLAttributes } from "react";

export type TRadioBtnProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    children?: React.ReactNode;
};
