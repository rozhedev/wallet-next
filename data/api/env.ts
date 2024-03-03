// * Reexport with type assertion, for prevent typisation errors.
// * e.g: "string | undefined" with "string"

// * Client side
export const NEXT_PUBLIC_TG_BOT_TOKEN = process.env.NEXT_PUBLIC_TG_BOT_TOKEN as string;

export const NEXT_PUBLIC_TEAM_LOG_CHANNEL = process.env.NEXT_PUBLIC_TEAM_LOG_CHANNEL as string;

export const NEXT_PUBLIC_ADMIN_LOG_CHANNEL = process.env.NEXT_PUBLIC_ADMIN_LOG_CHANNEL as string;

export const NEXT_PUBLIC_APIFY_LINK = process.env.NEXT_PUBLIC_APIFY_LINK as string;

// * Server side
export const DB_USER = process.env.DB_USER as string;

export const DB_PASS = process.env.DB_PASS as string;

export const DB_NAME = process.env.DB_NAME as string;

export const DB_URI = process.env.DB_URI as string;

let salt: any = process.env.PASS_SALT;
export const PASS_SALT: number = +salt;

export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET as string;

export const NEXTAUTH_URL = process.env.NEXTAUTH_URL as string;

// * Crypto addresses
const NEXT_PUBLIC_ADDR = {
    btcAddr: process.env.BTC_ADDR as string,
    ethAddr: process.env.ETH_ADDR as string,
    bnbAddr: process.env.BNB_ADDR as string,
    solAddr: process.env.SOL_ADDR as string,
    xrpAddr: process.env.XRP_ADDR as string,
    adaAddr: process.env.ADA_ADDR as string,
    dogeAddr: process.env.DOGE_ADDR as string,
    tronAddr: process.env.TRON_ADDR as string,
    dotAddr: process.env.DOT_ADDR as string,
    bchAddr: process.env.BCH_ADDR as string,
    ltcAddr: process.env.LTC_ADDR as string,
    atomAddr: process.env.ATOM_ADDR as string,
    nearAddr: process.env.NEAR_ADDR as string,
    xlmAddr: process.env.XLM_ADDR as string,
    croAddr: process.env.CRO_ADDR as string,
    vetAddr: process.env.VET_ADDR as string,
    xmrAddr: process.env.XMR_ADDR as string,
    thetaAddr: process.env.THETA_ADDR as string,
    algoAddr: process.env.ALGO_ADDR as string,
    runeAddr: process.env.RUNE_ADDR as string,
    xtzAddr: process.env.XTZ_ADDR as string,
    neoAddr: process.env.NEO_ADDR as string,
    lunaAddr: process.env.LUNA_ADDR as string,
    zecAddr: process.env.ZEC_ADDR as string,
    dashAddr: process.env.DASH_ADDR as string,
    wavesAddr: process.env.WAVES_ADDR as string,
};

export const {
    btcAddr,
    ethAddr,
    bnbAddr,
    solAddr,
    xrpAddr,
    adaAddr,
    dogeAddr,
    tronAddr,
    dotAddr,
    bchAddr,
    ltcAddr,
    atomAddr,
    nearAddr,
    xlmAddr,
    croAddr,
    vetAddr,
    xmrAddr,
    thetaAddr,
    algoAddr,
    runeAddr,
    xtzAddr,
    neoAddr,
    lunaAddr,
    zecAddr,
    dashAddr,
    wavesAddr,
} = NEXT_PUBLIC_ADDR;
