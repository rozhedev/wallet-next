import { AllCurNamesScope } from "@/data/data-unions";
import { ExtractValFromObj } from "@/types/utils/extractors";
import { HistoryTableItem } from "@/types/cabinet/history";

export type DashboardStatItem = {
    id: number;
    imgPath: `img/icons/interface/${string}.svg`;
    title: string;
    value: number;
};

export type DashboardStatItems = DashboardStatItem[];

export type DashboardActionItem<T extends HistoryTableItem<AllCurNamesScope>> = {
    id: number;
    modifClass: "get" | "send" | "wait" | "info";
    imgPath: `img/icons/interface/${string}.svg`;
    operationType: ExtractValFromObj<T, "operationType">;
    date: ExtractValFromObj<T, "date">;
    time: ExtractValFromObj<T, "time">;
    recepient: ExtractValFromObj<T, "recepient">;
    amount: ExtractValFromObj<T, "amount">;
    curName: ExtractValFromObj<T, "curName">;
};

export type DashboardActionItems = DashboardActionItem<HistoryTableItem<AllCurNamesScope>>[];
