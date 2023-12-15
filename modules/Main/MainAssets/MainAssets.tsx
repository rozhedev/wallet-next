import React, { FC } from "react";
import Link from "next/link";

import type { TMainAssetsProps } from "./types";
import MainAssetsItem, { TMainAssetsItem } from "@/components/items/MainAssetsItem";
import ScrollCounter from "@/components/ScrollCounter";
import { curPromoCount } from "@/data/pages/common";
import { AllCurNames, TAllCurNotesScope } from "@/types/data/currencies";

export const MainAssets: FC<TMainAssetsProps> = ({ promoTitle, dataArr }) => {
    return (
        <>
            <div className="main-assets__header section-title">
                <ScrollCounter start={0} curCount={curPromoCount} />
                <span className="h4">{promoTitle}</span>
            </div>
            <div className="inner">
                {dataArr.map((item: TMainAssetsItem<TAllCurNotesScope, AllCurNames>) => (
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
                        href="/assets"
                        className="btn btn-fill"
                    >
                        <span>View full list</span>
                        <svg
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M54.8571 32V59.4285H4.57141V9.14282H32" />
                            <path d="M59.4285 22.8572V4.57153H41.1428" />
                            <path d="M36.5714 27.4287L59.4286 4.57153" />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    );
};
