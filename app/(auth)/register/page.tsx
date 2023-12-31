"use client"

import React from 'react'
import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import RegisterWallet from '@/modules/Forms/RegisterWallet';

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
                <RegisterWallet/>
            </div>
        </SectionLayout>
    );
}
