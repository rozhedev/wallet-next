import { HTMLInputTypeAttribute } from "react";
import { type TAllCurNotesScope } from "./currencies";
import { type T_ToggleModifClassNames } from "@/ui/Toggle/types";

export type TRefLink = `https://domain.com/${string}`;

type TIconPathFolders = "countries" | "interface" | "web3";

export type TIconPath = `@/public/img/icons/${TIconPathFolders}/${string}.svg`;

export type TCurIconPath<TScope extends TAllCurNotesScope> = `@/public/img/icons/crypto/${TScope}.svg`;

export type TAuthFieldsetProps = {
    id: string;
    className: "form-step" | `form-step ${string}`;
};

export type TInputIdMask = `survey-${string}` | `set-${string}`

export type TInputListItem<TMask extends TInputIdMask> = {
    id: TMask;
    type: HTMLInputTypeAttribute;
    name: TMask;
    label: string;
    disabled?: boolean;
    classNameModif?: T_ToggleModifClassNames;
    defaultChecked?: boolean;
};

export type TInputListItemArr = TInputListItem<TInputIdMask>[];
