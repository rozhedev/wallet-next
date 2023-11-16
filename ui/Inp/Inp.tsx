import React from "react";
import { InpProps } from "./types";

// { formData, onChange }: InpProps

const Inp = ({ className, disabled }: InpProps) => {
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
