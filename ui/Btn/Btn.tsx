import React, { FC } from "react";
import type { TBtnProps } from "./types";

const Btn: FC<TBtnProps> = ({ id, type, disabled = false, className, onClick, title, children }) => {
    return (
        <button
            id={id}
            type={type}
            className={className}
            disabled={disabled}
            onClick={onClick}
            title={title}
        >
            {children}
        </button>
    );
};

export default Btn;
