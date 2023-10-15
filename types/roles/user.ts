import { AllCurNamesScope } from "@/data/data-unions";

export type UserAuthInfo = {
    username: string;
    email: string;
    passphrase: string[];
}

export type Useragent = {
    appVersion: string;
    cookieEnebled: boolean;
    language: string;
    platform: string;
    ip: string;
}

export type LinkedUserData = {
    refLink: `https://domain.com/${string}`;
}

export type UserAppConfig = {
    addedCurrencies: AllCurNamesScope[];
    isFinishedSurvey: boolean;
    isConnectedWallet: boolean;
    balances: number[];
}

