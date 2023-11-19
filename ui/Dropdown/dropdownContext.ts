import { createContext } from "react";
import type { RefObject } from "react";

export type TDropdownState = {
    isDropdownOpen?: boolean;
    onClickButtonDropdown?: () => void;
    refButtonDropdown?: RefObject<HTMLDivElement>;
    refDropdownMenu?: RefObject<HTMLDivElement>;
};

export const DropdownContext = createContext<TDropdownState | null>(null);
export const DropdownProvider = DropdownContext.Provider;
