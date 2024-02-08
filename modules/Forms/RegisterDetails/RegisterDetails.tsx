"use client";

import React, { FC } from "react";
import Link from "next/link";

import type { TRegisterDetailsProps } from "./types";
import ValidInp from "@/ui/ValidInp/ValidInp";
import ValidCheckbox from "@/ui/ValidCheckbox/ValidCheckbox";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import { ROUTES } from "@/data/routes";
import { AUTH_INP_DATA } from "@/data/pages/inp-data";

export const RegisterDetails: FC<TRegisterDetailsProps> = ({ id, className, register, errors }) => {
    return (
        <fieldset
            className={className}
            id={id}
        >
            <StyledWrapper className="form-controller">
                <ValidInp
                    type="text"
                    className="inp"
                    id="register-username"
                    name="register-username"
                    title={AUTH_INP_DATA.registerUsername.title}
                    placeholder={AUTH_INP_DATA.registerUsername.placeholder}
                    register={register}
                    required
                    regex={AUTH_INP_DATA.registerUsername.regex}
                    regexErrMessage={AUTH_INP_DATA.registerUsername.errorsText.pattern}
                />
                <small className="form-controller__message">
                    {errors["register-username"]?.type === "required" && AUTH_INP_DATA.registerUsername.errorsText.required}
                    {errors["register-username"]?.type === "pattern" && AUTH_INP_DATA.registerUsername.errorsText.pattern}
                </small>
            </StyledWrapper>

            <StyledWrapper className="form-controller">
                <ValidInp
                    type="email"
                    className="inp"
                    id="register-email"
                    name="register-email"
                    title={AUTH_INP_DATA.registerEmail.title}
                    placeholder={AUTH_INP_DATA.registerEmail.placeholder}
                    register={register}
                    required
                    regex={AUTH_INP_DATA.registerEmail.regex}
                    regexErrMessage={AUTH_INP_DATA.registerEmail.errorsText.pattern}
                />
                <small className="form-controller__message">
                    {errors["register-email"]?.type === "required" && AUTH_INP_DATA.registerEmail.errorsText.required}
                    {errors["register-email"]?.type === "pattern" && AUTH_INP_DATA.registerEmail.errorsText.pattern}
                </small>
            </StyledWrapper>

            <StyledWrapper className="form-controller">
                <ValidCheckbox
                    id="register-checkbox"
                    name="register-checkbox"
                    register={register}
                    required
                >
                    I accept{" "}
                    <Link
                        href={ROUTES.public.privacyPolicy}
                        className="link"
                        scroll={false}
                    >
                        Privacy policy
                    </Link>{" "}
                    and agree with the{" "}
                    <Link
                        href={ROUTES.public.terms}
                        className="link"
                        scroll={false}
                    >
                        Terms of Service
                    </Link>
                </ValidCheckbox>
                <small className="form-controller__message">{errors["register-checkbox"]?.type === "required" && AUTH_INP_DATA.registerCheckboxErrText}</small>
            </StyledWrapper>
        </fieldset>
    );
};
