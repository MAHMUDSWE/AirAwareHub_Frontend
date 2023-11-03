import { BrowserRouter, Routes, Route } from "react-router-dom"

import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import CityComparison from "../pages/CityComparison";
import SearchPage from "../pages/SearchPage";

function PageRoutes() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <HomePage />
                    } />
                    <Route path="/air-quality-comparison" element={
                        <CityComparison />
                    } />
                    <Route path="/search" element={<SearchPage />} />

                    <Route path="/*" element={<ErrorPage />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default PageRoutes;