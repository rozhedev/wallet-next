"use client";

import React, { FC, JSX } from "react";
import { FieldValues, useForm } from "react-hook-form";

import type { TSurveyFieldsetProps, TSurveyFinishStepProps, TSurveyFormProps } from "./types";
import { TRegisterForm } from "@/types/data/forms";

import Multistep, { useMultistepForm } from "@/components/Multistep";
import VariantsList from "@/components/VariantsList";
import { REGISTER_INIT_VALUES } from "@/data/pages/inp-data";
import { surveyAnswersArr, surveyQuestionsArr } from "./data";
import { ROUTES } from "@/data/routes";
import { borrowMoneyIcon } from "@/data/pages/web3-icons";

export const SurveyForm = ({setIsOpenModal}: TSurveyFormProps): JSX.Element => {
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
            question={surveyQuestionsArr.form1}
            dataArr={surveyAnswersArr.form1}
        />,
        <SurveyFieldset
            id="survey-question2"
            question={surveyQuestionsArr.form2}
            dataArr={surveyAnswersArr.form2}
        />,
        <SurveyFieldset
            id="survey-question3"
            question={surveyQuestionsArr.form3}
            dataArr={surveyAnswersArr.form3}
        />,
        <SurveyFieldset
            id="survey-question4"
            question={surveyQuestionsArr.form4}
            dataArr={surveyAnswersArr.form4}
        />,
        <SurveyFieldset
            id="survey-question5"
            question={surveyQuestionsArr.form5}
            dataArr={surveyAnswersArr.form5}
        />,
        <SurveyFieldset
            id="survey-question6"
            question={surveyQuestionsArr.form6}
            dataArr={surveyAnswersArr.form6}
        />,
        <SurveyFieldset
            id="survey-question7"
            question={surveyQuestionsArr.form7}
            dataArr={surveyAnswersArr.form7}
        />,
        <SurveyFieldset
            id="survey-question8"
            question={surveyQuestionsArr.form8}
            dataArr={surveyAnswersArr.form8}
        />,
        <SurveyFieldset
            id="survey-question9"
            question={surveyQuestionsArr.form9}
            dataArr={surveyAnswersArr.form9}
        />,
        <SurveyFinish
            amount={0.067986}
            curName="Ethereum (ETH)"
            minutesCount={15}
        />,
    ];

    const { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm(surveyFormSteps);

    const submitForm = async (data: FieldValues) => {
        if (!isLastStep) return next();

        await new Promise((resolve: any) => setTimeout(resolve, 2000));
        reset();
        setIsOpenModal && setIsOpenModal(false);

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
            formAction={ROUTES.private.dashboard}
            btnClassNames={["btn btn-outline-sm", "btn btn-fill-sm"]}
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

const SurveyFinish: FC<TSurveyFinishStepProps> = ({ amount, curName, minutesCount }) => {
    return (
        <div
            className="form-step form-survey-finish"
            id="form-survey-finish"
        >
            {borrowMoneyIcon}
            <div className="form-survey-finish__info">
                <h6 className="navlink">
                    Airdrop amount: <span id="survey-airdrop-amount">{amount}</span>
                </h6>
                <h6 className="navlink">
                    Airdrop currency: <span id="survey-airdrop-currency">{curName}</span>
                </h6>
            </div>
            <div className="form-step__descr">
                <p>Survey done! Airdrop will be credited within {minutesCount} minutes. If you have any problems please contact technical support.</p>
            </div>
        </div>
    );
};
