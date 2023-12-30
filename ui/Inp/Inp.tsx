import React, { FC } from "react";
import type { TInpProps } from "./types";

const Inp: FC<TInpProps> = ({ id, label, disabled = false, readOnly = false, required = false, ...props }) => {
    return (
        <>
            {label && <label htmlFor={id} className="form-controller__label">{label}</label>}
            <input
                id={id}
                disabled={disabled}
                readOnly={readOnly}
                {...props}
            />
        </>
    );
};

export default Inp;
