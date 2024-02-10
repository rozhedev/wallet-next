"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";

import type { TSigninForm } from "@/types/data/forms";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Btn from "@/ui/Btn/Btn";
import ValidTextarea from "@/ui/ValidTextarea/ValidTextarea";
import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import EnterPassphrase from "@/modules/Forms/EnterPassphrase";

import { PASSPHRASE_DATA, SIGNIN_INIT_VALUES } from "@/data/pages/inp-data";
import { ROUTES } from "@/data/routes";

export default function Signin() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        getValues,
        reset,
    } = useForm<TSigninForm>({
        defaultValues: SIGNIN_INIT_VALUES,
    });

    const submitForm = async (data: FieldValues) => {
        // * Clearing extra spaces
        const signinInpValuesStr = getValues("signin-inp").trim().split(/\s+/).join(" ");
        console.log(signinInpValuesStr);

        await new Promise((resolve: any) => setTimeout(resolve, 2000));
        reset();

        // * TODO Submit to server
        // * ...
    };

    return (
        <SectionLayout id="signin">
            <PageBreadcrumb
                // * Don't add space between slash and &nbsp;
                separator={<span>&nbsp;/&nbsp;</span>}
                activeClass="breadcrumb-active"
                pageTitle="Sign in"
            />
            <div className="page-inner">
                <div className="form-wrapper">
                    <form
                        action="/dashboard"
                        className="form"
                        onSubmit={handleSubmit(submitForm)}
                    >
                        <EnterPassphrase
                            id="signin-form"
                            className="form-step form-confirm"
                            legend="Paste your passphrase from the inputs below to complete registration."
                        >
                            <ValidTextarea
                                id="signin-inp"
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
                                {errors["signin-inp"]?.type === "required" && PASSPHRASE_DATA.requiredErrMessage}
                                {errors["signin-inp"]?.type === "pattern" && PASSPHRASE_DATA.regexErrMessage}
                            </small>
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
            </div>
        </SectionLayout>
    );
}
