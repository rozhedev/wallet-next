import { SelectHTMLAttributes } from "react";

export type TSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    className: `select${"" | " select--disabled" | " select--header"}`;
    options: { label: string; value: string }[];
    title: string;
    svgIcon?: React.ReactNode;
};
