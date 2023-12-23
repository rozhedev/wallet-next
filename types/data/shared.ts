import { TAllCurNotesScope } from "./currencies";

export type TRefLink = `https://domain.com/${string}`;

type TIconPathFolders = "countries" | "interface" | "web3";

export type TIconPath = `@/public/img/icons/${TIconPathFolders}/${string}.svg`;

export type TCurIconPath<TScope extends TAllCurNotesScope> = `@/public/img/icons/crypto/${TScope}.svg`;

export type TAuthFieldsetProps = {
    id: string;
    className: `form-step ${string}`;
};
