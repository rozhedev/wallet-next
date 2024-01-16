"use client";

// * Libs - Types - Hooks - UI - Component - Modules - Data
import React from "react";
import Link from "next/link";

import type { TAllCurNotesScope } from "@/types/data/currencies";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";

import LinkList from "@/components/LinkList";
import BalanceItem, { type TBalanceItem, balanceItems } from "@/components/items/BalanceItem";
import DashboardStatItem, { type TDashboardStatItem, dashboardStatItemArr } from "@/components/items/DashboardStatItem";
import HistoryTableItem, { type THistoryTableItem, historyTableItemArr } from "@/components/items/HistoryTableItem";

import SectionLayout from "@/modules/layout/SectionLayout";
import { dashboardLinks } from "@/data/cabinet/dashboard";
import { ROUTES } from "@/data/routes";

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
                    {/* Not sync with assets */}
                    {balanceItems.map((item: TBalanceItem<TAllCurNotesScope>) => {
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
                                    qrCodeImg={item.qrCodeImg}
                                    isAdded={item.isAdded}
                                    isAssetsCab={false}
                                />
                            );
                    })}
                    <StyledWrapper className="btn-group">
                        <Link
                            href={ROUTES.private.assetsCab}
                            className="btn btn-outline-xs"
                        >
                            <span>Edit on Assets</span>
                            <svg
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M59.4287 22.8571L32.0001 36.5714L4.57153 22.8571L32.0001 9.14282L59.4287 22.8571Z" />
                                <path d="M41.143 32L59.4287 41.1429L32.0001 54.8571L4.57153 41.1429L22.8572 32" />
                            </svg>
                        </Link>
                    </StyledWrapper>
                </StyledWrapper>

                {/* STAT */}
                <StyledWrapper className="cabinet-card dashboard-stat">
                    {dashboardStatItemArr.map((item: TDashboardStatItem) => (
                        <DashboardStatItem
                            key={item.id}
                            id={item.id}
                            svgIcon={item.svgIcon}
                            title={item.title}
                            idOutput={item.idOutput}
                            value={item.value}
                        />
                    ))}
                </StyledWrapper>

                {/* * SHORT LOGS */}
                <StyledWrapper className="cabinet-card dashboard-log">
                    <div className="modal-header">
                        <h4 className="h4">Recent actions</h4>
                    </div>
                    {historyTableItemArr.map((item: THistoryTableItem) => (
                        <HistoryTableItem
                            key={item.id}
                            id={item.id}
                            operType={item.operType}
                            curName={item.curName}
                            curSign={item.curSign}
                            amount={item.amount}
                            transactionStatus={item.transactionStatus}
                            transactionId={item.transactionId}
                            date={item.date}
                            recipient={item.recipient}
                            svgIcon={item.svgIcon}
                            modifClass={item.modifClass}
                            isHistory={false}
                        />
                    ))}
                    <StyledWrapper className="btn-group">
                        <Link
                            href={ROUTES.private.history}
                            className="btn btn-outline-xs"
                        >
                            <span>View all</span>
                            <svg
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M59.4287 32.0001C59.4287 32.0001 50.2858 50.2858 32.0001 50.2858C13.7144 50.2858 4.57153 32.0001 4.57153 32.0001C4.57153 32.0001 13.7144 13.7144 32.0001 13.7144C50.2858 13.7144 59.4287 32.0001 59.4287 32.0001Z" />
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="8.14286"
                                />
                            </svg>
                        </Link>
                    </StyledWrapper>
                </StyledWrapper>
            </div>
        </SectionLayout>
    );
}
