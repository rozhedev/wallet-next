import { AllCurFullNames } from "@/types/data/currencies";
import type { TAssetsTableItemArr } from "../types";
import { litecoinLTC, makerMKR, moneroXMR } from "@/data/pages/currencies-icons";

// * Data
export const assetTableItemArrKLM: TAssetsTableItemArr = [
    {
        id: "assets-table-item-litecoin",
        order: 34,
        curIconPath: litecoinLTC,
        curIconAlt: "litecoin-LTC",
        curName: AllCurFullNames.litecoin,
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
        id: "assets-table-item-maker",
        order: 35,
        curIconPath: makerMKR,
        curIconAlt: "maker-MKR",
        curName: AllCurFullNames.maker,
        iconPaths: {
            sendPC: false,
            receivePC: true,
            sendPhone: true,
            receivePhone: true,
            exchange: false,
            buy: true,
            stacking: true,
        },
    },
    {
        id: "assets-table-item-monero",
        order: 36,
        curIconPath: moneroXMR,
        curIconAlt: "monero-XMR",
        curName: AllCurFullNames.monero,
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
