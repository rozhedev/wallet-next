"use client";

import React, { FC, JSX } from "react";
import { FieldValues, useForm } from "react-hook-form";

import type { TSurveyFieldsetProps, TSurveyFormProps } from "./types";
import { TRegisterForm } from "@/types/data/forms";

import Multistep, { useMultistepForm } from "@/components/Multistep";
import VariantsList from "@/components/VariantsList";
import { REGISTER_INIT_VALUES } from "@/data/pages/inp-data";
import { surveyAnswersArr } from "./data";

export const SurveyForm = ({}: TSurveyFormProps): JSX.Element => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        getValues,
        setValue,
        reset,
    } = useForm<TRegisterForm>({
        defaultValues: REGISTER_INIT_VALUES,
    });

    const surveyFormSteps: React.ReactElement[] = [
        <SurveyInfo />,
        <SurveyFieldset
            id="survey-question1"
            question="How long have you been using cryptocurrencies?"
            dataArr={surveyAnswersArr.form1}
        />,
    ];

    const { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm(surveyFormSteps);

    const submitForm = async (data: FieldValues) => {
        if (!isLastStep) return next();

        await new Promise((resolve: any) => setTimeout(resolve, 2000));
        reset();
        // * TODO Submit to server
        // * ...
    };

    return (
        <Multistep
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitForm={submitForm}
            currentStepIndex={currentStepIndex}
            step={step}
            steps={surveyFormSteps}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            back={back}
            formAction=""
            btnClassNames="btn btn-fill-sm"
            isRegister={false}
            haveProgressbar={false}
        ></Multistep>
    );
};

const SurveyInfo: FC<{}> = ({}) => {
    return (
        <div
            className="form-step form-survey-info"
            id="form-survey-info"
        >
            <ul className="unordered-list">
                <li>Two years in the market is a good reason for more understanding our clients and find best way to improve our product.</li>
                <li>It’s short survey created to collect common, but important data. As a final, you get airdrop in currency, which you choose at the end of survey.</li>
                <li>We don’t collect confidential data as phone number, card number, residence address and etc.</li>
            </ul>
        </div>
    );
};

const SurveyFieldset: FC<TSurveyFieldsetProps> = ({ id, question, dataArr }) => {
    return (
        <fieldset
            className="form-step"
            id={id}
        >
            <div className="form-controller radio-group">
                <legend className="form-controller__label navlink">{question}</legend>
                <VariantsList dataArr={dataArr} />
                <small className="form-controller__message"></small>
            </div>
        </fieldset>
    );
};
