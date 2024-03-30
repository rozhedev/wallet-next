import { AllCurFullNames } from "@/types/data/currencies";
import type { TAssetsTableItemArr } from "../types";
import { wavesWAVES, wrappedBitcoinWBTC, xrpXRP, zcashZEC } from "@/data/pages/currencies-icons";

// * Data
export const assetTableItemArrWXZ: TAssetsTableItemArr = [
    {
        id: "assets-table-item-waves",
        order: 58,
        curIconPath: wavesWAVES,
        curIconAlt: "waves-WAVES",
        curName: AllCurFullNames.waves,
        iconPaths: {
            sendPC: true,
            receivePC: true,
            sendPhone: true,
            receivePhone: true,
            exchange: false,
            buy: true,
            stacking: true,
        },
    },
    {
        id: "assets-table-item-wrapped-bitcoin",
        order: 59,
        curIconPath: wrappedBitcoinWBTC,
        curIconAlt: "wrapped-bitcoin-WBTC",
        curName: AllCurFullNames.wrappedBitcoin,
        iconPaths: {
            sendPC: true,
            receivePC: true,
            sendPhone: true,
            receivePhone: true,
            exchange: true,
            buy: true,
            stacking: true,
        },
    },
    {
        id: "assets-table-item-xrp",
        order: 60,
        curIconPath: xrpXRP,
        curIconAlt: "ripple-XRP",
        curName: AllCurFullNames.xrp,
        iconPaths: {
            sendPC: true,
            receivePC: true,
            sendPhone: true,
            receivePhone: true,
            exchange: true,
            buy: true,
            stacking: true,
        },
    },
    {
        id: "assets-table-item-zcash",
        order: 61,
        curIconPath: zcashZEC,
        curIconAlt: "zcash-ZEC",
        curName: AllCurFullNames.zcash,
        iconPaths: {
            sendPC: true,
            receivePC: true,
            sendPhone: true,
            receivePhone: true,
            exchange: true,
            buy: true,
            stacking: true,
        },
    },
];
