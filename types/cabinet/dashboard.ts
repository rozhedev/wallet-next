import { AllCurNotationsScope, IconPath } from "@/data/currencies";
import { ExtractValFromObj } from "@/types/utils/extractors";
import { UserHistoryItem } from "@/types/cabinet/history";

export type DashboardStatItem = {
    id: number;
    imgPath: IconPath;
    title: string;
    value: number;
};

export type DashboardStatItems = DashboardStatItem[];

export type DashboardHistoryItem<T extends UserHistoryItem<AllCurNotationsScope>> = {
    id: number;
    modifClass: "get" | "send" | "wait" | "info";
    imgPath: IconPath;
    operationType: ExtractValFromObj<T, "operationType">;
    date: ExtractValFromObj<T, "date">;
    time: ExtractValFromObj<T, "time">;
    recepient: ExtractValFromObj<T, "recepient">;
    amount: ExtractValFromObj<T, "amount">;
    curName: ExtractValFromObj<T, "curName">;
};

export type DashboardHistoryItems = DashboardHistoryItem<UserHistoryItem<AllCurNotationsScope>>[];
