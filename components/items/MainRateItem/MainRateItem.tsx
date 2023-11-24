import React, { FC } from "react";
import type { TMainRateItem } from "./types";
import { AllCurNames, TAllCurNotesScope } from "@/types/data/currencies";
import Image from "next/image";

export const MainRateItem: FC<TMainRateItem<TAllCurNotesScope, AllCurNames>> = ({ id, title, imgPath, imgAlt, rate, rateId, isIncreased }) => {
    return (
        <div
            className={`main-rate-item ${isIncreased ? "top" : "bottom"}`}
            id={id}
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
                <span
                    className="output"
                    id={rateId}
                >
                    {rate}
                </span>
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
            </div>
        </div>
    );
};
