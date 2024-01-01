"use client";

import React from "react";
import SectionLayout from "@/modules/layout/SectionLayout";
import LinkList from "@/components/LinkList";
import { dashboardLinks } from "@/data/pages/dashboard-links-arr";

export default function Dashboard() {
    return (
        <SectionLayout id="page-cab dashboard">
            <div className="inner">
                {/* NAV */}
                <div className="cabinet-card dashboard-nav">
                    <div className="modal-header">
                        <h4 className="h4">Navigation on site</h4>
                    </div>
                    <nav>
                        <ul className="dashboard-nav__list">
                            <LinkList linksArr={dashboardLinks} />
                        </ul>
                    </nav>
                </div>
                {/* BALANCE */}
                <div className="cabinet-card dashboard-balance">BALANCE</div>
                {/* STAT */}
                <div className="cabinet-card dashboard-stat">STAT</div>
                {/* * SHORT LOGS */}
                <div className="cabinet-card dashboard-log">SHORT LOGS</div>
            </div>
        </SectionLayout>
    );
}
