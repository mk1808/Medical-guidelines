import type { ReactNode } from "react";
import type { voidFn } from "./types";

export interface ActionButtonProps {
    title: string;
    onClick: voidFn;
    variant?: "outline" | "solid" | "subtle" | "surface" | "ghost" | "plain";
    colorPalette?: string;
    toLeft?: boolean
}

export interface SelectValueProps<T> {
    label: string;
    key: string;
    value: T;
}

export interface MgTableColumn<T> {
    name: string;
    key?: string;
    align?: "start" | "end" | "center";
    render?: (item: T) => ReactNode;
}

export interface Flow {
    id: string;
    disease: string;
    name: string;
    version: string;
    created: Date;
    author: string;
    updated: Date;
}

export interface FlowStepParameter {
    name: string;
    options: SelectValueProps<string>[];
}

export interface FlowStep {
    id: string;
    name: string;
    description: string;
    parameters: FlowStepParameter[];
    nextStep: number | string;
}

export interface Step {
    id: string;
    created?: Date;
    updated?: Date;
    name: string;
    author?: string;
    parameters?: any[];
    nextSteps?: any[];
}

export interface TreatmentHistory {
    id: string;
    disease: string;
    name: string;
    version: string;
    patientId: string;
    created: Date;
    updated: Date;
}