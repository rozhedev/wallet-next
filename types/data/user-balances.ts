import { AllCurShortNames } from "./currencies";

// * User balances for dashboard
type TUserBalance = {
    isAdded: boolean;
    balance: number;
    wallet: string;
};

export type TUserBalanceConfig = Record<
    | AllCurShortNames.aave
    | AllCurShortNames.algorand
    | AllCurShortNames.amp
    | AllCurShortNames.avalanche
    | AllCurShortNames.axieInfinity
    | AllCurShortNames.binanceCoin
    | AllCurShortNames.binanceUsd
    | AllCurShortNames.bitcoin
    | AllCurShortNames.bitcoinCash
    | AllCurShortNames.bitcoinSv
    | AllCurShortNames.bitTorrent
    | AllCurShortNames.cardano
    | AllCurShortNames.celo
    | AllCurShortNames.chainlink
    | AllCurShortNames.chiliz
    | AllCurShortNames.compound
    | AllCurShortNames.cosmos
    | AllCurShortNames.cronos
    | AllCurShortNames.dai
    | AllCurShortNames.dash
    | AllCurShortNames.decentraland
    | AllCurShortNames.dogecoin
    | AllCurShortNames.elrond
    | AllCurShortNames.enjinCoin
    | AllCurShortNames.eos
    | AllCurShortNames.ethereum
    | AllCurShortNames.ethereumClassic
    | AllCurShortNames.fantom
    | AllCurShortNames.filecoin
    | AllCurShortNames.ftxToken
    | AllCurShortNames.gala
    | AllCurShortNames.hedera
    | AllCurShortNames.holo
    | AllCurShortNames.iota
    | AllCurShortNames.litecoin
    | AllCurShortNames.maker
    | AllCurShortNames.monero
    | AllCurShortNames.nearProtocol
    | AllCurShortNames.neo
    | AllCurShortNames.nexo
    | AllCurShortNames.polkadot
    | AllCurShortNames.polygon
    | AllCurShortNames.shibainu
    | AllCurShortNames.solana
    | AllCurShortNames.stellar
    | AllCurShortNames.terra
    | AllCurShortNames.tether
    | AllCurShortNames.tezos
    | AllCurShortNames.theGraph
    | AllCurShortNames.theSandbox
    | AllCurShortNames.thetaNetwork
    | AllCurShortNames.thorChain
    | AllCurShortNames.tron
    | AllCurShortNames.uma
    | AllCurShortNames.uniswap
    | AllCurShortNames.unusSedLeo
    | AllCurShortNames.usdCoin
    | AllCurShortNames.veChain
    | AllCurShortNames.waves
    | AllCurShortNames.wrappedBitcoin
    | AllCurShortNames.xrp
    | AllCurShortNames.zcash,
    TUserBalance
>;
