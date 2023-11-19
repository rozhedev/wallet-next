"use client"

import React, { FC, useState } from "react";
import Link from 'next/link'
import { DropdownPropsOld } from "./types";

const Dropdown: FC<DropdownPropsOld> = ({ label, linksArr }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    

    return (
        <div
            className="dropdown"
            data-dropdown
        >
            <button
                type="button"
                className="navlink"
                data-dropdown-button
            >
                <span>{label}</span>
                <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M52.48 21.76L32 42.24L11.52 21.76" />
                </svg>
            </button>
            <div className="dropdown-menu">
                <ul className="dropdown-links">
                    {linksArr.map((link) => (
                        <li>
                            <Link
                                key={link.href}
                                href={link.href}
                                className={link.className}
                            >
                                {link.svgIcon}
                               <span>{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
