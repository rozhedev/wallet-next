import React, { useEffect } from "react";
import type { TRateObj } from "@/types/data/rate-api";
import { WS_RATE_API } from "@/data/pages/rate-api";
import { getCurRatePromise } from "@/utils/get-cur-rate-promise";

export const useRateObj = async (rateObj: TRateObj, setRateObj: React.Dispatch<React.SetStateAction<TRateObj>>) => {
    useEffect(() => {
        getCurRatePromise(WS_RATE_API.bitcoin).then((res: any) => {
            res = +res;
            setRateObj((prev: any) => {
                const currentState = { ...prev, bitcoin: res };
                return currentState;
            });
        });
        getCurRatePromise(WS_RATE_API.ethereum).then((res: any) => {
            res = +res;
            setRateObj((prev: any) => {
                const currentState = { ...prev, ethereum: res };
                return currentState;
            });
        });
        getCurRatePromise(WS_RATE_API["binance-coin"]).then((res: any) => {
            res = +res;
            setRateObj((prev: any) => {
                const currentState = { ...prev, ["binance-coin"]: res };
                return currentState;
            });
        });
        getCurRatePromise(WS_RATE_API.stellar).then((res: any) => {
            res = +res;
            setRateObj((prev: any) => {
                const currentState = { ...prev, stellar: res };
                return currentState;
            });
        });
        getCurRatePromise(WS_RATE_API.solana).then((res: any) => {
            res = +res;
            setRateObj((prev: any) => {
                const currentState = { ...prev, solana: res };
                return currentState;
            });
        });
        getCurRatePromise(WS_RATE_API.litecoin).then((res: any) => {
            res = +res;
            setRateObj((prev: any) => {
                const currentState = { ...prev, litecoin: res };
                return currentState;
            });
        });
        getCurRatePromise(WS_RATE_API.monero).then((res: any) => {
            res = +res;
            setRateObj((prev: any) => {
                const currentState = { ...prev, monero: res };
                return currentState;
            });
        });
        getCurRatePromise(WS_RATE_API.dash).then((res: any) => {
            res = +res;
            setRateObj((prev: any) => {
                const currentState = { ...prev, dash: res };
                return currentState;
            });
        });
        getCurRatePromise(WS_RATE_API.tron).then((res: any) => {
            res = +res;
            setRateObj((prev: any) => {
                const currentState = { ...prev, tron: res };
                return currentState;
            });
        });
    }, []);

    return rateObj;
};
