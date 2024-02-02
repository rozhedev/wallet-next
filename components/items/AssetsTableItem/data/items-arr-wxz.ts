import { AllCurFullNames } from "@/types/data/currencies";
import type { TAssetsTableItemArr } from "../types";
import { wavesWAVES, wrappedBitcoinWBTC, xrpXRP, zcashZEC } from "@/data/pages/currencies-icons";

// * Data
export const assetTableItemArrWXZ: TAssetsTableItemArr = [
    {
        id: "assets-table-item-waves",
        order: 71,
        curIconPath: wavesWAVES,
        curIconAlt: "waves-WAVES",
        curName: AllCurFullNames.waves,
        iconPaths: {
            sendPC: true,
            receivePC: false,
            sendPhone: true,
            receivePhone: false,
            exchange: true,
            buy: false,
            stacking: true,
        },
    },
    {
        id: "assets-table-item-wrapped-bitcoin",
        order: 72,
        curIconPath: wrappedBitcoinWBTC,
        curIconAlt: "wrapped-bitcoin-WBTC",
        curName: AllCurFullNames.wrappedBitcoin,
        iconPaths: {
            sendPC: true,
            receivePC: false,
            sendPhone: true,
            receivePhone: false,
            exchange: true,
            buy: false,
            stacking: true,
        },
    },
    {
        id: "assets-table-item-xrp",
        order: 73,
        curIconPath: xrpXRP,
        curIconAlt: "xrp-XRP",
        curName: AllCurFullNames.xrp,
        iconPaths: {
            sendPC: true,
            receivePC: false,
            sendPhone: true,
            receivePhone: false,
            exchange: true,
            buy: false,
            stacking: true,
        },
    },
    {
        id: "assets-table-item-zcash",
        order: 74,
        curIconPath: zcashZEC,
        curIconAlt: "zcash-ZEC",
        curName: AllCurFullNames.zcash,
        iconPaths: {
            sendPC: true,
            receivePC: false,
            sendPhone: true,
            receivePhone: false,
            exchange: true,
            buy: false,
            stacking: true,
        },
    },
];
