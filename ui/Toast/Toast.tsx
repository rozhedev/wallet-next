import React, { FC } from "react";
import type { T_ToastProps } from "./types";

export const Toast: FC<T_ToastProps> = ({ id, wrapperModif, icon, content }) => {
    return (
        <div
            id={id}
            className={`toast ${wrapperModif}`}
        >
            {icon}
            <span className="toast__content">{content}</span>
        </div>
    );
};
