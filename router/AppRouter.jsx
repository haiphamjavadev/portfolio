import {Outlet, useRoutes} from "react-router-dom";
import PortfolioIndex from "../src/components/portfolio/PortfolioIndex.jsx";
import DashboardCms from "../src/components/dashboard/Dashboard.jsx";
import Error404Page from "../src/components/error/Error404Page.jsx";

export const useAppRoutes = () => {

    return useRoutes([
        {
            path: "/dashboard",
            element: <DashboardCms/>,
            children: [
                {path: "", element: <Outlet/>},
            ],
        }, {
            path: "/portfolio",
            element: <PortfolioIndex/>,
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