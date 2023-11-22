import React, { FC } from "react";
import type { TInpProps } from "./types";

// { formData, onChange }: TInpProps

const Inp: FC<TInpProps> = ({ className, disabled }) => {
    return (
        <input
            type="text"
            className={className}
            disabled={disabled}
            placeholder="Enter text"
        />
    );
};

export default Inp;
