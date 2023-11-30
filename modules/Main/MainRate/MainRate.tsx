"use client";

import React, { FC } from "react";

import type { TMainRateProps } from "./types";
import MainRateItem, { TMainRateItem, TApiLinkMask } from "@/components/items/MainRateItem";
import { AllCurNames, TAllCurNotesScope } from "@/types/data/currencies";

export const MainRate: FC<TMainRateProps> = ({ dataArr }) => {
    return (
        <div className="inner">
            {dataArr.map((item: TMainRateItem<TAllCurNotesScope, AllCurNames, TApiLinkMask>) => (
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
