import React from "react";

export type SelectProps = {
    className: `select${"" | " select--disabled" | " select--header"}`;
    disabled: boolean;
    defaultValue: string;
    options: {label: string, value: string}[];
    svgIcon? : React.ReactNode;
};
