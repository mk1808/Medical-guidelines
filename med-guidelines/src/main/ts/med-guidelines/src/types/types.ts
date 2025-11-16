import type { ReactNode } from "react";

export type voidFn = () => void;
export type callbackFn<T> = (value: T) => void;
export type renderFn = () => ReactNode;