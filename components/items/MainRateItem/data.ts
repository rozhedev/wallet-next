import type { TMainRateItemArr } from "./types";
import { AllCurFullNames } from "@/types/data/currencies";
import { WS_RATE_API } from "@/data/api/rate-api";

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

// * Data. Don't change order
export const mainRateItemArr: TMainRateItemArr = [
    {
        id: "main-bitcoin-rate",
        imgPath: bitcoinBTC,
        imgAlt: "bitcoin-BTC",
        title: AllCurFullNames.bitcoin,
        apiLink: WS_RATE_API.bitcoin,
    },
    {
        id: "main-ethereum-rate",
        imgPath: ethereumETH,
        imgAlt: "ethereum-ETH",
        title: AllCurFullNames.ethereum,
        apiLink: WS_RATE_API.ethereum,
    },
    {
        id: "main-binance-coin-rate",
        imgPath: binanceCoinBNB,
        imgAlt: "binance-coin-BNB",
        title: AllCurFullNames.binanceCoin,
        apiLink: WS_RATE_API["binance-coin"],
    },
    {
        id: "main-solana-rate",
        imgPath: solanaSOL,
        imgAlt: "solana-SOL",
        title: AllCurFullNames.solana,
        apiLink: WS_RATE_API.solana,
    },
    {
        id: "main-cardano-rate",
        imgPath: cardanoADA,
        imgAlt: "cardano-ADA",
        title: AllCurFullNames.cardano,
        apiLink: WS_RATE_API.cardano,
    },
    {
        id: "main-xrp-rate",
        imgPath: xrpXRP,
        imgAlt: "xrp-XRP",
        title: AllCurFullNames.xrp,
        apiLink: WS_RATE_API.xrp,
    },
    {
        id: "main-terra-rate",
        imgPath: terraLUNA,
        imgAlt: "terra-LUNA",
        title: AllCurFullNames.terra,
        apiLink: WS_RATE_API.terra,
    },
    {
        id: "main-polkadot-rate",
        imgPath: polkadotDOT,
        imgAlt: "polkadot-DOT",
        title: AllCurFullNames.polkadot,
        apiLink: WS_RATE_API.polkadot,
    },
    {
        id: "main-avalanche-rate",
        imgPath: avalancheAVAX,
        imgAlt: "avalanche-AVAX",
        title: AllCurFullNames.avalanche,
        apiLink: WS_RATE_API.avalanche,
    },
    {
        id: "main-dogecoin-rate",
        imgPath: dogecoinDOGE,
        imgAlt: "dogecoin-DOGE",
        title: AllCurFullNames.dogecoin,
        apiLink: WS_RATE_API.dogecoin,
    },
    {
        id: "main-polygon-rate",
        imgPath: polygonMATIC,
        imgAlt: "polygon-MATIC",
        title: AllCurFullNames.polygon,
        apiLink: WS_RATE_API.polygon,
    },
    {
        id: "main-chainlink-rate",
        imgPath: chainlinkLINK,
        imgAlt: "chainlink-LINK",
        title: AllCurFullNames.chainlink,
        apiLink: WS_RATE_API.chainlink,
    },
    {
        id: "main-algorand-rate",
        imgPath: algorandALGO,
        imgAlt: "algorand-ALGO",
        title: AllCurFullNames.algorand,
        apiLink: WS_RATE_API.algorand,
    },
    {
        id: "main-litecoin-rate",
        imgPath: litecoinLTC,
        imgAlt: "litecoin-LTC",
        title: AllCurFullNames.litecoin,
        apiLink: WS_RATE_API.litecoin,
    },
];
