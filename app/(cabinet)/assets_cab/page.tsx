"use client";

// * Libs - Types - Hooks - UI - Component - Modules - Data
import React, { useEffect, useMemo, useState } from "react";
import type { TAllCurNotesScope } from "@/types/data/currencies";
import { RequiredPick } from "@/types/utils/utils";

import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Inp from "@/ui/Inp/Inp";
import BalanceItem, { type TBalanceItem, type TBalanceItemArr, balanceItems } from "@/components/items/BalanceItem";
import SectionLayout from "@/modules/layout/SectionLayout";

export default function AssetsCab() {
    const [balanceItemArr, setBalanceItemArr] = useState<TBalanceItemArr>(balanceItems);
    const [searchQuery, setSearchQuery] = useState<string>("");

    // * Handlers
    const toggleItemHandler = (item: TBalanceItem<TAllCurNotesScope>, id: RequiredPick<TBalanceItem<TAllCurNotesScope>, "id">) => {
        const notChangedItems = balanceItemArr.filter((item) => item.id !== id);
        const newArr = [
            ...notChangedItems,
            {
                id: item.id,
                curIconPath: item.curIconPath,
                curIconAlt: item.curIconAlt,
                curName: item.curName,
                walletAddress: item.walletAddress,
                pureAmount: item.pureAmount,
                usdAmount: item.usdAmount,
                qrCodeImg: item.qrCodeImg,
                isAdded: !item.isAdded,
            },
        ];
        setBalanceItemArr(newArr);
        localStorage.setItem("balances", JSON.stringify(newArr));
    };

    const searchedItems = useMemo(() => {
        return balanceItemArr.filter((item: TBalanceItem<TAllCurNotesScope>) => {
            return item.curName.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }, [balanceItemArr, searchQuery]);

    // * Load from localStorage
    useEffect(() => {
        const balances: any = localStorage.getItem("balances");
        setBalanceItemArr(JSON.parse(balances));
    }, []);

    return (
        <SectionLayout id="page-cab assets-cab">
            <div className="inner">
                {/* //* Pinned assets */}
                <StyledWrapper className="cabinet-card assets-cab-portfolio">
                    <div className="modal-header">
                        <h4 className="h4">Added assets</h4>
                    </div>
                    <div className="added-assets">
                        {/* //* Use balanceItemArr instead searchItems, for prevent array filtration in Added assets card */}

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
                                        qrCodeImg={item.qrCodeImg}
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
                            type="search"
                            name="assets-cab-search"
                            title="assets-cab-search"
                            id="assets-cab-search"
                            className="inp"
                            placeholder="🔎 Search"
                            maxLength={20}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="assets-cab-store__content">
                        {searchedItems.length > 0 ? (
                            searchedItems.map((item: TBalanceItem<TAllCurNotesScope>) => {
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
                                            qrCodeImg={item.qrCodeImg}
                                            isAdded={item.isAdded}
                                            isAssetsCab={true}
                                            toggleItemHandler={() => toggleItemHandler(item, item.id)}
                                        />
                                    );
                            })
                        ) : (
                            <span className="navlink assets-cab-store__content-message">Nothing found</span>
                        )}
                    </div>
                </StyledWrapper>
            </div>
        </SectionLayout>
    );
}
