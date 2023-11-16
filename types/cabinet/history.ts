import { AllCurNotationsScope, WalletFormats } from "@/types/data/currencies";

type recepientValues = WalletFormats | `${string} &#10142; ${string}` | "Internal transaction";

export type UserHistoryItem<T extends AllCurNotationsScope> = {
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

export type UserHistoryItems = UserHistoryItem<AllCurNotationsScope>[];
