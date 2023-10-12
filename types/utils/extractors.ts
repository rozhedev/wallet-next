import { ValueOf } from "next/dist/shared/lib/constants";

export type ExtractValFromObj<T, K extends keyof T> = ValueOf<Pick<T, K>>;
