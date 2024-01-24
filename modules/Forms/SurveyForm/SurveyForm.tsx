"use client";

import React, { JSX, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import type { TSurveyFormProps } from "./types";
import { TRegisterForm } from "@/types/data/forms";

import Multistep, { useMultistepForm } from "@/components/Multistep";
import SurveyFieldset from "@/modules/Forms/SurveyFieldset";
import SurveyFinish from "@/modules/Forms/SurveyFinish";
import SurveyInfo from "@/modules/Forms/SurveyInfo";
import { REGISTER_INIT_VALUES } from "@/data/pages/inp-data";
import { surveyForms, surveyFormData } from "./data";
import { ROUTES } from "@/data/routes";

export const SurveyForm = ({ setIsOpenModal }: TSurveyFormProps): JSX.Element => {
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

    const [answerForm1, setAnswerForm1] = useState<string | null>(null);
    const form1Handler = (e: any) => {
        setAnswerForm1(e.target.value);
    };

    // * Radio inp state
    type TSurveyRadioForm = Record<"form1" | "form4" | "form6" | "form7" | "form8" | "form9", string | null>;

    const [answerRadioForm, setAnswerRadioForm] = useState<TSurveyRadioForm>({
        form1: null,
        form4: null,
        form6: null,
        form7: null,
        form8: null,
        form9: null,
    });

    const radioInpChange = (name: any, inpValue: string) => {
        name === surveyForms.form1[0].name &&
            setAnswerRadioForm((prev: TSurveyRadioForm) => {
                // * Assigned prev state for avoid lagging current state
                // * Don't change this and next setStateActions
                const currentState = { ...prev, form1: inpValue };
                return currentState;
            });
        name === surveyForms.form4[0].name &&
            setAnswerRadioForm((prev: TSurveyRadioForm) => {
                const currentState = { ...prev, form4: inpValue };
                return currentState;
            });
        name === surveyForms.form6[0].name &&
            setAnswerRadioForm((prev: TSurveyRadioForm) => {
                const currentState = { ...prev, form6: inpValue };
                return currentState;
            });
        name === surveyForms.form7[0].name &&
            setAnswerRadioForm((prev: TSurveyRadioForm) => {
                const currentState = { ...prev, form7: inpValue };
                return currentState;
            });
        name === surveyForms.form8[0].name &&
            setAnswerRadioForm((prev: TSurveyRadioForm) => {
                const currentState = { ...prev, form8: inpValue };
                return currentState;
            });
        name === surveyForms.form9[0].name &&
            setAnswerRadioForm((prev: TSurveyRadioForm) => {
                const currentState = { ...prev, form9: inpValue };
                return currentState;
            });
    };

    // * Checkbox inp state
    // type TCheckboxState = {
    //     [key: string]: boolean;
    // };
    // type TSurveyCheckboxForm = Record<"form2" | "form3" | "form5", TCheckboxState>;

    // const [answersCheckboxForm, setAnswersCheckboxForm] = useState<TCheckboxState>({
    //     "survey-answern2-1": false,
    //     "survey-answer2-2": false,
    //     "survey-answer2-3": false,
    //     "survey-answer2-4": false,
    //     "survey-answer2-5": false,
    //     "survey-answer2-6": false,
    //     "survey-answer2-7": false,
    //     "survey-answer2-8": false,
    //     "survey-answer2-9": false,
    //     "survey-answer2-10": false,
    // });

    // const checkboxChangeHandler = (name: string) => {
    //     setAnswersCheckboxForm((prev: TCheckboxState) => {
    //         const currentState = { ...prev, [name]: !answersCheckboxForm[name] };
    //         console.log(currentState);
    //         return currentState;
    //     });
    // };

    const surveyFormSteps: React.ReactElement[] = [
        <SurveyInfo />,
        <SurveyFieldset
            id={surveyFormData.form1.id}
            question={surveyFormData.form1.question}
            dataArr={surveyForms.form1}
            initState={answerRadioForm.form1}
            changeHandler={(e: any) => radioInpChange(e.target.name, e.target.value)}
        />,
        <SurveyFieldset
            id={surveyFormData.form2.id}
            question={surveyFormData.form2.question}
            dataArr={surveyForms.form2}
            initState={answerForm1}
            changeHandler={form1Handler}
            // initState={answersCheckboxForm.form2}
            // changeHandler={(e: any) => checkboxChangeHandler(e.target.name)}
        />,
        <SurveyFieldset
            id={surveyFormData.form3.id}
            question={surveyFormData.form3.question}
            dataArr={surveyForms.form3}
            initState={answerForm1}
            changeHandler={form1Handler}
        />,
        <SurveyFieldset
            id={surveyFormData.form4.id}
            question={surveyFormData.form4.question}
            dataArr={surveyForms.form4}
            initState={answerRadioForm.form4}
            changeHandler={(e: any) => radioInpChange(e.target.name, e.target.value)}
        />,
        <SurveyFieldset
            id={surveyFormData.form5.id}
            question={surveyFormData.form5.question}
            dataArr={surveyForms.form5}
            initState={answerForm1}
            changeHandler={form1Handler}
        />,
        <SurveyFieldset
            id={surveyFormData.form6.id}
            question={surveyFormData.form6.question}
            dataArr={surveyForms.form6}
            initState={answerRadioForm.form6}
            changeHandler={(e: any) => radioInpChange(e.target.name, e.target.value)}
        />,
        <SurveyFieldset
            id={surveyFormData.form7.id}
            question={surveyFormData.form7.question}
            dataArr={surveyForms.form7}
            initState={answerRadioForm.form7}
            changeHandler={(e: any) => radioInpChange(e.target.name, e.target.value)}
        />,
        <SurveyFieldset
            id={surveyFormData.form8.id}
            question={surveyFormData.form8.question}
            dataArr={surveyForms.form8}
            initState={answerRadioForm.form8}
            changeHandler={(e: any) => radioInpChange(e.target.name, e.target.value)}
        />,
        <SurveyFieldset
            id={surveyFormData.form9.id}
            question={surveyFormData.form9.question}
            dataArr={surveyForms.form9}
            initState={answerRadioForm.form9}
            changeHandler={(e: any) => radioInpChange(e.target.name, e.target.value)}
        />,
        <SurveyFinish
            amount={0.067986}
            curName="Ethereum (ETH)"
            minutesCount={15}
        />,
    ];

    const { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm(surveyFormSteps);

    const submitForm = async (data: FieldValues) => {
        const radioFormData: TSurveyRadioForm = {
            form1: answerRadioForm.form1,
            form4: answerRadioForm.form4,
            form6: answerRadioForm.form6,
            form7: answerRadioForm.form7,
            form8: answerRadioForm.form8,
            form9: answerRadioForm.form9,
        };
        console.log(radioFormData);

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