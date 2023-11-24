import React, { FC } from "react";
import Link from "next/link";

import type { TMainAssetsProps } from "./types";
import MainAssetsItem from "@/components/items/MainAssetsItem";

export const MainAssets: FC<TMainAssetsProps> = ({ promoTitle, curCount, dataArr }) => {
    return (
        <>
            <div className="main-assets__header section-title">
                <span className="main-assets__count">
                    +
                    <span
                        className="value"
                        data-count-limit={curCount}
                    >
                        70
                    </span>
                </span>
                <span className="h4">{promoTitle}</span>
            </div>
            <div className="inner">
                {dataArr.map((item) => (
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
                        href="/pages/assets"
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
