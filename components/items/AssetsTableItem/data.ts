import type { TAssetsTableItemArr } from "./types";
import type { TAllCurNotes } from "@/types/data/currencies";
import { AllCurNames } from "@/types/data/currencies";

import aaveAAVE from "@/public/img/icons/crypto/aave-AAVE.svg";
import algorandALGO from "@/public/img/icons/crypto/algorand-ALGO.svg";
import ampAMP from "@/public/img/icons/crypto/amp-AMP.svg";
import anchorProtocolANC from "@/public/img/icons/crypto/anchor-protocol-ANC.svg";
import bitcoinBTC from "@/public/img/icons/crypto/bitcoin-BTC.svg";
import ethereumETH from "@/public/img/icons/crypto/ethereum-ETH.svg";
import binanceCoinBNB from "@/public/img/icons/crypto/binance-coin-BNB.svg";
import tetherUSDT from "@/public/img/icons/crypto/tether-USDT.svg";
import solanaSOL from "@/public/img/icons/crypto/solana-SOL.svg";
import cardanoADA from "@/public/img/icons/crypto/cardano-ADA.svg";
import xrpXRP from "@/public/img/icons/crypto/xrp-XRP.svg";
import terraLUNA from "@/public/img/icons/crypto/terra-LUNA.svg";
import polkadotDOT from "@/public/img/icons/crypto/polkadot-DOT.svg";
import avalancheAVAX from "@/public/img/icons/crypto/avalanche-AVAX.svg";
import dogecoinDOGE from "@/public/img/icons/crypto/dogecoin-DOGE.svg";
import shibainuSHIB from "@/public/img/icons/crypto/shiba-inu-SHIB.svg";
import polygonMATIC from "@/public/img/icons/crypto/polygon-MATIC.svg";
import cronosCRO from "@/public/img/icons/crypto/cronos-CRO.svg";
import wrappedBitcoinWBTC from "@/public/img/icons/crypto/wrapped-bitcoin-WBTC.svg";
import litecoinLTC from "@/public/img/icons/crypto/litecoin-LTC.svg";
import chainlinkLINK from "@/public/img/icons/crypto/chainlink-LINK.svg";
import daiDAI from "@/public/img/icons/crypto/dai-DAI.svg";
import bitcoinCashBCH from "@/public/img/icons/crypto/bitcoin-cash-BCH.svg";
import fantomFTM from "@/public/img/icons/crypto/fantom-FTM.svg";
import axieInfinityAXS from "@/public/img/icons/crypto/axie-infinity-AXS.svg";
import tronTRX from "@/public/img/icons/crypto/tron-TRX.svg";
import stellarXLM from "@/public/img/icons/crypto/stellar-XLM.svg";
import nearNEAR from "@/public/img/icons/crypto/near-NEAR.svg";
import ftxTokenFTX from "@/public/img/icons/crypto/ftx-token-FTX.svg";
import cosmosATOM from "@/public/img/icons/crypto/cosmos-ATOM.svg";
import veChainVET from "@/public/img/icons/crypto/ve-chain-VET.svg";
import hederaHBAR from "@/public/img/icons/crypto/hedera-hashgraph-HBAR.svg";
import sandboxSAND from "@/public/img/icons/crypto/sandbox-SAND.svg";
import filecoinFIL from "@/public/img/icons/crypto/filecoin-FIL.svg";
import internetComputerICP from "@/public/img/icons/crypto/internet-computer-ICP.svg";
import thetaTHETA from "@/public/img/icons/crypto/theta-THETA.svg";
import elrondEGLD from "@/public/img/icons/crypto/elrond-EGLD.svg";
import ethereumClassicETC from "@/public/img/icons/crypto/ethereum-classic-ETC.svg";
import moneroXLM from "@/public/img/icons/crypto/monero-XMR.svg";
import heliumHNT from "@/public/img/icons/crypto/helium-HNT.svg";
import tezosXTZ from "@/public/img/icons/crypto/tezos-XTZ.svg";
import iotaMIOTA from "@/public/img/icons/crypto/iota-MIOTA.svg";

// * Data
export const assetTableItemArr: TAssetsTableItemArr = [
    {
        id: 1,
        order: 1,
        curIcon: aaveAAVE,
        curName: "Aave (AAVE)",
        iconPaths: {
            sendPC: true,
            receivePC: false,
            sendPhone: true,
            receivePhone: false,
            exchange: true,
            buy: false,
            stacking: true,
        },
    },
    {
        id: 2,
        order: 2,
        curIcon: algorandALGO,
        curName: "Algorand (ALGO)",
        iconPaths: {
            sendPC: true,
            receivePC: false,
            sendPhone: true,
            receivePhone: false,
            exchange: true,
            buy: false,
            stacking: true,
        },
    },
    {
        id: 3,
        order: 3,
        curIcon: ampAMP,
        curName: "Aave (AAVE)",
        iconPaths: {
            sendPC: true,
            receivePC: false,
            sendPhone: true,
            receivePhone: false,
            exchange: true,
            buy: false,
            stacking: true,
        },
    },
    {
        id: 4,
        order: 4,
        curIcon: anchorProtocolANC,
        curName: "Anchor Protocol (ANC)",
        iconPaths: {
            sendPC: true,
            receivePC: false,
            sendPhone: true,
            receivePhone: false,
            exchange: true,
            buy: false,
            stacking: true,
        },
    },
    {
        id: 5,
        order: 5,
        curIcon: bitcoinBTC,
        curName: "Bitcoin (BTC)",
        iconPaths: {
            sendPC: true,
            receivePC: false,
            sendPhone: true,
            receivePhone: false,
            exchange: true,
            buy: false,
            stacking: true,
        },
    },
    {
        id: 6,
        order: 6,
        curIcon: ethereumETH,
        curName: "Ethereum (ETH)",
        iconPaths: {
            sendPC: true,
            receivePC: false,
            sendPhone: true,
            receivePhone: false,
            exchange: true,
            buy: false,
            stacking: true,
        },
    },
];
