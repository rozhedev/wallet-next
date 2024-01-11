import type { TStoreAssetsItemArr } from "../types";
import { nearNEAR, neoNEO, nexoNEXO, polkadotDOT, polygonMATIC, secretSCRT, shibainuSHIB, solanaSOL, stacksSTX, stellarXLM } from "@/data/pages/currencies-icons";

// * Data
export const storeAssetsItemArrNPS: TStoreAssetsItemArr = [
    {
        id: "store-asset-item-near-protocol",
        curIconPath: nearNEAR,
        curIconAlt: "near-protocol-NEAR",
        curName: "NEAR Protocol (NEAR)",
        isAdded: false,
    },
    {
        id: "store-asset-item-neo",
        curIconPath: neoNEO,
        curIconAlt: "neo-NEO",
        curName: "Neo (NEO)",
        isAdded: false,
    },
    {
        id: "store-asset-item-nexo",
        curIconPath: nexoNEXO,
        curIconAlt: "nexo-NEXO",
        curName: "Nexo (NEXO)",
        isAdded: false,
    },
    {
        id: "store-asset-item-polkadot",
        curIconPath: polkadotDOT,
        curIconAlt: "polkadot-DOT",
        curName: "Polkadot (DOT)",
        isAdded: false,
    },
    {
        id: "store-asset-item-polygon",
        curIconPath: polygonMATIC,
        curIconAlt: "polygon-MATIC",
        curName: "Polygon (MATIC)",
        isAdded: false,
    },
    {
        id: "store-asset-item-secret",
        curIconPath: secretSCRT,
        curIconAlt: "secret-SCRT",
        curName: "Secret (SCRT)",
        isAdded: false,
    },
    {
        id: "store-asset-item-shiba-inu",
        curIconPath: shibainuSHIB,
        curIconAlt: "shiba-inu-SHIB",
        curName: "Shiba Inu (SHIB)",
        isAdded: false,
    },
    {
        id: "store-asset-item-solana",
        curIconPath: solanaSOL,
        curIconAlt: "solana-SOL",
        curName: "Solana (SOL)",
        isAdded: false,
    },
    {
        id: "store-asset-item-stacks",
        curIconPath: stacksSTX,
        curIconAlt: "stacks-STX",
        curName: "Stacks (STX)",
        isAdded: false,
    },
    {
        id: "store-asset-item-stellar",
        curIconPath: stellarXLM,
        curIconAlt: "stellar-XLM",
        curName: "Stellar (XLM)",
        isAdded: false,
    },
];
