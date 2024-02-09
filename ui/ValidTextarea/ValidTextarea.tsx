import React, { FC } from "react";
import type { TValidTextareaProps } from "./types";

const ValidTextarea: FC<TValidTextareaProps> = ({ id, label, disabled = false, readOnly = false, required = false, register, regex = /[a-zA-Z0-9 ,.:"'!?№@#$%^&*()_=+-/\\|]/g, regexErrMessage = "", ...props }) => {
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
                {...register(id, { required, pattern: {
                    value: regex,
                    message: regexErrMessage,
                }, })}
                {...props}
            />
        </>
    );
};

export default ValidTextarea;
