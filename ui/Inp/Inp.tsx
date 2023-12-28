import React, { FC } from "react";
import type { TInpProps } from "./types";

const Inp: FC<TInpProps> = ({ id, disabled = false, readOnly = false, register, required = false, regex = /[a-zA-Z0-9 ,.:"'!?№@#$%^&*()_=+-/\\|]/g, regexErrMessage = "", ...props }) => {
    return (
        <input
            disabled={disabled}
            readOnly={readOnly}
            {...register(id, { required, pattern: {
                value: regex,
                message: regexErrMessage,
            }, })}
            {...props}
        />
    );
};

export default Inp;
