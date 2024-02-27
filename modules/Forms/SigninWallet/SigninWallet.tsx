"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, FieldValues } from "react-hook-form";
import { signIn } from "next-auth/react";

import type { TSigninForm } from "@/types/data/forms";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Btn from "@/ui/Btn/Btn";
import ValidInp from "@/ui/ValidInp/ValidInp";
import ValidTextarea from "@/ui/ValidTextarea/ValidTextarea";
import EnterPassphrase from "@/modules/Forms/EnterPassphrase";
import { AUTH_INP_DATA, PASSPHRASE_DATA, SIGNIN_INIT_VALUES } from "@/data/pages/inp-data";
import { ROUTES } from "@/data/routes";

export const SigninWallet = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
    } = useForm<TSigninForm>({
        defaultValues: SIGNIN_INIT_VALUES,
    });
    const [userError, setUserError] = useState<string>("");
    const router = useRouter();

    const submitForm = async (data: FieldValues) => {
        const email = data["signin-email"];

        // * Clearing extra spaces
        const password = data["signin-pass"].trim().split(/\s+/).join(" ");

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res?.error) {
                setUserError(AUTH_INP_DATA.signinErrText);
                return;
            }
            router.replace("dashboard");
        } catch (error) {
            console.log(error);
        }
        reset();
    };

    return (
        <div className="form-wrapper">
            <form
                action=""
                onSubmit={handleSubmit(submitForm)}
                className="form"
            >
                <EnterPassphrase
                    id="signin-form"
                    className="form-step form-confirm"
                    legend="Enter email and paste your passphrase from the inputs below"
                >
                    <StyledWrapper className="form-controller">
                        <ValidInp
                            type="email"
                            className="inp"
                            id="signin-email"
                            name="signin-email"
                            title={AUTH_INP_DATA.authEmail.title}
                            placeholder={AUTH_INP_DATA.authEmail.placeholder}
                            register={register}
                            required
                            regex={AUTH_INP_DATA.authEmail.regex}
                            regexErrMessage={AUTH_INP_DATA.authEmail.errorsText.pattern}
                        />
                        <small className="form-controller__message">
                            {errors["signin-email"]?.type === "required" && AUTH_INP_DATA.authEmail.errorsText.required}
                            {errors["signin-email"]?.type === "pattern" && AUTH_INP_DATA.authEmail.errorsText.pattern}
                        </small>
                    </StyledWrapper>

                    <StyledWrapper className="form-controller">
                        <ValidTextarea
                            id="signin-pass"
                            className="textarea inp"
                            title={PASSPHRASE_DATA.title}
                            placeholder={PASSPHRASE_DATA.placeholder}
                            required
                            register={register}
                            rows={PASSPHRASE_DATA.rowsCount}
                            regex={PASSPHRASE_DATA.regex}
                            regexErrMessage={PASSPHRASE_DATA.regexErrMessage}
                        />
                        <small className="form-controller__message">
                            {errors["signin-pass"]?.type === "required" && PASSPHRASE_DATA.requiredErrMessage}
                            {errors["signin-pass"]?.type === "pattern" && PASSPHRASE_DATA.regexErrMessage}
                        </small>
                        <small className="form-controller__message">{userError !== "" && userError}</small>
                    </StyledWrapper>
                </EnterPassphrase>

                <StyledWrapper className="btn-group">
                    <Btn
                        type="submit"
                        className="btn btn-fill-sm"
                        disabled={isSubmitting}
                    >
                        <span>{isSubmitting ? "Sending..." : "Sign in"}</span>
                    </Btn>
                </StyledWrapper>
                <span className="form-backlink">
                    Don&apos;t have wallet?&nbsp;
                    <Link
                        href={ROUTES.public.register}
                        className="link"
                        scroll={false}
                    >
                        Register
                    </Link>
                </span>
            </form>
        </div>
    );
};
