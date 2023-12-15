"use client";

import React, { FC } from "react";
import { TSectionLayoutProps } from "./types";

export const SectionLayout: FC<TSectionLayoutProps> = ({ children, id }) => {
    return (
        <section
            className={id}
            id={id}
        >
            <div className="container">{children}</div>
        </section>
    );
};
