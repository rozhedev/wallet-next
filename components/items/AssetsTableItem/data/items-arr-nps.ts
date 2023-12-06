import type { TAssetsTableItemArr } from "../types";
import {
    nearNEAR,
    neoNEO,
    nexoNEXO,
    polkadotDOT,
    polygonMATIC,
    secretSCRT,
    shibainuSHIB,
    solanaSOL,
    stacksSTX,
    stellarXLM,
} from "@/data/pages/currencies-icons";

// * Data
export const assetTableItemArrNPS: TAssetsTableItemArr = [
    {
        id: 99,
        order: 99,
        curIcon: nearNEAR,
        curName: "Near (NEAR)",
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
