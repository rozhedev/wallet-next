import type { TAssetsTableItemArr } from "../types";
import {
    galaGALA,
    harmonyONE,
    hederaHBAR,
    heliumHNT,
    holoHOT,
    internetComputerICP,
    iotaMIOTA,
} from "@/data/pages/currencies-icons";

// * Data
export const assetTableItemArrGHI: TAssetsTableItemArr = [
    {
        id: 99,
        order: 99,
        curIcon: galaGALA,
        curName: "Gala (GALA)",
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
