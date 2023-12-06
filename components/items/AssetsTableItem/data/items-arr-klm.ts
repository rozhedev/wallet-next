import type { TAssetsTableItemArr } from "../types";
import {
    kadenaKDA,
    klaytnKLAY,
    kuCoinTokenKCS,
    kusamaKSM,
    litecoinLTC,
    makerMKR,
    moneroXLM,
} from "@/data/pages/currencies-icons";

// * Data
export const assetTableItemArrKLM: TAssetsTableItemArr = [
    {
        id: 99,
        order: 99,
        curIcon: kadenaKDA,
        curName: "Kadena (KDA)",
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
