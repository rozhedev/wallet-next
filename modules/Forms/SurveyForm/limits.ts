import { AllCurShortNames } from "@/types/data/currencies";

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
