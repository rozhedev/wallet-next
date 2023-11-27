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
        className: "main-rate-item top",
        imgPath: bitcoinBTC,
        imgAlt: AllCurNames.bitcoin,
        title: "Bitcoin (BTC)",
        apiLink: "wss://stream.binance.com:9443/ws/btcusdt@trade",
        rate: 0,
    },
    {
        id: `main-${AllCurNames.ethereum}-rate`,
        className: "main-rate-item top",
        imgPath: ethereumETH,
        imgAlt: AllCurNames.ethereum,
        title: "Ethereum (ETH)",
        apiLink: "wss://stream.binance.com:9443/ws/ethusdt@trade",
        rate: 0,
    },
    {
        id: `main-${AllCurNames.binanceCoin}-rate`,
        className: "main-rate-item top",
        imgPath: binanceCoinBNB,
        imgAlt: AllCurNames.binanceCoin,
        title: "Binance Coin (BNB)",
        apiLink: "wss://stream.binance.com:9443/ws/bnbusdt@trade",
        rate: 0,
    },
    {
        id: `main-${AllCurNames.solana}-rate`,
        className: "main-rate-item top",
        imgPath: solanaSOL,
        imgAlt: AllCurNames.solana,
        title: "Solana (SOL)",
        apiLink: "wss://stream.binance.com:9443/ws/solusdt@trade",
        rate: 0,
    },
    {
        id: `main-${AllCurNames.cardano}-rate`,
        className: "main-rate-item top",
        imgPath: cardanoADA,
        imgAlt: AllCurNames.cardano,
        title: "Cardano (ADA)",
        apiLink: "wss://stream.binance.com:9443/ws/adausdt@trade",
        rate: 0,
    },
    {
        id: `main-${AllCurNames.xrp}-rate`,
        className: "main-rate-item top",
        imgPath: xrpXRP,
        imgAlt: AllCurNames.xrp,
        title: "XRP (XRP)",
        apiLink: "wss://stream.binance.com:9443/ws/xrpusdt@trade",
        rate: 0,
    },
    {
        id: `main-${AllCurNames.terra}-rate`,
        className: "main-rate-item top",
        imgPath: terraLUNA,
        imgAlt: AllCurNames.terra,
        title: "Terra (LUNA)",
        apiLink: "wss://stream.binance.com:9443/ws/lunausdt@trade",
        rate: 0,
    },
    {
        id: `main-${AllCurNames.polkadot}-rate`,
        className: "main-rate-item top",
        imgPath: polkadotDOT,
        imgAlt: AllCurNames.polkadot,
        title: "Polkadot (DOT)",
        apiLink: "wss://stream.binance.com:9443/ws/dotusdt@trade",
        rate: 0,
    },
    {
        id: `main-${AllCurNames.avalanche}-rate`,
        className: "main-rate-item top",
        imgPath: avalancheAVAX,
        imgAlt: AllCurNames.avalanche,
        title: "Avalanche (AVAX)",
        apiLink: "wss://stream.binance.com:9443/ws/avaxusdt@trade",
        rate: 0,
    },
    {
        id: `main-${AllCurNames.dogecoin}-rate`,
        className: "main-rate-item top",
        imgPath: dogecoinDOGE,
        imgAlt: AllCurNames.dogecoin,
        title: "Dogecoin (DOGE)",
        apiLink: "wss://stream.binance.com:9443/ws/dogeusdt@trade",
        rate: 0,
    },
    {
        id: `main-${AllCurNames.shibainu}-rate`,
        className: "main-rate-item top",
        imgPath: shibainuSHIB,
        imgAlt: AllCurNames.shibainu,
        title: "Shiba Inu (SHIB)",
        apiLink: "wss://stream.binance.com:9443/ws/shibusdt@trade",
        rate: 0,

    },
    {
        id: `main-${AllCurNames.polygon}-rate`,
        className: "main-rate-item top",
        imgPath: polygonMATIC,
        imgAlt: AllCurNames.polygon,
        title: "Polygon (MATIC)",
        apiLink: "wss://stream.binance.com:9443/ws/maticusdt@trade",
        rate: 0,
    },
    {
        id: `main-${AllCurNames.algorand}-rate`,
        className: "main-rate-item top",
        imgPath: algorandALGO,
        imgAlt: AllCurNames.algorand,
        title: "Algorand (ALGO)",
        apiLink: "wss://stream.binance.com:9443/ws/algousdt@trade",
        rate: 0,
    },
    {
        id: `main-${AllCurNames.litecoin}-rate`,
        className: "main-rate-item top",
        imgPath: litecoinLTC,
        imgAlt: AllCurNames.litecoin,
        title: "Litecoin (LTC)",
        apiLink: "wss://stream.binance.com:9443/ws/ltcusdt@trade",
        rate: 0,
    },
];
