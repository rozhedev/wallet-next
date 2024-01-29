"use client";

import React, { JSX, FC, useState } from "react";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";

import type { TWCFieldset, TWalletConnectProps } from "./types";
import Multistep, { useMultistepForm } from "@/components/Multistep";
import EnterPassphrase from "@/modules/Forms/EnterPassphrase";

import { wcModalData } from "./data";
import { type TWalletConnectInit, wcFormInit } from "@/data/modals/init-values";
import { ROUTES } from "@/data/routes";
import { checkPendingIcon, closePendingIcon } from "@/data/pages/ui-icons";
import { INP_DATA } from "@/data/pages/inp-data";

// * WalletConnect - WC or wc
export const WalletConnect = ({ setIsOpenModal }: TWalletConnectProps): JSX.Element => {
    const {
        register,
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<TWalletConnectInit>({
        defaultValues: wcFormInit,
    });

    const { fields: confirmFields } = useFieldArray({
        control,
        name: "wallet-connect-inp",
    });

    const wcFormSteps: React.ReactElement[] = [
        <WCFieldset
            id={wcModalData.info.id}
            icon={wcModalData.info.icon}
            content={wcModalData.info.content}
        />,
        <EnterPassphrase
            id="wallet-connect-step1"
            className="form-step"
            legend="Connect external wallet"
        >
            {/* 
                // * Don't add name attribute for prevent rewrite in Inp component 
                // * Use default input instead Inp for default html5 validation (custom validation message impossible output, because dynamic key is not supported)
            */}
            {confirmFields.map((field, i) => (
                <input
                    key={field.id}
                    type="text"
                    id={`${INP_DATA.fieldArrValues.confirm}.${i}.value`}
                    title={`${INP_DATA.fieldArrValues.confirm} ${i}`}
                    className="inp confirm-inp"
                    placeholder={`${i + 1}`}
                    minLength={INP_DATA.fieldArrValues.wordMinLenght}
                    maxLength={INP_DATA.fieldArrValues.wordMaxLenght}
                    autoComplete="off"
                    required
                    {...register(`wallet-connect-inp.${i}.value`, {})}
                />
            ))}
        </EnterPassphrase>,
        <WCFieldset
            id={wcModalData.success.id}
            icon={checkPendingIcon}
            content={wcModalData.success.content}
        />,
        <WCFieldset
            id={wcModalData.error.id}
            icon={closePendingIcon}
            content={wcModalData.error.content}
        />,
    ];

    const { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm(wcFormSteps);

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
            steps={wcFormSteps}
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

// * WC Fieldset    
export const WCFieldset: FC<TWCFieldset> = ({ id, icon, content }) => {
    return (
        <fieldset
            className={`form-step ${id}`}
            id={id}
        >
            {icon}
            <div className="form-step__descr">{content}</div>
        </fieldset>
    );
};
