import { RequiredPick } from "@/types/utils/utils";
import { THistoryTableItem } from "@/components/items/HistoryTableItem";
import { TIconPath } from "@/types/data/shared";

export type TDashboardStatItem = {
    id: number;
    imgPath: TIconPath;
    title: string;
    value: number;
};

export type TDashboardStatItemArr = TDashboardStatItem[];

export type TDashboardHistoryItem<TItem extends THistoryTableItem> = {
    id: number;
    modifClass: "get" | "send" | "wait" | "info";
    imgPath: TIconPath;
    operationType: RequiredPick<TItem, "operType">;
    date: RequiredPick<TItem, "date">;
    recepient: RequiredPick<TItem, "recipient">;
    amount: RequiredPick<TItem, "amount">;
    curName: RequiredPick<TItem, "curName">;
};

export type TDashboardHistoryItemArr = TDashboardHistoryItem<THistoryTableItem>[];
