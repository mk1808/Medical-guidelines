import { useNavigate, type To } from "react-router";


export const useRouterNavigate = () => {
    const routerNavigate = useNavigate();

    const getPath = <T,>(path: string, additionalParams?: T): To | number | null => {
        switch (path) {
            case "back": return -1;
            case "landing": return "/";
            case "login": return "/auth/login";
            case "registration": return "/auth/registration";
            case "treatmentHistory": return "/treatmentHistory";
            case "treatmentSummary": return "/treatmentSummary";
            case "newFlow": return "/newFlow";
            case "newStep": return "/newStep";
            case "stepSummary": return "/stepSummary";
            case "flowHistory": return "/flowHistory";
            case "flowSummary": return "/flowSummary";
            case "flowList": return "/flowList";
            case "flowStep": return "/flowStep";
            case "proposedTreatment": return "/proposedTreatment";
            case "test": return "/test";

            default: return null;
        }

    }
    const navigate = <T,>(path: string, additionalParams?: T) => {
        const fullPath = getPath(path, additionalParams);

        if (fullPath != null) {
            routerNavigate(fullPath as To);
        }
    }

    return { navigate }
}
