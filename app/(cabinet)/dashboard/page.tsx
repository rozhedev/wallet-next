"use client";

// * Libs - Types - Hooks - UI - Component - Modules - Data
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { type TAllCurNotesScope } from "@/types/data/currencies";
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
import { setLocalStorageArr } from "@/utils/utils";

export default function Dashboard() {
    const isDataArrEmpty = historyTableItemArr.length === 0;
    const [balancesArr, setBalancesArr] = useState<TBalanceItemArr | []>([]);

    // * Calc total balance & added items arr
    let totalBalance: number | "0.00" = balancesArr.reduce((prev: number, item: TBalanceItem<TAllCurNotesScope>) => {
        if (item.usdAmount === 0) return prev;
        // * Additional fixed for more than 2 values after comma in some cases
        return +(+prev.toFixed(2) + +item.usdAmount.toFixed(2)).toFixed(2);
    }, 0);
    totalBalance === 0 ? (totalBalance = "0.00") : totalBalance;

    const addedItems: TBalanceItemArr = balancesArr.filter((item) => item.isAdded);

    // * Date & time
    const date = new Date();
    const checkDateNum = (condNum: number, num: number) => (condNum > 9 ? num : "0" + num);

    const currentDate: string = `${date.getUTCFullYear()}.${checkDateNum(date.getUTCMonth(), date.getUTCMonth() + 1)}.${checkDateNum(date.getUTCDate(), date.getUTCDate())}`;

    const currentTime: string = `${checkDateNum(date.getUTCHours(), date.getUTCHours())}:${checkDateNum(date.getUTCMinutes(), date.getUTCMinutes())}`;

    // * Load from localStorage if it has data
    useEffect(() => {
        setLocalStorageArr("balances", balanceItems, setBalancesArr, setBalancesArr);
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
                    {addedItems.map((item: TBalanceItem<TAllCurNotesScope>) => (
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
                    ))}
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
                    {dashboardStatItemArr.map((item: TDashboardStatItem) => {
                        if (item.idOutput === "stat-total-balance")
                            return (
                                <DashboardStatItem
                                    key={item.id}
                                    id={item.id}
                                    svgIcon={item.svgIcon}
                                    title={item.title}
                                    idOutput={item.idOutput}
                                    value={`${totalBalance}$`}
                                />
                            );
                        if (item.idOutput === "stat-added-assets")
                            return (
                                <DashboardStatItem
                                    key={item.id}
                                    id={item.id}
                                    svgIcon={item.svgIcon}
                                    title={item.title}
                                    idOutput={item.idOutput}
                                    value={addedItems.length}
                                />
                            );
                        if (item.idOutput === "stat-server-date")
                            return (
                                <DashboardStatItem
                                    key={item.id}
                                    id={item.id}
                                    svgIcon={item.svgIcon}
                                    title={item.title}
                                    idOutput={item.idOutput}
                                    value={currentDate}
                                />
                            );
                        if (item.idOutput === "stat-server-time")
                            return (
                                <DashboardStatItem
                                    key={item.id}
                                    id={item.id}
                                    svgIcon={item.svgIcon}
                                    title={item.title}
                                    idOutput={item.idOutput}
                                    value={currentTime}
                                />
                            );
                        return (
                            <DashboardStatItem
                                key={item.id}
                                id={item.id}
                                svgIcon={item.svgIcon}
                                title={item.title}
                                idOutput={item.idOutput}
                                value={item.value}
                            />
                        );
                    })}
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
