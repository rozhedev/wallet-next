import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { DropdownContext } from "./dropdownContext";
import type { TDropdownState } from "./dropdownContext";

export const useDropdownContext = (): TDropdownState | null => {
    return useContext(DropdownContext);
};

type TUseDropdown = () => TDropdownState;

export const useDropdown: TUseDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const refButtonDropdown = useRef<HTMLDivElement>(null);
    const refDropdownMenu = useRef<HTMLDivElement>(null);

    const handleClickButtonDropdown = useCallback(() => {
        setIsDropdownOpen((prevState?: boolean) => !prevState);
    }, []);

    const handleClickOutsideDropdown = useCallback(
        (event: MouseEvent) => {
            if (
                isDropdownOpen &&
                refButtonDropdown.current &&
                event.target instanceof HTMLElement &&
                !refButtonDropdown.current.contains(event.target) &&
                refDropdownMenu.current &&
                !refDropdownMenu.current.contains(event.target)
            ) {
                setIsDropdownOpen((prevState: boolean) => (prevState ? false : prevState));
            }
        },
        [isDropdownOpen]
    );

    const handleScroll = useCallback(() => {
        setIsDropdownOpen((prevState: boolean) => (prevState ? false : prevState));
    }, []);

    useEffect(() => {
        window.addEventListener("click", handleClickOutsideDropdown);
        return () => {
            window.removeEventListener("click", handleClickOutsideDropdown);
        };
    });

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return useMemo(() => {
        return {
            isDropdownOpen,
            onClickButtonDropdown: handleClickButtonDropdown,
            refButtonDropdown,
            refDropdownMenu,
        };
    }, [isDropdownOpen, handleClickButtonDropdown, refButtonDropdown, refDropdownMenu]);
};
