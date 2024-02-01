import { type TInputListItemArr } from "@/types/data/shared";

export type TRadioListProps = {
    dataArr: TInputListItemArr;
    // * Use any for prevent errors, because we have two unions:
    // * string | null in <Radio/> condition & boolean | undefined as checked prop type
    initState: any;
    changeHandler: (e: any) => void;
};
