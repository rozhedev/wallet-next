import React from "react";

export type TAccordionContent = {
    key: number;
    question: React.ReactNode;
    answer: React.ReactNode;
    // open? : boolean;
    // onClick?: () => void;
};
export type TAccordionContentArr = TAccordionContent[];
