import { AllCurFullNames, AllCurShortNames } from "@/types/data/currencies";
import { TInputListItemArr } from "@/types/data/shared";

export const surveyFormData: Record<"form1" | "form2" | "form3" | "form4" | "form5" | "form6" | "form7" | "form8" | "form9", { id: `survey-form${number}`; question: string }> = {
    form1: {
        id: "survey-form1",
        question: "How long have you been using cryptocurrencies?",
    },
    form2: {
        id: "survey-form2",
        question: "What cryptocurrencies have you used?",
    },
    form3: {
        id: "survey-form3",
        question: "For what purposes did you use cryptocurrency?",
    },
    form4: {
        id: "survey-form4",
        question: "Do you use crypto exchanges to store your personal funds?",
    },
    form5: {
        id: "survey-form5",
        question: "What wallets have you used before?",
    },
    form6: {
        id: "survey-form6",
        question: "How did you find out about Flem Wallet?",
    },
    form7: {
        id: "survey-form7",
        question: "Do you have NFT tokens?",
    },
    form8: {
        id: "survey-form8",
        question: "Would you like to participate in the Flem Wallet Preview Program?",
    },
    form9: {
        id: "survey-form9",
        question: "Select the currency in which you want to receive the airdrop:",
    },
};

// * In forms with type: "checkbox" - id & name props must be same
export const surveyForms: Record<"form1" | "form2" | "form3" | "form4" | "form5" | "form6" | "form7" | "form8" | "form9", TInputListItemArr> = {
    form1: [
        {
            id: "survey-answer1-1",
            type: "radio",
            name: "survey-answer1",
            label: "It's my first experience.",
        },
        {
            id: "survey-answer1-2",
            type: "radio",
            name: "survey-answer1",
            label: "Already used cryptocurrency for personal purposes.",
        },
        {
            id: "survey-answer1-3",
            type: "radio",
            name: "survey-answer1",
            label: "Use cryptocurrency on a regular basis.",
        },
        {
            id: "survey-answer1-4",
            type: "radio",
            name: "survey-answer1",
            label: "Use cryptocurrency and get profit from it.",
        },
    ],
    form2: [
        {
            id: "survey-use-bitcoin-BTC",
            type: "checkbox",
            name: "survey-use-bitcoin-BTC",
            label: AllCurFullNames.bitcoin,
        },
        {
            id: "survey-use-ethereum-ETH",
            type: "checkbox",
            name: "survey-use-ethereum-ETH",
            label: AllCurFullNames.ethereum,
        },
        {
            id: "survey-use-tether-USDT",
            type: "checkbox",
            name: "survey-use-tether-USDT",
            label: AllCurFullNames.tether,
        },
        {
            id: "survey-use-binance-coin-BNB",
            type: "checkbox",
            name: "survey-use-binance-coin-BNB",
            label: AllCurFullNames.binanceCoin,
        },
        {
            id: "survey-use-dogecoin-DOGE",
            type: "checkbox",
            name: "survey-use-dogecoin-DOGE",
            label: AllCurFullNames.dogecoin,
        },
        {
            id: "survey-use-solana-SOL",
            type: "checkbox",
            name: "survey-use-solana-SOL",
            label: AllCurFullNames.solana,
        },
        {
            id: "survey-use-litecoin-LTC",
            type: "checkbox",
            name: "survey-use-litecoin-LTC",
            label: AllCurFullNames.litecoin,
        },
        {
            id: "survey-use-monero-XMR",
            type: "checkbox",
            name: "survey-use-monero-XMR",
            label: AllCurFullNames.monero,
        },
        {
            id: "survey-use-dash-DASH",
            type: "checkbox",
            name: "survey-use-dash-DASH",
            label: AllCurFullNames.dash,
        },
        {
            id: "survey-use-other",
            type: "checkbox",
            name: "survey-use-other",
            label: "Other currencies",
        },
    ],
    form3: [
        {
            id: "survey-pay-for-services",
            type: "checkbox",
            name: "survey-pay-for-services",
            label: "To pay for services.",
        },
        {
            id: "survey-purchase-digital-goods",
            type: "checkbox",
            name: "survey-purchase-digital-goods",
            label: "To purchase digital goods.",
        },
        {
            id: "survey-trade-on-exchanges",
            type: "checkbox",
            name: "survey-trade-on-exchanges",
            label: "To trade on cryptocurrency exchanges.",
        },
        {
            id: "survey-other-purposes",
            type: "checkbox",
            name: "survey-other-purposes",
            label: "For other purposes.",
        },
    ],
    form4: [
        {
            id: "survey-answer4-1",
            type: "radio",
            name: "survey-answer4",
            label: "Yes, I use.",
        },
        {
            id: "survey-answer4-2",
            type: "radio",
            name: "survey-answer4",
            label: "I prefer cold wallets.",
        },
        {
            id: "survey-answer4-3",
            type: "radio",
            name: "survey-answer4",
            label: "I prefer desktop software or mobile app.",
        },
        {
            id: "survey-answer4-4",
            type: "radio",
            name: "survey-answer4",
            label: "I don't have any funds in cryptocurrency.",
        },
    ],
    form5: [
        {
            id: "survey-trust-wallet",
            type: "checkbox",
            name: "survey-trust-wallet",
            label: "Trust Wallet",
        },
        {
            id: "survey-coinbase-wallet",
            type: "checkbox",
            name: "survey-coinbase-wallet",
            label: "Coinbase Wallet",
        },
        {
            id: "survey-electrum",
            type: "checkbox",
            name: "survey-electrum",
            label: "Electrum",
        },
        {
            id: "survey-metamask",
            type: "checkbox",
            name: "survey-metamask",
            label: "Metamask",
        },
        {
            id: "survey-exodus",
            type: "checkbox",
            name: "survey-exodus",
            label: "Exodus",
        },
        {
            id: "survey-mycelium",
            type: "checkbox",
            name: "survey-mycelium",
            label: "Mycelium",
        },
        {
            id: "survey-blockchain-wallet",
            type: "checkbox",
            name: "survey-blockchain-wallet",
            label: "Blockchain Wallet",
        },
        {
            id: "survey-crypto-com",
            type: "checkbox",
            name: "survey-crypto-com",
            label: "Crypto.com",
        },
        {
            id: "survey-atomic-wallet",
            type: "checkbox",
            name: "survey-atomic-wallet",
            label: "Atomic Wallet",
        },
        {
            id: "survey-other-wallet",
            type: "checkbox",
            name: "survey-other-wallet",
            label: "Other wallet",
        },
    ],
    form6: [
        {
            id: "survey-answer6-1",
            type: "radio",
            name: "survey-answer6",
            label: "Affiliate advertising in social networks.",
        },
        {
            id: "survey-answer6-2",
            type: "radio",
            name: "survey-answer6",
            label: "Video reviews on YouTube.",
        },
        {
            id: "survey-answer6-3",
            type: "radio",
            name: "survey-answer6",
            label: "From colleagues, friends, etc.",
        },
        {
            id: "survey-answer6-4",
            type: "radio",
            name: "survey-answer6",
            label: "Other informational source.",
        },
    ],
    form7: [
        {
            id: "survey-answer7-1",
            type: "radio",
            name: "survey-answer7",
            label: "Yes, I have several collections of tokens.",
        },
        {
            id: "survey-answer7-2",
            type: "radio",
            name: "survey-answer7",
            label: "Yes, I have a few tokens.",
        },
        {
            id: "survey-answer7-3",
            type: "radio",
            name: "survey-answer7",
            label: "I don’t have NFT.",
        },
        {
            id: "survey-answer7-4",
            type: "radio",
            name: "survey-answer7",
            label: "What is NFT?",
        },
    ],
    form8: [
        {
            id: "survey-answer8-1",
            type: "radio",
            name: "survey-answer8",
            label: "Yes, sure.",
        },
        {
            id: "survey-answer8-2",
            type: "radio",
            name: "survey-answer8",
            label: "No, thanks.",
        },
    ],
    form9: [
        {
            id: "survey-answer9-1",
            type: "radio",
            name: "survey-answer9",
            label: AllCurFullNames.bitcoin,
        },
        {
            id: "survey-answer9-2",
            type: "radio",
            name: "survey-answer9",
            label: AllCurFullNames.ethereum,
        },
        {
            id: "survey-answer9-3",
            type: "radio",
            name: "survey-answer9",
            label: AllCurFullNames.tether,
        },
        {
            id: "survey-answer9-4",
            type: "radio",
            name: "survey-answer9",
            label: AllCurFullNames.binanceCoin,
        },
        {
            id: "survey-answer9-5",
            type: "radio",
            name: "survey-answer9",
            label: AllCurFullNames.stellar,
        },
        {
            id: "survey-answer9-6",
            type: "radio",
            name: "survey-answer9",
            label: AllCurFullNames.solana,
        },
        {
            id: "survey-answer9-7",
            type: "radio",
            name: "survey-answer9",
            label: AllCurFullNames.litecoin,
        },
        {
            id: "survey-answer9-8",
            type: "radio",
            name: "survey-answer9",
            label: AllCurFullNames.monero,
        },
        {
            id: "survey-answer9-9",
            type: "radio",
            name: "survey-answer9",
            label: AllCurFullNames.dash,
        },
        {
            id: "survey-answer9-10",
            type: "radio",
            name: "survey-answer9",
            label: AllCurFullNames.tron,
        },
    ],
};
