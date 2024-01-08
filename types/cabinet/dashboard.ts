import { ExtractValFromObj } from "@/types/utils/utils";
import { THistoryTableItem } from "@/components/items/HistoryTableItem";
import { TIconPath } from "@/types/data/shared";

export type TDashboardStatItem = {
    id: number;
    imgPath: TIconPath;
    title: string;
    value: number;
};

export type TDashboardStatItemArr = TDashboardStatItem[];

export type TDashboardHistoryItem<THistoryItem extends THistoryTableItem> = {
    id: number;
    modifClass: "get" | "send" | "wait" | "info";
    imgPath: TIconPath;
    operationType: ExtractValFromObj<THistoryItem, "operType">;
    date: ExtractValFromObj<THistoryItem, "date">;
    recepient: ExtractValFromObj<THistoryItem, "recipient">;
    amount: ExtractValFromObj<THistoryItem, "amount">;
    curName: ExtractValFromObj<THistoryItem, "curName">;
};

export type TDashboardHistoryItemArr = TDashboardHistoryItem<THistoryTableItem>[];
