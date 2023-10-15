import { ValueOf } from "next/dist/shared/lib/constants";

export type ExtractValFromObj<T, K extends keyof T> = ValueOf<Pick<T, K>>;

export function combine<T>(a: T, b: T) {
    return a;
}