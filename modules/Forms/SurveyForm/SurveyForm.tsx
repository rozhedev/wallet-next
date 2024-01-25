"use client";

import React, { JSX, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import type { TSurveyFormProps } from "./types";
import { TRegisterForm } from "@/types/data/forms";

import Checkbox from "@/ui/Checkbox/Checkbox";
import VariantsList from "@/components/VariantsList";
import Multistep, { useMultistepForm } from "@/components/Multistep";
import SurveyFieldset from "@/modules/Forms/SurveyFieldset";
import SurveyFinish from "@/modules/Forms/SurveyFinish";
import SurveyInfo from "@/modules/Forms/SurveyInfo";
import { REGISTER_INIT_VALUES } from "@/data/pages/inp-data";
import { surveyForms, surveyFormData } from "./data";
import { ROUTES } from "@/data/routes";
import { type TAnswerRadioForm, answerRadioFormInit, type TAnswerCheckboxForm, answerCheckboxFormInit } from "@/data/modals/init-values";

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

    // * Radio inp state

    const [answerRadioForm, setAnswerRadioForm] = useState<TAnswerRadioForm>(answerRadioFormInit);

    const radioInpChange = (name: any, inpValue: string) => {
        name === surveyForms.form1[0].name &&
            setAnswerRadioForm((prev: TAnswerRadioForm) => {
                // * Assigned prev state for avoid lagging current state
                // * Don't change this and next setStateActions
                const currentState = { ...prev, form1: inpValue };
                return currentState;
            });
        name === surveyForms.form4[0].name &&
            setAnswerRadioForm((prev: TAnswerRadioForm) => {
                const currentState = { ...prev, form4: inpValue };
                return currentState;
            });
        name === surveyForms.form6[0].name &&
            setAnswerRadioForm((prev: TAnswerRadioForm) => {
                const currentState = { ...prev, form6: inpValue };
                return currentState;
            });
        name === surveyForms.form7[0].name &&
            setAnswerRadioForm((prev: TAnswerRadioForm) => {
                const currentState = { ...prev, form7: inpValue };
                return currentState;
            });
        name === surveyForms.form8[0].name &&
            setAnswerRadioForm((prev: TAnswerRadioForm) => {
                const currentState = { ...prev, form8: inpValue };
                return currentState;
            });
        name === surveyForms.form9[0].name &&
            setAnswerRadioForm((prev: TAnswerRadioForm) => {
                const currentState = { ...prev, form9: inpValue };
                return currentState;
            });
    };

    // * Checkbox inp state
    const [answerCheckboxForm, setAnswerCheckboxForm] = useState<TAnswerCheckboxForm>(answerCheckboxFormInit);

    const checkboxTestChangeHandler = (name: string) => {
        answerCheckboxForm.form2.hasOwnProperty(name) &&
            setAnswerCheckboxForm((prev: TAnswerCheckboxForm) => {
                // * form2[name] - use angle brackets, because prop name == checkbox id. Ex. "survey-answer2-1"
                // * Don't change this and next setStateActions
                const currentState = {
                    ...prev,
                    form2: { ...prev.form2, [name]: !answerCheckboxForm.form2[name] },
                };
                return currentState;
            });
        answerCheckboxForm.form3.hasOwnProperty(name) &&
            setAnswerCheckboxForm((prev: TAnswerCheckboxForm) => {
                const currentState = {
                    ...prev,
                    form3: { ...prev.form3, [name]: !answerCheckboxForm.form3[name] },
                };
                return currentState;
            });
        answerCheckboxForm.form5.hasOwnProperty(name) &&
            setAnswerCheckboxForm((prev: TAnswerCheckboxForm) => {
                const currentState = {
                    ...prev,
                    form5: { ...prev.form5, [name]: !answerCheckboxForm.form5[name] },
                };
                return currentState;
            });
    };

    const surveyFormSteps: React.ReactElement[] = [
        <SurveyInfo />,
        <SurveyFieldset
            id={surveyFormData.form1.id}
            question={surveyFormData.form1.question}
        >
            <VariantsList
                dataArr={surveyForms.form1}
                initState={answerRadioForm.form1}
                changeHandler={(e: any) => radioInpChange(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormData.form2.id}
            question={surveyFormData.form2.question}
        >
            {surveyForms.form2.map((item: any) => (
                <Checkbox
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    value={item.label}
                    checked={answerCheckboxForm.form2[item.name]}
                    onChange={(e: any) => checkboxTestChangeHandler(e.target.name)}
                    disabled={item.disabled}
                >
                    {item.label}
                </Checkbox>
            ))}
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormData.form3.id}
            question={surveyFormData.form3.question}
        >
            {surveyForms.form3.map((item: any) => (
                <Checkbox
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    value={item.label}
                    checked={answerCheckboxForm.form3[item.name]}
                    onChange={(e: any) => checkboxTestChangeHandler(e.target.name)}
                    disabled={item.disabled}
                >
                    {item.label}
                </Checkbox>
            ))}
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormData.form4.id}
            question={surveyFormData.form4.question}
        >
            <VariantsList
                dataArr={surveyForms.form4}
                initState={answerRadioForm.form4}
                changeHandler={(e: any) => radioInpChange(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormData.form5.id}
            question={surveyFormData.form5.question}
        >
            {surveyForms.form5.map((item: any) => (
                <Checkbox
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    value={item.label}
                    checked={answerCheckboxForm.form3[item.name]}
                    onChange={(e: any) => checkboxTestChangeHandler(e.target.name)}
                    disabled={item.disabled}
                >
                    {item.label}
                </Checkbox>
            ))}
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormData.form6.id}
            question={surveyFormData.form6.question}
        >
            <VariantsList
                dataArr={surveyForms.form6}
                initState={answerRadioForm.form6}
                changeHandler={(e: any) => radioInpChange(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormData.form7.id}
            question={surveyFormData.form7.question}
        >
            <VariantsList
                dataArr={surveyForms.form7}
                initState={answerRadioForm.form7}
                changeHandler={(e: any) => radioInpChange(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormData.form8.id}
            question={surveyFormData.form8.question}
        >
            <VariantsList
                dataArr={surveyForms.form8}
                initState={answerRadioForm.form8}
                changeHandler={(e: any) => radioInpChange(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormData.form9.id}
            question={surveyFormData.form9.question}
        >
            <VariantsList
                dataArr={surveyForms.form9}
                initState={answerRadioForm.form9}
                changeHandler={(e: any) => radioInpChange(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <SurveyFinish
            amount={0.067986}
            curName="Ethereum (ETH)"
            minutesCount={15}
        />,
    ];

    const { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm(surveyFormSteps);

    const submitForm = async (data: FieldValues) => {
        const formData: TAnswerRadioForm & TAnswerCheckboxForm = {
            form1: answerRadioForm.form1,
            form2: answerCheckboxForm.form2,
            form3: answerCheckboxForm.form3,
            form4: answerRadioForm.form4,
            form5: answerCheckboxForm.form5,
            form6: answerRadioForm.form6,
            form7: answerRadioForm.form7,
            form8: answerRadioForm.form8,
            form9: answerRadioForm.form9,
        };
        console.log(formData);

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
