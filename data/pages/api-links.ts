import { TApiLinkMask } from "@/components/items/MainRateItem";
import { AllCurShortNames } from "@/types/data/currencies";

// * WS - Web Socket
export const WS_RATE_API: Record<
    | AllCurShortNames.algorand
    | AllCurShortNames.avalanche
    | AllCurShortNames.binanceCoin
    | AllCurShortNames.bitcoin
    | AllCurShortNames.cardano
    | AllCurShortNames.chainlink
    | AllCurShortNames.dash
    | AllCurShortNames.dogecoin
    | AllCurShortNames.ethereum
    | AllCurShortNames.litecoin
    | AllCurShortNames.monero
    | AllCurShortNames.polkadot
    | AllCurShortNames.polygon
    | AllCurShortNames.solana
    | AllCurShortNames.stellar
    | AllCurShortNames.terra
    | AllCurShortNames.tron
    | AllCurShortNames.xrp,
    TApiLinkMask
> = {
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
