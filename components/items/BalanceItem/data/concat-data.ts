import type { TBalanceItemArr } from "../types";
import { balanceItemArrABC } from "./items-arr-abc";
import { balanceItemArrDEF } from "./items-arr-def";
import { balanceItemArrGHI } from "./items-arr-ghi";
import { balanceItemArrKLM } from "./items-arr-klm";
import { balanceItemArrNPS } from "./items-arr-nps";
import { balanceItemArrTUV } from "./items-arr-tuv";
import { balanceItemArrWXZ } from "./items-arr-wxz";

export const balanceItemArr: TBalanceItemArr = balanceItemArrABC.concat(balanceItemArrDEF, balanceItemArrGHI, balanceItemArrKLM, balanceItemArrNPS, balanceItemArrTUV, balanceItemArrWXZ);
