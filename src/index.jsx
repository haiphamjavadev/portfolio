import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./contexts/ThemeContext.jsx";
import "./contexts/i18nUtils.jsx"; // ✅ thêm dòng này để khởi tạo i18n

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)