"use client";

import React, { FC, createContext } from "react";
import type { TAirdropProviderProps, TAirdropInfo } from "./types";

const airdropInfo: TAirdropInfo = {
    currency: "",
    amount: 0,
};

export const AirdropContext = createContext<TAirdropInfo>(airdropInfo);

export const AirdropProvider: FC<TAirdropProviderProps> = ({ children }) => {
    return <AirdropContext.Provider value={airdropInfo}>{children}</AirdropContext.Provider>;
};
