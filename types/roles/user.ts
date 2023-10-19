import { RefLink, UserBalances } from "@/data/currencies";

export type Useragent = {
    id: number;
    appVersion: string;
    cookieEnebled: boolean;
    // * get country from browser language
    country: string;
    platform: string;
    ip: string;
    refLink: RefLink;
};

export type UserAuthInfo = {
    id: number;
    username: string;
    email: string;
    country: string;
    passphrase: string[];
    isFinishedSurvey: boolean;
    isConnectedWallet: boolean;
    balances: UserBalances;
};
