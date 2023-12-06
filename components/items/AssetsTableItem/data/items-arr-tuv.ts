import type { TAssetsTableItemArr } from "../types";
import {
    terraLUNA,
    tetherUSDT,
    tezosXTZ,
    theGraphGRT,
    sandboxSAND,
    thetaTHETA,
    thorChainRUNE,
    tronTRX,
    umaUMA,
    uniswapUNI,
    unusSedLeoLEO,
    usdCoinUSDC,
    veChainVET,
} from "@/data/pages/currencies-icons";

// * Data
export const assetTableItemArrTUV: TAssetsTableItemArr = [
    {
        id: 99,
        order: 99,
        curIcon: terraLUNA,
        curName: "Terra (LUNA)",
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
