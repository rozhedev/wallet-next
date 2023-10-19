import { RefLink, WalletFormats } from "@/data/currencies";
import { UserAuthInfo, Useragent } from "./user";

export type AdminData<T extends WorkerData<WalletFormats, RefLink, UserAuthInfo>> = {
    username: string;
    password: string;
    ip: string;
    workers: T[] | null;
};

export type WorkerData<T extends WalletFormats, U extends RefLink, K extends UserAuthInfo> = {
    id: number;
    username: `@${string}`;
    token: string;
    wallet: T;
    isBlackList: boolean;
    refLinks: U;
    users: K[] | null;
};

export type VisitLog = Pick<Useragent, "country" | "platform" | "ip" | "refLink">;

export type RegisterLog = Pick<UserAuthInfo, "username" | "email"> | Pick<Useragent, "country">;

export type TargetLog = Pick<UserAuthInfo, "isFinishedSurvey" | "isConnectedWallet">;