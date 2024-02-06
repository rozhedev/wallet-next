import React from "react";
import { TRoute, TRouteLabelScope } from "@/data/routes";

export type TAsideCabLinks = Omit<TAsideNavItem, "setIsAsideOpen" | "isCompleted" | "setIsCompleted">[];

export type TAsideCabProps = {
    isAsideOpen: boolean;
    linksArr: TAsideCabLinks;
    setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TAsideNavItem = {
    isLink: boolean;
    linkHref: TRoute | "";
    itemIcon: React.ReactElement;
    label: TRouteLabelScope;
    setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isCompleted: boolean;
    setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>;
};
