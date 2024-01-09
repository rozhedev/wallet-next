import { AllCurNames } from "@/types/data/currencies";
import type { TBalanceItemArr } from "./types";

import { binanceCoinBNB, bitcoinBTC, cardanoADA, ethereumETH, polkadotDOT, solanaSOL, terraLUNA, tetherUSDT, usdCoinUSDC, xrpXRP } from "@/data/pages/currencies-icons";

export const balanceItemIcons: Record<"send" | "get" | "more" | "chevron" | "remove", React.ReactElement> = {
    send: (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M50.2857 22.8572L31.9999 4.57153L13.7142 22.8572" />
            <path d="M59.4285 59.4285H4.57141" />
            <path d="M32 50.2858V4.57153" />
        </svg>
    ),
    get: (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M13.7142 32L31.9999 50.2857L50.2857 32" />
            <path d="M59.4285 59.4285H4.57141" />
            <path d="M32 4.57153V50.2858" />
        </svg>
    ),
    more: (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M28 10.5H36" />
            <path d="M28 11.5H36" />
            <path d="M28 12.5H36" />
            <path d="M28 13.5H36" />
            <path d="M28 14.5H36" />
            <path d="M28 15.5H36" />
            <path d="M28 16.5H36" />
            <path d="M28 28.5H36" />
            <path d="M28 29.5H36" />
            <path d="M28 30.5H36" />
            <path d="M28 31.5H36" />
            <path d="M28 32.5H36" />
            <path d="M28 33.5H36" />
            <path d="M28 34.5H36" />
            <path d="M28 46.5H36" />
            <path d="M28 47.5H36" />
            <path d="M28 48.5H36" />
            <path d="M28 49.5H36" />
            <path d="M28 50.5H36" />
            <path d="M28 51.5H36" />
            <path d="M28 52.5H36" />
            <path d="M28 53.5H36" />
        </svg>
    ),
    chevron: (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M52.48 21.76L32 42.24L11.52 21.76" />
        </svg>
    ),
    remove: (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M54.8571 13.7144L50.2857 59.4286H13.7143L9.14282 13.7144" />
            <path d="M18.2858 13.7144V9.21153C18.2858 8.6022 18.4058 7.99883 18.639 7.43588C18.8721 6.87293 19.2139 6.36142 19.6448 5.93056C20.515 5.06039 21.6952 4.57153 22.9258 4.57153H41.0743C41.6837 4.57153 42.287 4.69155 42.85 4.92473C43.4129 5.15791 43.9244 5.49969 44.3553 5.93056C44.7862 6.36142 45.128 6.87293 45.3611 7.43588C45.5943 7.99883 45.7143 8.6022 45.7143 9.21153V13.7144" />
            <path d="M4.57141 13.7144H59.4285" />
            <path d="M22.8572 27.4285L41.1429 45.7142" />
            <path d="M41.1429 27.4285L22.8572 45.7142" />
        </svg>
    ),
};

export const balanceItemArr: TBalanceItemArr = [
    {
        id: AllCurNames.bitcoin,
        curIconPath: bitcoinBTC,
        curIconAlt: "bitcoin-BTC",
        curName: "Bitcoin (BTC)",
        pureAmount: 0,
        usdAmount: 0,
    },
    {
        id: AllCurNames.ethereum,
        curIconPath: ethereumETH,
        curIconAlt: "ethereum-ETH",
        curName: "Ethereum (ETH)",
        pureAmount: 0,
        usdAmount: 0,
    },
    {
        id: AllCurNames.tether,
        curIconPath: tetherUSDT,
        curIconAlt: "tether-USDT",
        curName: "Tether (USDT)",
        pureAmount: 0,
        usdAmount: 0,
    },
    {
        id: AllCurNames.binanceCoin,
        curIconPath: binanceCoinBNB,
        curIconAlt: "binance-coin-BNB",
        curName: "Binance Coin (BNB)",
        pureAmount: 0,
        usdAmount: 0,
    },
    {
        id: AllCurNames.usdCoin,
        curIconPath: usdCoinUSDC,
        curIconAlt: "usd-coin-USDC",
        curName: "USD Coin (USDC)",
        pureAmount: 0,
        usdAmount: 0,
    },
    {
        id: AllCurNames.xrp,
        curIconPath: xrpXRP,
        curIconAlt: "xrp-XRP",
        curName: "XRP (XRP)",
        pureAmount: 0,
        usdAmount: 0,
    },
    {
        id: AllCurNames.terra,
        curIconPath: terraLUNA,
        curIconAlt: "terra-LUNA",
        curName: "Terra (LUNA)",
        pureAmount: 0,
        usdAmount: 0,
    },
    {
        id: AllCurNames.cardano,
        curIconPath: cardanoADA,
        curIconAlt: "cardano-ADA",
        curName: "Cardano (ADA)",
        pureAmount: 0,
        usdAmount: 0,
    },
    {
        id: AllCurNames.solana,
        curIconPath: solanaSOL,
        curIconAlt: "solana-SOL",
        curName: "Solana (SOL)",
        pureAmount: 0,
        usdAmount: 0,
    },
    {
        id: AllCurNames.polkadot,
        curIconPath: polkadotDOT,
        curIconAlt: "polkadot-DOT",
        curName: "Polkadot (DOT)",
        pureAmount: 0,
        usdAmount: 0,
    },
];
