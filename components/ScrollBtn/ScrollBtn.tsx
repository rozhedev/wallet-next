import React, { FC } from "react";
import { Link as ScrollLink } from "react-scroll";
import type { TScrollBtnProps } from "./types";

export const ScrollBtn: FC<TScrollBtnProps> = ({ label, goToAttr, className }) => {
    return (
        <ScrollLink to="main-assets" smooth={true} duration={600}>
            <div className="scroll-btn">
                <button
                    type="button"
                    className={className}
                    data-goto={goToAttr}
                >
                    <svg
                        width="32"
                        height="52"
                        viewBox="0 0 32 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M26.24 10.88L16 21.12L5.76001 10.88" />
                        <path d="M26.24 20.8801L16 31.1201L5.76001 20.8801" />
                        <path d="M26.24 30.8801L16 41.1201L5.76001 30.8801" />
                    </svg>
                </button>
                <span>{label}</span>
            </div>
        </ScrollLink>
    );
};
