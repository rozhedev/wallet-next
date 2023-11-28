"use client";

import React, { FC } from "react";

import type { TMainRateProps } from "./types";
import MainRateItem from "@/components/items/MainRateItem";

export const MainRate: FC<TMainRateProps> = ({ dataArr }) => {
    return (
        <div className="inner">
            {dataArr.map((item: any) => (
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
