import React from "react";
import { BtnProps } from "./types";

const Btn = ({ type, disabled, className, children }: BtnProps) => {
    return (
        <button
            type={type}
            className={className}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Btn;
