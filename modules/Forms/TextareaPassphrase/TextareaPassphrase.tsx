"use client";

import React, { FC } from "react";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import type { T_TextareaPassphraseProps } from "./types";
import ValidTextarea from "@/ui/ValidTextarea/ValidTextarea";

export const TextareaPassphrase: FC<T_TextareaPassphraseProps> = ({ id, className, legend, textareaId }) => {
    return (
        <fieldset
            className={className}
            id={id}
        >
            <legend className="form-label-legend">{legend}</legend>
            <StyledWrapper className="form-controller form-inp-grid">
                <ValidTextarea id={textareaId} />
            </StyledWrapper>
        </fieldset>
    );
};
