import React, { FC } from "react";
import type { TLinkListProps } from "./types";
import Link from "next/link";

export const LinkList: FC<TLinkListProps<string>> = ({ linksArr, handler }) => {
    return (
        <>
            {linksArr.map((link) => (
                <li key={link.href}>
                    <Link
                        href={link.href}
                        className={link.className}
                        scroll={false}
                        onClick={handler}
                    >
                        {link.svgIcon}
                        <span>{link.label}</span>
                    </Link>
                </li>
            ))}
        </>
    );
};
