import React, { FC } from "react";
import type { TValidTextareaProps } from "./types";

const ValidTextarea: FC<TValidTextareaProps> = ({ id, label, disabled = false, readOnly = false, required = false, ...props }) => {
    return (
        <>
            {label && (
                <label
                    htmlFor={id}
                    className="form-controller__label"
                >
                    {label}
                </label>
            )}
            <textarea
                id={id}
                disabled={disabled}
                readOnly={readOnly}
                required={required}
                {...props}
            />
        </>
    );
};

export default ValidTextarea;
