import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import RegisterWallet from "@/modules/Forms/RegisterWallet";

export default async function Register() {
    const session = await getServerSession(authOptions);
    if (session) redirect("/dashboard");

    return (
        <div className="page-inner">
            <RegisterWallet />
        </div>
    );
}
