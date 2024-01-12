import type { TBalanceItemArr } from "../types";
import { wavesWAVES, wrappedBitcoinWBTC, xrpXRP, zcashZEC } from "@/data/pages/currencies-icons";

// * Data
export const balanceItemArrWXZ: TBalanceItemArr = [
    {
        id: "balance-item-waves",
        curIconPath: wavesWAVES,
        curIconAlt: "waves-WAVES",
        curName: "Waves (WAVES)",
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: "bc1-bitcoin",
        isAdded: false,
    },
    {
        id: "balance-item-wrapped-bitcoin",
        curIconPath: wrappedBitcoinWBTC,
        curIconAlt: "wrapped-bitcoin-WBTC",
        curName: "Wrapped Bitcoin (WBTC)",
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: "bc1-bitcoin",
        isAdded: false,
    },
    {
        id: "balance-item-xrp",
        curIconPath: xrpXRP,
        curIconAlt: "xrp-XRP",
        curName: "XRP (XRP)",
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: "bc1-bitcoin",
        isAdded: false,
    },
    {
        id: "balance-item-zcash",
        curIconPath: zcashZEC,
        curIconAlt: "zcash-ZEC",
        curName: "Zcash (ZEC)",
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: "bc1-bitcoin",
        isAdded: false,
    },
];
