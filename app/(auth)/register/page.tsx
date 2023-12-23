"use client"

import React from 'react'
import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import Multistep from '@/modules/Forms/Multistep';

export default function Register() {

    return (
        <SectionLayout id="register">
            <PageBreadcrumb
                // * Don't add space between slash and &nbsp;
                separator={<span>&nbsp;/&nbsp;</span>}
                activeClass="breadcrumb-active"
                pageTitle="Register"
            />
            <div className="page-inner">
                <Multistep/>
            </div>
        </SectionLayout>
    );
}
