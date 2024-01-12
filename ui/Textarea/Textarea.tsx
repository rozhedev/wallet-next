import React, { FC } from "react";
import type { T_TextareaProps } from "./types";

const Textarea: FC<T_TextareaProps> = ({ id, label, disabled = false, readOnly = false, required = false, ...props }) => {
    return (
        <>
            {label && <label htmlFor={id} className="form-controller__label">{label}</label>}
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

export default Textarea;
