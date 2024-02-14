import React, { FC } from "react";
import Link from "next/link";

import type { TMainAssetsProps } from "./types";
import MainAssetsItem, { type TMainAssetsItem } from "@/components/items/MainAssetsItem";
import ScrollCounter from "@/components/ScrollCounter";
import { curPromoCount } from "@/data/pages/initial";
import { AllCurShortNames, type TAllCurNotesScope } from "@/types/data/currencies";
import { externalLinkIcon } from "@/data/pages/ui-icons";
import { ROUTES } from "@/data/routes";

export const MainAssets: FC<TMainAssetsProps> = ({ promoTitle, dataArr }) => {
    return (
        <>
            <div className="main-assets__header section-title">
                <ScrollCounter
                    start={0}
                    curCount={curPromoCount}
                />
                <span className="h4">{promoTitle}</span>
            </div>
            <div className="inner">
                {dataArr.map((item: TMainAssetsItem<TAllCurNotesScope, AllCurShortNames>) => (
                    <MainAssetsItem
                        key={item.id}
                        id={item.id}
                        disabled={item.disabled}
                        imgPath={item.imgPath}
                        imgAlt={item.imgAlt}
                        title={item.title}
                    />
                ))}
                <div className="main-assets__btn-overlay">
                    <Link
                        href={ROUTES.public.assets}
                        className="btn btn-fill"
                        scroll={false}
                    >
                        <span>View full list</span>
                        {externalLinkIcon}
                    </Link>
                </div>
            </div>
        </>
    );
};
