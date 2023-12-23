import { ButtonHTMLAttributes } from "react";

export type TBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    className: string;
    children: React.ReactNode;
};
