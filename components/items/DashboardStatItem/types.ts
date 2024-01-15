import React from "react";

export type TDashboardStatItem = {
    id: number;
    svgIcon: React.ReactNode
    title: string;
    idOutput: `stat-${string}`;
    value: number | string;
};

export type TDashboardStatItemArr = TDashboardStatItem[];