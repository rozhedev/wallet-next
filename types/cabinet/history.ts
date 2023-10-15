import { AllCurNamesScope } from "@/data/data-unions";
import { ExtractValFromObj, combine } from "@/types/utils/extractors";

type recepientValues = `bc${string}` | `0x${string}` | `${string} &#10142; ${string}` | "Internal transaction";

export type HistoryTableItem<T extends AllCurNamesScope> = {
    id: number;
    operationType: "Replenish" | "Withdraw" | "Exchange" | "Airdrop";
    curName: T;
    amount: number;
    status: "Pending" | "Complete" | "Failed";
    transactionId: string;
    // * Additional prop for linked descr in history preview in
    // * dashboard & history table
    recepient: recepientValues;
    date: string;
    time: string;
};

export type HistoryTableItems = HistoryTableItem<AllCurNamesScope>[];