import React, { useState } from "react";
import { TApiLinkMask } from "@/components/items/MainRateItem/types";

export const useFetching = (cb: any) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [loadErr, setLoadErr] = useState<string>("");

    const fetching = async () => {
        try {
            setIsLoading(true);
            await cb();
        } catch (err: any) {
            setLoadErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };
    return [fetching, isLoading, loadErr];
};

export const getSocketCurRate = (apiLink: TApiLinkMask) => {
    let ws: WebSocket = new WebSocket(apiLink);

    return new Promise(function (resolve, reject) {
        ws.onmessage = function (e) {
            let stockObj = JSON.parse(e.data);
            let price = stockObj.p;
            resolve(price);
        };
        ws.onerror = function (e) {
            console.error(e, e.timeStamp);
        };
    });
};
