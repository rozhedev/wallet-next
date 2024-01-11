import type { TStoreAssetsItemArr } from "../types";
import { kadenaKDA, klaytnKLAY, kuCoinTokenKCS, kusamaKSM, litecoinLTC, makerMKR, moneroXMR } from "@/data/pages/currencies-icons";

// * Data
export const storeAssetsItemArrKLM: TStoreAssetsItemArr = [
    {
        id: "store-asset-item-kadena",
        curIconPath: kadenaKDA,
        curIconAlt: "kadena-KDA",
        curName: "Kadena (KDA)",
        isAdded: false,
    },
    {
        id: "store-asset-item-klaytn",
        curIconPath: klaytnKLAY,
        curIconAlt: "klaytn-KLAY",
        curName: "Klaytn (KLAY)",
        isAdded: false,
    },
    {
        id: "store-asset-item-ku-coin-token",
        curIconPath: kuCoinTokenKCS,
        curIconAlt: "ku-coin-token-KCS",
        curName: "KuCoin Token (KCS)",
        isAdded: false,
    },
    {
        id: "store-asset-item-kusama",
        curIconPath: kusamaKSM,
        curIconAlt: "kusama-KSM",
        curName: "Kusama (KSM)",
        isAdded: false,
    },
    {
        id: "store-asset-item-litecoin",
        curIconPath: litecoinLTC,
        curIconAlt: "litecoin-LTC",
        curName: "Litecoin (LTC)",
        isAdded: false,
    },
    {
        id: "store-asset-item-maker",
        curIconPath: makerMKR,
        curIconAlt: "maker-MKR",
        curName: "Maker (MKR)",
        isAdded: false,
    },
    {
        id: "store-asset-item-monero",
        curIconPath: moneroXMR,
        curIconAlt: "monero-XMR",
        curName: "Monero (XMR)",
        isAdded: false,
    },
];
