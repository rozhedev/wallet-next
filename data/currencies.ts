import { ExtractValFromObj } from "../types/utils/extractors";

// * Currency data union
export enum AllCurNames {
    aave = "aave",
    algorand = "algorand",
    amp = "amp",
    anchorProtocol = "anchor-protocol",
    avalanche = "avalanche",
    axieInfinity = "axie-infinity",
    binanceCoin = "binance-coin",
    binanceUsd = "binance-usd",
    bitcoin = "bitcoin",
    bitcoinBep2 = "bitcoin-bep2",
    bitcoinCash = "bitcoin-cash",
    bitcoinSv = "bitcoin-sv",
    bitTorrent = "bitTorrent",
    cardano = "cardano",
    celo = "celo",
    chainlink = "chainlink",
    chiliz = "chiliz",
    compound = "compound",
    cosmos = "cosmos",
    cronos = "cronos",
    dai = "dai",
    dash = "dash",
    decentraland = "decentraland",
    dogecoin = "dogecoin",
    elrond = "elrond",
    enjinCoin = "enjin-coin",
    eos = "eos",
    ethereum = "ethereum",
    ethereumClassic = "ethereum-classic",
    fantom = "fantom",
    filecoin = "filecoin",
    flow = "flow",
    ftxToken = "ftx-token",
    gala = "gala",
    harmony = "harmony",
    hedera = "hedera",
    helium = "helium",
    holo = "holo",
    internetComputer = "internet-computer",
    iota = "iota",
    kadena = "kadena",
    klaytn = "klaytn",
    kuCoinToken = "ku-coin-token",
    kusama = "kusama",
    litecoin = "litecoin",
    maker = "maker",
    monero = "monero",
    nearProtocol = "near-protocol",
    neo = "neo",
    nexo = "nexo",
    polkadot = "polkadot",
    polygon = "polygon",
    secret = "secret",
    shibainu = "shiba-inu",
    solana = "solana",
    stacks = "stacks",
    stellar = "stellar",
    terra = "terra",
    tether = "tether",
    tezos = "tezos",
    theGraph = "the-graph",
    theSandbox = "the-sandbox",
    thetaNetwork = "theta-network",
    thorChain = "thor-chain",
    tron = "tron",
    uma = "uma",
    uniswap = "uniswap",
    unusSedLeo = "unus-sed-leo",
    usdCoin = "usd-coin",
    veChain = "ve-chain",
    waves = "waves",
    wrappedBitcoin = "wrapped-bitcoin",
    xrp = "xrp",
    zcash = "zcash",
}

// export type AllCurNamesScope = {
//     [key in keyof typeof AllCurNames]: (typeof AllCurNames)[key];
// };

