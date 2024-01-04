"use client";

import React from "react";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import LinkList from "@/components/LinkList";
import SectionLayout from "@/modules/layout/SectionLayout";
import { dashboardLinks } from "@/data/cabinet/dashboard";

export default function Dashboard() {
    return (
        <SectionLayout id="page-cab dashboard">
            <div className="inner">
                {/* NAV */}
                <StyledWrapper className="cabinet-card dashboard-nav">
                    <div className="modal-header">
                        <h4 className="h4">Site navigation</h4>
                    </div>
                    <nav>
                        <ul className="dashboard-nav__list">
                            <LinkList linksArr={dashboardLinks} />
                        </ul>
                    </nav>
                </StyledWrapper>

                {/* BALANCE */}
                <StyledWrapper className="cabinet-card dashboard-balance">BALANCE</StyledWrapper>

                {/* STAT */}
                <StyledWrapper className="cabinet-card dashboard-stat">STAT</StyledWrapper>
                
                {/* * SHORT LOGS */}
                <StyledWrapper className="cabinet-card dashboard-log">SHORT LOGS</StyledWrapper>
            </div>
        </SectionLayout>
    );
}
