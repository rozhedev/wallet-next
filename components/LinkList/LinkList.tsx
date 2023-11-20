import React, { FC } from "react";
import type { LinkListProps } from "./types";
import Link from "next/link";

export const LinkList: FC<LinkListProps> = ({ linksArr }) => {
    return (
        <>
            {linksArr.map((link) => (
                <li key={link.href}>
                    <Link
                        href={link.href}
                        className={link.className}
                    >
                        {link.svgIcon}
                        <span>{link.label}</span>
                    </Link>
                </li>
            ))}
        </>
    );
};