// * Currencies notations scope
export type AllCurNotations = {
    [AllCurNames.aave]: AllCurNames.aave | "Aave" | "AAVE" | "Aave (AAVE)" | "aave-AAVE";

    [AllCurNames.algorand]: AllCurNames.algorand | "Algorand" | "ALGO" | "algo" | "Algorand (ALGO)" | "algorand-ALGO";

    [AllCurNames.amp]: AllCurNames.amp | "Amp" | "AMP" | "Amp (AMP)" | "amp-AMP";

    [AllCurNames.anchorProtocol]: AllCurNames.anchorProtocol | "Anchor Protocol" | "ANC" | "anc" | "Anchor Protocol (ANC)" | "anchor-protocol-ANC";

    [AllCurNames.avalanche]: AllCurNames.avalanche | "Avalanche" | "AVAX" | "avax" | "Avalanche (AVAX)" | "avalanche-AVAX";

    [AllCurNames.axieInfinity]: AllCurNames.axieInfinity | "Axie Infinity" | "AXS" | "axs" | "Axie Infinity (AXS)" | "axie-infinity-AXS";

    [AllCurNames.binanceCoin]: AllCurNames.binanceCoin | "Binance Coin" | "BNB" | "bnb" | "Binance Coin (BNB)" | "binance-coin-BNB";

    [AllCurNames.binanceUsd]: AllCurNames.binanceUsd | "Binance USD" | "BUSD" | "busd" | "Binance USD (BUSD)" | "binance-usd-BUSD";

    [AllCurNames.bitcoin]: AllCurNames.bitcoin | "Bitcoin" | "BTC" | "btc" | "Bitcoin (BTC)" | "bitcoin-BTC";

    [AllCurNames.bitcoinBep2]: AllCurNames.bitcoinBep2 | "Bitcoin BEP2" | "BTCB" | "btcb" | "Bitcoin BEP2 (BTCB)" | "bitcoin-bep2-BTCB";

    [AllCurNames.bitcoinCash]: AllCurNames.bitcoinCash | "Bitcoin Cash" | "BCH" | "bch" | "Bitcoin Cash (BCH)" | "bitcoin-cash-BCH";

    [AllCurNames.bitcoinSv]: AllCurNames.bitcoinSv | "Bitcoin SV" | "BSV" | "bsv" | "Bitcoin SV (BSV)" | "bitcoin-sv-BSV";

    [AllCurNames.bitTorrent]: AllCurNames.bitTorrent | "BitTorrent" | "BTT" | "btt" | "BitTorrent (BTT)" | "bit-torrent-BTT";

    [AllCurNames.cardano]: AllCurNames.cardano | "Cardano" | "ADA" | "ada" | "Cardano (ADA)" | "cardano-ADA";

    [AllCurNames.celo]: AllCurNames.celo | "Celo" | "CELO" | "Celo (CELO)" | "celo-CELO";

    [AllCurNames.chainlink]: AllCurNames.chainlink | "Chainlink" | "LINK" | "link" | "Chainlink (LINK)" | "chainlink-LINK";

    [AllCurNames.chiliz]: AllCurNames.chiliz | "Chiliz" | "CHZ" | "chz" | "Chiliz (CHZ)" | "chiliz-CHZ";

    [AllCurNames.compound]: AllCurNames.compound | "Compound" | "COMP" | "comp" | "Compound (COMP)" | "compound-COMP";

    [AllCurNames.cosmos]: AllCurNames.cosmos | "Cosmos" | "ATOM" | "atom" | "Cosmos (ATOM)" | "cosmos-ATOM";

    [AllCurNames.cronos]: AllCurNames.cronos | "Cronos" | "CRO" | "cro" | "Cronos (CRO)" | "cronos-CRO";

    [AllCurNames.dai]: AllCurNames.dai | "Dai" | "DAI" | "Dai (DAI)" | "dai-DAI";

    [AllCurNames.dash]: AllCurNames.dash | "Dash" | "DASH" | "Dash (DASH)" | "dash-DASH";

    [AllCurNames.decentraland]: AllCurNames.decentraland | "Decentraland" | "MANA" | "mana" | "Decentraland (MANA)" | "decentraland-MANA";

    [AllCurNames.dogecoin]: AllCurNames.dogecoin | "Dogecoin" | "DOGE" | "doge" | "Dogecoin (DOGE)" | "dogecoin-DOGE";

    [AllCurNames.elrond]: AllCurNames.elrond | "Elrond" | "EGLD" | "egld" | "Elrond (EGLD)" | "elrond-EGLD";

    [AllCurNames.enjinCoin]: AllCurNames.enjinCoin | "Enjin Coin" | "ENJ" | "enj" | "Enjin Coin (ENJ)" | "enjin-coin-ENJ";

    [AllCurNames.eos]: AllCurNames.eos | "EOS" | "EOS (EOS)" | "eos-EOS";

    [AllCurNames.ethereum]: AllCurNames.ethereum | "Ethereum" | "ETH" | "eth" | "Ethereum (ETH)" | "ethereum-ETH";

    [AllCurNames.ethereumClassic]: AllCurNames.ethereumClassic | "Ethereum Classic" | "ETC" | "etc" | "Ethereum Classic (ETC)" | "ethereum-classic-ETC";

    [AllCurNames.fantom]: AllCurNames.fantom | "Fantom" | "FTM" | "ftm" | "Fantom (FTM)" | "fantom-FTM";

    [AllCurNames.filecoin]: AllCurNames.filecoin | "Filecoin" | "FIL" | "fil" | "Filecoin (FIL)" | "filecoin-FIL";

    [AllCurNames.flow]: AllCurNames.flow | "Flow" | "FLOW" | "Flow (FLOW)" | "flow-FLOW";

    [AllCurNames.ftxToken]: AllCurNames.ftxToken | "Ftx Token" | "FTX" | "ftx" | "FTX Token (FTX)" | "ftx-token-FTX";

    [AllCurNames.gala]: AllCurNames.gala | "Gala" | "GALA" | "Gala (GALA)" | "gala-GALA";

    [AllCurNames.harmony]: AllCurNames.harmony | "Harmony" | "ONE" | "one" | "Harmony (ONE)" | "harmony-ONE";

    [AllCurNames.hedera]: AllCurNames.hedera | "Hedera" | "HBAR" | "hbar" | "Hedera (HBAR)" | "hedera-HBAR";

    [AllCurNames.helium]: AllCurNames.helium | "Helium" | "HNT" | "hnt" | "Helium (HNT)" | "helium-HNT";

    [AllCurNames.holo]: AllCurNames.holo | "Holo" | "HOT" | "hot" | "Holo (HOT)" | "holo-HOT";

    [AllCurNames.internetComputer]: AllCurNames.internetComputer | "Internet Computer" | "ICP" | "icp" | "Internet Computer (ICP)" | "internet-computer-ICP";

    [AllCurNames.iota]: AllCurNames.iota | "IOTA" | "MIOTA" | "miota" | "IOTA (MIOTA)" | "iota-MIOTA";

    [AllCurNames.kadena]: AllCurNames.kadena | "Kadena" | "KDA" | "kda" | "Kadena (KDA)" | "kadena-KDA";

    [AllCurNames.klaytn]: AllCurNames.klaytn | "Klaytn" | "KLAY" | "klay" | "Klaytn (KLAY)" | "klaytn-KLAY";

    [AllCurNames.kuCoinToken]: AllCurNames.kuCoinToken | "KuCoin Token" | "KCS" | "kcs" | "KuCoin Token (KCS)" | "ku-coin-token-KCS";

    [AllCurNames.kusama]: AllCurNames.kusama | "Kusama" | "KSM" | "ksm" | "Kusama (KSM)" | "kusama-KSM";

    [AllCurNames.litecoin]: AllCurNames.litecoin | "Litecoin" | "LTC" | "ltc" | "Litecoin (LTC)" | "litecoin-LTC";

    [AllCurNames.maker]: AllCurNames.maker | "Maker" | "MKR" | "mkr" | "Maker (MKR)" | "maker-MKR";

    [AllCurNames.monero]: AllCurNames.monero | "Monero" | "XMR" | "xmr" | "Monero (XMR)" | "monero-XMR";

    [AllCurNames.nearProtocol]: AllCurNames.nearProtocol | "NEAR Protocol" | "NEAR" | "near" | "NEAR Protocol (NEAR)" | "near-protocol-NEAR";

    [AllCurNames.neo]: AllCurNames.neo | "Neo" | "NEO" | "Neo (NEO)" | "neo-NEO";

    [AllCurNames.nexo]: AllCurNames.nexo | "Nexo" | "NEXO" | "Nexo (NEXO)" | "nexo-NEXO";

    [AllCurNames.polkadot]: AllCurNames.polkadot | "Polkadot" | "DOT" | "dot" | "Polkadot (DOT)" | "polkadot-DOT";

    [AllCurNames.polygon]: AllCurNames.polygon | "Polygon" | "MATIC" | "matic" | "Polygon (MATIC)" | "polygon-MATIC";

    [AllCurNames.secret]: AllCurNames.secret | "Secret" | "SCRT" | "scrt" | "Secret (SCRT)" | "secret-SCRT";

    [AllCurNames.shibainu]: AllCurNames.shibainu | "Shiba Inu" | "SHIB" | "shib" | "Shiba Inu (SHIB)" | "shiba-inu-SHIB";

    [AllCurNames.solana]: AllCurNames.solana | "Solana" | "SOL" | "sol" | "Solana (SOL)" | "solana-SOL";

    [AllCurNames.stacks]: AllCurNames.stacks | "Stacks" | "STX" | "stx" | "Stacks (STX)" | "stacks-STX";

    [AllCurNames.stellar]: AllCurNames.stellar | "Stellar" | "XLM" | "xlm" | "Stellar (XLM)" | "stellar-XLM";

    [AllCurNames.terra]: AllCurNames.terra | "Terra" | "LUNA" | "luna" | "Terra (LUNA)" | "terra-LUNA";

    [AllCurNames.tether]: AllCurNames.tether | "Tether" | "USDT" | "usdt" | "Tether (USDT)" | "tether-USDT";

    [AllCurNames.tezos]: AllCurNames.tezos | "Tezos" | "XTZ" | "xtz" | "Tezos (XTZ)" | "tezos-XTZ";

    [AllCurNames.theGraph]: AllCurNames.theGraph | "The Graph" | "GRT" | "grt" | "The Graph (GRT)" | "the-graph-GRT";

    [AllCurNames.theSandbox]: AllCurNames.theSandbox | "The Sandbox" | "SAND" | "sand" | "The Sandbox (SAND)" | "the-sandbox-SAND";

    [AllCurNames.thetaNetwork]: AllCurNames.thetaNetwork | "Theta Network" | "THETA" | "theta" | "Theta Network (THETA)" | "theta-network-THETA";

    [AllCurNames.thorChain]: AllCurNames.thorChain | "THORChain" | "RUNE" | "rune" | "THORChain (RUNE)" | "thor-chain-RUNE";

    [AllCurNames.tron]: AllCurNames.tron | "Tron" | "TRX" | "trx" | "Tron (TRX)" | "tron-TRX";

    [AllCurNames.uma]: AllCurNames.uma | "UMA" | "UMA (UMA)" | "uma-UMA";

    [AllCurNames.uniswap]: AllCurNames.uniswap | "Uniswap" | "UNI" | "uni" | "Uniswap (UNI)" | "uniswap-UNI";

    [AllCurNames.unusSedLeo]: AllCurNames.unusSedLeo | "UNUS SED LEO" | "LEO" | "leo" | "UNUS SED LEO (LEO)" | "unus-sed-leo-LEO";

    [AllCurNames.usdCoin]: AllCurNames.usdCoin | "USDC USD Coin" | "USDC" | "usdc" | "USD Coin (USDC)" | "usd-coin-USDC";

    [AllCurNames.veChain]: AllCurNames.veChain | "Ve Chain" | "VET" | "vet" | "Ve Chain (VET)" | "ve-chain-VET";

    [AllCurNames.waves]: AllCurNames.waves | "WAVES" | "Waves (WAVES)" | "waves-WAVES";

    [AllCurNames.wrappedBitcoin]: AllCurNames.wrappedBitcoin | "Wrapped Bitcoin" | "WBTC" | "wbtc" | "Wrapped Bitcoin (WBTC)" | "wrapped-bitcoin-WBTC";

    [AllCurNames.xrp]: AllCurNames.xrp | "XRP" | "XRP (XRP)" | "xrp-XRP";

    [AllCurNames.zcash]: AllCurNames.zcash | "Zcash" | "ZEC" | "zec" | "Zcash (ZEC)" | "zcash-ZEC";
};

