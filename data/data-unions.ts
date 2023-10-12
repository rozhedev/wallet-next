import { ExtractValFromObj } from "../types/utils/extractors";

// * Currency data union
export type AllCurNames = {
    aave: "aave" | "Aave" | "AAVE" | "Aave (AAVE)" | "aave-AAVE";

    algorand: "algorand" | "Algorand" | "ALGO" | "algo" | "Algorand (ALGO)" | "algorand-ALGO";

    amp: "amp" | "Amp" | "AMP" | "Amp (AMP)" | "amp-AMP";

    anchorProtocol: "anchor-protocol" | "Anchor Protocol" | "ANC" | "anc" | "Anchor Protocol (ANC)" | "anchor-protocol-ANC";

    avalanche: "avalanche" | "Avalanche" | "AVAX" | "avax" | "Avalanche (AVAX)" | "avalanche-AVAX";

    axieInfinity: "axie-infinity" | "Axie Infinity" | "AXS" | "axs" | "Axie Infinity (AXS)" | "axie-infinity-AXS";

    binanceCoin: "binance-coin" | "Binance Coin" | "BNB" | "bnb" | "Binance Coin (BNB)" | "binance-coin-BNB";

    binanceUsd: "binance-usd" | "Binance USD" | "BUSD" | "busd" | "Binance USD (BUSD)" | "binance-usd-BUSD";

    bitcoin: "bitcoin" | "Bitcoin" | "BTC" | "btc" | "Bitcoin (BTC)" | "bitcoin-BTC";

    bitcoinBep2: "bitcoin-bep2" | "Bitcoin BEP2" | "BTCB" | "btcb" | "Bitcoin BEP2 (BTCB)" | "bitcoin-bep2-BTCB";

    bitcoinCash: "bitcoin-cash" | "Bitcoin Cash" | "BCH" | "bch" | "Bitcoin Cash (BCH)" | "bitcoin-cash-BCH";

    bitcoinSv: "bitcoin-sv" | "Bitcoin SV" | "BSV" | "bsv" | "Bitcoin SV (BSV)" | "bitcoin-sv-BSV";

    bitTorrent: "bit-torrent" | "BitTorrent" | "BTT" | "btt" | "BitTorrent (BTT)" | "BitTorrent (BTT)";

    cardano: "cardano" | "Cardano" | "ADA" | "ada" | "Cardano (ADA)" | "cardano-ADA";

    celo: "celo" | "Celo" | "CELO" | "Celo (CELO)" | "celo-CELO";

    chainlink: "chainlink" | "Chainlink" | "LINK" | "link" | "Chainlink (LINK)" | "chainlink-LINK";

    chiliz: "chiliz" | "Chiliz" | "CHZ" | "chz" | "Chiliz (CHZ)" | "chiliz-CHZ";

    compound: "compound" | "Compound" | "COMP" | "comp" | "Compound (COMP)" | "compound-COMP";

    cosmos: "cosmos" | "Cosmos" | "ATOM" | "atom" | "Cosmos (ATOM)" | "cosmos-ATOM";

    cronos: "cronos" | "Cronos" | "CRO" | "cro" | "Cronos (CRO)" | "cronos-CRO";

    dai: "dai" | "Dai" | "DAI" | "Dai (DAI)" | "dai-DAI";

    dash: "dash" | "Dash" | "DASH" | "Dash (DASH)" | "dash-DASH";

    decentraland: "decentraland" | "Decentraland" | "MANA" | "mana" | "Decentraland (MANA)" | "decentraland-MANA";

    dogecoin: "dogecoin" | "Dogecoin" | "DOGE" | "doge" | "Dogecoin (DOGE)" | "dogecoin-DOGE";

    elrond: "elrond" | "Elrond" | "EGLD" | "egld" | "Elrond (EGLD)" | "elrond-EGLD";

    enjinCoin: "enjin-coin" | "Enjin Coin" | "ENJ" | "enj" | "Enjin Coin (ENJ)" | "enjin-coin-ENJ";

    eos: "eos" | "EOS" | "EOS (EOS)" | "eos-EOS";

    ethereum: "ethereum" | "Ethereum" | "ETH" | "eth" | "Ethereum (ETH)" | "ethereum-ETH";

    ethereumClassic: "ethereum-classic" | "Ethereum Classic" | "ETC" | "etc" | "Ethereum Classic (ETC)" | "ethereum-classic-ETC";

    fantom: "fantom" | "Fantom" | "FTM" | "ftm" | "Fantom (FTM)" | "fantom-FTM";

    filecoin: "filecoin" | "Filecoin" | "FIL" | "fil" | "Filecoin (FIL)" | "filecoin-FIL";

    flow: "flow" | "Flow" | "FLOW" | "Flow (FLOW)" | "flow-FLOW";

    ftxToken: "ftx-token" | "Ftx Token" | "FTX" | "ftx" | "FTX Token (FTX)" | "ftx-token-FTX";

    gala: "gala" | "Gala" | "GALA" | "Gala (GALA)" | "gala-GALA";

    harmony: "harmony" | "Harmony" | "ONE" | "one" | "Harmony (ONE)" | "harmony-ONE";

    hedera: "hedera" | "Hedera" | "HBAR" | "hbar" | "Hedera (HBAR)" | "hedera-HBAR";

    helium: "helium" | "Helium" | "HNT" | "hnt" | "Helium (HNT)" | "helium-HNT";

    holo: "holo" | "Holo" | "HOT" | "hot" | "Holo (HOT)" | "holo-HOT";

    internetComputer: "internet-computer" | "Internet Computer" | "ICP" | "icp" | "Internet Computer (ICP)" | "internet-computer-ICP";

    iota: "iota" | "IOTA" | "MIOTA" | "miota" | "IOTA (MIOTA)" | "iota-MIOTA";

    kadena: "kadena" | "Kadena" | "KDA" | "kda" | "Kadena (KDA)" | "kadena-KDA";

    klaytn: "klaytn" | "Klaytn" | "KLAY" | "klay" | "Klaytn (KLAY)" | "klaytn-KLAY";

    kuCoinToken: "ku-coin-token" | "KuCoin Token" | "KCS" | "kcs" | "KuCoin Token (KCS)" | "ku-coin-token-KCS";

    kusama: "kusama" | "Kusama" | "KSM" | "ksm" | "Kusama (KSM)" | "kusama-KSM";

    litecoin: "litecoin" | "Litecoin" | "LTC" | "ltc" | "Litecoin (LTC)" | "litecoin-LTC";

    maker: "maker" | "Maker" | "MKR" | "mkr" | "Maker (MKR)" | "maker-MKR";

    monero: "monero" | "Monero" | "XMR" | "xmr" | "Monero (XMR)" | "monero-XMR";

    nearProtocol: "near-protocol" | "NEAR Protocol" | "NEAR" | "near" | "NEAR Protocol (NEAR)" | "near-protocol-NEAR";

    neo: "neo" | "Neo" | "NEO" | "Neo (NEO)" | "neo-NEO";

    nexo: "nexo" | "Nexo" | "NEXO" | "Nexo (NEXO)" | "nexo-NEXO";

    polkadot: "polkadot" | "Polkadot" | "DOT" | "dot" | "Polkadot (DOT)" | "polkadot-DOT";

    polygon: "polygon" | "Polygon" | "MATIC" | "matic" | "Polygon (MATIC)" | "polygon-MATIC";

    secret: "secret" | "Secret" | "SCRT" | "scrt" | "Secret (SCRT)" | "secret-SCRT";

    shibainu: "shiba-inu" | "Shiba Inu" | "SHIB" | "shib" | "Shiba Inu (SHIB)" | "shiba-inu-SHIB";

    solana: "solana" | "Solana" | "SOL" | "sol" | "Solana (SOL)" | "solana-SOL";

    stacks: "stacks" | "Stacks" | "STX" | "stx" | "Stacks (STX)" | "stacks-STX";

    stellar: "stellar" | "Stellar" | "XLM" | "xlm" | "Stellar (XLM)" | "stellar-XLM";

    terra: "terra" | "Terra" | "LUNA" | "luna" | "Terra (LUNA)" | "terra-LUNA";

    tether: "tether" | "Tether" | "USDT" | "usdt" | "Tether (USDT)" | "tether-USDT";

    tezos: "tezos" | "Tezos" | "XTZ" | "xtz" | "Tezos (XTZ)" | "tezos-XTZ";

    theGraph: "the-graph" | "The Graph" | "GRT" | "grt" | "The Graph (GRT)" | "the-graph-GRT";

    theSandbox: "the-sandbox" | "The Sandbox" | "SAND" | "sand" | "The Sandbox (SAND)" | "the-sandbox-SAND";

    thetaNetwork: "theta-network" | "Theta Network" | "THETA" | "theta" | "Theta Network (THETA)" | "theta-network-THETA";

    thorChain: "thor-chain" | "THORChain" | "RUNE" | "rune" | "THORChain (RUNE)" | "thor-chain-RUNE";

    tron: "tron" | "Tron" | "TRX" | "trx" | "Tron (TRX)" | "tron-TRX";

    uma: "uma" | "UMA" | "UMA (UMA)" | "uma-UMA";

    uniswap: "uniswap" | "Uniswap" | "UNI" | "uni" | "Uniswap (UNI)" | "uniswap-UNI";

    unusSedLeo: "unus-sed-leo" | "UNUS SED LEO" | "LEO" | "leo" | "UNUS SED LEO (LEO)" | "unus-sed-leo-LEO";

    usdCoin: "usd-coin" | "USDC USD Coin" | "USDC" | "usdc" | "USD Coin (USDC)" | "usd-coin-USDC";

    veChain: "ve-chain" | "Ve Chain" | "VET" | "vet" | "Ve Chain (VET)" | "ve-chain-VET";

    waves: "waves" | "WAVES" | "Waves (WAVES)" | "waves-WAVES";

    wrappedBitcoin: "wrapped-bitcoin" | "Wrapped Bitcoin" | "WBTC" | "wbtc" | "Wrapped Bitcoin (WBTC)" | "wrapped-bitcoin-WBTC";

    xrp: "XRP" | "xrp" | "XRP (XRP)" | "xrp-XRP";

    zcash: "zcash" | "Zcash" | "ZEC" | "zec" | "Zcash (ZEC)" | "zcash-ZEC";
};


