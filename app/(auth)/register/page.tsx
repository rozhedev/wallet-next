"use client"

import React from 'react'
import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import Multistep from '@/modules/Forms/Multistep';
import { useForm } from "react-hook-form";
import type { TRegisterForm } from "@/types/data/forms";
import { REGISTER_INIT_VALUES, passArr, passStr } from "@/data/pages/inp-data";

export default function Register() {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting},
        getValues,
        setValue,
        reset,
    } = useForm<TRegisterForm>({
        defaultValues: REGISTER_INIT_VALUES,
    });

    return (
        <SectionLayout id="register">
            <PageBreadcrumb
                // * Don't add space between slash and &nbsp;
                separator={<span>&nbsp;/&nbsp;</span>}
                activeClass="breadcrumb-active"
                pageTitle="Register"
            />
            <div className="page-inner">
                <Multistep register={register} control={control} handleSubmit={handleSubmit} errors={errors} isSubmitting={isSubmitting} setValue={setValue} getValues={getValues} passArr={passArr} passStr={passStr} reset={reset}/>
            </div>
        </SectionLayout>
    );
}
