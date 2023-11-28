"use client";

import React, { FC, useRef } from "react";
import type { TScrollCounterProps } from "./types";
import CountUp, { useCountUp } from "react-countup";

export const ScrollCounter: FC<TScrollCounterProps> = ({ curCount }) => {
    // * Don't change props values
    useCountUp({
        ref: "main-assets-count-value",
        startOnMount: false,
        start: 0,
        end: curCount,
        duration: 5,
        enableScrollSpy: true,
        scrollSpyOnce: true,
        scrollSpyDelay: 1000,
    });

    return (
        <span className="main-assets__count">
            +
            <span
                className="main-assets__count-value"
                id="main-assets-count-value"
            >
                <CountUp
                    start={0}
                    end={curCount}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                />
            </span>
        </span>
    );
};
