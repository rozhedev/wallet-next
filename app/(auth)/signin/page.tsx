"use client";

import React from "react";
import Link from "next/link";
import { useForm, useFieldArray } from "react-hook-form";
import { FieldValues } from "react-hook-form";

import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Btn from "@/ui/Btn/Btn";
import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import EnterPassphrase from "@/modules/Forms/EnterPassphrase";

import type { TSigninForm } from "@/types/data/forms";
import { INP_DATA, SIGNIN_INIT_VALUES } from "@/data/pages/inp-data";
import { getPassphraseStr } from "@/utils/utils";
import { ROUTES } from "@/data/routes";

export default function Signin() {
    const {
        register,
        control,
        handleSubmit,
        formState: { isSubmitting },
        getValues,
        reset,
    } = useForm<TSigninForm>({
        defaultValues: SIGNIN_INIT_VALUES,
    });

    const { fields: signupFields } = useFieldArray({
        control,
        name: "signin-inp",
    });

    const submitForm = async (data: FieldValues) => {
        const signinInpValuesStr = getPassphraseStr(getValues, "signin-inp");
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
                            id="register-confirm-form"
                            className="form-step form-confirm"
                            legend="Paste your passphrase from the inputs below to complete registration."
                        >
                            {signupFields.map((field, i) => (
                                <input
                                    key={field.id}
                                    type="text"
                                    id={`${INP_DATA.fieldArrValues.signin}.${i}.value`}
                                    title={`${INP_DATA.fieldArrValues.signin} ${i}`}
                                    className="inp confirm-inp"
                                    placeholder={`${i + 1}`}
                                    minLength={INP_DATA.fieldArrValues.wordMinLenght}
                                    maxLength={INP_DATA.fieldArrValues.wordMaxLenght}
                                    autoComplete="off"
                                    required
                                    {...register(`signin-inp.${i}.value`, {})}
                                />
                            ))}
                        </EnterPassphrase>

                        <StyledWrapper className="btn-group">
                            <Btn
                                type="submit"
                                className="btn btn-fill-sm"
                                disabled={isSubmitting}
                            >
                                <span>Sign in</span>
                            </Btn>
                        </StyledWrapper>
                        <span className="form-backlink">
                            Don&apos;t have wallet?&nbsp;
                            <Link
                                href={ROUTES.public.register}
                                className="link"
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
