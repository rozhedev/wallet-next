import type { TMainRateItemArr } from "./types";
import { AllCurNames } from "@/types/data/currencies";

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
        id: `main-${AllCurNames.bitcoin}-rate`,
        imgPath: bitcoinBTC,
        imgAlt: AllCurNames.bitcoin,
        title: "Bitcoin (BTC)",
        apiLink: "wss://stream.binance.com:9443/ws/btcusdt@trade",
    },
    {
        id: `main-${AllCurNames.ethereum}-rate`,
        imgPath: ethereumETH,
        imgAlt: AllCurNames.ethereum,
        title: "Ethereum (ETH)",
        apiLink: "wss://stream.binance.com:9443/ws/ethusdt@trade",
    },
    {
        id: `main-${AllCurNames.binanceCoin}-rate`,
        imgPath: binanceCoinBNB,
        imgAlt: AllCurNames.binanceCoin,
        title: "Binance Coin (BNB)",
        apiLink: "wss://stream.binance.com:9443/ws/bnbusdt@trade",
    },
    {
        id: `main-${AllCurNames.solana}-rate`,
        imgPath: solanaSOL,
        imgAlt: AllCurNames.solana,
        title: "Solana (SOL)",
        apiLink: "wss://stream.binance.com:9443/ws/solusdt@trade",
    },
    {
        id: `main-${AllCurNames.cardano}-rate`,
        imgPath: cardanoADA,
        imgAlt: AllCurNames.cardano,
        title: "Cardano (ADA)",
        apiLink: "wss://stream.binance.com:9443/ws/adausdt@trade",
    },
    {
        id: `main-${AllCurNames.xrp}-rate`,
        imgPath: xrpXRP,
        imgAlt: AllCurNames.xrp,
        title: "XRP (XRP)",
        apiLink: "wss://stream.binance.com:9443/ws/xrpusdt@trade",
    },
    {
        id: `main-${AllCurNames.terra}-rate`,
        imgPath: terraLUNA,
        imgAlt: AllCurNames.terra,
        title: "Terra (LUNA)",
        apiLink: "wss://stream.binance.com:9443/ws/lunausdt@trade",
    },
    {
        id: `main-${AllCurNames.polkadot}-rate`,
        imgPath: polkadotDOT,
        imgAlt: AllCurNames.polkadot,
        title: "Polkadot (DOT)",
        apiLink: "wss://stream.binance.com:9443/ws/dotusdt@trade",
    },
    {
        id: `main-${AllCurNames.avalanche}-rate`,
        imgPath: avalancheAVAX,
        imgAlt: AllCurNames.avalanche,
        title: "Avalanche (AVAX)",
        apiLink: "wss://stream.binance.com:9443/ws/avaxusdt@trade",
    },
    {
        id: `main-${AllCurNames.dogecoin}-rate`,
        imgPath: dogecoinDOGE,
        imgAlt: AllCurNames.dogecoin,
        title: "Dogecoin (DOGE)",
        apiLink: "wss://stream.binance.com:9443/ws/dogeusdt@trade",
    },
    {
        id: `main-${AllCurNames.polygon}-rate`,
        imgPath: polygonMATIC,
        imgAlt: AllCurNames.polygon,
        title: "Polygon (MATIC)",
        apiLink: "wss://stream.binance.com:9443/ws/maticusdt@trade",
    },
    {
        id: `main-${AllCurNames.chainlink}-rate`,
        imgPath: chainlinkLINK,
        imgAlt: AllCurNames.chainlink,
        title: "Chainlink (LINK)",
        apiLink: "wss://stream.binance.com:9443/ws/linkusdt@trade",

    },
    {
        id: `main-${AllCurNames.algorand}-rate`,
        imgPath: algorandALGO,
        imgAlt: AllCurNames.algorand,
        title: "Algorand (ALGO)",
        apiLink: "wss://stream.binance.com:9443/ws/algousdt@trade",
    },
    {
        id: `main-${AllCurNames.litecoin}-rate`,
        imgPath: litecoinLTC,
        imgAlt: AllCurNames.litecoin,
        title: "Litecoin (LTC)",
        apiLink: "wss://stream.binance.com:9443/ws/ltcusdt@trade",
    },
];
