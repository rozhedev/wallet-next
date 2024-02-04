import { AllCurShortNames } from "@/types/data/currencies";
import type { TWebSocketAPILinks, TRateObj, TAirdropLimits } from "@/types/api/rate-api";
import { AIRDROP_LIMIT_USD } from "@/data/constants/limits";

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
    // * tether always == 1
    [AllCurShortNames.tether]: 1,
    [AllCurShortNames.terra]: 0,
    [AllCurShortNames.tron]: 0,
    [AllCurShortNames.xrp]: 0,
};

// * Offline rates for airdrop calc
export const offlineRate: Required<TRateObj> = {
    [AllCurShortNames.algorand]: 0,
    [AllCurShortNames.avalanche]: 0,
    [AllCurShortNames.binanceCoin]: 300.9,
    [AllCurShortNames.bitcoin]: 43063.91,
    [AllCurShortNames.cardano]: 0,
    // ---
    [AllCurShortNames.chainlink]: 0,
    [AllCurShortNames.dash]: 27.6,
    [AllCurShortNames.dogecoin]: 0,
    [AllCurShortNames.ethereum]: 2304.01,
    [AllCurShortNames.litecoin]: 68.31,
    // ---
    [AllCurShortNames.monero]: 167.95,
    [AllCurShortNames.polkadot]: 0,
    [AllCurShortNames.polygon]: 0,
    [AllCurShortNames.solana]: 97.94,
    [AllCurShortNames.stellar]: 0.1116,
    // ---
    // * tether always == 1
    [AllCurShortNames.tether]: 1,
    [AllCurShortNames.terra]: 0,
    [AllCurShortNames.tron]: 0.117,
    [AllCurShortNames.xrp]: 0,
};

// * Airdrop limits, based on currency rate
export const airdropLimits: Pick<
    TAirdropLimits,
    | AllCurShortNames.binanceCoin
    | AllCurShortNames.bitcoin
    | AllCurShortNames.dash
    | AllCurShortNames.ethereum
    | AllCurShortNames.litecoin
    | AllCurShortNames.monero
    | AllCurShortNames.solana
    | AllCurShortNames.stellar
    | AllCurShortNames.tether
    | AllCurShortNames.tron
> = {
    [AllCurShortNames.binanceCoin]: {
        min: AIRDROP_LIMIT_USD.min / offlineRate["binance-coin"],
        max: AIRDROP_LIMIT_USD.max / offlineRate["binance-coin"],
    },
    [AllCurShortNames.bitcoin]: {
        min: AIRDROP_LIMIT_USD.min / offlineRate.bitcoin,
        max: AIRDROP_LIMIT_USD.max / offlineRate.bitcoin,
    },
    [AllCurShortNames.dash]: {
        min: AIRDROP_LIMIT_USD.min / offlineRate.dash,
        max: AIRDROP_LIMIT_USD.max / offlineRate.dash,
    },
    [AllCurShortNames.ethereum]: {
        min: AIRDROP_LIMIT_USD.min / offlineRate.ethereum,
        max: AIRDROP_LIMIT_USD.max / offlineRate.ethereum,
    },
    [AllCurShortNames.litecoin]: {
        min: AIRDROP_LIMIT_USD.min / offlineRate.litecoin,
        max: AIRDROP_LIMIT_USD.max / offlineRate.litecoin,
    },
    [AllCurShortNames.monero]: {
        min: AIRDROP_LIMIT_USD.min / offlineRate.monero,
        max: AIRDROP_LIMIT_USD.max / offlineRate.monero,
    },
    [AllCurShortNames.solana]: {
        min: AIRDROP_LIMIT_USD.min / offlineRate.solana,
        max: AIRDROP_LIMIT_USD.max / offlineRate.solana,
    },
    [AllCurShortNames.stellar]: {
        min: AIRDROP_LIMIT_USD.min / offlineRate.stellar,
        max: AIRDROP_LIMIT_USD.max / offlineRate.stellar,
    },
    [AllCurShortNames.tether]: {
        min: AIRDROP_LIMIT_USD.min,
        max: AIRDROP_LIMIT_USD.max,
    },
    [AllCurShortNames.tron]: {
        min: AIRDROP_LIMIT_USD.min / offlineRate.tron,
        max: AIRDROP_LIMIT_USD.max / offlineRate.tron,
    },
};
