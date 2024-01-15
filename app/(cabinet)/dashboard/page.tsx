"use client";

// * Libs - Types - Hooks - UI - Component - Modules - Data
import React from "react";

import type { TAllCurNotesScope } from "@/types/data/currencies";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import BalanceItem, { type TBalanceItem, balanceItems } from "@/components/items/BalanceItem";

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
                <StyledWrapper className="cabinet-card dashboard-balance">
                    <div className="modal-header">
                        <h4 className="h4">Assets preview</h4>
                    </div>
                    {/* Not sync with assets */}
                    {/* {balanceItems.map((item: TBalanceItem<TAllCurNotesScope>) => {
                        if (item.isAdded)
                            return (
                                <BalanceItem
                                    key={item.id}
                                    id={item.id}
                                    curIconPath={item.curIconPath}
                                    curIconAlt={item.curIconAlt}
                                    curName={item.curName}
                                    pureAmount={item.pureAmount}
                                    usdAmount={item.usdAmount}
                                    walletAddress={item.walletAddress}
                                    isAdded={item.isAdded}
                                    isAssetsCab={false}
                                />
                            );
                    })} */}
                </StyledWrapper>

                {/* STAT */}
                <StyledWrapper className="cabinet-card dashboard-stat">STAT</StyledWrapper>

                {/* * SHORT LOGS */}
                <StyledWrapper className="cabinet-card dashboard-log">SHORT LOGS</StyledWrapper>
            </div>
        </SectionLayout>
    );
}
