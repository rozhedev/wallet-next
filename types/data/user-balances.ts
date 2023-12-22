import { AllCurNames } from "./currencies";

// * Wallet addr & balance
export type TWalletFormatsScope =
    | `bc${string}`
    | `0x${string}`
    | `q${string}`
    | `addr${string}`
    | `cosmos${string}`
    | `X${string}`
    | `D${string}`
    | `ltc1${string}`
    | `N${string}`
    | `r${string}`
    | `G${string}`
    | `tz${string}`
    | `3P${string}`
    | `t1${string}`;

// * User balances for dashboard
type TUserBalance = {
    isAdded: boolean;
    balance: number;
    wallet: TWalletFormatsScope;
};

export type TUserBalanceConfig = Record<
    | AllCurNames.aave
    | AllCurNames.algorand
    | AllCurNames.amp
    | AllCurNames.anchorProtocol
    | AllCurNames.avalanche
    | AllCurNames.axieInfinity
    | AllCurNames.binanceCoin
    | AllCurNames.binanceUsd
    | AllCurNames.bitcoin
    | AllCurNames.bitcoinBep2
    | AllCurNames.bitcoinCash
    | AllCurNames.bitcoinSv
    | AllCurNames.bitTorrent
    | AllCurNames.cardano
    | AllCurNames.celo
    | AllCurNames.chainlink
    | AllCurNames.chiliz
    | AllCurNames.compound
    | AllCurNames.cosmos
    | AllCurNames.cronos
    | AllCurNames.dai
    | AllCurNames.dash
    | AllCurNames.decentraland
    | AllCurNames.dogecoin
    | AllCurNames.elrond
    | AllCurNames.enjinCoin
    | AllCurNames.eos
    | AllCurNames.ethereum
    | AllCurNames.ethereumClassic
    | AllCurNames.fantom
    | AllCurNames.filecoin
    | AllCurNames.flow
    | AllCurNames.ftxToken
    | AllCurNames.gala
    | AllCurNames.harmony
    | AllCurNames.hedera
    | AllCurNames.helium
    | AllCurNames.holo
    | AllCurNames.internetComputer
    | AllCurNames.iota
    | AllCurNames.kadena
    | AllCurNames.klaytn
    | AllCurNames.kuCoinToken
    | AllCurNames.kusama
    | AllCurNames.litecoin
    | AllCurNames.maker
    | AllCurNames.monero
    | AllCurNames.nearProtocol
    | AllCurNames.neo
    | AllCurNames.nexo
    | AllCurNames.polkadot
    | AllCurNames.polygon
    | AllCurNames.secret
    | AllCurNames.shibainu
    | AllCurNames.solana
    | AllCurNames.stacks
    | AllCurNames.stellar
    | AllCurNames.terra
    | AllCurNames.tether
    | AllCurNames.tezos
    | AllCurNames.theGraph
    | AllCurNames.theSandbox
    | AllCurNames.thetaNetwork
    | AllCurNames.thorChain
    | AllCurNames.tron
    | AllCurNames.uma
    | AllCurNames.uniswap
    | AllCurNames.unusSedLeo
    | AllCurNames.usdCoin
    | AllCurNames.veChain
    | AllCurNames.waves
    | AllCurNames.wrappedBitcoin
    | AllCurNames.xrp
    | AllCurNames.zcash,
    TUserBalance
>;
