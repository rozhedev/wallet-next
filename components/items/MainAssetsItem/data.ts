import type { TMainAssetsItemArr } from "./types";
import type { TAllCurNotes } from "@/types/data/currencies";
import { AllCurNames } from "@/types/data/currencies";

import bitcoinBTC from "@/public/img/icons/crypto/bitcoin-BTC.svg";
import ethereumETH from "@/public/img/icons/crypto/ethereum-ETH.svg";
import binanceCoinBNB from "@/public/img/icons/crypto/binance-coin-BNB.svg";
import tetherUSDT from "@/public/img/icons/crypto/tether-USDT.svg";
import solanaSOL from "@/public/img/icons/crypto/solana-SOL.svg";
import cardanoADA from "@/public/img/icons/crypto/cardano-ADA.svg";
import xrpXRP from "@/public/img/icons/crypto/xrp-XRP.svg";
import terraLUNA from "@/public/img/icons/crypto/terra-LUNA.svg";
import polkadotDOT from "@/public/img/icons/crypto/polkadot-DOT.svg";
import avalancheAVAX from "@/public/img/icons/crypto/avalanche-AVAX.svg";
import dogecoinDOGE from "@/public/img/icons/crypto/dogecoin-DOGE.svg";
import shibainuSHIB from "@/public/img/icons/crypto/shiba-inu-SHIB.svg";
import polygonMATIC from "@/public/img/icons/crypto/polygon-MATIC.svg";
import cronosCRO from "@/public/img/icons/crypto/cronos-CRO.svg";
import wrappedBitcoinWBTC from "@/public/img/icons/crypto/wrapped-bitcoin-WBTC.svg";
import algorandALGO from "@/public/img/icons/crypto/algorand-ALGO.svg";


export const mainAssetItemArr: TMainAssetsItemArr = [
    {
        id: `${AllCurNames.bitcoin}-tooltip`,
        disabled: false,
        imgPath: bitcoinBTC,
        imgAlt: AllCurNames.bitcoin,
        title: "Bitcoin (BTC)",
    },
    {
        id: `${AllCurNames.ethereum}-tooltip`,
        disabled: false,
        imgPath: ethereumETH,
        imgAlt: AllCurNames.ethereum,
        title: "Ethereum (ETH)",
    },
    {
        id: `${AllCurNames.binanceCoin}-tooltip`,
        disabled: false,
        imgPath: binanceCoinBNB,
        imgAlt: AllCurNames.binanceCoin,
        title: "Binance Coin (BNB)",
    },
    {
        id: `${AllCurNames.tether}-tooltip`,
        disabled: false,
        imgPath: tetherUSDT,
        imgAlt: AllCurNames.tether,
        title: "Tether (USDT)",
    },
    {
        id: `${AllCurNames.solana}-tooltip`,
        disabled: false,
        imgPath: solanaSOL,
        imgAlt: AllCurNames.solana,
        title: "Solana (SOL)",
    },
    {
        id: `${AllCurNames.cardano}-tooltip`,
        disabled: false,
        imgPath: cardanoADA,
        imgAlt: AllCurNames.cardano,
        title: "Cardano (ADA)",
    },
    {
        id: `${AllCurNames.xrp}-tooltip`,
        disabled: false,
        imgPath: xrpXRP,
        imgAlt: AllCurNames.xrp,
        title: "XRP (XRP)",
    },
    {
        id: `${AllCurNames.terra}-tooltip`,
        disabled: false,
        imgPath: terraLUNA,
        imgAlt: AllCurNames.terra,
        title: "Terra (LUNA)",
    },
    {
        id: `${AllCurNames.polkadot}-tooltip`,
        disabled: false,
        imgPath: polkadotDOT,
        imgAlt: AllCurNames.polkadot,
        title: "Polkadot (DOT)",
    },
    {
        id: `${AllCurNames.avalanche}-tooltip`,
        disabled: false,
        imgPath: avalancheAVAX,
        imgAlt: AllCurNames.avalanche,
        title: "Avalanche (AVAX)",
    },
    {
        id: `${AllCurNames.dogecoin}-tooltip`,
        disabled: false,
        imgPath: dogecoinDOGE,
        imgAlt: AllCurNames.dogecoin,
        title: "Dogecoin (DOGE)",
    },
    {
        id: `${AllCurNames.shibainu}-tooltip`,
        disabled: false,
        imgPath: shibainuSHIB,
        imgAlt: AllCurNames.shibainu,
        title: "Shiba Inu (SHIB)",
    },
    {
        id: `${AllCurNames.polygon}-tooltip`,
        disabled: false,
        imgPath: polygonMATIC,
        imgAlt: AllCurNames.polygon,
        title: "Polygon (MATIC)",
    },
    {
        id: `${AllCurNames.cronos}-tooltip`,
        disabled: false,
        imgPath: cronosCRO,
        imgAlt: AllCurNames.cronos,
        title: "Cronos (CRO)",
    },
    {
        id: `${AllCurNames.wrappedBitcoin}-tooltip`,
        disabled: false,
        imgPath: wrappedBitcoinWBTC,
        imgAlt: AllCurNames.wrappedBitcoin,
        title: "Wrapped Bitcoin (WBTC)",
    },
    {
        id: `${AllCurNames.algorand}-tooltip`,
        disabled: false,
        imgPath: algorandALGO,
        imgAlt: AllCurNames.algorand,
        title: "Algorand (ALGO)",
    },
    
];
