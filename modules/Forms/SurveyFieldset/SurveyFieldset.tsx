"use client";

import React, { FC } from "react";
import type { TSurveyFieldsetProps } from "./types";
import VariantsList from "@/components/VariantsList";

export const SurveyFieldset: FC<TSurveyFieldsetProps> = ({ id, question, dataArr, initState, changeHandler }) => {
    return (
        <fieldset
            className="form-step"
            id={id}
        >
            <div className="form-controller radio-group">
                <legend className="form-controller__label navlink">{question}</legend>
                <VariantsList
                    dataArr={dataArr}
                    initState={initState}
                    changeHandler={changeHandler}
                />
                <small className="form-controller__message"></small>
            </div>
        </fieldset>
    );
};
