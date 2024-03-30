import { RequiredPick } from "../utils/utils";

// * Currency data union
export enum AllCurShortNames {
    aave = "aave",
    algorand = "algorand",
    amp = "amp",
    avalanche = "avalanche",
    axieInfinity = "axie-infinity",
    binanceCoin = "binance-coin",
    binanceUsd = "binance-usd",
    bitcoin = "bitcoin",
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
    ftxToken = "ftx-token",
    gala = "gala",
    hedera = "hedera",
    helium = "helium",
    holo = "holo",
    internetComputer = "internet-computer",
    iota = "iota",
    litecoin = "litecoin",
    maker = "maker",
    monero = "monero",
    nearProtocol = "near-protocol",
    neo = "neo",
    nexo = "nexo",
    polkadot = "polkadot",
    polygon = "polygon",
    shibainu = "shiba-inu",
    solana = "solana",
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

export enum AllCurFullNames {
    aave = "Aave (AAVE)",
    algorand = "Algorand (ALGO)",
    amp = "Amp (AMP)",
    anchorProtocol = "Anchor Protocol (ANC)",
    avalanche = "Avalanche (AVAX)",
    axieInfinity = "Axie Infinity (AXS)",
    binanceCoin = "Binance Coin (BNB)",
    binanceUsd = "Binance USD (BUSD)",
    bitcoin = "Bitcoin (BTC)",
    bitcoinCash = "Bitcoin Cash (BCH)",
    bitcoinSv = "Bitcoin SV (BSV)",
    bitTorrent = "BitTorrent (BTT)",
    cardano = "Cardano (ADA)",
    celo = "Celo (CELO)",
    chainlink = "Chainlink (LINK)",
    chiliz = "Chiliz (CHZ)",
    compound = "Compound (COMP)",
    cosmos = "Cosmos (ATOM)",
    cronos = "Cronos (CRO)",
    dai = "Dai (DAI)",
    dash = "Dash (DASH)",
    decentraland = "Decentraland (MANA)",
    dogecoin = "Dogecoin (DOGE)",
    elrond = "Elrond (EGLD)",
    enjinCoin = "Enjin Coin (ENJ)",
    ethereum = "Ethereum (ETH)",
    ethereumClassic = "Ethereum Classic (ETC)",
    fantom = "Fantom (FTM)",
    filecoin = "Filecoin (FIL)",
    ftxToken = "FTX Token (FTT)",
    gala = "Gala (GALA)",
    hedera = "Hedera (HBAR)",
    helium = "Helium (HNT)",
    holo = "Holo (HOT)",
    internetComputer = "Internet Computer (ICP)",
    iota = "IOTA (MIOTA)",
    kuCoinToken = "KuCoin Token (KCS)",
    litecoin = "Litecoin (LTC)",
    maker = "Maker (MKR)",
    monero = "Monero (XMR)",
    nearProtocol = "NEAR Protocol (NEAR)",
    neo = "Neo (NEO)",
    nexo = "Nexo (NEXO)",
    polkadot = "Polkadot (DOT)",
    polygon = "Polygon (MATIC)",
    shibainu = "Shiba Inu (SHIB)",
    solana = "Solana (SOL)",
    stellar = "Stellar (XLM)",
    terra = "Terra (LUNA)",
    tether = "Tether ERC20 (USDT)",
    tezos = "Tezos (XTZ)",
    theGraph = "The Graph (GRT)",
    theSandbox = "The Sandbox (SAND)",
    thetaNetwork = "Theta Network (THETA)",
    thorChain = "THORChain (RUNE)",
    tron = "Tron (TRX)",
    uma = "UMA (UMA)",
    uniswap = "Uniswap (UNI)",
    unusSedLeo = "UNUS SED LEO (LEO)",
    usdCoin = "USD Coin (USDC)",
    veChain = "Ve Chain (VET)",
    waves = "Waves (WAVES)",
    wrappedBitcoin = "Wrapped Bitcoin (WBTC)",
    xrp = "Ripple (XRP)",
    zcash = "Zcash (ZEC)",
}

// export type AllCurShortNamesScope = {
//     [key in keyof typeof AllCurShortNames]: (typeof AllCurShortNames)[key];
// };

// * Currencies notations scope
export type TAllCurNotes = {
    [AllCurShortNames.aave]: AllCurShortNames.aave | "Aave" | "AAVE" | AllCurFullNames.aave | "aave-AAVE";

    [AllCurShortNames.algorand]: AllCurShortNames.algorand | "Algorand" | "ALGO" | "algo" | AllCurFullNames.algorand | "algorand-ALGO";

    [AllCurShortNames.amp]: AllCurShortNames.amp | "Amp" | "AMP" | AllCurFullNames.amp | "amp-AMP";

    [AllCurShortNames.avalanche]: AllCurShortNames.avalanche | "Avalanche" | "AVAX" | "avax" | AllCurFullNames.avalanche | "avalanche-AVAX";

    [AllCurShortNames.axieInfinity]: AllCurShortNames.axieInfinity | "Axie Infinity" | "AXS" | "axs" | AllCurFullNames.axieInfinity | "axie-infinity-AXS";

    [AllCurShortNames.binanceCoin]: AllCurShortNames.binanceCoin | "Binance Coin" | "BNB" | "bnb" | AllCurFullNames.binanceCoin | "binance-coin-BNB";

    [AllCurShortNames.binanceUsd]: AllCurShortNames.binanceUsd | "Binance USD" | "BUSD" | "busd" | AllCurFullNames.binanceUsd | "binance-usd-BUSD";

    [AllCurShortNames.bitcoin]: AllCurShortNames.bitcoin | "Bitcoin" | "BTC" | "btc" | AllCurFullNames.bitcoin | "bitcoin-BTC";

    [AllCurShortNames.bitcoinCash]: AllCurShortNames.bitcoinCash | "Bitcoin Cash" | "BCH" | "bch" | AllCurFullNames.bitcoinCash | "bitcoin-cash-BCH";

    [AllCurShortNames.bitcoinSv]: AllCurShortNames.bitcoinSv | "Bitcoin SV" | "BSV" | "bsv" | AllCurFullNames.bitcoinSv | "bitcoin-sv-BSV";

    [AllCurShortNames.bitTorrent]: AllCurShortNames.bitTorrent | "BitTorrent" | "BTT" | "btt" | AllCurFullNames.bitTorrent | "bit-torrent-BTT";

    [AllCurShortNames.cardano]: AllCurShortNames.cardano | "Cardano" | "ADA" | "ada" | AllCurFullNames.cardano | "cardano-ADA";

    [AllCurShortNames.celo]: AllCurShortNames.celo | "Celo" | "CELO" | AllCurFullNames.celo | "celo-CELO";

    [AllCurShortNames.chainlink]: AllCurShortNames.chainlink | "Chainlink" | "LINK" | "link" | AllCurFullNames.chainlink | "chainlink-LINK";

    [AllCurShortNames.chiliz]: AllCurShortNames.chiliz | "Chiliz" | "CHZ" | "chz" | AllCurFullNames.chiliz | "chiliz-CHZ";

    [AllCurShortNames.compound]: AllCurShortNames.compound | "Compound" | "COMP" | "comp" | AllCurFullNames.compound | "compound-COMP";

    [AllCurShortNames.cosmos]: AllCurShortNames.cosmos | "Cosmos" | "ATOM" | "atom" | AllCurFullNames.cosmos | "cosmos-ATOM";

    [AllCurShortNames.cronos]: AllCurShortNames.cronos | "Cronos" | "CRO" | "cro" | AllCurFullNames.cronos | "cronos-CRO";

    [AllCurShortNames.dai]: AllCurShortNames.dai | "Dai" | "DAI" | AllCurFullNames.dai | "dai-DAI";

    [AllCurShortNames.dash]: AllCurShortNames.dash | "Dash" | "DASH" | AllCurFullNames.dash | "dash-DASH";

    [AllCurShortNames.decentraland]: AllCurShortNames.decentraland | "Decentraland" | "MANA" | "mana" | AllCurFullNames.decentraland | "decentraland-MANA";

    [AllCurShortNames.dogecoin]: AllCurShortNames.dogecoin | "Dogecoin" | "DOGE" | "doge" | AllCurFullNames.dogecoin | "dogecoin-DOGE";

    [AllCurShortNames.elrond]: AllCurShortNames.elrond | "Elrond" | "EGLD" | "egld" | AllCurFullNames.elrond | "elrond-EGLD";

    [AllCurShortNames.enjinCoin]: AllCurShortNames.enjinCoin | "Enjin Coin" | "ENJ" | "enj" | AllCurFullNames.enjinCoin | "enjin-coin-ENJ";

    [AllCurShortNames.ethereum]: AllCurShortNames.ethereum | "Ethereum" | "ETH" | "eth" | AllCurFullNames.ethereum | "ethereum-ETH";

    [AllCurShortNames.ethereumClassic]: AllCurShortNames.ethereumClassic | "Ethereum Classic" | "ETC" | "etc" | AllCurFullNames.ethereumClassic | "ethereum-classic-ETC";

    [AllCurShortNames.fantom]: AllCurShortNames.fantom | "Fantom" | "FTM" | "ftm" | AllCurFullNames.fantom | "fantom-FTM";

    [AllCurShortNames.filecoin]: AllCurShortNames.filecoin | "Filecoin" | "FIL" | "fil" | AllCurFullNames.filecoin | "filecoin-FIL";

    [AllCurShortNames.ftxToken]: AllCurShortNames.ftxToken | "Ftx Token" | "FTT" | "ftt" | AllCurFullNames.ftxToken | "ftx-token-FTT";

    [AllCurShortNames.gala]: AllCurShortNames.gala | "Gala" | "GALA" | AllCurFullNames.gala | "gala-GALA";

    [AllCurShortNames.hedera]: AllCurShortNames.hedera | "Hedera" | "HBAR" | "hbar" | AllCurFullNames.hedera | "hedera-HBAR";

    // * Not have address & balance
    [AllCurShortNames.helium]: AllCurShortNames.helium | "Helium" | "HNT" | "hnt" | AllCurFullNames.helium | "helium-HNT";

    [AllCurShortNames.holo]: AllCurShortNames.holo | "Holo" | "HOT" | "hot" | AllCurFullNames.holo | "holo-HOT";

    // * Not have address & balance
    [AllCurShortNames.internetComputer]: AllCurShortNames.internetComputer | "Internet Computer" | "ICP" | "icp" | AllCurFullNames.internetComputer | "internet-computer-ICP";

    [AllCurShortNames.iota]: AllCurShortNames.iota | "IOTA" | "MIOTA" | "miota" | AllCurFullNames.iota | "iota-MIOTA";

    [AllCurShortNames.litecoin]: AllCurShortNames.litecoin | "Litecoin" | "LTC" | "ltc" | AllCurFullNames.litecoin | "litecoin-LTC";

    [AllCurShortNames.maker]: AllCurShortNames.maker | "Maker" | "MKR" | "mkr" | AllCurFullNames.maker | "maker-MKR";

    [AllCurShortNames.monero]: AllCurShortNames.monero | "Monero" | "XMR" | "xmr" | AllCurFullNames.monero | "monero-XMR";

    [AllCurShortNames.nearProtocol]: AllCurShortNames.nearProtocol | "NEAR Protocol" | "NEAR" | "near" | AllCurFullNames.nearProtocol | "Near (NEAR)" | "near-protocol-NEAR";

    [AllCurShortNames.neo]: AllCurShortNames.neo | "Neo" | "NEO" | AllCurFullNames.neo | "neo-NEO";

    [AllCurShortNames.nexo]: AllCurShortNames.nexo | "Nexo" | "NEXO" | AllCurFullNames.nexo | "nexo-NEXO";

    [AllCurShortNames.polkadot]: AllCurShortNames.polkadot | "Polkadot" | "DOT" | "dot" | AllCurFullNames.polkadot | "polkadot-DOT";

    [AllCurShortNames.polygon]: AllCurShortNames.polygon | "Polygon" | "MATIC" | "matic" | AllCurFullNames.polygon | "polygon-MATIC";

    [AllCurShortNames.shibainu]: AllCurShortNames.shibainu | "Shiba Inu" | "SHIB" | "shib" | AllCurFullNames.shibainu | "shiba-inu-SHIB";

    [AllCurShortNames.solana]: AllCurShortNames.solana | "Solana" | "SOL" | "sol" | AllCurFullNames.solana | "solana-SOL";

    [AllCurShortNames.stellar]: AllCurShortNames.stellar | "Stellar" | "XLM" | "xlm" | AllCurFullNames.stellar | "stellar-XLM";

    [AllCurShortNames.terra]: AllCurShortNames.terra | "Terra" | "LUNA" | "luna" | AllCurFullNames.terra | "terra-LUNA";

    [AllCurShortNames.tether]: AllCurShortNames.tether | "Tether" | "USDT" | "usdt" | AllCurFullNames.tether | "tether-USDT";

    [AllCurShortNames.tezos]: AllCurShortNames.tezos | "Tezos" | "XTZ" | "xtz" | AllCurFullNames.tezos | "tezos-XTZ";

    [AllCurShortNames.theGraph]: AllCurShortNames.theGraph | "The Graph" | "GRT" | "grt" | AllCurFullNames.theGraph | "the-graph-GRT";

    [AllCurShortNames.theSandbox]: AllCurShortNames.theSandbox | "The Sandbox" | "SAND" | "sand" | AllCurFullNames.theSandbox | "the-sandbox-SAND";

    [AllCurShortNames.thetaNetwork]: AllCurShortNames.thetaNetwork | "Theta Network" | "THETA" | "theta" | AllCurFullNames.thetaNetwork | "theta-network-THETA";

    [AllCurShortNames.thorChain]: AllCurShortNames.thorChain | "THORChain" | "RUNE" | "rune" | AllCurFullNames.thorChain | "thor-chain-RUNE";

    [AllCurShortNames.tron]: AllCurShortNames.tron | "Tron" | "TRX" | "trx" | AllCurFullNames.tron | "tron-TRX";

    [AllCurShortNames.uma]: AllCurShortNames.uma | "UMA" | AllCurFullNames.uma | "uma-UMA";

    [AllCurShortNames.uniswap]: AllCurShortNames.uniswap | "Uniswap" | "UNI" | "uni" | AllCurFullNames.uniswap | "uniswap-UNI";

    [AllCurShortNames.unusSedLeo]: AllCurShortNames.unusSedLeo | "UNUS SED LEO" | "LEO" | "leo" | AllCurFullNames.unusSedLeo | "unus-sed-leo-LEO";

    [AllCurShortNames.usdCoin]: AllCurShortNames.usdCoin | "USDC USD Coin" | "USDC" | "usdc" | AllCurFullNames.usdCoin | "usd-coin-USDC";

    [AllCurShortNames.veChain]: AllCurShortNames.veChain | "Ve Chain" | "VET" | "vet" | AllCurFullNames.veChain | "ve-chain-VET";

    [AllCurShortNames.waves]: AllCurShortNames.waves | "WAVES" | AllCurFullNames.waves | "waves-WAVES";

    [AllCurShortNames.wrappedBitcoin]: AllCurShortNames.wrappedBitcoin | "Wrapped Bitcoin" | "WBTC" | "wbtc" | AllCurFullNames.wrappedBitcoin | "wrapped-bitcoin-WBTC";

    [AllCurShortNames.xrp]: AllCurShortNames.xrp | "XRP" | AllCurFullNames.xrp | "ripple-XRP";

    [AllCurShortNames.zcash]: AllCurShortNames.zcash | "Zcash" | "ZEC" | "zec" | AllCurFullNames.zcash | "zcash-ZEC";
};

// * Currency data scope
export type TAllCurNotesScope =
    | RequiredPick<TAllCurNotes, AllCurShortNames.aave>
    | RequiredPick<TAllCurNotes, AllCurShortNames.algorand>
    | RequiredPick<TAllCurNotes, AllCurShortNames.amp>
    | RequiredPick<TAllCurNotes, AllCurShortNames.avalanche>
    | RequiredPick<TAllCurNotes, AllCurShortNames.axieInfinity>
    | RequiredPick<TAllCurNotes, AllCurShortNames.binanceCoin>
    | RequiredPick<TAllCurNotes, AllCurShortNames.binanceUsd>
    | RequiredPick<TAllCurNotes, AllCurShortNames.bitcoin>
    | RequiredPick<TAllCurNotes, AllCurShortNames.bitcoinCash>
    | RequiredPick<TAllCurNotes, AllCurShortNames.bitcoinSv>
    | RequiredPick<TAllCurNotes, AllCurShortNames.bitTorrent>
    | RequiredPick<TAllCurNotes, AllCurShortNames.cardano>
    | RequiredPick<TAllCurNotes, AllCurShortNames.celo>
    | RequiredPick<TAllCurNotes, AllCurShortNames.chainlink>
    | RequiredPick<TAllCurNotes, AllCurShortNames.chiliz>
    | RequiredPick<TAllCurNotes, AllCurShortNames.compound>
    | RequiredPick<TAllCurNotes, AllCurShortNames.cosmos>
    | RequiredPick<TAllCurNotes, AllCurShortNames.cronos>
    | RequiredPick<TAllCurNotes, AllCurShortNames.dai>
    | RequiredPick<TAllCurNotes, AllCurShortNames.dash>
    | RequiredPick<TAllCurNotes, AllCurShortNames.decentraland>
    | RequiredPick<TAllCurNotes, AllCurShortNames.dogecoin>
    | RequiredPick<TAllCurNotes, AllCurShortNames.elrond>
    | RequiredPick<TAllCurNotes, AllCurShortNames.enjinCoin>
    | RequiredPick<TAllCurNotes, AllCurShortNames.ethereum>
    | RequiredPick<TAllCurNotes, AllCurShortNames.ethereumClassic>
    | RequiredPick<TAllCurNotes, AllCurShortNames.fantom>
    | RequiredPick<TAllCurNotes, AllCurShortNames.filecoin>
    | RequiredPick<TAllCurNotes, AllCurShortNames.ftxToken>
    | RequiredPick<TAllCurNotes, AllCurShortNames.gala>
    | RequiredPick<TAllCurNotes, AllCurShortNames.hedera>
    | RequiredPick<TAllCurNotes, AllCurShortNames.helium>
    | RequiredPick<TAllCurNotes, AllCurShortNames.holo>
    | RequiredPick<TAllCurNotes, AllCurShortNames.internetComputer>
    | RequiredPick<TAllCurNotes, AllCurShortNames.iota>
    | RequiredPick<TAllCurNotes, AllCurShortNames.litecoin>
    | RequiredPick<TAllCurNotes, AllCurShortNames.maker>
    | RequiredPick<TAllCurNotes, AllCurShortNames.monero>
    | RequiredPick<TAllCurNotes, AllCurShortNames.nearProtocol>
    | RequiredPick<TAllCurNotes, AllCurShortNames.neo>
    | RequiredPick<TAllCurNotes, AllCurShortNames.nexo>
    | RequiredPick<TAllCurNotes, AllCurShortNames.polkadot>
    | RequiredPick<TAllCurNotes, AllCurShortNames.polygon>
    | RequiredPick<TAllCurNotes, AllCurShortNames.shibainu>
    | RequiredPick<TAllCurNotes, AllCurShortNames.solana>
    | RequiredPick<TAllCurNotes, AllCurShortNames.stellar>
    | RequiredPick<TAllCurNotes, AllCurShortNames.terra>
    | RequiredPick<TAllCurNotes, AllCurShortNames.tether>
    | RequiredPick<TAllCurNotes, AllCurShortNames.tezos>
    | RequiredPick<TAllCurNotes, AllCurShortNames.theGraph>
    | RequiredPick<TAllCurNotes, AllCurShortNames.theSandbox>
    | RequiredPick<TAllCurNotes, AllCurShortNames.thetaNetwork>
    | RequiredPick<TAllCurNotes, AllCurShortNames.thorChain>
    | RequiredPick<TAllCurNotes, AllCurShortNames.tron>
    | RequiredPick<TAllCurNotes, AllCurShortNames.uma>
    | RequiredPick<TAllCurNotes, AllCurShortNames.uniswap>
    | RequiredPick<TAllCurNotes, AllCurShortNames.unusSedLeo>
    | RequiredPick<TAllCurNotes, AllCurShortNames.usdCoin>
    | RequiredPick<TAllCurNotes, AllCurShortNames.veChain>
    | RequiredPick<TAllCurNotes, AllCurShortNames.waves>
    | RequiredPick<TAllCurNotes, AllCurShortNames.wrappedBitcoin>
    | RequiredPick<TAllCurNotes, AllCurShortNames.xrp>
    | RequiredPick<TAllCurNotes, AllCurShortNames.zcash>;
