"use client";

import React from "react";

import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import BalanceItem, { type TBalanceItem, balanceItemArr } from "@/components/items/BalanceItem";
import type { TStoreAssetsItem } from "@/components/items/StoreAssetsItem";
import SectionLayout from "@/modules/layout/SectionLayout";
import type { TAllCurNotesScope } from "@/types/data/currencies";

export default function History() {
    return (
        <SectionLayout id="page-cab assets-cab">
            <div className="inner">
                <StyledWrapper className="cabinet-card assets-cab-portfolio">
                    <div className="modal-header">
                        <h4 className="h4">Added assets</h4>
                    </div>
                    <div className="added-assets">
                        {balanceItemArr.map((item: TBalanceItem<TStoreAssetsItem<TAllCurNotesScope>>) => (
                            <BalanceItem
                                key={item.id}
                                id={item.id}
                                curIconPath={item.curIconPath}
                                curIconAlt={item.curIconAlt}
                                curName={item.curName}
                                pureAmount={item.pureAmount}
                                usdAmount={item.usdAmount}
                                isAssetsCab={true}
                            />
                        ))}
                    </div>
                </StyledWrapper>
            </div>
        </SectionLayout>
    );
}
