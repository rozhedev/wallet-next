import { AllCurFullNames } from "@/types/data/currencies";
import type { TAssetsTableItemArr } from "../types";
import { galaGALA, hederaHBAR, holoHOT, iotaMIOTA } from "@/data/pages/currencies-icons";

// * Data
export const assetTableItemArrGHI: TAssetsTableItemArr = [
    {
        id: "assets-table-item-gala",
        order: 30,
        curIconPath: galaGALA,
        curIconAlt: "gala-GALA",
        curName: AllCurFullNames.gala,
        iconPaths: {
            sendPC: true,
            receivePC: false,
            sendPhone: true,
            receivePhone: true,
            exchange: true,
            buy: false,
            stacking: true,
        },
    },
    {
        id: "assets-table-item-hedera",
        order: 31,
        curIconPath: hederaHBAR,
        curIconAlt: "hedera-HBAR",
        curName: AllCurFullNames.hedera,
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
        id: "assets-table-item-holo",
        order: 32,
        curIconPath: holoHOT,
        curIconAlt: "holo-HOT",
        curName: AllCurFullNames.holo,
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
        id: "assets-table-item-iota",
        order: 33,
        curIconPath: iotaMIOTA,
        curIconAlt: "iota-MIOTA",
        curName: AllCurFullNames.iota,
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