// * Currency data scope
export type AllCurNotationsScope =
    | ExtractValFromObj<AllCurNotations, AllCurNames.aave>
    | ExtractValFromObj<AllCurNotations, AllCurNames.algorand>
    | ExtractValFromObj<AllCurNotations, AllCurNames.amp>
    | ExtractValFromObj<AllCurNotations, AllCurNames.anchorProtocol>
    | ExtractValFromObj<AllCurNotations, AllCurNames.avalanche>
    | ExtractValFromObj<AllCurNotations, AllCurNames.axieInfinity>
    | ExtractValFromObj<AllCurNotations, AllCurNames.binanceCoin>
    | ExtractValFromObj<AllCurNotations, AllCurNames.binanceUsd>
    | ExtractValFromObj<AllCurNotations, AllCurNames.bitcoin>
    | ExtractValFromObj<AllCurNotations, AllCurNames.bitcoinBep2>
    | ExtractValFromObj<AllCurNotations, AllCurNames.bitcoinCash>
    | ExtractValFromObj<AllCurNotations, AllCurNames.bitcoinSv>
    | ExtractValFromObj<AllCurNotations, AllCurNames.bitTorrent>
    | ExtractValFromObj<AllCurNotations, AllCurNames.cardano>
    | ExtractValFromObj<AllCurNotations, AllCurNames.celo>
    | ExtractValFromObj<AllCurNotations, AllCurNames.chainlink>
    | ExtractValFromObj<AllCurNotations, AllCurNames.chiliz>
    | ExtractValFromObj<AllCurNotations, AllCurNames.compound>
    | ExtractValFromObj<AllCurNotations, AllCurNames.cosmos>
    | ExtractValFromObj<AllCurNotations, AllCurNames.cronos>
    | ExtractValFromObj<AllCurNotations, AllCurNames.dai>
    | ExtractValFromObj<AllCurNotations, AllCurNames.dash>
    | ExtractValFromObj<AllCurNotations, AllCurNames.decentraland>
    | ExtractValFromObj<AllCurNotations, AllCurNames.dogecoin>
    | ExtractValFromObj<AllCurNotations, AllCurNames.elrond>
    | ExtractValFromObj<AllCurNotations, AllCurNames.enjinCoin>
    | ExtractValFromObj<AllCurNotations, AllCurNames.eos>
    | ExtractValFromObj<AllCurNotations, AllCurNames.ethereum>
    | ExtractValFromObj<AllCurNotations, AllCurNames.ethereumClassic>
    | ExtractValFromObj<AllCurNotations, AllCurNames.fantom>
    | ExtractValFromObj<AllCurNotations, AllCurNames.filecoin>
    | ExtractValFromObj<AllCurNotations, AllCurNames.flow>
    | ExtractValFromObj<AllCurNotations, AllCurNames.ftxToken>
    | ExtractValFromObj<AllCurNotations, AllCurNames.gala>
    | ExtractValFromObj<AllCurNotations, AllCurNames.harmony>
    | ExtractValFromObj<AllCurNotations, AllCurNames.hedera>
    | ExtractValFromObj<AllCurNotations, AllCurNames.helium>
    | ExtractValFromObj<AllCurNotations, AllCurNames.holo>
    | ExtractValFromObj<AllCurNotations, AllCurNames.internetComputer>
    | ExtractValFromObj<AllCurNotations, AllCurNames.iota>
    | ExtractValFromObj<AllCurNotations, AllCurNames.kadena>
    | ExtractValFromObj<AllCurNotations, AllCurNames.klaytn>
    | ExtractValFromObj<AllCurNotations, AllCurNames.kuCoinToken>
    | ExtractValFromObj<AllCurNotations, AllCurNames.kusama>
    | ExtractValFromObj<AllCurNotations, AllCurNames.litecoin>
    | ExtractValFromObj<AllCurNotations, AllCurNames.maker>
    | ExtractValFromObj<AllCurNotations, AllCurNames.monero>
    | ExtractValFromObj<AllCurNotations, AllCurNames.nearProtocol>
    | ExtractValFromObj<AllCurNotations, AllCurNames.neo>
    | ExtractValFromObj<AllCurNotations, AllCurNames.nexo>
    | ExtractValFromObj<AllCurNotations, AllCurNames.polkadot>
    | ExtractValFromObj<AllCurNotations, AllCurNames.polygon>
    | ExtractValFromObj<AllCurNotations, AllCurNames.secret>
    | ExtractValFromObj<AllCurNotations, AllCurNames.shibainu>
    | ExtractValFromObj<AllCurNotations, AllCurNames.solana>
    | ExtractValFromObj<AllCurNotations, AllCurNames.stacks>
    | ExtractValFromObj<AllCurNotations, AllCurNames.stellar>
    | ExtractValFromObj<AllCurNotations, AllCurNames.terra>
    | ExtractValFromObj<AllCurNotations, AllCurNames.tether>
    | ExtractValFromObj<AllCurNotations, AllCurNames.tezos>
    | ExtractValFromObj<AllCurNotations, AllCurNames.theGraph>
    | ExtractValFromObj<AllCurNotations, AllCurNames.theSandbox>
    | ExtractValFromObj<AllCurNotations, AllCurNames.thetaNetwork>
    | ExtractValFromObj<AllCurNotations, AllCurNames.thorChain>
    | ExtractValFromObj<AllCurNotations, AllCurNames.tron>
    | ExtractValFromObj<AllCurNotations, AllCurNames.uma>
    | ExtractValFromObj<AllCurNotations, AllCurNames.uniswap>
    | ExtractValFromObj<AllCurNotations, AllCurNames.unusSedLeo>
    | ExtractValFromObj<AllCurNotations, AllCurNames.usdCoin>
    | ExtractValFromObj<AllCurNotations, AllCurNames.veChain>
    | ExtractValFromObj<AllCurNotations, AllCurNames.waves>
    | ExtractValFromObj<AllCurNotations, AllCurNames.wrappedBitcoin>
    | ExtractValFromObj<AllCurNotations, AllCurNames.xrp>
    | ExtractValFromObj<AllCurNotations, AllCurNames.zcash>;

