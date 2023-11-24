import type { TMainRateItemArr } from "./types";
import { AllCurNames } from "@/types/data/currencies";

import bitcoinBTC from "@/public/img/icons/crypto/bitcoin-BTC.svg";
import ethereumETH from "@/public/img/icons/crypto/ethereum-ETH.svg";
import binanceCoinBNB from "@/public/img/icons/crypto/binance-coin-BNB.svg";
import solanaSOL from "@/public/img/icons/crypto/solana-SOL.svg";
import cardanoADA from "@/public/img/icons/crypto/cardano-ADA.svg";
import xrpXRP from "@/public/img/icons/crypto/xrp-XRP.svg";
import terraLUNA from "@/public/img/icons/crypto/terra-LUNA.svg";
import polkadotDOT from "@/public/img/icons/crypto/polkadot-DOT.svg";
import avalancheAVAX from "@/public/img/icons/crypto/avalanche-AVAX.svg";
import dogecoinDOGE from "@/public/img/icons/crypto/dogecoin-DOGE.svg";
import shibainuSHIB from "@/public/img/icons/crypto/shiba-inu-SHIB.svg";
import polygonMATIC from "@/public/img/icons/crypto/polygon-MATIC.svg";

import algorandALGO from "@/public/img/icons/crypto/algorand-ALGO.svg";
import litecoinLTC from "@/public/img/icons/crypto/litecoin-LTC.svg";

// * Data
export const mainRateItemArr: TMainRateItemArr = [
    {
        id: `main-${AllCurNames.bitcoin}-rate`,
        imgPath: bitcoinBTC,
        imgAlt: AllCurNames.bitcoin,
        title: "Bitcoin (BTC)",
        rate: "$8888.88",
        rateId: "main-bitcoin-output",
        isIncreased: true,
    },
    {
        id: `main-${AllCurNames.ethereum}-rate`,
        imgPath: ethereumETH,
        imgAlt: AllCurNames.ethereum,
        title: "Ethereum (ETH)",
        rate: "$8888.88",
        rateId: "main-ethereum-output",
        isIncreased: true,
    },
    {
        id: `main-${AllCurNames.binanceCoin}-rate`,
        imgPath: binanceCoinBNB,
        imgAlt: AllCurNames.binanceCoin,
        title: "Binance Coin (BNB)",
        rate: "$8888.88",
        rateId: "main-binance-coin-output",
        isIncreased: true,
    },
    {
        id: `main-${AllCurNames.solana}-rate`,
        imgPath: solanaSOL,
        imgAlt: AllCurNames.solana,
        title: "Solana (SOL)",
        rate: "$8888.88",
        rateId: "main-solana-output",
        isIncreased: true,
    },
    {
        id: `main-${AllCurNames.cardano}-rate`,
        imgPath: cardanoADA,
        imgAlt: AllCurNames.cardano,
        title: "Cardano (ADA)",
        rate: "$8888.88",
        rateId: "main-cardano-output",
        isIncreased: true,
    },
    {
        id: `main-${AllCurNames.xrp}-rate`,
        imgPath: xrpXRP,
        imgAlt: AllCurNames.xrp,
        title: "XRP (XRP)",
        rate: "$8888.88",
        rateId: "main-xrp-output",
        isIncreased: true,
    },
    {
        id: `main-${AllCurNames.terra}-rate`,
        imgPath: terraLUNA,
        imgAlt: AllCurNames.terra,
        title: "Terra (LUNA)",
        rate: "$8888.88",
        rateId: "main-terra-output",
        isIncreased: true,
    },
    {
        id: `main-${AllCurNames.polkadot}-rate`,
        imgPath: polkadotDOT,
        imgAlt: AllCurNames.polkadot,
        title: "Polkadot (DOT)",
        rate: "$8888.88",
        rateId: "main-polkadot-output",
        isIncreased: true,
    },
    {
        id: `main-${AllCurNames.avalanche}-rate`,
        imgPath: avalancheAVAX,
        imgAlt: AllCurNames.avalanche,
        title: "Avalanche (AVAX)",
        rate: "$8888.88",
        rateId: "main-avalanche-output",
        isIncreased: true,
    },
    {
        id: `main-${AllCurNames.dogecoin}-rate`,
        imgPath: dogecoinDOGE,
        imgAlt: AllCurNames.dogecoin,
        title: "Dogecoin (DOGE)",
        rate: "$8888.88",
        rateId: "main-dogecoin-output",
        isIncreased: true,
    },
    {
        id: `main-${AllCurNames.shibainu}-rate`,
        imgPath: shibainuSHIB,
        imgAlt: AllCurNames.shibainu,
        title: "Shiba Inu (SHIB)",
        rate: "$8888.88",
        rateId: "main-shiba-inu-output",
        isIncreased: true,
    },
    {
        id: `main-${AllCurNames.polygon}-rate`,
        imgPath: polygonMATIC,
        imgAlt: AllCurNames.polygon,
        title: "Polygon (MATIC)",
        rate: "$8888.88",
        rateId: "main-polygon-output",
        isIncreased: true,
    },
    {
        id: `main-${AllCurNames.algorand}-rate`,
        imgPath: algorandALGO,
        imgAlt: AllCurNames.algorand,
        title: "Algorand (ALGO)",
        rate: "$8888.88",
        rateId: "main-algorand-output",
        isIncreased: true,
    },
    {
        id: `main-${AllCurNames.litecoin}-rate`,
        imgPath: litecoinLTC,
        imgAlt: AllCurNames.litecoin,
        title: "Litecoin (LTC)",
        rate: "$8888.88",
        rateId: "main-litecoin-output",
        isIncreased: true,
    },
];
