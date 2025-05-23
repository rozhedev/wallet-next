import { TRefLink } from "@/types/data/shared";
import { TUserAuthProps, TUseragent } from "./user";

export type TAdminData<T extends TWorkerData<string, TRefLink, TUserAuthProps>, U extends string> = {
    username: string;
    password: string;
    ip: string;
    workers: T[] | null;
    wallets: U[];
};

export type TWorkerData<T extends string, U extends TRefLink, K extends TUserAuthProps> = {
    id: number;
    username: `@${string}`;
    token: string;
    wallet: T;
    isBlackList: boolean;
    refLinks: U;
    users: K[] | null;
};

export type TVisitLog = Pick<TUseragent, "country" | "platform" | "ip" | "refLink">;

export type TRegisterLog = Pick<TUserAuthProps, "username" | "email"> | Pick<TUseragent, "country">;

export type T_TargetLog = Pick<TUserAuthProps, "isFinishedSurvey" | "isConnectedWallet">;
