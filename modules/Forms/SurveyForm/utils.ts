import { AllCurFullNames, type TAllCurNotesScope } from "@/types/data/currencies";
import type { TBalanceItem, TBalanceItemArr } from "@/components/items/BalanceItem";

export const saveAirdropAmount = (contextStorage: number, amount: number, staticArr: TBalanceItemArr, parsedArr: TBalanceItemArr, currency: AllCurFullNames, rate: number) => {
    contextStorage = amount;
    let finalArr = parsedArr !== null ? parsedArr : staticArr;

    finalArr.forEach((item: TBalanceItem<TAllCurNotesScope>) => {
        if (item.curName !== currency) return;
        item.pureAmount = amount;
        item.usdAmount = amount * rate;
        localStorage.setItem("balances", JSON.stringify(finalArr));
    });
};
