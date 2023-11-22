import { TAllCurNotesScope, TWalletFormatsScope } from "@/types/data/currencies";

type TRecepientValues = TWalletFormatsScope | `${string} &#10142; ${string}` | "Internal transaction";

export type TUserHistoryItem<T extends TAllCurNotesScope> = {
    id: number;
    operationType: "Replenish" | "Withdraw" | "Exchange" | "Airdrop";
    curName: T;
    amount: number;
    status: "Pending" | "Complete" | "Failed";
    transactionId: string;
    // * Additional prop for linked descr in history preview in
    // * dashboard & history table
    recepient: TRecepientValues;
    date: string;
    time: string;
};

export type TUserHistoryItemArr = TUserHistoryItem<TAllCurNotesScope>[];
