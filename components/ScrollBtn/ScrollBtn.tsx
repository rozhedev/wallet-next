import React, { FC } from "react";
import { Link as ScrollLink } from "react-scroll";
import type { TScrollBtnProps } from "./types";
import { tripleArrowIcon } from "@/data/pages/ui-icons";

export const ScrollBtn: FC<TScrollBtnProps> = ({ label, goToAttr, className }) => {
    return (
        <ScrollLink to="main-assets" smooth={true} duration={600}>
            <div className="scroll-btn">
                <button
                    type="button"
                    className={className}
                    data-goto={goToAttr}
                >
                    {tripleArrowIcon}
                </button>
                <span>{label}</span>
            </div>
        </ScrollLink>
    );
};
