import type { Step } from "@/types/interfaces";
import { useMemo } from "react"

export const useSteps = () => {
    const steps: Step[] = useMemo(() => [
        {
            id: "1",
            name: "Proin tincidunt sapien",
            parameters: [],
            nextSteps: ["2", "3"],
            isLastStep: false,
            conditions: [{ param: "param 1", value: "value 2" }] 
        }, {
            id: "2",
            name: "sit amet urna dignissim",
            parameters: [],
            nextSteps: ["5", "6", "9"],
            isLastStep: false,
            conditions: [{ param: "param 1", value: "value 1" }] 
        }, {
            id: "3",
            name: "eget mattis eros pulvinar",
            parameters: [],
            nextSteps: [],
            isLastStep: false,
        }, {
            id: "4",
            name: "Pellentesque tortor lectus",
            parameters: [],
            nextSteps: ["1", "8"],
            isLastStep: false,
        }, {
            id: "5",
            name: "Fusce ut blandit nunc",
            parameters: [],
            nextSteps: ["6"],
            isLastStep: false,
        }, {
            id: "6",
            name: "Nulla in sapien faucibus",
            parameters: [],
            nextSteps: ['7'],
            isLastStep: false,
        }, {
            id: "7",
            name: "commodo odio non, posuere magna",
            parameters: [],
            nextSteps: [],
            isLastStep: true,
        }, {
            id: "8",
            name: "Proin imperdiet consectetur",
            parameters: [],
            nextSteps: [],
            isLastStep: true,
        }, {
            id: "9",
            name: "Donec semper diam sapien",
            parameters: [],
            nextSteps: [],
            isLastStep: true,
        }
    ], [])

    function getSteps() {
        return steps;
    }

    return { getSteps }
}