import React, { FC } from "react";
import type { TBtnProps } from "./types";

const Btn: FC<TBtnProps> = ({ type, disabled, className, children }) => {
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
