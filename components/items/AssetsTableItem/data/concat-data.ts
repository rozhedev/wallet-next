import { TAssetsTableItemArr } from "../types";
import { assetTableItemArrABC } from "./items-arr-abc";
import { assetTableItemArrDEF } from "./items-arr-def";
import { assetTableItemArrGHI } from "./items-arr-ghi";
import { assetTableItemArrKLM } from "./items-arr-klm";
import { assetTableItemArrNPS } from "./items-arr-nps";
import { assetTableItemArrTUV } from "./items-arr-tuv";
import { assetTableItemArrWXZ } from "./items-arr-wxz";

export const assetTableItemArr: TAssetsTableItemArr = assetTableItemArrABC.concat(
    assetTableItemArrDEF,
    assetTableItemArrGHI,
    assetTableItemArrKLM,
    assetTableItemArrNPS,
    assetTableItemArrTUV,
    assetTableItemArrWXZ
);
