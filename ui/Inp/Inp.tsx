import React, { FC } from "react";
import type { InpProps } from "./types";

// { formData, onChange }: InpProps

const Inp: FC<InpProps> = ({ className, disabled }) => {
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
