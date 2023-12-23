import React, { FC, useState, FormEvent } from "react";
import { useMultistepForm } from "./useMultistepForm";
import Link from "next/link";
import Card from "@/ui/Card/Card";
import Btn from "@/ui/Btn/Btn";

import FormProgressBar from "@/components/FormProgressBar";
import RegisterDetails from "@/modules/Forms/RegisterDetails";
import GenPassphrase from "@/modules/Forms/GenPassphrase";
import EnterPassphrase from "../EnterPassphrase";
import { FormValues } from "./types";
import { ROUTES } from "@/data/routes";

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

    return (
        <Card className="form-wrapper">
            <FormProgressBar />
            <div className="counter">
                {currentStepIndex + 1} / {steps.length}
            </div>
            <form
                action="#"
                className="form"
                onSubmit={onSubmitHandler}
            >
                {step}

                <div className="btn-group">
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
                </div>

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
