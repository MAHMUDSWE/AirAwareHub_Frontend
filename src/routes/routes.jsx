import { BrowserRouter, Routes, Route } from "react-router-dom"

import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";

function PageRoutes() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <HomePage />
                    } />

                    <Route path="/*" element={<ErrorPage />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default PageRoutes;