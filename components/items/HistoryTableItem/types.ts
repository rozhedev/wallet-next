import { TAllCurNotesScope } from "@/types/data/currencies";
import { TWalletFormatsScope } from "@/types/data/user-balances";

export type TOperType = "Replenish" | "Withdraw" | "Exchange" | "Airdrop" | "Send" | "Get";
export type TRecepientValues = TWalletFormatsScope | `${string} &#10142; ${string}` | "Internal transaction";

export type THistoryTableItem = {
    id: number;
    // * Order is additional prop for correct work with backend
    order: number;
    operType: TOperType;
    curName: TAllCurNotesScope;
    amount: number;
    transactionStatus: "Complete" | "Pending" | "Failed";
    transactionId: number;
    date: string;
    // * Additional prop for linked descr in history preview in dashboard & history table
    recipient: TRecepientValues;
};

export type THistoryTableItemArr = THistoryTableItem[];