"use client";

import React, { FC } from "react";
import type { TMainAdvantItem } from "./types";
import { Accordion } from "@/utils/details-anim";
import { infoRoundedIcon } from "@/data/pages/ui-icons";

export const AdvantItem: FC<TMainAdvantItem> = ({ svgIcon, title, descr }) => {
    // * Add class instance in details elements for animation
    if (typeof document !== "undefined") {
        document.querySelectorAll(".advant-accordion").forEach((el) => {
            new Accordion(el);
        });
    }
    return (
        <div className="advant-item">
            <div className="advant-item__icon">{svgIcon}</div>
            <h4 className="h5">{title}</h4>
            <details className="advant-accordion">
                <summary className="summary">
                    {infoRoundedIcon}
                    <span className="link">Read more</span>
                </summary>

                <div className="accordion-content">{descr}</div>
            </details>
        </div>
    );
};
