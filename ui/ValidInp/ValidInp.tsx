import React, { FC } from "react";
import type { TValidInpProps } from "./types";

// * Input with applied validation
const ValidInp: FC<TValidInpProps> = ({ id, label, disabled = false, readOnly = false, register, required = false, regex = /[a-zA-Z0-9 ,.:"'!?№@#$%^&*()_=+-/\\|]/g, regexErrMessage = "", ...props }) => {
    return (
        <>
        {label && <label htmlFor={id} className="form-controller__label">{label}</label>}
        <input
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

export default ValidInp;
