import type { TAssetsTableItemArr } from "../types";
import {
    wavesWAVES,
    wrappedBitcoinWBTC,
    xrpXRP,
    zcashZEC,
} from "@/data/pages/currencies-icons";

// * Data
export const assetTableItemArrWXZ: TAssetsTableItemArr = [
    {
        id: "assets-table-item-waves",
        order: 71,
        curIcon: wavesWAVES,
        curAlt: "waves-WAVES",
        curName: "Waves (WAVES)",
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
        curIcon: wrappedBitcoinWBTC,
        curAlt: "wrapped-bitcoin-WBTC",
        curName: "Wrapped Bitcoin (WBTC)",
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
        curIcon: xrpXRP,
        curAlt: "xrp-XRP",
        curName: "XRP (XRP)",
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
        curIcon: zcashZEC,
        curAlt: "zcash-ZEC",
        curName: "Zcash (ZEC)",
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
