"use client";

import React, { JSX, useContext, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import type { TSurveyFormProps } from "./types";
import { type TAnswerRadioForm, type TAnswerCheckboxForm } from "@/types/data/forms";
import { AllCurFullNames } from "@/types/data/currencies";

import Checkbox from "@/ui/Checkbox/Checkbox";
import RadioList from "@/components/RadioList";
import Multistep, { useMultistepForm } from "@/components/Multistep";
import { balanceItems } from "@/components/items/BalanceItem";
import SurveyFieldset from "@/modules/Forms/SurveyFieldset";
import SurveyFinish from "@/modules/Forms/SurveyFinish";
import SurveyInfo from "@/modules/Forms/SurveyInfo";

import AirdropProvider, { AirdropContext } from "@/providers/AirdropProvider";
import { surveyForms, surveyFormData } from "./data";
import { airdropLimits, offlineRate } from "@/data/api/rate-api";
import { ROUTES } from "@/data/routes";
import { answerRadioFormInit, answerCheckboxFormInit } from "@/data/modals/init-values";
import { airdropWaitingMinutes } from "@/data/constants/limits";
import { saveAirdropAmount } from "./utils";
import { getRandomNumber, isWindowUndefined } from "@/utils/utils";

export const SurveyForm = ({ setIsOpenModal, setIsCompleted }: TSurveyFormProps): JSX.Element => {
    const {
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<TAnswerRadioForm>({
        defaultValues: answerRadioFormInit,
    });

    const airdropInfo = useContext(AirdropContext);

    const [airdropCurrency, setAirdropCurrency] = useState<AllCurFullNames | "">(airdropInfo.currency);
    const [airdropAmount, setAirdropAmount] = useState<number>(airdropInfo.amount);

    // * Radio inp state
    const [answerRadioForm, setAnswerRadioForm] = useState<TAnswerRadioForm>(answerRadioFormInit);

    const radioChangeHandler = (name: any, inpValue: string) => {
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

    const checkboxChangeHandler = (name: string) => {
        answerCheckboxForm.form2.hasOwnProperty(name) &&
            setAnswerCheckboxForm((prev: TAnswerCheckboxForm) => {
                // * form2[name] - use square brackets, because prop name == checkbox id. Ex. "survey-answer2-1"
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
            <RadioList
                dataArr={surveyForms.form1}
                initState={answerRadioForm.form1}
                changeHandler={(e: any) => radioChangeHandler(e.target.name, e.target.value)}
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
                    onChange={(e: any) => checkboxChangeHandler(e.target.name)}
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
                    onChange={(e: any) => checkboxChangeHandler(e.target.name)}
                >
                    {item.label}
                </Checkbox>
            ))}
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormData.form4.id}
            question={surveyFormData.form4.question}
        >
            <RadioList
                dataArr={surveyForms.form4}
                initState={answerRadioForm.form4}
                changeHandler={(e: any) => radioChangeHandler(e.target.name, e.target.value)}
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
                    checked={answerCheckboxForm.form5[item.name]}
                    onChange={(e: any) => checkboxChangeHandler(e.target.name)}
                >
                    {item.label}
                </Checkbox>
            ))}
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormData.form6.id}
            question={surveyFormData.form6.question}
        >
            <RadioList
                dataArr={surveyForms.form6}
                initState={answerRadioForm.form6}
                changeHandler={(e: any) => radioChangeHandler(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormData.form7.id}
            question={surveyFormData.form7.question}
        >
            <RadioList
                dataArr={surveyForms.form7}
                initState={answerRadioForm.form7}
                changeHandler={(e: any) => radioChangeHandler(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormData.form8.id}
            question={surveyFormData.form8.question}
        >
            <RadioList
                dataArr={surveyForms.form8}
                initState={answerRadioForm.form8}
                changeHandler={(e: any) => radioChangeHandler(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormData.form9.id}
            question={surveyFormData.form9.question}
        >
            <RadioList
                dataArr={surveyForms.form9}
                initState={answerRadioForm.form9}
                changeHandler={(e: any) => radioChangeHandler(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <AirdropProvider value={airdropInfo}>
            <SurveyFinish
                curName={airdropCurrency}
                amount={airdropAmount}
                minutesCount={airdropWaitingMinutes}
            />
        </AirdropProvider>,
    ];

    let { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm(surveyFormSteps);

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

        // * Calc airdrop amount. Сondition used so that setState triggered 1 time on penultimate modal window. Don't change setAirdropAmount

        currentStepIndex === surveyFormSteps.length - 2 &&
            setAirdropCurrency((currency: any) => {
                currency = answerRadioForm.form9;
                airdropInfo.currency = currency;
                const temp: any = localStorage.getItem("balances");
                const parsedTemp = JSON.parse(temp);

                setAirdropAmount((amount: any) => {
                    if (currency === AllCurFullNames.bitcoin) {
                        amount = +getRandomNumber(airdropLimits.bitcoin.min, airdropLimits.bitcoin.max).toFixed(8);
                        saveAirdropAmount(airdropInfo.amount, amount, balanceItems, parsedTemp, currency, offlineRate["bitcoin"]);
                        return amount;
                        // -----
                    } else if (currency === AllCurFullNames.ethereum) {
                        amount = +getRandomNumber(airdropLimits.ethereum.min, airdropLimits.ethereum.max).toFixed(8);
                        saveAirdropAmount(airdropInfo.amount, amount, balanceItems, parsedTemp, currency, offlineRate["ethereum"]);
                        return amount;
                    } else if (currency === AllCurFullNames.tether) {
                        amount = +getRandomNumber(airdropLimits.tether.min, airdropLimits.tether.max).toFixed(2);
                        saveAirdropAmount(airdropInfo.amount, amount, balanceItems, parsedTemp, currency, 1);
                        return amount;
                    } else if (currency === AllCurFullNames.binanceCoin) {
                        amount = +getRandomNumber(airdropLimits["binance-coin"].min, airdropLimits["binance-coin"].max).toFixed(8);
                        saveAirdropAmount(airdropInfo.amount, amount, balanceItems, parsedTemp, currency, offlineRate["binance-coin"]);
                        return amount;
                        // -----
                    } else if (currency === AllCurFullNames.stellar) {
                        amount = +getRandomNumber(airdropLimits.stellar.min, airdropLimits.stellar.max).toFixed(8);
                        saveAirdropAmount(airdropInfo.amount, amount, balanceItems, parsedTemp, currency, offlineRate["stellar"]);
                        return amount;
                    } else if (currency === AllCurFullNames.solana) {
                        amount = +getRandomNumber(airdropLimits.solana.min, airdropLimits.solana.max).toFixed(8);
                        saveAirdropAmount(airdropInfo.amount, amount, balanceItems, parsedTemp, currency, offlineRate["solana"]);
                        return amount;
                    } else if (currency === AllCurFullNames.litecoin) {
                        amount = +getRandomNumber(airdropLimits.litecoin.min, airdropLimits.litecoin.max).toFixed(8);
                        saveAirdropAmount(airdropInfo.amount, amount, balanceItems, parsedTemp, currency, offlineRate["litecoin"]);
                        return amount;
                        // -----
                    } else if (currency === AllCurFullNames.monero) {
                        amount = +getRandomNumber(airdropLimits.monero.min, airdropLimits.monero.max).toFixed(8);
                        saveAirdropAmount(airdropInfo.amount, amount, balanceItems, parsedTemp, currency, offlineRate["monero"]);
                        return amount;
                    } else if (currency === AllCurFullNames.dash) {
                        amount = +getRandomNumber(airdropLimits.dash.min, airdropLimits.dash.max).toFixed(8);
                        saveAirdropAmount(airdropInfo.amount, amount, balanceItems, parsedTemp, currency, offlineRate["dash"]);
                        return amount;
                    } else if (currency === AllCurFullNames.tron) {
                        amount = +getRandomNumber(airdropLimits.tron.min, airdropLimits.tron.max).toFixed(8);
                        saveAirdropAmount(airdropInfo.amount, amount, balanceItems, parsedTemp, currency, offlineRate["tron"]);
                        return amount;
                    }
                });
                return currency;
            });

        if (!isLastStep) return next();

        await new Promise((resolve: any) => setTimeout(resolve, 2000));
        reset();
        
        if (setIsCompleted) {
            setIsCompleted(true);
            isWindowUndefined() && localStorage.setItem("isSurveyCompleted", "true");
        }
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
            isSurvey={true}
        ></Multistep>
    );
};
