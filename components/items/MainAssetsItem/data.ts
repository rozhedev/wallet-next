import type { TMainAssetsItemArr } from "./types";
import type { TAllCurNotes } from "@/types/data/currencies";
import { AllCurNames } from "@/types/data/currencies";

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
import algorandALGO from "@/public/img/icons/crypto/algorand-ALGO.svg";
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
import aaveAAVE from "@/public/img/icons/crypto/aave-AAVE.svg";

// * Data
export const mainAssetItemArr: TMainAssetsItemArr = [
    {
        id: `${AllCurNames.bitcoin}-tooltip`,
        disabled: false,
        imgPath: bitcoinBTC,
        imgAlt: AllCurNames.bitcoin,
        title: "Bitcoin (BTC)",
    },
    {
        id: `${AllCurNames.ethereum}-tooltip`,
        disabled: false,
        imgPath: ethereumETH,
        imgAlt: AllCurNames.ethereum,
        title: "Ethereum (ETH)",
    },
    {
        id: `${AllCurNames.binanceCoin}-tooltip`,
        disabled: false,
        imgPath: binanceCoinBNB,
        imgAlt: AllCurNames.binanceCoin,
        title: "Binance Coin (BNB)",
    },
    {
        id: `${AllCurNames.tether}-tooltip`,
        disabled: false,
        imgPath: tetherUSDT,
        imgAlt: AllCurNames.tether,
        title: "Tether (USDT)",
    },
    {
        id: `${AllCurNames.solana}-tooltip`,
        disabled: false,
        imgPath: solanaSOL,
        imgAlt: AllCurNames.solana,
        title: "Solana (SOL)",
    },
    {
        id: `${AllCurNames.cardano}-tooltip`,
        disabled: false,
        imgPath: cardanoADA,
        imgAlt: AllCurNames.cardano,
        title: "Cardano (ADA)",
    },
    {
        id: `${AllCurNames.xrp}-tooltip`,
        disabled: false,
        imgPath: xrpXRP,
        imgAlt: AllCurNames.xrp,
        title: "XRP (XRP)",
    },
    {
        id: `${AllCurNames.terra}-tooltip`,
        disabled: false,
        imgPath: terraLUNA,
        imgAlt: AllCurNames.terra,
        title: "Terra (LUNA)",
    },
    {
        id: `${AllCurNames.polkadot}-tooltip`,
        disabled: false,
        imgPath: polkadotDOT,
        imgAlt: AllCurNames.polkadot,
        title: "Polkadot (DOT)",
    },
    {
        id: `${AllCurNames.avalanche}-tooltip`,
        disabled: false,
        imgPath: avalancheAVAX,
        imgAlt: AllCurNames.avalanche,
        title: "Avalanche (AVAX)",
    },
    {
        id: `${AllCurNames.dogecoin}-tooltip`,
        disabled: false,
        imgPath: dogecoinDOGE,
        imgAlt: AllCurNames.dogecoin,
        title: "Dogecoin (DOGE)",
    },
    {
        id: `${AllCurNames.shibainu}-tooltip`,
        disabled: false,
        imgPath: shibainuSHIB,
        imgAlt: AllCurNames.shibainu,
        title: "Shiba Inu (SHIB)",
    },
    {
        id: `${AllCurNames.polygon}-tooltip`,
        disabled: false,
        imgPath: polygonMATIC,
        imgAlt: AllCurNames.polygon,
        title: "Polygon (MATIC)",
    },
    {
        id: `${AllCurNames.cronos}-tooltip`,
        disabled: false,
        imgPath: cronosCRO,
        imgAlt: AllCurNames.cronos,
        title: "Cronos (CRO)",
    },
    {
        id: `${AllCurNames.wrappedBitcoin}-tooltip`,
        disabled: false,
        imgPath: wrappedBitcoinWBTC,
        imgAlt: AllCurNames.wrappedBitcoin,
        title: "Wrapped Bitcoin (WBTC)",
    },
    {
        id: `${AllCurNames.algorand}-tooltip`,
        disabled: false,
        imgPath: algorandALGO,
        imgAlt: AllCurNames.algorand,
        title: "Algorand (ALGO)",
    },
    {
        id: `${AllCurNames.litecoin}-tooltip`,
        disabled: false,
        imgPath: litecoinLTC,
        imgAlt: AllCurNames.litecoin,
        title: "Litecoin (LTC)",
    },
    {
        id: `${AllCurNames.chainlink}-tooltip`,
        disabled: false,
        imgPath: chainlinkLINK,
        imgAlt: AllCurNames.chainlink,
        title: "Chainlink (LINK)",
    },
    {
        id: `${AllCurNames.dai}-tooltip`,
        disabled: false,
        imgPath: daiDAI,
        imgAlt: AllCurNames.dai,
        title: "Dai (DAI)",
    },
    {
        id: `${AllCurNames.bitcoinCash}-tooltip`,
        disabled: false,
        imgPath: bitcoinCashBCH,
        imgAlt: AllCurNames.bitcoinCash,
        title: "Bitcoin Cash (BCH)",
    },
    {
        id: `${AllCurNames.fantom}-tooltip`,
        disabled: false,
        imgPath: fantomFTM,
        imgAlt: AllCurNames.fantom,
        title: "Fantom (FTM)",
    },
    {
        id: `${AllCurNames.axieInfinity}-tooltip`,
        disabled: false,
        imgPath: axieInfinityAXS,
        imgAlt: AllCurNames.axieInfinity,
        title: "Axie Infinity (AXS)",
    },
    {
        id: `${AllCurNames.tron}-tooltip`,
        disabled: false,
        imgPath: tronTRX,
        imgAlt: AllCurNames.tron,
        title: "Tron (TRX)",
    },
    {
        id: `${AllCurNames.stellar}-tooltip`,
        disabled: false,
        imgPath: stellarXLM,
        imgAlt: AllCurNames.stellar,
        title: "Stellar (XLM)",
    },
    {
        id: `${AllCurNames.nearProtocol}-tooltip`,
        disabled: false,
        imgPath: nearNEAR,
        imgAlt: AllCurNames.nearProtocol,
        title: "Near (NEAR)",
    },
    {
        id: `${AllCurNames.ftxToken}-tooltip`,
        disabled: false,
        imgPath: ftxTokenFTX,
        imgAlt: AllCurNames.ftxToken,
        title: "FTX Token (FTX)",
    },
    {
        id: `${AllCurNames.cosmos}-tooltip`,
        disabled: false,
        imgPath: cosmosATOM,
        imgAlt: AllCurNames.cosmos,
        title: "Cosmos (ATOM)",
    },
    {
        id: `${AllCurNames.veChain}-tooltip`,
        disabled: false,
        imgPath: veChainVET,
        imgAlt: AllCurNames.veChain,
        title: "Ve Chain (VET)",
    },
    {
        id: `${AllCurNames.hedera}-tooltip`,
        disabled: false,
        imgPath: hederaHBAR,
        imgAlt: AllCurNames.hedera,
        title: "Hedera (HBAR)",
    },
    {
        id: `${AllCurNames.theSandbox}-tooltip`,
        disabled: false,
        imgPath: sandboxSAND,
        imgAlt: AllCurNames.theSandbox,
        title: "The Sandbox (SAND)",
    },
    {
        id: `${AllCurNames.filecoin}-tooltip`,
        disabled: false,
        imgPath: filecoinFIL,
        imgAlt: AllCurNames.filecoin,
        title: "Filecoin (FIL)",
    },
    {
        id: `${AllCurNames.internetComputer}-tooltip`,
        disabled: false,
        imgPath: internetComputerICP,
        imgAlt: AllCurNames.internetComputer,
        title: "Internet Computer (ICP)",
    },
    {
        id: `${AllCurNames.thetaNetwork}-tooltip`,
        disabled: false,
        imgPath: thetaTHETA,
        imgAlt: AllCurNames.thetaNetwork,
        title: "Theta Network (THETA)",
    },
    {
        id: `${AllCurNames.elrond}-tooltip`,
        disabled: false,
        imgPath: elrondEGLD,
        imgAlt: AllCurNames.elrond,
        title: "Elrond (EGLD)",
    },
    {
        id: `${AllCurNames.ethereumClassic}-tooltip`,
        disabled: true,
        imgPath: ethereumClassicETC,
        imgAlt: AllCurNames.ethereumClassic,
        title: "Ethereum Classic (ETC)",
    },
    {
        id: `${AllCurNames.monero}-tooltip`,
        disabled: true,
        imgPath: moneroXLM,
        imgAlt: AllCurNames.monero,
        title: "Monero (XMR)",
    },
    {
        id: `${AllCurNames.helium}-tooltip`,
        disabled: false,
        imgPath: heliumHNT,
        imgAlt: AllCurNames.helium,
        title: "Helium (HNT)",
    },
    {
        id: `${AllCurNames.tezos}-tooltip`,
        disabled: false,
        imgPath: tezosXTZ,
        imgAlt: AllCurNames.tezos,
        title: "Tezos (XTZ)",
    },
    {
        id: `${AllCurNames.iota}-tooltip`,
        disabled: false,
        imgPath: iotaMIOTA,
        imgAlt: AllCurNames.iota,
        title: "IOTA (MIOTA)",
    },
    {
        id: `${AllCurNames.aave}-tooltip`,
        disabled: false,
        imgPath: aaveAAVE,
        imgAlt: AllCurNames.aave,
        title: "Aave (AAVE)",
    },
];
