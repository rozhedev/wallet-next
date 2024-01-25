"use client";

import React, { FC } from "react";
import type { TSurveyFieldsetProps } from "./types";

export const SurveyFieldset: FC<TSurveyFieldsetProps> = ({ id, question, children }) => {
    return (
        <fieldset
            className="form-step"
            id={id}
        >
            <div className="form-controller radio-group">
                <legend className="form-controller__label navlink">{question}</legend>
                {children}
                <small className="form-controller__message"></small>
            </div>
        </fieldset>
    );
};
