"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import type { TApiLinkMask, TMainRateItem } from "./types";
import { AllCurNames, TAllCurNotesScope } from "@/types/data/currencies";
import Image from "next/image";
import { getCurRatePromise } from "./hooks";
import RateSkeleton from "./RateSkeleton";

export const MainRateItem: FC<TMainRateItem<TAllCurNotesScope, AllCurNames, TApiLinkMask>> = ({ id, title, imgPath, imgAlt, apiLink }) => {
    const [rate, setRate] = useState<any>(0);
    const [isIncreased, setIsIncreased] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const prevRateRef = useRef(0);
    useEffect(() => {
        getCurRatePromise(apiLink).then((res: any) => {
            res = +res;
            setRate(res);
            setIsLoading(true);

            prevRateRef.current = rate;
            const prevValue = prevRateRef.current;

            // * For prevent stopping rate update
            prevValue === res && setIsIncreased(() => !isIncreased);
            prevValue < res ? setIsIncreased(true) : setIsIncreased(false);

            // * Round values
            res > 10 ? setRate(parseFloat(res).toFixed(2)) : setRate(parseFloat(res).toFixed(4));
        });
    }, [rate, isIncreased]);

    return (
        <div
            id={id}
            className={`main-rate-item ${isIncreased ? "top" : "bottom"}`}
        >
            <div className="main-rate-item__content">
                <div className="main-rate-item__icon">
                    <Image
                        src={imgPath}
                        alt={imgAlt}
                    ></Image>
                </div>
                <h5 className="h3">{title}</h5>
            </div>
            <div className="main-rate-item__output">
                {isLoading ? (
                    <>
                        <span className="output">${rate}</span>
                        <div className="main-rate-item__dir-icon">
                            <svg
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M53.3334 26.6667V10.6667L37.3334 10.6667" />
                                <path d="M53.3334 10.6666L10.6667 53.3333" />
                            </svg>
                        </div>
                    </>
                ) : (
                    <RateSkeleton
                        uniqueKey="main-rate-item-skeleton"
                        speed={1.5}
                        width={160}
                        height={32}
                        bgColor={"transparent"}
                        foregroundColor={"#f5f5f5"}
                        rectWidth={160}
                        rectHeight={32}
                        borderRadius={8}
                    />
                )}
            </div>
        </div>
    );
};
