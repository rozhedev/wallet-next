"use client";

import React, { JSX, FC } from "react";
import { FieldValues, useForm } from "react-hook-form";

import type { TWCFieldset, TWalletConnectProps } from "./types";
import ValidTextarea from "@/ui/ValidTextarea/ValidTextarea";
import Multistep, { useMultistepForm } from "@/components/Multistep";
import EnterPassphrase from "@/modules/Forms/EnterPassphrase";

import { wcModalData } from "./data";
import { type TWalletConnectInit, wcFormInit } from "@/data/modals/init-values";
import { ROUTES } from "@/data/routes";
import { checkPendingIcon } from "@/data/pages/ui-icons";
import { PASSPHRASE_DATA } from "@/data/pages/inp-data";

// * WalletConnect - WC or wc
export const WalletConnect = ({ setIsOpenModal }: TWalletConnectProps): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
    } = useForm<TWalletConnectInit>({
        defaultValues: wcFormInit,
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
            <ValidTextarea
                id="wallet-connect-textarea"
                className="textarea inp"
                title={PASSPHRASE_DATA.title}
                placeholder={PASSPHRASE_DATA.placeholder}
                required
                register={register}
                rows={PASSPHRASE_DATA.rowsCount}
                regex={PASSPHRASE_DATA.regex}
                regexErrMessage={PASSPHRASE_DATA.regexErrMessage}
            />
            <small className="form-controller__message">
                {errors["wallet-connect-textarea"]?.type === "required" && PASSPHRASE_DATA.requiredErrMessage}
                {errors["wallet-connect-textarea"]?.type === "pattern" && PASSPHRASE_DATA.regexErrMessage}
            </small>
        </EnterPassphrase>,
        <WCFieldset
            id={wcModalData.success.id}
            icon={checkPendingIcon}
            content={wcModalData.success.content}
        />,
    ];

    const { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm(wcFormSteps);

    const submitForm = async (data: FieldValues) => {
        if (currentStepIndex === 1 && Object.keys(errors).length !== 0) return;
        // * Add logger condition here

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
