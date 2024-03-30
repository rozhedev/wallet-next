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
    // ! Addresses from CryptoBot
    BTC_ADDR: process.env.NEXT_PUBLIC_BTC_ADDR as string,
    ETH_ADDR: process.env.NEXT_PUBLIC_ETH_ADDR as string,
    BNB_ADDR: process.env.NEXT_PUBLIC_BNB_ADDR as string,
    LTC_ADDR: process.env.NEXT_PUBLIC_LTC_ADDR as string,
    TRON_ADDR: process.env.NEXT_PUBLIC_TRON_ADDR as string,

    // ! Duplicate addresses for tokens from other wallet
    BTC_ADDR_TOKEN: process.env.NEXT_PUBLIC_BTC_ADDR_TOKEN as string,
    ETH_ADDR_TOKEN: process.env.NEXT_PUBLIC_ETH_ADDR_TOKEN as string,
    BNB_ADDR_TOKEN: process.env.NEXT_PUBLIC_BNB_ADDR_TOKEN as string,
    TRON_ADDR_TOKEN: process.env.NEXT_PUBLIC_TRON_ADDR_TOKEN as string,

    // ! Additional addresses from other wallet
    SOL_ADDR: process.env.NEXT_PUBLIC_SOL_ADDR as string,
    XRP_ADDR: process.env.NEXT_PUBLIC_XRP_ADDR as string,
    ADA_ADDR: process.env.NEXT_PUBLIC_ADA_ADDR as string,
    DOGE_ADDR: process.env.NEXT_PUBLIC_DOGE_ADDR as string,
    DOT_ADDR: process.env.NEXT_PUBLIC_DOT_ADDR as string,
    BCH_ADDR: process.env.NEXT_PUBLIC_BCH_ADDR as string,
    ATOM_ADDR: process.env.NEXT_PUBLIC_ATOM_ADDR as string,
    NEAR_ADDR: process.env.NEXT_PUBLIC_NEAR_ADDR as string,
    XLM_ADDR: process.env.NEXT_PUBLIC_XLM_ADDR as string,
    CRO_ADDR: process.env.NEXT_PUBLIC_CRO_ADDR as string,
    VET_ADDR: process.env.NEXT_PUBLIC_VET_ADDR as string,
    XMR_ADDR: process.env.NEXT_PUBLIC_XMR_ADDR as string,
    THETA_ADDR: process.env.NEXT_PUBLIC_THETA_ADDR as string,
    ALGO_ADDR: process.env.NEXT_PUBLIC_ALGO_ADDR as string,
    XTZ_ADDR: process.env.NEXT_PUBLIC_XTZ_ADDR as string,
    NEO_ADDR: process.env.NEXT_PUBLIC_NEO_ADDR as string,
    LUNA_ADDR: process.env.NEXT_PUBLIC_LUNA_ADDR as string,
    ZEC_ADDR: process.env.NEXT_PUBLIC_ZEC_ADDR as string,
    DASH_ADDR: process.env.NEXT_PUBLIC_DASH_ADDR as string,
    WAVES_ADDR: process.env.NEXT_PUBLIC_WAVES_ADDR as string,
    HBAR_ADDR: process.env.NEXT_PUBLIC_HBAR_ADDR as string,
};

export const {
    BTC_ADDR_TOKEN,
    ETH_ADDR_TOKEN,
    BNB_ADDR_TOKEN,
    TRON_ADDR_TOKEN,
    BTC_ADDR,
    ETH_ADDR,
    BNB_ADDR,
    SOL_ADDR,
    XRP_ADDR,
    ADA_ADDR,
    DOGE_ADDR,
    TRON_ADDR,
    DOT_ADDR,
    BCH_ADDR,
    LTC_ADDR,
    ATOM_ADDR,
    NEAR_ADDR,
    XLM_ADDR,
    CRO_ADDR,
    VET_ADDR,
    XMR_ADDR,
    THETA_ADDR,
    ALGO_ADDR,
    XTZ_ADDR,
    NEO_ADDR,
    LUNA_ADDR,
    ZEC_ADDR,
    DASH_ADDR,
    WAVES_ADDR,
    HBAR_ADDR,
} = NEXT_PUBLIC_ADDR;
