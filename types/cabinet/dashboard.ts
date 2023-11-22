import { TAllCurNotesScope, TIconPath } from "@/types/data/currencies";
import { ExtractValFromObj } from "@/types/utils/extractors";
import { TUserHistoryItem } from "@/types/cabinet/history";

export type TDashboardStatItem = {
    id: number;
    imgPath: TIconPath;
    title: string;
    value: number;
};

export type TDashboardStatItemArr = TDashboardStatItem[];

export type TDashboardHistoryItem<THistoryItem extends TUserHistoryItem<TAllCurNotesScope>> = {
    id: number;
    modifClass: "get" | "send" | "wait" | "info";
    imgPath: TIconPath;
    operationType: ExtractValFromObj<THistoryItem, "operationType">;
    date: ExtractValFromObj<THistoryItem, "date">;
    time: ExtractValFromObj<THistoryItem, "time">;
    recepient: ExtractValFromObj<THistoryItem, "recepient">;
    amount: ExtractValFromObj<THistoryItem, "amount">;
    curName: ExtractValFromObj<THistoryItem, "curName">;
};

export type TDashboardHistoryItemArr = TDashboardHistoryItem<TUserHistoryItem<TAllCurNotesScope>>[];
