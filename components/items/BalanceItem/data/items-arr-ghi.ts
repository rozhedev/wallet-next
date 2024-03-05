import { AllCurFullNames } from "@/types/data/currencies";
import type { TBalanceItemArr } from "../types";
import { galaGALA, hederaHBAR, holoHOT, iotaMIOTA } from "@/data/pages/currencies-icons";

import { ETH_ADDR_TOKEN, HBAR_ADDR } from "@/data/api/env";
import { qrCodeEthereumETH, qrCodeHederaHBAR } from "./icons";

// * Data
export const balanceItemArrGHI: TBalanceItemArr = [
    {
        id: "balance-item-gala",
        curIconPath: galaGALA,
        curIconAlt: "gala-GALA",
        curName: AllCurFullNames.gala,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: ETH_ADDR_TOKEN,
        qrCodeImg: qrCodeEthereumETH,
        isAdded: false,
    },
    {
        id: "balance-item-hedera",
        curIconPath: hederaHBAR,
        curIconAlt: "hedera-HBAR",
        curName: AllCurFullNames.hedera,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: HBAR_ADDR,
        qrCodeImg: qrCodeHederaHBAR,
        isAdded: false,
    },
    {
        id: "balance-item-holo",
        curIconPath: holoHOT,
        curIconAlt: "holo-HOT",
        curName: AllCurFullNames.holo,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: ETH_ADDR_TOKEN,
        qrCodeImg: qrCodeEthereumETH,
        isAdded: false,
    },
    {
        id: "balance-item-iota",
        curIconPath: iotaMIOTA,
        curIconAlt: "iota-MIOTA",
        curName: AllCurFullNames.iota,
        pureAmount: 0,
        usdAmount: 0,
        walletAddress: ETH_ADDR_TOKEN,
        qrCodeImg: qrCodeEthereumETH,
        isAdded: false,
    },
];
