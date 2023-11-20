import React from "react";

export type SelectProps = {
    id: string;
    className: `select${"" | " select--disabled" | " select--header"}`;
    disabled: boolean;
    options: {label: string, value: string}[];
    title: string;
    svgIcon? : React.ReactNode;
};
