import React, { FC } from "react";
import type { TFormControllerProps } from "./types";

export const FormController: FC<TFormControllerProps> = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
            <small className="form-controller__message">Error message</small>
        </div>
    );
};
