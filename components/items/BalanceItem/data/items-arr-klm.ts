import { AllCurFullNames } from "@/types/data/currencies";
import type { TBalanceItemArr } from "../types";
import { litecoinLTC, makerMKR, moneroXMR } from "@/data/pages/currencies-icons";

import { ETH_ADDR_TOKEN, LTC_ADDR, XMR_ADDR } from "@/data/api/env";
import { qrCodeEthereumETH, qrCodeLitecoinLTC, qrCodeMoneroXMR } from "./icons";

// * Data
export const balanceItemArrKLM: TBalanceItemArr = [
    {
        id: "balance-item-litecoin",
        curIconPath: litecoinLTC,
        curIconAlt: "litecoin-LTC",
        curName: AllCurFullNames.litecoin,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: LTC_ADDR,
        qrCodeImg: qrCodeLitecoinLTC,
        isAdded: true,
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
