import { AllCurNamesScope } from "@/data/data-unions";
import { ExtractValFromObj} from '@/types/utils/extractors';

export type CabinetAssetItem<T extends AllCurNamesScope> = {
    id: number;
    curIcon: `img/icons/crypto/${T}.svg`;
    curName: T;
};

export type CabinetBalanceItem<T extends CabinetAssetItem<AllCurNamesScope>> = {
    id: number;
    curIcon: ExtractValFromObj<T, "curIcon">;
    curName: ExtractValFromObj<T, "curName">;
    pureAmount: number;
    usdAmount: number;
};