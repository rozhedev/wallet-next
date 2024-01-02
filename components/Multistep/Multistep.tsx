"use client";

import React, { FC } from "react";
import Link from "next/link";

import FormProgressBar from "@/components/FormProgressBar";
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
    isRegister,
    back,
    formAction,
    btnClassNames,
    children,
}) => {
    // * Data for FormProgressBar
    let isMediumStep = currentStepIndex + 1 === steps.length - 1;

    const stepsClassNames = [`progress-step navlink _active`, `progress-step navlink ${isMediumStep || isLastStep ? "_active" : ""}`, `progress-step navlink ${isLastStep ? "_active" : ""}`];

    const getProgressBarWidth = () => {
        let index: `${number}%` = "0%";
        if (isFirstStep) index = "0%";
        else if (isMediumStep) index = "50%";
        else if (isLastStep) index = "100%";
        return index;
    };

    return (
        <div className="form-wrapper">
            <FormProgressBar
                progressBarStyle={getProgressBarWidth()}
                countClassNames={stepsClassNames}
            />
            <form
                action={formAction}
                className="form"
                onSubmit={handleSubmit(submitForm)}
            >
                {step}

                {/* //* Children prop for additional validation */}
                {children}
                <StyledWrapper className="btn-group">
                    {!isFirstStep && (
                        <Btn
                            type="button"
                            className={btnClassNames}
                            onClick={back}
                        >
                            <span>Previous step</span>
                        </Btn>
                    )}
                    <Btn
                        type="submit"
                        className={btnClassNames}
                        disabled={isSubmitting}
                    >
                        <span>{isLastStep ? "Complete" : "Next step"}</span>
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
