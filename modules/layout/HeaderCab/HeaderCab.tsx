"use client";

import React, { FC } from "react";
import type { THeaderCabProps } from "./types";

export const HeaderCab: FC<THeaderCabProps> = ({ toggleHandler, isAsideOpen, children }) => {
    return (
        <header className="header header-cab">
            <div className="container">
                <div className="menu inner">
                    <div
                        className="header-cab__trigger navlink"
                        onClick={toggleHandler}
                    >
                        <svg
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                transform: `rotate(${isAsideOpen ? "0deg" : "180deg"})`,
                            }}
                        >
                            <path d="M13.7142 14H50.2857" />
                            <path d="M26.2856 26L50.2856 26" />
                            <path d="M26.2856 38L50.2856 38" />
                            <path d="M13.7142 50H50.2857" />
                            <path d="M13.7 32.1001L16.7288 28.8525L19.7576 25.6049V32.1001V38.5953L16.7288 35.3477L13.7 32.1001Z" />
                        </svg>
                        <span>{isAsideOpen ? "Close" : "Menu"}</span>
                    </div>
                    <nav className="menu__body">
                        <ul className="menu__list">{children}</ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
