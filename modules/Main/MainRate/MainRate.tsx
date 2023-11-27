"use client";

import React, { FC, useState, useEffect } from "react";

import type { TMainRateProps } from "./types";
import type { TMainRateItemArr } from "@/components/items/MainRateItem/types";
import MainRateItem from "@/components/items/MainRateItem";
import { mainRateItemArr } from "@/components/items/MainRateItem";
import { getSocketCurRate } from "./hooks";
import { log } from "console";

export const MainRate: FC<TMainRateProps> = ({ dataArr }) => {
    const [rateList, setRateList] = useState<TMainRateItemArr>(dataArr);
    const [isIncreased, setIsIncreased] = useState<boolean>(true);
    const [isGetRate, setIsGetRate] = useState<boolean>(false);
    getSocketCurRate("wss://stream.binance.com:9443/ws/algousdt@trade").then((res) => console.log(res));

    useEffect(() => {
        dataArr.map((item) => getSocketCurRate(item.apiLink).then((res) => (item.rate = res)));
        setRateList(dataArr);
        // dataArr.every((item) => item.rate !== 0 && setIsGetRate(true))
        console.log(dataArr);
    }, []);
    return (
        <div className="inner">
            {dataArr.map((item: any) => (
                <MainRateItem
                    key={item.id}
                    id={item.id}
                    className={`main-rate-item ${isIncreased ? "top" : "bottom"}`}
                    title={item.title}
                    imgPath={item.imgPath}
                    imgAlt={item.imgAlt}
                    apiLink={item.apiLink}
                    rate={item.rate}
                />
            ))}
        </div>
    );
};
