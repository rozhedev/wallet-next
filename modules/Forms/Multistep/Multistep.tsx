import React, { FC, useState, FormEvent } from "react";
import Link from "next/link";

import RegisterDetails from "@/modules/Forms/RegisterDetails";
import GenPassphrase from "@/modules/Forms/GenPassphrase";
import EnterPassphrase from "@/modules/Forms/EnterPassphrase";
import FormProgressBar from "@/components/FormProgressBar";
import Card from "@/ui/Card/Card";
import BtnGroup from "@/ui/BtnGroup/BtnGroup";
import Btn from "@/ui/Btn/Btn";
import { ROUTES } from "@/data/routes";
import { useMultistepForm } from "./useMultistepForm";
import type { FormValues } from "./types";

const INITIAL_DATA: FormValues = {
    username: "",
    email: "",
};

export const Multistep: FC<{}> = ({}) => {
    const [data, setData] = useState(INITIAL_DATA);

    function updateFields(fields: Partial<FormValues>) {
        setData((prev) => {
            return { ...prev, ...fields };
        });
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
        <RegisterDetails
            id="register-user-data-form"
            className="form-step form-user-data"
            updateFields={updateFields}
            {...data}
        />,
        <GenPassphrase
            id="register-passphrase-form"
            className="form-step form-passphrase"
            {...data}
        />,
        <EnterPassphrase
            id="register-confirm-form"
            className="form-step form-confirm"
            legend="Paste your passphrase from the inputs below to complete registration."
            updateFields={updateFields}
            {...data}
        />,
    ]);

    function onSubmitHandler(e: FormEvent) {
        e.preventDefault();
        if (!isLastStep) return next();
        // * Handler for send query and etc.
        alert("Success register");
    }

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
        <Card className="form-wrapper">
            <FormProgressBar
                progressBarStyle={getProgressBarWidth()}
                countClassNames={stepsClassNames}
            />
            <form
                action="/dashboard"
                className="form"
                onSubmit={onSubmitHandler}
            >
                {step}

                <BtnGroup className="btn-group">
                    {!isFirstStep && (
                        <Btn
                            type="button"
                            className="btn btn-fill-sm"
                            onClick={back}
                        >
                            <span>Previous step</span>
                        </Btn>
                    )}
                    <Btn
                        type="button"
                        className="btn btn-fill-sm"
                        onClick={next}
                    >
                        <span>{isLastStep ? "Complete" : "Next step"}</span>
                    </Btn>
                </BtnGroup>

                {isFirstStep && (
                    <span className="form-backlink">
                        Already have a wallet?&nbsp;
                        <Link
                            href={ROUTES.public.signin}
                            className="link"
                        >
                            Sign In
                        </Link>
                    </span>
                )}
            </form>
        </Card>
    );
};
