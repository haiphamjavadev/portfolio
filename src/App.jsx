import AppRouter from "../router/AppRouter.jsx";
import { Helmet } from "react-helmet";
import {asset} from "./utils/Assets.jsx";

const App = () => {
    const pageTitle = "Portfolio - Pham Quang Hai";
    const faviconUrl = asset("/imgs/favicon.png")

    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
                <link rel="icon" type="image/svg+xml" href={faviconUrl} />
            </Helmet>
            <AppRouter/>
        </div>
    );
};

export default App;