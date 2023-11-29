"use client";

import React, { FC } from "react";
import type { TMainAdvantItem } from "./types";
import { Accordion } from "@/utils/details-anim";

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
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M32.0001 59.4287C47.1485 59.4287 59.4287 47.1485 59.4287 32.0001C59.4287 16.8517 47.1485 4.57153 32.0001 4.57153C16.8517 4.57153 4.57153 16.8517 4.57153 32.0001C4.57153 47.1485 16.8517 59.4287 32.0001 59.4287Z" />
                        <path d="M32 22.8572V50.2858" />
                        <path d="M32 13.7144V18.2858" />
                    </svg>
                    <span className="link">Read more</span>
                </summary>

                <p className="accordion-content">{descr}</p>
            </details>
        </div>
    );
};
