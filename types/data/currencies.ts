import { ExtractValFromObj } from "../utils/extractors";

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
export type TAllCurNotes = {
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

    [AllCurNames.nearProtocol]: AllCurNames.nearProtocol | "NEAR Protocol" | "NEAR" | "near" | "NEAR Protocol (NEAR)" | "Near (NEAR)" | "near-protocol-NEAR";

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
export type TAllCurNotesScope =
    | ExtractValFromObj<TAllCurNotes, AllCurNames.aave>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.algorand>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.amp>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.anchorProtocol>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.avalanche>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.axieInfinity>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.binanceCoin>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.binanceUsd>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.bitcoin>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.bitcoinBep2>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.bitcoinCash>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.bitcoinSv>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.bitTorrent>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.cardano>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.celo>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.chainlink>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.chiliz>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.compound>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.cosmos>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.cronos>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.dai>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.dash>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.decentraland>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.dogecoin>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.elrond>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.enjinCoin>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.eos>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.ethereum>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.ethereumClassic>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.fantom>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.filecoin>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.flow>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.ftxToken>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.gala>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.harmony>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.hedera>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.helium>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.holo>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.internetComputer>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.iota>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.kadena>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.klaytn>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.kuCoinToken>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.kusama>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.litecoin>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.maker>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.monero>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.nearProtocol>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.neo>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.nexo>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.polkadot>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.polygon>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.secret>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.shibainu>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.solana>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.stacks>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.stellar>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.terra>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.tether>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.tezos>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.theGraph>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.theSandbox>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.thetaNetwork>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.thorChain>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.tron>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.uma>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.uniswap>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.unusSedLeo>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.usdCoin>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.veChain>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.waves>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.wrappedBitcoin>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.xrp>
    | ExtractValFromObj<TAllCurNotes, AllCurNames.zcash>;

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

// * Other common data

export type TRefLink = `https://domain.com/${string}`;

type TIconPathFolders = "countries" | "interface" | "web3";

export type TIconPath = `@/public/img/icons/${TIconPathFolders}/${string}.svg`;
export type TCurIconPath<TScope extends TAllCurNotesScope> = `@/public/img/icons/crypto/${TScope}.svg`;

// export function pathBuilder(mainFolder: string, subFolder: string, item: string) {

// }
