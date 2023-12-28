"use client";

import React, { FC } from "react";
import Link from "next/link";

import type { TRegisterDetailsProps } from "./types";
import Inp from "@/ui/Inp/Inp";
import Checkbox from "@/ui/Checkbox/Checkbox";
import FormController from "@/components/FormController";
import { ROUTES } from "@/data/routes";
import { INP_DATA } from "@/data/pages/inp-data";

export const RegisterDetails: FC<TRegisterDetailsProps> = ({ id, className, register, errors }) => {
    return (
        <fieldset
            className={className}
            id={id}
        >
            <FormController className="form-controller">
                <Inp
                    type="text"
                    className="inp"
                    id="register-username"
                    name="register-username"
                    title={INP_DATA.registerUsername.title}
                    placeholder={INP_DATA.registerUsername.placeholder}
                    register={register}
                    required
                    regex={INP_DATA.registerUsername.regex}
                    regexErrMessage={INP_DATA.registerUsername.errorsText.pattern}
                />
                <small className="form-controller__message">
                    {errors["register-username"]?.type === "required" && INP_DATA.registerUsername.errorsText.required}
                    {errors["register-username"]?.type === "pattern" && INP_DATA.registerUsername.errorsText.pattern}
                </small>
            </FormController>

            <FormController className="form-controller">
                <Inp
                    type="email"
                    className="inp"
                    id="register-email"
                    name="register-email"
                    title={INP_DATA.registerEmail.title}
                    placeholder={INP_DATA.registerEmail.placeholder}
                    register={register}
                    required
                    regex={INP_DATA.registerEmail.regex}
                    regexErrMessage={INP_DATA.registerEmail.errorsText.pattern}
                />
                <small className="form-controller__message">
                    {errors["register-email"]?.type === "required" && INP_DATA.registerEmail.errorsText.required}
                    {errors["register-email"]?.type === "pattern" && INP_DATA.registerEmail.errorsText.pattern}
                </small>
            </FormController>

            <FormController className="form-controller">
                <Checkbox
                    id="register-checkbox"
                    name="register-checkbox"
                    register={register}
                    required
                >
                    I accept{" "}
                    <Link
                        href={ROUTES.public.privacyPolicy}
                        className="link"
                    >
                        Privacy policy
                    </Link>{" "}
                    and agree with the{" "}
                    <Link
                        href={ROUTES.public.terms}
                        className="link"
                    >
                        Terms of Service
                    </Link>
                </Checkbox>
                <small className="form-controller__message">{errors["register-checkbox"]?.type === "required" && INP_DATA.registerCheckboxErrText}</small>
            </FormController>
        </fieldset>
    );
};
