import { AllCurFullNames } from "@/types/data/currencies";
import type { TBalanceItemArr } from "../types";
import { wavesWAVES, wrappedBitcoinWBTC, xrpXRP, zcashZEC } from "@/data/pages/currencies-icons";

import { qrCodeBitcoinBTC } from "./icons";

// * Data
export const balanceItemArrWXZ: TBalanceItemArr = [
    {
        id: "balance-item-waves",
        curIconPath: wavesWAVES,
        curIconAlt: "waves-WAVES",
        curName: AllCurFullNames.waves,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: "bc1-bitcoin",
        qrCodeImg: qrCodeBitcoinBTC,
        isAdded: false,
    },
    {
        id: "balance-item-wrapped-bitcoin",
        curIconPath: wrappedBitcoinWBTC,
        curIconAlt: "wrapped-bitcoin-WBTC",
        curName: AllCurFullNames.wrappedBitcoin,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: "bc1-bitcoin",
        qrCodeImg: qrCodeBitcoinBTC,
        isAdded: false,
    },
    {
        id: "balance-item-xrp",
        curIconPath: xrpXRP,
        curIconAlt: "xrp-XRP",
        curName: AllCurFullNames.xrp,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: "bc1-bitcoin",
        qrCodeImg: qrCodeBitcoinBTC,
        isAdded: false,
    },
    {
        id: "balance-item-zcash",
        curIconPath: zcashZEC,
        curIconAlt: "zcash-ZEC",
        curName: AllCurFullNames.zcash,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: "bc1-bitcoin",
        qrCodeImg: qrCodeBitcoinBTC,
        isAdded: false,
    },
];
