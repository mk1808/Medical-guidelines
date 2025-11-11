import type { voidFn } from "./types";

export interface ActionButtonProps {
    title: string;
    onClick: voidFn;
    variant?: "outline" | "solid" | "subtle" | "surface" | "ghost" | "plain";
    colorPalette?: string;
}