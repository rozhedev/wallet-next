"use client";

import React, { FC, useRef } from "react";
import type { TScrollCounterProps } from "./types";
import { useCountUp } from "react-countup";

export const ScrollCounter: FC<TScrollCounterProps> = ({ start, curCount }) => {
    // * Don't change props values
    const countUpRef = useRef(null);
    useCountUp({
        ref: countUpRef,
        startOnMount: false,
        start: start,
        end: curCount,
        duration: 5,
        enableScrollSpy: true,
        scrollSpyOnce: true,
        scrollSpyDelay: 1000,
    });

    return (
        <span
            className="main-assets__count"
        >
            +
            <span
                className="main-assets__count-value"
                id="main-assets-count-value"
                ref={countUpRef}
            >
                {start}
            </span>
        </span>
    );
};
