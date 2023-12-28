"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import type { FieldValues } from "react-hook-form";

import Card from "@/ui/Card/Card";
import BtnGroup from "@/ui/BtnGroup/BtnGroup";
import Btn from "@/ui/Btn/Btn";
import RegisterDetails from "@/modules/Forms/RegisterDetails";
import GenPassphrase from "@/modules/Forms/GenPassphrase";
import EnterPassphrase from "@/modules/Forms/EnterPassphrase";
import FormProgressBar from "@/components/FormProgressBar";

import { TMultistep } from "./types";
import { useMultistepForm } from "./useMultistepForm";
import { ROUTES } from "@/data/routes";
import { INP_DATA } from "@/data/pages/inp-data";
import { log } from "console";

export const Multistep: FC<TMultistep> = ({ register, control, handleSubmit, errors, isSubmitting, setValue, getValues, reset, passArr, passStr }) => {
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
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
            control={control}
            setValue={setValue}
            errors={errors}
        />,
        <EnterPassphrase
            id="register-confirm-form"
            className="form-step form-confirm"
            legend="Paste your passphrase from the inputs below to complete registration."
            register={register}
            control={control}
            errors={errors}
        />,
    ]);

    // * State for check generated pass & entered
    const [isPassMatch, setIsPassMatch] = useState<boolean>(true);

    const submitHandler = async (data: FieldValues) => {
        if (!isLastStep) return next();

        const confirmInpValuesStr: any = getValues("confirm-inp")
            .map((inp) => (inp.value = inp.value.trim()))
            .join(" ");

        const isPassCond: boolean = passStr === confirmInpValuesStr;

        if (isPassCond) {
            setIsPassMatch(true);
            console.log(confirmInpValuesStr);
            reset();

            await new Promise((resolve: any) => setTimeout(resolve, 1000));

            // * TODO Submit to server
            // * ...
        } else setIsPassMatch(false);
    };

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
        <div className="container">
            <Card className="form-wrapper">
                <FormProgressBar
                    progressBarStyle={getProgressBarWidth()}
                    countClassNames={stepsClassNames}
                />
                <form
                    action="/dashboard"
                    className="form"
                    onSubmit={handleSubmit(submitHandler)}
                >
                    {step}

                    {!isPassMatch && isLastStep && <small className="form-controller__message">{INP_DATA.passMatchErrText}</small>}

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
                            type="submit"
                            className="btn btn-fill-sm"
                            disabled={isSubmitting}
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
        </div>
    );
};
