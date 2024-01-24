"use client";

// * Libs - Types - Hooks - UI - Component - Modules - Data
import React, { useState, useEffect } from "react";
import Link from "next/link";

import type { TAllCurNotesScope } from "@/types/data/currencies";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";

import LinkList from "@/components/LinkList";
import BalanceItem, { type TBalanceItem, type TBalanceItemArr, balanceItems } from "@/components/items/BalanceItem";
import DashboardStatItem, { type TDashboardStatItem, dashboardStatItemArr } from "@/components/items/DashboardStatItem";
import HistoryTableItem, { type THistoryTableItem, historyTableItemArr } from "@/components/items/HistoryTableItem";

import SectionLayout from "@/modules/layout/SectionLayout";
import { dashboardLinks } from "@/data/cabinet/dashboard";
import { ROUTES } from "@/data/routes";
import { layersIcon } from "@/data/pages/web3-icons";
import { eyeShowIcon } from "@/data/pages/ui-icons";
import { historyEmptyTableLabel } from "@/data/cabinet/history";

export default function Dashboard() {
    const isDataArrEmpty = historyTableItemArr.length === 0;
    const [balancesArr, setBalancesArr] = useState<TBalanceItemArr | []>([]);

    useEffect(() => {
        // * Use "any" to prevent type mismatches: string | null & string
        const temp: any = localStorage.getItem("balances");
        const parsedTemp = JSON.parse(temp);
        console.log(parsedTemp);

        parsedTemp !== null ? setBalancesArr(parsedTemp) : setBalancesArr(balanceItems);
    }, []);

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
                    {balancesArr.map((item: TBalanceItem<TAllCurNotesScope>) => {
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
                            {layersIcon}
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
                    {!isDataArrEmpty ? (
                        historyTableItemArr.map((item: THistoryTableItem) => (
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
                        ))
                    ) : (
                        <span className="history-table--message navlink">{historyEmptyTableLabel}</span>
                    )}
                    <StyledWrapper className="btn-group">
                        <Link
                            href={ROUTES.private.history}
                            className="btn btn-outline-xs"
                        >
                            <span>View all</span>
                            {eyeShowIcon}
                        </Link>
                    </StyledWrapper>
                </StyledWrapper>
            </div>
        </SectionLayout>
    );
}