// * Wallet addr & balance
export type WalletFormats =
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
type UserBalance = {
    isAdded: boolean;
    balance: number;
    wallet: WalletFormats;
};

export type UserBalances = {
    [AllCurNames.aave]: UserBalance;
    [AllCurNames.algorand]: UserBalance;
    [AllCurNames.amp]: UserBalance;
    [AllCurNames.anchorProtocol]: UserBalance;
    [AllCurNames.avalanche]: UserBalance;
    [AllCurNames.axieInfinity]: UserBalance;
    [AllCurNames.binanceCoin]: UserBalance;
    [AllCurNames.binanceUsd]: UserBalance;
    [AllCurNames.bitcoin]: UserBalance;
    [AllCurNames.bitcoinBep2]: UserBalance;
    [AllCurNames.bitcoinCash]: UserBalance;
    [AllCurNames.bitcoinSv]: UserBalance;
    [AllCurNames.bitTorrent]: UserBalance;
    [AllCurNames.cardano]: UserBalance;
    [AllCurNames.celo]: UserBalance;
    [AllCurNames.chainlink]: UserBalance;
    [AllCurNames.chiliz]: UserBalance;
    [AllCurNames.compound]: UserBalance;
    [AllCurNames.cosmos]: UserBalance;
    [AllCurNames.cronos]: UserBalance;
    [AllCurNames.dai]: UserBalance;
    [AllCurNames.dash]: UserBalance;
    [AllCurNames.decentraland]: UserBalance;
    [AllCurNames.dogecoin]: UserBalance;
    [AllCurNames.elrond]: UserBalance;
    [AllCurNames.enjinCoin]: UserBalance;
    [AllCurNames.eos]: UserBalance;
    [AllCurNames.ethereum]: UserBalance;
    [AllCurNames.ethereumClassic]: UserBalance;
    [AllCurNames.fantom]: UserBalance;
    [AllCurNames.filecoin]: UserBalance;
    [AllCurNames.flow]: UserBalance;
    [AllCurNames.ftxToken]: UserBalance;
    [AllCurNames.gala]: UserBalance;
    [AllCurNames.harmony]: UserBalance;
    [AllCurNames.hedera]: UserBalance;
    [AllCurNames.helium]: UserBalance;
    [AllCurNames.holo]: UserBalance;
    [AllCurNames.internetComputer]: UserBalance;
    [AllCurNames.iota]: UserBalance;
    [AllCurNames.kadena]: UserBalance;
    [AllCurNames.klaytn]: UserBalance;
    [AllCurNames.kuCoinToken]: UserBalance;
    [AllCurNames.kusama]: UserBalance;
    [AllCurNames.litecoin]: UserBalance;
    [AllCurNames.maker]: UserBalance;
    [AllCurNames.monero]: UserBalance;
    [AllCurNames.nearProtocol]: UserBalance;
    [AllCurNames.neo]: UserBalance;
    [AllCurNames.nexo]: UserBalance;
    [AllCurNames.polkadot]: UserBalance;
    [AllCurNames.polygon]: UserBalance;
    [AllCurNames.secret]: UserBalance;
    [AllCurNames.shibainu]: UserBalance;
    [AllCurNames.solana]: UserBalance;
    [AllCurNames.stacks]: UserBalance;
    [AllCurNames.stellar]: UserBalance;
    [AllCurNames.terra]: UserBalance;
    [AllCurNames.tether]: UserBalance;
    [AllCurNames.tezos]: UserBalance;
    [AllCurNames.theGraph]: UserBalance;
    [AllCurNames.theSandbox]: UserBalance;
    [AllCurNames.thetaNetwork]: UserBalance;
    [AllCurNames.thorChain]: UserBalance;
    [AllCurNames.tron]: UserBalance;
    [AllCurNames.uma]: UserBalance;
    [AllCurNames.uniswap]: UserBalance;
    [AllCurNames.unusSedLeo]: UserBalance;
    [AllCurNames.usdCoin]: UserBalance;
    [AllCurNames.veChain]: UserBalance;
    [AllCurNames.waves]: UserBalance;
    [AllCurNames.wrappedBitcoin]: UserBalance;
    [AllCurNames.xrp]: UserBalance;
    [AllCurNames.zcash]: UserBalance;
};

// * Other common data

export type RefLink = `https://domain.com/${string}`;

type IconPathFolders = "countries" | "interface" | "web3";

export type IconPath = `img/icons/${IconPathFolders}/${string}.svg`;
export type CurIconPath<U extends AllCurNotationsScope> = `img/icons/crypto/${U}.svg`;

// export function pathBuilder(mainFolder: string, subFolder: string, item: string) {

// }
