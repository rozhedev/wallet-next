"use client";

import React, { FC } from "react";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import type { TEnterPassphraseProps } from "./types";

export const EnterPassphrase: FC<TEnterPassphraseProps> = ({ id, className = "form-step", legend, styledWrapperModif = "", children }) => {
    return (
        <fieldset
            className={className}
            id={id}
        >
            <legend className="form-label-legend">{legend}</legend>

            <StyledWrapper className={`form-controller ${styledWrapperModif}`}>{children}</StyledWrapper>
        </fieldset>
    );
};
