import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/auth/LoginPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import TreatmentHistoryPage from "../pages/app/treatmentHistory/TreatmentHistoryPage";
import TreatmentSummaryPage from "../pages/app/treatmentHistory/TreatmentSummaryPage";
import NewFlowPage from "../pages/app/newFlow/NewFlowPage";
import NewStepPage from "../pages/app/newFlow/NewStepPage";
import FlowHistoryPage from "../pages/app/newFlow/FlowHistoryPage";
import FlowSummaryPage from "../pages/app/newFlow/FlowSummaryPage";
import StepSummaryPage from "../pages/app/newFlow/StepSummaryPage";
import FlowListPage from "../pages/app/fillFlow/FlowListPage";
import FillStepPage from "../pages/app/fillFlow/FillStepPage";
import ProposedTreatmentPage from "../pages/app/fillFlow/ProposedTreatmentPage";
import TestPage from "../pages/TestPage";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        Component: LandingPage,
    },
    {
        path: "/auth",
        children: [
            { index: true, Component: LoginPage },
            { path: "login", Component: LoginPage },
            { path: "registration", Component: RegistrationPage },
        ],
    },
    {
        path: "/treatmentHistory",
        Component: TreatmentHistoryPage,
    },
    {
        path: "/treatmentSummary",
        Component: TreatmentSummaryPage,
    },
    {
        path: "/newFlow",
        Component: NewFlowPage,
    },
    {
        path: "/newStep",
        Component: NewStepPage,
    },
    {
        path: "/stepSummary",
        Component: StepSummaryPage,
    },
    {
        path: "/flowHistory",
        Component: FlowHistoryPage,
    },
    {
        path: "/flowSummary",
        Component: FlowSummaryPage,
    },
    {
        path: "/flowList",
        Component: FlowListPage,
    },
    {
        path: "/flowStep",
        Component: FillStepPage,
    },
    {
        path: "/proposedTreatment",
        Component: ProposedTreatmentPage,
    },
    {
        path: "/test",
        Component: TestPage,
    },
    {
        path: "*",
        Component: NotFoundPage,
    },
]);

export default AppRoutes;