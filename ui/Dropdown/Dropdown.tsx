"use client";

import type { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { useDropdown, useDropdownContext } from "./useDropdown";
import { DropdownProvider } from "./dropdownContext";
import type { DropdownProps, DropdownBtnProps, DropdownMenuProps, DropdownLinkProps } from "./types";
import { TRANSITION_DELAY } from "../../constants/transition";

export const Dropdown = ({ children }: DropdownProps): JSX.Element => {
    const dropdownState = useDropdown();

    return (
        <DropdownProvider value={dropdownState}>
            <div className="dropdown">{children}</div>
        </DropdownProvider>
    );
};

// * Dropdown button
const DropdownBtn: FC<DropdownBtnProps> = ({ children }) => {
    const dropdownState = useDropdownContext();

    return (
        <div
            className="navlink dropdown-button"
            onClick={dropdownState?.onClickButtonDropdown}
            ref={dropdownState?.refButtonDropdown}
        >
            {children}
        </div>
    );
};

Dropdown.Btn = DropdownBtn;

// * Dropdown menu
const DropdownMenu: FC<DropdownMenuProps> = ({ children, transition }) => {
    const dropdownState = useDropdownContext();

    return (
        <CSSTransition
            className="dropdown-menu"
            in={dropdownState?.isDropdownOpen}
            nodeRef={dropdownState?.refDropdownMenu}
            onClick={dropdownState?.onClickButtonDropdown}
            timeout={transition ?? TRANSITION_DELAY}
            unmountOnExit
        >
            <div ref={dropdownState?.refDropdownMenu}>
                <ul className="dropdown-links">{children}</ul>
            </div>
        </CSSTransition>
    );
};

Dropdown.Menu = DropdownMenu;

// * Dropdown link
const DropdownLink: FC<DropdownLinkProps> = ({}) => {
    return <></>;
};
