import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SigninWallet from "@/modules/Forms/SigninWallet";

export default async function Signin() {
    const session = await getServerSession(authOptions);
    if (session) redirect("/dashboard");

    return (
        <div className="page-inner">
            <SigninWallet />
        </div>
    );
}
