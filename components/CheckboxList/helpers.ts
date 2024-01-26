import { HTMLInputTypeAttribute } from "react";

export const checkUnifiedArr = (arr: any[], itemType: HTMLInputTypeAttribute) => arr.every((item : any) => item.type === itemType);

export const checkToggleArr = (arr: any[], prop: any) => arr.every((item: any) => item.hasOwnProperty(prop));
