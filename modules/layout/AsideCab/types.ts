import React from "react";
import { TRoute, TRouteLabelScope } from "@/data/routes";

export type TAsideCabProps = {
    isAsideOpen: boolean;
    linksArr: Omit<TAsideNavItem, "setIsAsideOpen">[];
    setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TAsideNavItem = {
    isLink: boolean;
    linkHref: TRoute | "";
    itemIcon: React.ReactElement;
    label: TRouteLabelScope;
    setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
