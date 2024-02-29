import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import AuthWrapper from "@/modules/layout/AuthWrapper";
import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import RegisterWallet from "@/modules/Forms/RegisterWallet";

export default async function Register() {
    const session = await getServerSession(authOptions);
    if (session) redirect("/dashboard");

    return (
        <AuthWrapper className="register-page">
            <SectionLayout id="register">
                <PageBreadcrumb
                    // * Don't add space between slash and &nbsp;
                    separator={<span>&nbsp;/&nbsp;</span>}
                    activeClass="breadcrumb-active"
                    pageTitle="Register"
                />
                <div className="page-inner">
                    <RegisterWallet />
                </div>
            </SectionLayout>
        </AuthWrapper>
    );
}
