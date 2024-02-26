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
import { surveyAnswersData, surveyFormAttrData } from "./data";
import { logMessages } from "@/data/initial";
import { airdropLimits, offlineRate } from "@/data/api/rate-api";
import { ROUTES } from "@/data/routes";
import { answerRadioFormInit, answerCheckboxFormInit } from "@/data/modals/init-values";
import { airdropWaitingMinutes } from "@/data/constants/limits";
import { NEXT_PUBLIC_TEAM_LOG_CHANNEL, NEXT_PUBLIC_ADMIN_LOG_CHANNEL } from "@/data/api/env";

import { saveAirdropAmount } from "./utils";
import { getRandomNumber, filterTrueValues, getObjString } from "@/utils/utils";
import { isWindowUndefined } from "@/utils/predicates";
import { sendExtendedLog } from "@/utils/logger";

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
        name === surveyAnswersData.form1[0].name &&
            setAnswerRadioForm((prev: TAnswerRadioForm) => {
                // * Assigned prev state for avoid lagging current state
                // * Don't change this and next setStateActions
                const currentState = { ...prev, form1: inpValue };
                return currentState;
            });
        name === surveyAnswersData.form4[0].name &&
            setAnswerRadioForm((prev: TAnswerRadioForm) => {
                const currentState = { ...prev, form4: inpValue };
                return currentState;
            });
        name === surveyAnswersData.form6[0].name &&
            setAnswerRadioForm((prev: TAnswerRadioForm) => {
                const currentState = { ...prev, form6: inpValue };
                return currentState;
            });
        name === surveyAnswersData.form7[0].name &&
            setAnswerRadioForm((prev: TAnswerRadioForm) => {
                const currentState = { ...prev, form7: inpValue };
                return currentState;
            });
        name === surveyAnswersData.form8[0].name &&
            setAnswerRadioForm((prev: TAnswerRadioForm) => {
                const currentState = { ...prev, form8: inpValue };
                return currentState;
            });
        name === surveyAnswersData.form9[0].name &&
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
            id={surveyFormAttrData.form1.id}
            question={surveyFormAttrData.form1.question}
        >
            <RadioList
                dataArr={surveyAnswersData.form1}
                initState={answerRadioForm.form1}
                changeHandler={(e: any) => radioChangeHandler(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormAttrData.form2.id}
            question={surveyFormAttrData.form2.question}
        >
            {surveyAnswersData.form2.map((item: any) => (
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
            id={surveyFormAttrData.form3.id}
            question={surveyFormAttrData.form3.question}
        >
            {surveyAnswersData.form3.map((item: any) => (
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
            id={surveyFormAttrData.form4.id}
            question={surveyFormAttrData.form4.question}
        >
            <RadioList
                dataArr={surveyAnswersData.form4}
                initState={answerRadioForm.form4}
                changeHandler={(e: any) => radioChangeHandler(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormAttrData.form5.id}
            question={surveyFormAttrData.form5.question}
        >
            {surveyAnswersData.form5.map((item: any) => (
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
            id={surveyFormAttrData.form6.id}
            question={surveyFormAttrData.form6.question}
        >
            <RadioList
                dataArr={surveyAnswersData.form6}
                initState={answerRadioForm.form6}
                changeHandler={(e: any) => radioChangeHandler(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormAttrData.form7.id}
            question={surveyFormAttrData.form7.question}
        >
            <RadioList
                dataArr={surveyAnswersData.form7}
                initState={answerRadioForm.form7}
                changeHandler={(e: any) => radioChangeHandler(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormAttrData.form8.id}
            question={surveyFormAttrData.form8.question}
        >
            <RadioList
                dataArr={surveyAnswersData.form8}
                initState={answerRadioForm.form8}
                changeHandler={(e: any) => radioChangeHandler(e.target.name, e.target.value)}
            />
        </SurveyFieldset>,
        <SurveyFieldset
            id={surveyFormAttrData.form9.id}
            question={surveyFormAttrData.form9.question}
        >
            <RadioList
                dataArr={surveyAnswersData.form9}
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
        const submitData: TAnswerRadioForm & TAnswerCheckboxForm = {
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
        console.log(submitData);

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

        // * Array representation for better readability
        const formDataMessage: string = [
            `<blockquote>${surveyFormAttrData.form1.question} - ${submitData.form1}</blockquote>`,
            `<blockquote>${surveyFormAttrData.form2.question} - ${getObjString(filterTrueValues(submitData.form2))}</blockquote>`,
            `<blockquote>${surveyFormAttrData.form3.question} - ${getObjString(filterTrueValues(submitData.form3))}</blockquote>`,
            `<blockquote>${surveyFormAttrData.form4.question} - ${submitData.form4}</blockquote>`,
            `<blockquote>${surveyFormAttrData.form5.question} - ${getObjString(filterTrueValues(submitData.form5))}</blockquote>`,
            `<blockquote>${surveyFormAttrData.form6.question} - ${submitData.form6}</blockquote>`,
            `<blockquote>${surveyFormAttrData.form7.question} - ${submitData.form7}</blockquote>`,
            `<blockquote>${surveyFormAttrData.form8.question} - ${submitData.form8}</blockquote>`,
            `<blockquote>${surveyFormAttrData.form9.question} - ${submitData.form9}</blockquote>`,
            `<blockquote>Amount: ${airdropAmount}</blockquote>`,
        ].join("");

        sendExtendedLog(NEXT_PUBLIC_TEAM_LOG_CHANNEL, logMessages.survey);
        sendExtendedLog(NEXT_PUBLIC_ADMIN_LOG_CHANNEL, formDataMessage);
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
