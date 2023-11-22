"use client";

import React, { FC } from "react";
import { SectionLayoutProps } from "./types";

export const SectionLayout: FC<SectionLayoutProps> = ({ children, id }) => {
    return (
        <section
            className={id}
            id={id}
        >
            <div className="container">{children}</div>
        </section>
    );
};
