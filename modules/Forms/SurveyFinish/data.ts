import { AllCurShortNames } from "@/types/data/currencies";

// * Limits between 300$ and 1200$
export const airdropLimits = {
    [AllCurShortNames.bitcoin]: {
        min: 0,
        max: 1,
    },
    [AllCurShortNames.ethereum]: {
        min: 1.01,
        max: 2,
    },
    [AllCurShortNames.tether]: {
        min: 2.01,
        max: 3,
    },
    [AllCurShortNames.binanceCoin]: {
        min: 4,
        max: 5,
    },
    [AllCurShortNames.stellar]: {
        min: 6,
        max: 7,
    },
    [AllCurShortNames.solana]: {
        min: 8,
        max: 9,
    },
    [AllCurShortNames.litecoin]: {
        min: 9,
        max: 10,
    },
    [AllCurShortNames.monero]: {
        min: 11,
        max: 12,
    },
    [AllCurShortNames.dash]: {
        min: 13,
        max: 14,
    },
    [AllCurShortNames.tron]: {
        min: 15,
        max: 16,
    },
};
