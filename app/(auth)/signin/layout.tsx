"use client";

import React from "react";
import AuthWrapper from "@/modules/layout/AuthWrapper";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    return <AuthWrapper className="signin-page">{children}</AuthWrapper>;
}
