import { AllCurShortNames } from "@/types/data/currencies";
import type { TWebSocketAPILinks, TRateObj } from "@/types/data/rate-api";

// * WS - Web Socket
export const WS_RATE_API: TWebSocketAPILinks = {
    [AllCurShortNames.algorand]: "wss://stream.binance.com:9443/ws/algousdt@trade",
    [AllCurShortNames.avalanche]: "wss://stream.binance.com:9443/ws/avaxusdt@trade",
    [AllCurShortNames.binanceCoin]: "wss://stream.binance.com:9443/ws/bnbusdt@trade",
    [AllCurShortNames.bitcoin]: "wss://stream.binance.com:9443/ws/btcusdt@trade",
    [AllCurShortNames.cardano]: "wss://stream.binance.com:9443/ws/adausdt@trade",
    // ---
    [AllCurShortNames.chainlink]: "wss://stream.binance.com:9443/ws/linkusdt@trade",
    [AllCurShortNames.dash]: "wss://stream.binance.com:9443/ws/dashusdt@trade",
    [AllCurShortNames.dogecoin]: "wss://stream.binance.com:9443/ws/dogeusdt@trade",
    [AllCurShortNames.ethereum]: "wss://stream.binance.com:9443/ws/ethusdt@trade",
    [AllCurShortNames.litecoin]: "wss://stream.binance.com:9443/ws/ltcusdt@trade",
    // ---
    [AllCurShortNames.monero]: "wss://stream.binance.com:9443/ws/xmrusdt@trade",
    [AllCurShortNames.polkadot]: "wss://stream.binance.com:9443/ws/dotusdt@trade",
    [AllCurShortNames.polygon]: "wss://stream.binance.com:9443/ws/maticusdt@trade",
    [AllCurShortNames.solana]: "wss://stream.binance.com:9443/ws/solusdt@trade",
    [AllCurShortNames.stellar]: "wss://stream.binance.com:9443/ws/xlmusdt@trade",
    // ---
    [AllCurShortNames.terra]: "wss://stream.binance.com:9443/ws/lunausdt@trade",
    [AllCurShortNames.tron]: "wss://stream.binance.com:9443/ws/trxusdt@trade",
    [AllCurShortNames.xrp]: "wss://stream.binance.com:9443/ws/xrpusdt@trade",
};

// * Rate obj for useRateObj hook
export const rateObjInit: TRateObj = {
    [AllCurShortNames.algorand]: 0,
    [AllCurShortNames.avalanche]: 0,
    [AllCurShortNames.binanceCoin]: 0,
    [AllCurShortNames.bitcoin]: 0,
    [AllCurShortNames.cardano]: 0,
    // ---
    [AllCurShortNames.chainlink]: 0,
    [AllCurShortNames.dash]: 0,
    [AllCurShortNames.dogecoin]: 0,
    [AllCurShortNames.ethereum]: 0,
    [AllCurShortNames.litecoin]: 0,
    // ---
    [AllCurShortNames.monero]: 0,
    [AllCurShortNames.polkadot]: 0,
    [AllCurShortNames.polygon]: 0,
    [AllCurShortNames.solana]: 0,
    [AllCurShortNames.stellar]: 0,
    // ---
    [AllCurShortNames.terra]: 0,
    [AllCurShortNames.tron]: 0,
    [AllCurShortNames.xrp]: 0,
};

// * Airdrop limits, based on currency rate
export const airdropLimits = {
    // 43063,91
    [AllCurShortNames.bitcoin]: {
        min: 0.0075,
        max: 0.027,
    },
    // 2304,01
    [AllCurShortNames.ethereum]: {
        min: 0.135,
        max: 0.5,
    },
    // 0,9997
    [AllCurShortNames.tether]: {
        min: 310,
        max: 1150,
    },
    // 300,90
    [AllCurShortNames.binanceCoin]: {
        min: 1.05,
        max: 3.8,
    },
    // 0,1116
    [AllCurShortNames.stellar]: {
        min: 2850,
        max: 10100,
    },
    // 97,94
    [AllCurShortNames.solana]: {
        min: 3.2,
        max: 11.2,
    },
    // 68,31
    [AllCurShortNames.litecoin]: {
        min: 4.66,
        max: 17,
    },
    // 167,95
    [AllCurShortNames.monero]: {
        min: 1.9,
        max: 6.9,
    },
    // 27,60
    [AllCurShortNames.dash]: {
        min: 11.5,
        max: 42,
    },
    // 0,117
    [AllCurShortNames.tron]: {
        min: 3000,
        max: 9850,
    },
};
