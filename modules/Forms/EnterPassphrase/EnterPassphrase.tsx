"use client";

import React, { FC } from "react";
import FormController from "@/components/FormController";
import type { TEnterPassphraseProps } from "./types";

export const EnterPassphrase: FC<TEnterPassphraseProps> = ({ id, className, legend, children }) => {
    return (
        <fieldset
            className={className}
            id={id}
        >
            <legend className="form-label-legend">{legend}</legend>

            <FormController className="form-controller form-inp-grid">{children}</FormController>
        </fieldset>
    );
};
