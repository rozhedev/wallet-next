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
    | AllCurShortNames.anchorProtocol
    | AllCurShortNames.avalanche
    | AllCurShortNames.axieInfinity
    | AllCurShortNames.binanceCoin
    | AllCurShortNames.binanceUsd
    | AllCurShortNames.bitcoin
    | AllCurShortNames.bitcoinBep2
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
    | AllCurShortNames.flow
    | AllCurShortNames.ftxToken
    | AllCurShortNames.gala
    | AllCurShortNames.harmony
    | AllCurShortNames.hedera
    | AllCurShortNames.helium
    | AllCurShortNames.holo
    | AllCurShortNames.internetComputer
    | AllCurShortNames.iota
    | AllCurShortNames.kadena
    | AllCurShortNames.klaytn
    | AllCurShortNames.kuCoinToken
    | AllCurShortNames.kusama
    | AllCurShortNames.litecoin
    | AllCurShortNames.maker
    | AllCurShortNames.monero
    | AllCurShortNames.nearProtocol
    | AllCurShortNames.neo
    | AllCurShortNames.nexo
    | AllCurShortNames.polkadot
    | AllCurShortNames.polygon
    | AllCurShortNames.secret
    | AllCurShortNames.shibainu
    | AllCurShortNames.solana
    | AllCurShortNames.stacks
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
