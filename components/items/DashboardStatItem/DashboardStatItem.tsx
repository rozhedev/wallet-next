"use client";

import React, { FC } from "react";
import type { TDashboardStatItem } from "./types";

export const DashboardStatItem: FC<TDashboardStatItem> = ({ svgIcon, title, idOutput, value }) => {
    return (
        <div className="dashboard-stat-item">
            <div className="dashboard-stat-item__icon">{svgIcon}</div>
            <div className="dashboard-stat-item__content">
                <h5 className="dashboard-stat-item__title">{title}</h5>
                <div
                    className="dashboard-stat-item__value output"
                    id={idOutput}
                >
                    {value}
                </div>
            </div>
        </div>
    );
};
