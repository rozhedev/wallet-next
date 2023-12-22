"use client";

import type { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { useDropdown, useDropdownContext } from "./useDropdown";
import { DropdownProvider } from "./dropdownContext";
import type { TDropdownProps, TDropdownBtnProps, TDropdownMenuProps } from "./types";
import { TRANSITION_DELAY } from "@/data/constants/durations";

const CLASS_LIST = {
    navlink: "navlink",
    dropdown: "dropdown",
    dropdownBtn: "dropdown-button",
    dropdownMenu: "dropdown-menu",
    dropdownLinks: "dropdown-links",
    enterActive: "enter-active",
};

export const Dropdown = ({ children }: TDropdownProps): JSX.Element => {
    const dropdownState = useDropdown();

    return (
        <DropdownProvider value={dropdownState}>
            <div className={`${CLASS_LIST.dropdown}`}>{children}</div>
        </DropdownProvider>
    );
};

// * Dropdown button
const DropdownBtn: FC<TDropdownBtnProps> = ({ children }) => {
    const dropdownState = useDropdownContext();

    return (
        <div
            className={`
            ${CLASS_LIST.navlink}
             ${CLASS_LIST.dropdownBtn}
             ${dropdownState?.isDropdownOpen ? CLASS_LIST.enterActive : ""}
            `}
            onClick={dropdownState?.onClickButtonDropdown}
            ref={dropdownState?.refButtonDropdown}
        >
            {children}
        </div>
    );
};

Dropdown.Btn = DropdownBtn;

// * Dropdown menu
const DropdownMenu: FC<TDropdownMenuProps> = ({ children, transition }) => {
    const dropdownState = useDropdownContext();

    return (
        <CSSTransition
            className={`${CLASS_LIST.dropdownMenu}`}
            in={dropdownState?.isDropdownOpen}
            nodeRef={dropdownState?.refDropdownMenu}
            onClick={dropdownState?.onClickButtonDropdown}
            timeout={transition ?? TRANSITION_DELAY}
            unmountOnExit
        >
            <div ref={dropdownState?.refDropdownMenu}>
                <ul className={`${CLASS_LIST.dropdownLinks}`}>{children}</ul>
            </div>
        </CSSTransition>
    );
};

Dropdown.Menu = DropdownMenu;
