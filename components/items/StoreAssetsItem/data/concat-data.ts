import { TStoreAssetsItemArr } from "../types";
import { storeAssetsItemArrABC } from "./items-arr-abc";
import { storeAssetsItemArrDEF } from "./items-arr-def";
import { storeAssetsItemArrGHI } from "./items-arr-ghi";
import { storeAssetsItemArrKLM } from "./items-arr-klm";
import { storeAssetsItemArrNPS } from "./items-arr-nps";
import { storeAssetsItemArrTUV } from "./items-arr-tuv";
import { storeAssetsItemArrWXZ } from "./items-arr-wxz";

export const storeAssetsItemArr: TStoreAssetsItemArr = storeAssetsItemArrABC.concat(
    storeAssetsItemArrDEF,
    storeAssetsItemArrGHI,
    storeAssetsItemArrKLM,
    storeAssetsItemArrNPS,
    storeAssetsItemArrTUV,
    storeAssetsItemArrWXZ
);
