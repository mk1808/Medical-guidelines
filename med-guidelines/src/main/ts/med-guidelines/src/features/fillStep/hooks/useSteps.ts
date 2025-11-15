import type { FlowStep } from "@/types/interfaces";
import { useMemo } from "react"

export const useSteps = () => {
    const steps: FlowStep[] = useMemo(() => [
        {
            id: "1",
            nextStep: 1,
            name: "First step name",
            description: "Proin tincidunt sapien sit amet urna dignissim, eget mattis eros pulvinar. Nulla in sapien faucibus, commodo odio non, posuere magna.",
            parameters: [
                {
                    name: "Sed imperdiet",
                    options: mockParameterOptions()
                }, {
                    name: "Cras commodo massa nibh",
                    options: mockParameterOptions()
                }, {
                    name: "at ultrices neque ullamcorper",
                    options: mockParameterOptions()
                }, {
                    name: "Nam tempus bibendum nunc vitae",
                    options: mockParameterOptions()
                }, {
                    name: "Nullam id gravida lorem",
                    options: mockParameterOptions()
                }
            ],
        }, {
            id: "2",
            nextStep: 2,
            name: "Second step name",
            description: "Fusce ut blandit nunc. Proin imperdiet consectetur ante et euismod. Donec semper diam sapien, non accumsan purus imperdiet non. Duis non semper nunc.",
            parameters: [
                {
                    name: "Nunc non consectetur urna",
                    options: mockParameterOptions()
                }, {
                    name: "Phasellus fermentum dolor magna",
                    options: mockParameterOptions()
                }
            ],
        }, {
            id: "3",
            nextStep: "proposedTreatment",
            name: "Third step name",
            description: "Pellentesque tortor lectus, rutrum accumsan tempor eu, semper eget libero. Donec non felis lorem. Aliquam ut ante lobortis, consequat quam vitae.",
            parameters: [
                {
                    name: "Integer et est malesuada",
                    options: mockParameterOptions()
                }, {
                    name: "commodo ultricies sit amet non quam",
                    options: mockParameterOptions()
                }, {
                    name: "Phasellus at neque quis augue venenatis",
                    options: mockParameterOptions()
                }
            ],
        }
    ], [])

    function mockParameterOptions(){
        return [
            { label: "Nunc pulvinar convallis", key: "1", value: "1" },
            { label: "rutrum gravida velit rhoncus", key: "2", value: "2" },
            { label: "Phasellus eu volutpat orci", key: "3", value: "3" },
            { label: "In arcu nisi, condimentum ut dolor", key: "4", value: "4" },
            { label: "accumsan semper mauris", key: "5", value: "5" }
        ]
    }

    function getStep(id: number) {
        return steps[id];
    }

    return { getStep }
}