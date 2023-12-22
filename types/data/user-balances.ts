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

export type TUserBalanceConfig = {
    [AllCurNames.aave]: TUserBalance;
    [AllCurNames.algorand]: TUserBalance;
    [AllCurNames.amp]: TUserBalance;
    [AllCurNames.anchorProtocol]: TUserBalance;
    [AllCurNames.avalanche]: TUserBalance;
    [AllCurNames.axieInfinity]: TUserBalance;
    [AllCurNames.binanceCoin]: TUserBalance;
    [AllCurNames.binanceUsd]: TUserBalance;
    [AllCurNames.bitcoin]: TUserBalance;
    [AllCurNames.bitcoinBep2]: TUserBalance;
    [AllCurNames.bitcoinCash]: TUserBalance;
    [AllCurNames.bitcoinSv]: TUserBalance;
    [AllCurNames.bitTorrent]: TUserBalance;
    [AllCurNames.cardano]: TUserBalance;
    [AllCurNames.celo]: TUserBalance;
    [AllCurNames.chainlink]: TUserBalance;
    [AllCurNames.chiliz]: TUserBalance;
    [AllCurNames.compound]: TUserBalance;
    [AllCurNames.cosmos]: TUserBalance;
    [AllCurNames.cronos]: TUserBalance;
    [AllCurNames.dai]: TUserBalance;
    [AllCurNames.dash]: TUserBalance;
    [AllCurNames.decentraland]: TUserBalance;
    [AllCurNames.dogecoin]: TUserBalance;
    [AllCurNames.elrond]: TUserBalance;
    [AllCurNames.enjinCoin]: TUserBalance;
    [AllCurNames.eos]: TUserBalance;
    [AllCurNames.ethereum]: TUserBalance;
    [AllCurNames.ethereumClassic]: TUserBalance;
    [AllCurNames.fantom]: TUserBalance;
    [AllCurNames.filecoin]: TUserBalance;
    [AllCurNames.flow]: TUserBalance;
    [AllCurNames.ftxToken]: TUserBalance;
    [AllCurNames.gala]: TUserBalance;
    [AllCurNames.harmony]: TUserBalance;
    [AllCurNames.hedera]: TUserBalance;
    [AllCurNames.helium]: TUserBalance;
    [AllCurNames.holo]: TUserBalance;
    [AllCurNames.internetComputer]: TUserBalance;
    [AllCurNames.iota]: TUserBalance;
    [AllCurNames.kadena]: TUserBalance;
    [AllCurNames.klaytn]: TUserBalance;
    [AllCurNames.kuCoinToken]: TUserBalance;
    [AllCurNames.kusama]: TUserBalance;
    [AllCurNames.litecoin]: TUserBalance;
    [AllCurNames.maker]: TUserBalance;
    [AllCurNames.monero]: TUserBalance;
    [AllCurNames.nearProtocol]: TUserBalance;
    [AllCurNames.neo]: TUserBalance;
    [AllCurNames.nexo]: TUserBalance;
    [AllCurNames.polkadot]: TUserBalance;
    [AllCurNames.polygon]: TUserBalance;
    [AllCurNames.secret]: TUserBalance;
    [AllCurNames.shibainu]: TUserBalance;
    [AllCurNames.solana]: TUserBalance;
    [AllCurNames.stacks]: TUserBalance;
    [AllCurNames.stellar]: TUserBalance;
    [AllCurNames.terra]: TUserBalance;
    [AllCurNames.tether]: TUserBalance;
    [AllCurNames.tezos]: TUserBalance;
    [AllCurNames.theGraph]: TUserBalance;
    [AllCurNames.theSandbox]: TUserBalance;
    [AllCurNames.thetaNetwork]: TUserBalance;
    [AllCurNames.thorChain]: TUserBalance;
    [AllCurNames.tron]: TUserBalance;
    [AllCurNames.uma]: TUserBalance;
    [AllCurNames.uniswap]: TUserBalance;
    [AllCurNames.unusSedLeo]: TUserBalance;
    [AllCurNames.usdCoin]: TUserBalance;
    [AllCurNames.veChain]: TUserBalance;
    [AllCurNames.waves]: TUserBalance;
    [AllCurNames.wrappedBitcoin]: TUserBalance;
    [AllCurNames.xrp]: TUserBalance;
    [AllCurNames.zcash]: TUserBalance;
};
