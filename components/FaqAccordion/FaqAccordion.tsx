import React, { FC, useState } from "react";
import { TAccordionContent } from "./types";
// import { Accordion } from "@/utils/details-anim";

export const FaqAccordion: FC<TAccordionContent> = ({ question, answer }) => {
    // * Side effect - glitch
    // if (typeof document !== "undefined") {
    //     document.querySelectorAll(".faq-accordion").forEach((el) => {
    //         new Accordion(el);
    //     });
    // }

    return (
        <details className="faq-accordion">
            <summary className="faq-accordion__trigger">
                <span className="faq-accordion__question">{question}</span>
                <span className="custom-plus-icon"></span>
            </summary>
            <div className="accordion-content">{answer}</div>
        </details>
    );
};
