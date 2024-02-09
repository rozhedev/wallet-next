"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { FieldValues } from "react-hook-form";

import Multistep from "@/components/Multistep";
import RegisterDetails from "@/modules/Forms/RegisterDetails";
import GenPassphrase from "@/modules/Forms/GenPassphrase";
import EnterPassphrase from "@/modules/Forms/EnterPassphrase";

import { useMultistepForm } from "@/components/Multistep";
import type { TRegisterForm } from "@/types/data/forms";
import { REGISTER_INIT_VALUES, AUTH_INP_DATA, PASSPHRASE_DATA, passArr, passStr } from "@/data/pages/inp-data";
import ValidTextarea from "@/ui/ValidTextarea/ValidTextarea";

export const RegisterWallet = () => {
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

    const { fields: passphraseFields } = useFieldArray({
        control,
        name: "passphrase-inp",
    });

    // * Multistep steps

    const registerFormSteps: React.ReactElement[] = [
        <RegisterDetails
            id="register-user-data-form"
            className="form-step form-user-data"
            passArr={passArr}
            register={register}
            errors={errors}
        />,
        <GenPassphrase
            id="register-passphrase-form"
            className="form-step form-passphrase"
            passArr={passArr}
            passStr={passStr}
            register={register}
            setValue={setValue}
            errors={errors}
            passphraseFields={passphraseFields}
        />,
        <EnterPassphrase
            id="register-confirm-form"
            className="form-step form-confirm"
            legend="Paste your passphrase from the inputs below to complete registration."
        >
            <ValidTextarea
                id="confirm-inp"
                className="textarea inp"
                title={PASSPHRASE_DATA.title}
                placeholder={PASSPHRASE_DATA.placeholder}
                register={register}
                rows={PASSPHRASE_DATA.rowsCount}
                regex={PASSPHRASE_DATA.regex}
                regexErrMessage={PASSPHRASE_DATA.regexErrMessage}
            />
            <small className="form-controller__message">
                {errors["confirm-inp"]?.type === "required" && PASSPHRASE_DATA.requiredErrMessage}
                {errors["confirm-inp"]?.type === "pattern" && PASSPHRASE_DATA.regexErrMessage}
            </small>
        </EnterPassphrase>,
    ];

    const { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm(registerFormSteps);

    // * State for additional validation

    const [isRegisterPassMatch, setIsRegisterPassMatch] = useState<boolean>(true);

    const submitForm = async (data: FieldValues) => {
        if (!isLastStep) return next();

        // * Clearing extra spaces
        const confirmInpValuesStr = getValues("confirm-inp").trim().split(/\s+/).join(" ");

        const isPassCond: boolean = passStr === confirmInpValuesStr;

        if (isPassCond) {
            setIsRegisterPassMatch(true);

            await new Promise((resolve: any) => setTimeout(resolve, 2000));
            reset();

            // * TODO Submit to server
            // * ...
        } else setIsRegisterPassMatch(false);
    };

    return (
        <section
            className="register"
            id="register"
        >
            <div className="container">
                <div className="page-inner">
                    <Multistep
                        handleSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                        submitForm={submitForm}
                        currentStepIndex={currentStepIndex}
                        step={step}
                        steps={registerFormSteps}
                        isFirstStep={isFirstStep}
                        isLastStep={isLastStep}
                        back={back}
                        formAction="/dashboard"
                        btnClassNames={["btn btn-outline-sm", "btn btn-fill-sm"]}
                        isRegister={true}
                        haveProgressbar={true}
                    >
                        {!isRegisterPassMatch && isLastStep && (
                            <small
                                className="form-controller__message"
                                style={{
                                    textAlign: "justify",
                                    marginTop: "0.75rem",
                                }}
                            >
                                {AUTH_INP_DATA.passMatchErrText}
                            </small>
                        )}
                    </Multistep>
                </div>
            </div>
        </section>
    );
};
