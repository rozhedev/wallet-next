import { TAllCurNotesScope } from "@/types/data/currencies";
import { TWalletFormatsScope } from "@/types/data/user-balances";


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
