import React, { FC } from "react";
import type { TFormControllerProps } from "./types";

export const FormController: FC<TFormControllerProps> = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};
