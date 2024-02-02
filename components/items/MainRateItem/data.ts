import { AllCurFullNames } from "@/types/data/currencies";
import type { TMainRateItemArr } from "./types";

import {
    algorandALGO,
    avalancheAVAX,
    binanceCoinBNB,
    bitcoinBTC,
    cardanoADA,
    chainlinkLINK,
    dogecoinDOGE,
    ethereumETH,
    litecoinLTC,
    polkadotDOT,
    polygonMATIC,
    solanaSOL,
    terraLUNA,
    xrpXRP,
} from "@/data/pages/currencies-icons";

// * Data
export const mainRateItemArr: TMainRateItemArr = [
    {
        id: "main-bitcoin-rate",
        imgPath: bitcoinBTC,
        imgAlt: "bitcoin-BTC",
        title: AllCurFullNames.bitcoin,
        apiLink: "wss://stream.binance.com:9443/ws/btcusdt@trade",
    },
    {
        id: "main-ethereum-rate",
        imgPath: ethereumETH,
        imgAlt: "ethereum-ETH",
        title: AllCurFullNames.ethereum,
        apiLink: "wss://stream.binance.com:9443/ws/ethusdt@trade",
    },
    {
        id: "main-binance-coin-rate",
        imgPath: binanceCoinBNB,
        imgAlt: "binance-coin-BNB",
        title: AllCurFullNames.binanceCoin,
        apiLink: "wss://stream.binance.com:9443/ws/bnbusdt@trade",
    },
    {
        id: "main-solana-rate",
        imgPath: solanaSOL,
        imgAlt: "solana-SOL",
        title: AllCurFullNames.solana,
        apiLink: "wss://stream.binance.com:9443/ws/solusdt@trade",
    },
    {
        id: "main-cardano-rate",
        imgPath: cardanoADA,
        imgAlt: "cardano-ADA",
        title: AllCurFullNames.cardano,
        apiLink: "wss://stream.binance.com:9443/ws/adausdt@trade",
    },
    {
        id: "main-xrp-rate",
        imgPath: xrpXRP,
        imgAlt: "xrp-XRP",
        title: AllCurFullNames.xrp,
        apiLink: "wss://stream.binance.com:9443/ws/xrpusdt@trade",
    },
    {
        id: "main-terra-rate",
        imgPath: terraLUNA,
        imgAlt: "terra-LUNA",
        title: AllCurFullNames.terra,
        apiLink: "wss://stream.binance.com:9443/ws/lunausdt@trade",
    },
    {
        id: "main-polkadot-rate",
        imgPath: polkadotDOT,
        imgAlt: "polkadot-DOT",
        title: AllCurFullNames.polkadot,
        apiLink: "wss://stream.binance.com:9443/ws/dotusdt@trade",
    },
    {
        id: "main-avalanche-rate",
        imgPath: avalancheAVAX,
        imgAlt: "avalanche-AVAX",
        title: AllCurFullNames.avalanche,
        apiLink: "wss://stream.binance.com:9443/ws/avaxusdt@trade",
    },
    {
        id: "main-dogecoin-rate",
        imgPath: dogecoinDOGE,
        imgAlt: "dogecoin-DOGE",
        title: AllCurFullNames.dogecoin,
        apiLink: "wss://stream.binance.com:9443/ws/dogeusdt@trade",
    },
    {
        id: "main-polygon-rate",
        imgPath: polygonMATIC,
        imgAlt: "polygon-MATIC",
        title: AllCurFullNames.polygon,
        apiLink: "wss://stream.binance.com:9443/ws/maticusdt@trade",
    },
    {
        id: "main-chainlink-rate",
        imgPath: chainlinkLINK,
        imgAlt: "chainlink-LINK",
        title: AllCurFullNames.chainlink,
        apiLink: "wss://stream.binance.com:9443/ws/linkusdt@trade",

    },
    {
        id: "main-algorand-rate",
        imgPath: algorandALGO,
        imgAlt: "algorand-ALGO",
        title: AllCurFullNames.algorand,
        apiLink: "wss://stream.binance.com:9443/ws/algousdt@trade",
    },
    {
        id: "main-litecoin-rate",
        imgPath: litecoinLTC,
        imgAlt: "litecoin-LTC",
        title: AllCurFullNames.litecoin,
        apiLink: "wss://stream.binance.com:9443/ws/ltcusdt@trade",
    },
];
