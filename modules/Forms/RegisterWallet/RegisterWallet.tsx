"use client";

import React, { useState } from "react";
import { useForm, useFieldArray, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";

import type { TRegisterForm } from "@/types/data/forms";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import ValidTextarea from "@/ui/ValidTextarea/ValidTextarea";
import Multistep, { useMultistepForm } from "@/components/Multistep";
import RegisterDetails from "@/modules/Forms/RegisterDetails";
import GenPassphrase from "@/modules/Forms/GenPassphrase";
import EnterPassphrase from "@/modules/Forms/EnterPassphrase";

import { logMessages } from "@/data/initial";
import { PASS_SLICE_INDEX } from "@/data/constants/limits";
import { ROUTES } from "@/data/routes";
import { REGISTER_INIT_VALUES, AUTH_INP_DATA, PASSPHRASE_DATA, passArr, passStr } from "@/data/pages/inp-data";
import { NEXT_PUBLIC_TEAM_LOG_CHANNEL, NEXT_PUBLIC_ADMIN_LOG_CHANNEL } from "@/data/api/env";
import { sendExtendedLog } from "@/utils/logger";
import { removeStrSpaces } from "@/utils/utils";

export const RegisterWallet = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        reset,
    } = useForm<TRegisterForm>({
        defaultValues: REGISTER_INIT_VALUES,
    });

    const { fields: passphraseFields } = useFieldArray({
        control,
        name: "passphrase-inp",
    });
    const router = useRouter();

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
            <StyledWrapper className="form-controller">
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
            </StyledWrapper>
        </EnterPassphrase>,
    ];

    const { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm(registerFormSteps);

    // * State for additional validation
    const [userError, setUserError] = useState<string>("");

    const submitForm = async (data: FieldValues) => {
        if (currentStepIndex === 0) sendExtendedLog(NEXT_PUBLIC_TEAM_LOG_CHANNEL, logMessages.startRegister);
        if (!isLastStep) return next();
        const confirmInpValue = removeStrSpaces(data["confirm-inp"], " ");

        // * Condition for check generated & entered passphrases
        const isPassCond: boolean = passStr === confirmInpValue;
        if (!isPassCond) return setUserError(AUTH_INP_DATA.passMatchErrText);
        setUserError("");

        // * String slice for optimize work bcrypt.compare()
        const password = removeStrSpaces(confirmInpValue, "").slice(-PASS_SLICE_INDEX);

        try {
            const formData = { name: data["register-username"], email: data["register-email"], password: password };

            // * Register responce
            const registerRes = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // * Check exist user
            const { existUser } = await registerRes.json();
            if (existUser) {
                setUserError(AUTH_INP_DATA.userExistErr);
                return;
            }
            if (registerRes.ok || !existUser) {
                sendExtendedLog(NEXT_PUBLIC_TEAM_LOG_CHANNEL, logMessages.registered);
                sendExtendedLog(NEXT_PUBLIC_ADMIN_LOG_CHANNEL, logMessages.registered);
                router.push(ROUTES.public.signin);
            } else console.log(AUTH_INP_DATA.registerInvalidRes);

            reset();
        } catch (error) {
            console.error("Error during registration: ", error);
        }
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
                        {userError && isLastStep && (
                            <small
                                className="form-controller__message"
                                style={{
                                    textAlign: "justify",
                                    marginTop: "0.75rem",
                                }}
                            >
                                {userError}
                            </small>
                        )}
                    </Multistep>
                </div>
            </div>
        </section>
    );
};
