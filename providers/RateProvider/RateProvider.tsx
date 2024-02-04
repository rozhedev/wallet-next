"use client";

import React, { FC, useState, createContext } from "react";
import type { TRateObjProps } from "./types";
import type { TRateObj } from "@/types/api/rate-api";
import { rateObjInit } from "@/data/api/rate-api";
import { useRateObj } from "@/utils/use-rate-obj";

export const RateContext = createContext<TRateObj>(rateObjInit);

export const RateProvider: FC<TRateObjProps> = ({ rates, children }) => {
    const [rateObj, setRateObj] = useState<TRateObj>(rates);
    useRateObj(rateObj, setRateObj);

    console.log(rateObj);

    return <RateContext.Provider value={rateObj}>{children}</RateContext.Provider>;
};
