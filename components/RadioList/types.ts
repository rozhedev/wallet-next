import { T_ToggleModifClassNames } from "@/ui/Toggle/types";
import { HTMLInputTypeAttribute } from "react";

type TRadioItem = {
    id: `survey-${string}` | `set-${string}`;
    type: HTMLInputTypeAttribute;
    name: `survey-answer${number}` | `survey-answer${number}-${number}` | `set-${string}`;
    label: string;
    disabled?: boolean;
    classNameModif?: T_ToggleModifClassNames;
    defaultChecked?: boolean;
};

export type TRadioItemArr = TRadioItem[];

export type TRadioListProps = {
    dataArr: TRadioItemArr;
    // * Use any for prevent errors, because we have two unions:
    // * string | null in <Radio/> condition & boolean | undefined as checked prop type
    initState: any;
    changeHandler: (e: any) => void;
};
