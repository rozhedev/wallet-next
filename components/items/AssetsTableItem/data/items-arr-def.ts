import type { TAssetsTableItemArr } from "../types";
import {
    daiDAI,
    dashDASH,
    dogecoinDOGE,
    decentralandMANA,
    elrondEGLD,
    enjinCoinENJ,
    eosEOS,
    ethereumETH,
    ethereumClassicETC,
    fantomFTM,
    filecoinFIL,
    flowFLOW,
    ftxTokenFTT,
} from "@/data/pages/currencies-icons";

// * Data
export const assetTableItemArrDEF: TAssetsTableItemArr = [
    {
        id: 21,
        order: 21,
        curIcon: daiDAI,
        curName: "Dai (DAI)",
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
        id: 99,
        order: 99,
        curIcon: ethereumETH,
        curName: "Ethereum (ETH)",
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
