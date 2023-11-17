import React, { FC } from "react";
import { BtnProps } from "./types";

const Btn: FC<BtnProps> = ({ type, disabled, className, children }) => {
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
