import type { TStoreAssetsItemArr } from "../types";
import { wavesWAVES, wrappedBitcoinWBTC, xrpXRP, zcashZEC } from "@/data/pages/currencies-icons";

// * Data
export const storeAssetsItemArrWXZ: TStoreAssetsItemArr = [
    {
        id: "store-asset-item-waves",
        curIconPath: wavesWAVES,
        curIconAlt: "waves-WAVES",
        curName: "Waves (WAVES)",
        isAdded: false,
    },
    {
        id: "store-asset-item-wrapped-bitcoin",
        curIconPath: wrappedBitcoinWBTC,
        curIconAlt: "wrapped-bitcoin-WBTC",
        curName: "Wrapped Bitcoin (WBTC)",
        isAdded: false,
    },
    {
        id: "store-asset-item-xrp",
        curIconPath: xrpXRP,
        curIconAlt: "xrp-XRP",
        curName: "XRP (XRP)",
        isAdded: false,
    },
    {
        id: "store-asset-item-zcash",
        curIconPath: zcashZEC,
        curIconAlt: "zcash-ZEC",
        curName: "Zcash (ZEC)",
        isAdded: false,
    },
];
