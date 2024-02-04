import React from "react";
import { TRateObj } from "@/types/api/rate-api";

export type TRateObjProps = {
    children: React.ReactElement | React.ReactElement[];
    rates: TRateObj;
};
