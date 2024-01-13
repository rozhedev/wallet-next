"use client";

// * Libs - Types - Hooks - UI - Component - Modules - Data
import React, { useState } from "react";
import type { TAllCurNotesScope } from "@/types/data/currencies";

import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Inp from "@/ui/Inp/Inp";
import BalanceItem, { type TBalanceItem, type TBalanceItemArr, balanceItems } from "@/components/items/BalanceItem";
import SectionLayout from "@/modules/layout/SectionLayout";

export default function AssetsCab() {
    const [balanceItemArr, setBalanceItemArr] = useState<TBalanceItemArr>(balanceItems);

    const toggleItemHandler = (item: TBalanceItem<TAllCurNotesScope>, id: any) => {
        if (item.id === id) {
            const temp = balanceItemArr.filter((item) => item.id !== id);
            setBalanceItemArr([
                ...temp,
                {
                    id: item.id,
                    curIconPath: item.curIconPath,
                    curIconAlt: item.curIconAlt,
                    curName: item.curName,
                    walletAddress: item.walletAddress,
                    pureAmount: item.pureAmount,
                    usdAmount: item.usdAmount,
                    isAdded: !item.isAdded,
                },
            ]);
        }
    };

    return (
        <SectionLayout id="page-cab assets-cab">
            <div className="inner">
                {/* //* Pinned assets */}
                <StyledWrapper className="cabinet-card assets-cab-portfolio">
                    <div className="modal-header">
                        <h4 className="h4">Added assets</h4>
                    </div>
                    <div className="added-assets">
                        {balanceItemArr.map((item: TBalanceItem<TAllCurNotesScope>) => {
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
                                        isAssetsCab={true}
                                        toggleItemHandler={() => toggleItemHandler(item, item.id)}
                                    />
                                );
                        })}
                    </div>
                </StyledWrapper>

                {/* //* Available assets */}
                <StyledWrapper className="cabinet-card assets-cab-store">
                    <div className="modal-header">
                        <h4 className="h4">Supported assets</h4>
                        <Inp
                            type="text"
                            name="assets-cab-search"
                            title="assets-cab-search"
                            id="assets-cab-search"
                            className="inp"
                            placeholder="🔎 Search"
                        />
                    </div>
                    <div className="assets-cab-store__content">
                        {balanceItemArr.map((item: TBalanceItem<TAllCurNotesScope>) => {
                            if (!item.isAdded)
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
                                        isAssetsCab={true}
                                        toggleItemHandler={() => toggleItemHandler(item, item.id)}
                                    />
                                );
                        })}
                    </div>
                </StyledWrapper>
            </div>
        </SectionLayout>
    );
}
