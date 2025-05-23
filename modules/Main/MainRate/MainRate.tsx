"use client";

import React, { FC } from "react";

import type { TMainRateProps } from "./types";
import MainRateItem, { type TMainRateItem, type TApiLinkMask } from "@/components/items/MainRateItem";
import { AllCurShortNames, type TAllCurNotesScope } from "@/types/data/currencies";

export const MainRate: FC<TMainRateProps> = ({ dataArr }) => {
    return (
        <div className="inner">
            {dataArr.map((item: TMainRateItem<TAllCurNotesScope, AllCurShortNames, TApiLinkMask>) => (
                <MainRateItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    imgPath={item.imgPath}
                    imgAlt={item.imgAlt}
                    apiLink={item.apiLink}
                />
            ))}
        </div>
    );
};
