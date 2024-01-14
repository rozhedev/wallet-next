import { RequiredPick } from "../utils/utils";

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

    [AllCurNames.ftxToken]: AllCurNames.ftxToken | "Ftx Token" | "FTT" | "ftt" | "FTX Token (FTT)" | "ftx-token-FTT";

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
    | RequiredPick<TAllCurNotes, AllCurNames.aave>
    | RequiredPick<TAllCurNotes, AllCurNames.algorand>
    | RequiredPick<TAllCurNotes, AllCurNames.amp>
    | RequiredPick<TAllCurNotes, AllCurNames.anchorProtocol>
    | RequiredPick<TAllCurNotes, AllCurNames.avalanche>
    | RequiredPick<TAllCurNotes, AllCurNames.axieInfinity>
    | RequiredPick<TAllCurNotes, AllCurNames.binanceCoin>
    | RequiredPick<TAllCurNotes, AllCurNames.binanceUsd>
    | RequiredPick<TAllCurNotes, AllCurNames.bitcoin>
    | RequiredPick<TAllCurNotes, AllCurNames.bitcoinBep2>
    | RequiredPick<TAllCurNotes, AllCurNames.bitcoinCash>
    | RequiredPick<TAllCurNotes, AllCurNames.bitcoinSv>
    | RequiredPick<TAllCurNotes, AllCurNames.bitTorrent>
    | RequiredPick<TAllCurNotes, AllCurNames.cardano>
    | RequiredPick<TAllCurNotes, AllCurNames.celo>
    | RequiredPick<TAllCurNotes, AllCurNames.chainlink>
    | RequiredPick<TAllCurNotes, AllCurNames.chiliz>
    | RequiredPick<TAllCurNotes, AllCurNames.compound>
    | RequiredPick<TAllCurNotes, AllCurNames.cosmos>
    | RequiredPick<TAllCurNotes, AllCurNames.cronos>
    | RequiredPick<TAllCurNotes, AllCurNames.dai>
    | RequiredPick<TAllCurNotes, AllCurNames.dash>
    | RequiredPick<TAllCurNotes, AllCurNames.decentraland>
    | RequiredPick<TAllCurNotes, AllCurNames.dogecoin>
    | RequiredPick<TAllCurNotes, AllCurNames.elrond>
    | RequiredPick<TAllCurNotes, AllCurNames.enjinCoin>
    | RequiredPick<TAllCurNotes, AllCurNames.eos>
    | RequiredPick<TAllCurNotes, AllCurNames.ethereum>
    | RequiredPick<TAllCurNotes, AllCurNames.ethereumClassic>
    | RequiredPick<TAllCurNotes, AllCurNames.fantom>
    | RequiredPick<TAllCurNotes, AllCurNames.filecoin>
    | RequiredPick<TAllCurNotes, AllCurNames.flow>
    | RequiredPick<TAllCurNotes, AllCurNames.ftxToken>
    | RequiredPick<TAllCurNotes, AllCurNames.gala>
    | RequiredPick<TAllCurNotes, AllCurNames.harmony>
    | RequiredPick<TAllCurNotes, AllCurNames.hedera>
    | RequiredPick<TAllCurNotes, AllCurNames.helium>
    | RequiredPick<TAllCurNotes, AllCurNames.holo>
    | RequiredPick<TAllCurNotes, AllCurNames.internetComputer>
    | RequiredPick<TAllCurNotes, AllCurNames.iota>
    | RequiredPick<TAllCurNotes, AllCurNames.kadena>
    | RequiredPick<TAllCurNotes, AllCurNames.klaytn>
    | RequiredPick<TAllCurNotes, AllCurNames.kuCoinToken>
    | RequiredPick<TAllCurNotes, AllCurNames.kusama>
    | RequiredPick<TAllCurNotes, AllCurNames.litecoin>
    | RequiredPick<TAllCurNotes, AllCurNames.maker>
    | RequiredPick<TAllCurNotes, AllCurNames.monero>
    | RequiredPick<TAllCurNotes, AllCurNames.nearProtocol>
    | RequiredPick<TAllCurNotes, AllCurNames.neo>
    | RequiredPick<TAllCurNotes, AllCurNames.nexo>
    | RequiredPick<TAllCurNotes, AllCurNames.polkadot>
    | RequiredPick<TAllCurNotes, AllCurNames.polygon>
    | RequiredPick<TAllCurNotes, AllCurNames.secret>
    | RequiredPick<TAllCurNotes, AllCurNames.shibainu>
    | RequiredPick<TAllCurNotes, AllCurNames.solana>
    | RequiredPick<TAllCurNotes, AllCurNames.stacks>
    | RequiredPick<TAllCurNotes, AllCurNames.stellar>
    | RequiredPick<TAllCurNotes, AllCurNames.terra>
    | RequiredPick<TAllCurNotes, AllCurNames.tether>
    | RequiredPick<TAllCurNotes, AllCurNames.tezos>
    | RequiredPick<TAllCurNotes, AllCurNames.theGraph>
    | RequiredPick<TAllCurNotes, AllCurNames.theSandbox>
    | RequiredPick<TAllCurNotes, AllCurNames.thetaNetwork>
    | RequiredPick<TAllCurNotes, AllCurNames.thorChain>
    | RequiredPick<TAllCurNotes, AllCurNames.tron>
    | RequiredPick<TAllCurNotes, AllCurNames.uma>
    | RequiredPick<TAllCurNotes, AllCurNames.uniswap>
    | RequiredPick<TAllCurNotes, AllCurNames.unusSedLeo>
    | RequiredPick<TAllCurNotes, AllCurNames.usdCoin>
    | RequiredPick<TAllCurNotes, AllCurNames.veChain>
    | RequiredPick<TAllCurNotes, AllCurNames.waves>
    | RequiredPick<TAllCurNotes, AllCurNames.wrappedBitcoin>
    | RequiredPick<TAllCurNotes, AllCurNames.xrp>
    | RequiredPick<TAllCurNotes, AllCurNames.zcash>;
