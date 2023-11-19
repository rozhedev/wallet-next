import React from "react";

export type DropdownPropsOld = {
    label: string;
    linksArr: {
        href: `/${string}`;
        label: string;
        className: `navlink${"" | " js-modal-open"}`;
        svgIcon?: React.ReactNode;
    }[];
};
