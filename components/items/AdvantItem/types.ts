import React from "react";

export type TMainAdvantIconPath = "icon-layers" | "icon-tire" | "icon-utxo" | "icon-globe" | "icon-wallet-connect" | "icon-segwit" | "icon-eye-hide";

export type TMainAdvantItem = {
    id: number;
    svgIcon: React.ReactNode
    title: string;
    descr: string;
};

export type TMainAdvantItemArr = TMainAdvantItem[];