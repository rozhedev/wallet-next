import React from "react";
import { AllCurFullNames } from "@/types/data/currencies";

export type TAirdropProviderProps = {
    children: React.ReactElement | React.ReactElement[];
    value: TAirdropInfo | undefined;
};

export type TAirdropInfo = {
    currency: AllCurFullNames | "",
    amount: number,
    // limits: TAirdropLimits
}