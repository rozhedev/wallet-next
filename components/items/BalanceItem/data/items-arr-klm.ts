import { AllCurFullNames } from "@/types/data/currencies";
import type { TBalanceItemArr } from "../types";
import { kadenaKDA, klaytnKLAY, kuCoinTokenKCS, kusamaKSM, litecoinLTC, makerMKR, moneroXMR } from "@/data/pages/currencies-icons";

import { ETH_ADDR_TOKEN, LTC_ADDR, XMR_ADDR } from "@/data/api/env";
import { qrCodeEthereumETH, qrCodeLitecoinLTC, qrCodeMoneroXMR } from "./icons";

// * Data
export const balanceItemArrKLM: TBalanceItemArr = [
    {
        id: "balance-item-kadena",
        curIconPath: kadenaKDA,
        curIconAlt: "kadena-KDA",
        curName: AllCurFullNames.kadena,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: ETH_ADDR_TOKEN,
        qrCodeImg: qrCodeEthereumETH,
        isAdded: false,
    },
    {
        id: "balance-item-klaytn",
        curIconPath: klaytnKLAY,
        curIconAlt: "klaytn-KLAY",
        curName: AllCurFullNames.klaytn,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: ETH_ADDR_TOKEN,
        qrCodeImg: qrCodeEthereumETH,
        isAdded: false,
    },
    {
        id: "balance-item-ku-coin-token",
        curIconPath: kuCoinTokenKCS,
        curIconAlt: "ku-coin-token-KCS",
        curName: AllCurFullNames.kuCoinToken,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: ETH_ADDR_TOKEN,
        qrCodeImg: qrCodeEthereumETH,
        isAdded: false,
    },
    {
        id: "balance-item-kusama",
        curIconPath: kusamaKSM,
        curIconAlt: "kusama-KSM",
        curName: AllCurFullNames.kusama,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: ETH_ADDR_TOKEN,
        qrCodeImg: qrCodeEthereumETH,
        isAdded: false,
    },
    {
        id: "balance-item-litecoin",
        curIconPath: litecoinLTC,
        curIconAlt: "litecoin-LTC",
        curName: AllCurFullNames.litecoin,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: LTC_ADDR,
        qrCodeImg: qrCodeLitecoinLTC,
        isAdded: false,
    },
    {
        id: "balance-item-maker",
        curIconPath: makerMKR,
        curIconAlt: "maker-MKR",
        curName: AllCurFullNames.maker,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: ETH_ADDR_TOKEN,
        qrCodeImg: qrCodeEthereumETH,
        isAdded: false,
    },
    {
        id: "balance-item-monero",
        curIconPath: moneroXMR,
        curIconAlt: "monero-XMR",
        curName: AllCurFullNames.monero,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: XMR_ADDR,
        qrCodeImg: qrCodeMoneroXMR,
        isAdded: false,
    },
];
