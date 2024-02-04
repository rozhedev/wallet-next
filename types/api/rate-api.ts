// * TYPES for data/api/rate-api.ts

import { AllCurShortNames } from "@/types/data/currencies";
import type { TApiLinkMask } from "@/components/items/MainRateItem";

export type TWebSocketAPILinks = Record<
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
>;

// * Object for get currency rate via WebSocket
export type TRateObj = Record<
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
    | AllCurShortNames.tether
    | AllCurShortNames.tron
    | AllCurShortNames.xrp,
    number
>;

// * Airdrop limits, based on currency rate
// * Don't use Partial for this type
export type TAirdropLimits = Record<
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
    | AllCurShortNames.tether
    | AllCurShortNames.tron
    | AllCurShortNames.xrp,
    {
        min: number;
        max: number;
    }
>;
