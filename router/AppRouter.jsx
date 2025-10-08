import {Outlet, useRoutes} from "react-router-dom";
import PortfolioIndex from "../src/components/portfolio/PortfolioIndex.jsx";
import DashboardCms from "../src/components/dashboard/Dashboard.jsx";
import Error404Page from "../src/components/error/Error404Page.jsx";
import QRGenerator from "../src/components/QRCode/QRGenerator.jsx";
import Portfolio2 from "../src/components/portfolio2/Portfolio2.jsx";

export const useAppRoutes = () => {

    return useRoutes([
        {
            path: "/portfolio/dashboard",
            element: <DashboardCms/>,
            children: [
                {path: "", element: <Outlet/>},
            ],
        },
        {
            path: "/portfolio",
            element: <PortfolioIndex/>,
        },
        {
            path: "/portfolio/tmp-2",
            element: <Portfolio2/>,
        },
        {
            path: "/portfolio/qrcode",
            element: <QRGenerator/>,
        },
        {
            path: "/error",
            element: <Error404Page/>,
        },
        {
            path: "*",
            element: <Error404Page/>,
        },
    ]);
};

export default function AppRouter() {
    const routes = useAppRoutes();

    return (
        <>
            {routes}
        </>
    );
}