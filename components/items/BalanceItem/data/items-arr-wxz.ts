import { AllCurFullNames } from "@/types/data/currencies";
import type { TBalanceItemArr } from "../types";
import { wavesWAVES, wrappedBitcoinWBTC, xrpXRP, zcashZEC } from "@/data/pages/currencies-icons";

import { ETH_ADDR_TOKEN, WAVES_ADDR, XRP_ADDR, ZEC_ADDR } from "@/data/api/env";
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
        walletAddress: WAVES_ADDR,
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
        walletAddress: ETH_ADDR_TOKEN,
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
        walletAddress: XRP_ADDR,
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
        walletAddress: ZEC_ADDR,
        qrCodeImg: qrCodeZcashZEC,
        isAdded: false,
    },
];
