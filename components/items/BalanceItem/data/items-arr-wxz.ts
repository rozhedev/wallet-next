import { AllCurFullNames } from "@/types/data/currencies";
import type { TBalanceItemArr } from "../types";
import { wavesWAVES, wrappedBitcoinWBTC, xrpXRP, zcashZEC } from "@/data/pages/currencies-icons";

import { ethAddr, wavesAddr, xrpAddr, zecAddr } from "@/data/api/env";
import { qrCodeEthereumETH, qrCodeRippleXRP, qrCodeWavesWAVES, qrCodeZcashZEC } from "./icons";

// * Data
export const balanceItemArrWXZ: TBalanceItemArr = [
    {
        id: "balance-item-waves",
        curIconPath: wavesWAVES,
        curIconAlt: "waves-WAVES",
        curName: AllCurFullNames.waves,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: wavesAddr,
        qrCodeImg: qrCodeWavesWAVES,
        isAdded: false,
    },
    {
        id: "balance-item-wrapped-bitcoin",
        curIconPath: wrappedBitcoinWBTC,
        curIconAlt: "wrapped-bitcoin-WBTC",
        curName: AllCurFullNames.wrappedBitcoin,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: ethAddr,
        qrCodeImg: qrCodeEthereumETH,
        isAdded: false,
    },
    {
        id: "balance-item-xrp",
        curIconPath: xrpXRP,
        curIconAlt: "ripple-XRP",
        curName: AllCurFullNames.xrp,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: xrpAddr,
        qrCodeImg: qrCodeRippleXRP,
        isAdded: false,
    },
    {
        id: "balance-item-zcash",
        curIconPath: zcashZEC,
        curIconAlt: "zcash-ZEC",
        curName: AllCurFullNames.zcash,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: zecAddr,
        qrCodeImg: qrCodeZcashZEC,
        isAdded: false,
    },
];
