import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {I18nProvider} from "./contexts/I18nContext.jsx";
import {ThemeProvider} from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <I18nProvider>
                <App/>
                </I18nProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)