import React, { FC } from "react";
import type { TInpProps } from "./types";

const Inp: FC<TInpProps> = ({ disabled = false, readOnly = false, ...props }) => {
    return (
        <input
            disabled={disabled}
            readOnly={readOnly}
            {...props}
        />
    );
};

export default Inp;
