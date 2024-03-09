import { SelectHTMLAttributes } from "react";

export type TOptionGroup  = { label: string; value: string }[];

export type TSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    className: "select" | `select ${string}`;
    options: TOptionGroup;
    title: string;
    svgIcon?: React.ReactNode;
};