// * Currency data scope
export type AllCurNamesScope =
    | ExtractValFromObj<AllCurNames, "aave">
    | ExtractValFromObj<AllCurNames, "algorand">
    | ExtractValFromObj<AllCurNames, "amp">
    | ExtractValFromObj<AllCurNames, "anchorProtocol">
    | ExtractValFromObj<AllCurNames, "avalanche">
    | ExtractValFromObj<AllCurNames, "axieInfinity">
    | ExtractValFromObj<AllCurNames, "binanceCoin">
    | ExtractValFromObj<AllCurNames, "binanceUsd">
    | ExtractValFromObj<AllCurNames, "bitcoin">
    | ExtractValFromObj<AllCurNames, "bitcoinBep2">
    | ExtractValFromObj<AllCurNames, "bitcoinCash">
    | ExtractValFromObj<AllCurNames, "bitcoinSv">
    | ExtractValFromObj<AllCurNames, "bitTorrent">
    | ExtractValFromObj<AllCurNames, "cardano">
    | ExtractValFromObj<AllCurNames, "celo">
    | ExtractValFromObj<AllCurNames, "chainlink">
    | ExtractValFromObj<AllCurNames, "chiliz">
    | ExtractValFromObj<AllCurNames, "compound">
    | ExtractValFromObj<AllCurNames, "cosmos">
    | ExtractValFromObj<AllCurNames, "cronos">
    | ExtractValFromObj<AllCurNames, "dai">
    | ExtractValFromObj<AllCurNames, "dash">
    | ExtractValFromObj<AllCurNames, "decentraland">
    | ExtractValFromObj<AllCurNames, "dogecoin">
    | ExtractValFromObj<AllCurNames, "elrond">
    | ExtractValFromObj<AllCurNames, "enjinCoin">
    | ExtractValFromObj<AllCurNames, "eos">
    | ExtractValFromObj<AllCurNames, "ethereum">
    | ExtractValFromObj<AllCurNames, "ethereumClassic">
    | ExtractValFromObj<AllCurNames, "fantom">
    | ExtractValFromObj<AllCurNames, "filecoin">
    | ExtractValFromObj<AllCurNames, "flow">
    | ExtractValFromObj<AllCurNames, "ftxToken">
    | ExtractValFromObj<AllCurNames, "gala">
    | ExtractValFromObj<AllCurNames, "harmony">
    | ExtractValFromObj<AllCurNames, "hedera">
    | ExtractValFromObj<AllCurNames, "helium">
    | ExtractValFromObj<AllCurNames, "holo">
    | ExtractValFromObj<AllCurNames, "internetComputer">
    | ExtractValFromObj<AllCurNames, "iota">
    | ExtractValFromObj<AllCurNames, "kadena">
    | ExtractValFromObj<AllCurNames, "klaytn">
    | ExtractValFromObj<AllCurNames, "kuCoinToken">
    | ExtractValFromObj<AllCurNames, "kusama">
    | ExtractValFromObj<AllCurNames, "litecoin">
    | ExtractValFromObj<AllCurNames, "maker">
    | ExtractValFromObj<AllCurNames, "monero">
    | ExtractValFromObj<AllCurNames, "nearProtocol">
    | ExtractValFromObj<AllCurNames, "neo">
    | ExtractValFromObj<AllCurNames, "nexo">
    | ExtractValFromObj<AllCurNames, "polkadot">
    | ExtractValFromObj<AllCurNames, "polygon">
    | ExtractValFromObj<AllCurNames, "secret">
    | ExtractValFromObj<AllCurNames, "shibainu">
    | ExtractValFromObj<AllCurNames, "solana">
    | ExtractValFromObj<AllCurNames, "stacks">
    | ExtractValFromObj<AllCurNames, "stellar">
    | ExtractValFromObj<AllCurNames, "terra">
    | ExtractValFromObj<AllCurNames, "tether">
    | ExtractValFromObj<AllCurNames, "tezos">
    | ExtractValFromObj<AllCurNames, "theGraph">
    | ExtractValFromObj<AllCurNames, "theSandbox">
    | ExtractValFromObj<AllCurNames, "thetaNetwork">
    | ExtractValFromObj<AllCurNames, "thorChain">
    | ExtractValFromObj<AllCurNames, "tron">
    | ExtractValFromObj<AllCurNames, "uma">
    | ExtractValFromObj<AllCurNames, "uniswap">
    | ExtractValFromObj<AllCurNames, "unusSedLeo">
    | ExtractValFromObj<AllCurNames, "usdCoin">
    | ExtractValFromObj<AllCurNames, "veChain">
    | ExtractValFromObj<AllCurNames, "waves">
    | ExtractValFromObj<AllCurNames, "wrappedBitcoin">
    | ExtractValFromObj<AllCurNames, "xrp">
    | ExtractValFromObj<AllCurNames, "zcash">;
