"use client";

import React, { FC } from "react";
import type { TEnterPassphraseProps } from "./types";

export const EnterPassphrase: FC<TEnterPassphraseProps> = ({ id, className = "form-step", legend, children }) => {
    return (
        <fieldset
            className={className}
            id={id}
        >
            <legend className="form-label-legend">{legend}</legend>
            {children}
        </fieldset>
    );
};
