import { TAllCurNotesScope } from "@/types/data/currencies";
import { TWalletFormatsScope } from "@/types/data/user-balances";

export type THistoryTableItem = {
    id: number;
    // * Order is additional prop for correct work with backend
    order: number;
    operType: "Replenish" | "Withdraw" | "Exchange" | "Airdrop" | "Send" | "Get";
    curName: TAllCurNotesScope;
    amount: number;
    transactionStatus: "Complete" | "Pending" | "Failed";
    transactionId: number;
    date: string;
    recipient: TWalletFormatsScope;
};

export type THistoryTableItemArr = THistoryTableItem[];
