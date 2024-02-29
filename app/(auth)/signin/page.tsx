import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import AuthWrapper from "@/modules/layout/AuthWrapper";
import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import SigninWallet from "@/modules/Forms/SigninWallet";

export default async function Signin() {
    const session = await getServerSession(authOptions);
    if (session) redirect("/dashboard");

    return (
        <AuthWrapper className="signin-page">
            <SectionLayout id="signin">
                <PageBreadcrumb
                    // * Don't add space between slash and &nbsp;
                    separator={<span>&nbsp;/&nbsp;</span>}
                    activeClass="breadcrumb-active"
                    pageTitle="Sign in"
                />
                <div className="page-inner">
                    <SigninWallet />
                </div>
            </SectionLayout>
        </AuthWrapper>
    );
}
