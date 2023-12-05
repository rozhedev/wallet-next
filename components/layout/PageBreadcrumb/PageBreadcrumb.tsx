"use client";

import React, { FC } from "react";
import { TPageBreadcrumbProps } from "./types";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const PageBreadcrumb: FC<TPageBreadcrumbProps> = ({ homeElement, separator, activeClass, pageTitle }) => {
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path);

    return (
        <div className="page-title">
            <ul className="h5 breadcrumbs">
                <li>
                    <Link
                        href={"/"}
                        scroll={false}
                    >
                        {homeElement}
                        {pathNames.length > 0 && separator}
                    </Link>
                </li>

                {pathNames.map((link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join("/")}`;
                    let itemClasses = paths === href ? `${activeClass}` : "";

                    return (
                        <React.Fragment key={index}>
                            <li
                                className={itemClasses}
                                key={index}
                            >
                                <Link
                                    href={href}
                                    scroll={false}
                                >
                                    {link}
                                    {pathNames.length !== index + 1 && separator}
                                </Link>
                            </li>
                        </React.Fragment>
                    );
                })}
            </ul>
            <h1 className="h1">{pageTitle}</h1>
        </div>
    );
};
