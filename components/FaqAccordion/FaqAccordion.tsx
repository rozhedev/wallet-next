import React, { FC } from "react";
import { TAccordionContent } from "./types";

export const FaqAccordion: FC<TAccordionContent> = ({ question, answer }) => {
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
