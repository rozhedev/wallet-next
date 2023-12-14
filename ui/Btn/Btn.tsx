import React, { FC } from "react";
import type { TBtnProps } from "./types";

const Btn: FC<TBtnProps> = ({ type, disabled, className, onClick, children }) => {
    return (
        <button
            type={type}
            className={className}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Btn;
