import React, { FC } from "react";
import type { TInpProps } from "./types";

// { formData, onChange }: TInpProps

const Inp: FC<TInpProps> = ({ className, disabled = false, placeholder }) => {
    return (
        <input
            type="text"
            className={className}
            disabled={disabled}
            placeholder={placeholder}
        />
    );
};

export default Inp;
