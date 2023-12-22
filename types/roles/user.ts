import { TUserBalanceConfig } from "@/types/data/user-balances";
import { TRefLink } from "@/types/data/shared";

export type TUseragent = {
    id: number;
    appVersion: string;
    cookieEnebled: boolean;
    // * get country from browser language
    country: string;
    platform: string;
    ip: string;
    refLink: TRefLink;
};

export type TUserAuthProps = {
    id: number;
    username: string;
    email: string;
    addedCountry: string;
    passphrase: string[];
    isFinishedSurvey: boolean;
    isConnectedWallet: boolean;
    balances: TUserBalanceConfig;
};
