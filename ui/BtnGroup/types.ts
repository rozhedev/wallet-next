import React, { FC } from "react";
import { TBtnProps } from "@/ui/Btn/types";

export type TBtnGroup = {
    className: "btn-group" | `btn-group ${string}`;
    // children: React.Component<TBtnProps> | React.Component<TBtnProps>[];
    children: React.ReactNode | React.ReactNode[];
};
