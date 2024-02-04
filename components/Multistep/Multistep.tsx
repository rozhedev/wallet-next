"use client";

import React, { FC } from "react";
import Link from "next/link";

import FormProgressBar, { getProgressBarWidth, getRegisterWalletClassNames } from "@/components/FormProgressBar";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Btn from "@/ui/Btn/Btn";

import { TMultistep } from "./types";
import { ROUTES } from "@/data/routes";

export const Multistep: FC<TMultistep> = ({
    handleSubmit,
    submitForm,
    isSubmitting,
    step,
    steps,
    isFirstStep,
    currentStepIndex,
    isLastStep,
    back,
    formAction,
    btnClassNames,
    children,
    haveProgressbar = false,
    isRegister = false,
    isSurvey = false,
}) => {
    const btnLabels = {
        step: "Next step",
        prevStep: "Previous step",
        lastStep: "Complete",
        submit: "Sending...",
    };

    return (
        <div className="form-wrapper">
            {haveProgressbar && (
                <FormProgressBar
                    progressBarStyle={getProgressBarWidth(isFirstStep, isLastStep, currentStepIndex, steps.length)}
                    countClassNames={getRegisterWalletClassNames(isLastStep, currentStepIndex, steps.length)}
                />
            )}
            <form
                action={formAction}
                className="form"
                onSubmit={handleSubmit(submitForm)}
            >
                {step}

                {/* //* Children prop for additional validation */}
                {children}
                <StyledWrapper className="btn-group">
                    {((!isFirstStep && !isSurvey) || (!isFirstStep && !isLastStep && isSurvey)) && (
                        <Btn
                            type="button"
                            className={btnClassNames[0]}
                            onClick={back}
                        >
                            <span>{btnLabels.prevStep}</span>
                        </Btn>
                    )}
                    <Btn
                        type="submit"
                        className={btnClassNames[1]}
                        disabled={isSubmitting}
                    >
                        <span>{isLastStep ? (isSubmitting ? btnLabels.submit : btnLabels.lastStep) : btnLabels.step}</span>
                    </Btn>
                </StyledWrapper>

                {isFirstStep && isRegister && (
                    <span className="form-backlink">
                        Already have a wallet?&nbsp;
                        <Link
                            href={ROUTES.public.signin}
                            className="link"
                            scroll={false}
                        >
                            Sign In
                        </Link>
                    </span>
                )}
            </form>
        </div>
    );
};
