import { TAllCurNotesScope } from "@/types/data/currencies";
import { TWalletFormatsScope } from "@/types/data/user-balances";

export type TOperType = "Replenish" | "Withdraw" | "Exchange" | "Airdrop" | "Send" | "Get";

export type TRecepientValues = TWalletFormatsScope | `${string} &#10142; ${string}` | "Internal transaction";

export type THistoryTableItem = {
    id: number;
    operType: TOperType;
    curName: TAllCurNotesScope;
    curSign: TAllCurNotesScope;
    amount: number;
    transactionStatus: "Complete" | "Pending" | "Failed";
    transactionId: number;
    date: string;
    recipient: TRecepientValues;
    modifClass: `dashboard-log-item--${"get" | "send" | "wait" | "info"}`;
    svgIcon: React.ReactNode;
    // * Additional prop for linked descr in history preview in dashboard & history table
    isHistory?: boolean;
};

export type THistoryTableItemArr = THistoryTableItem[];
