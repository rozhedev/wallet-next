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
        id: 99,
        order: 99,
        curIcon: wavesWAVES,
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
];
