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

export type TDashboardHistoryItem<TItem extends THistoryTableItem> = {
    id: number;
    modifClass: "get" | "send" | "wait" | "info";
    imgPath: TIconPath;
    operationType: ExtractValFromObj<TItem, "operType">;
    date: ExtractValFromObj<TItem, "date">;
    recepient: ExtractValFromObj<TItem, "recipient">;
    amount: ExtractValFromObj<TItem, "amount">;
    curName: ExtractValFromObj<TItem, "curName">;
};

export type TDashboardHistoryItemArr = TDashboardHistoryItem<THistoryTableItem>[];
