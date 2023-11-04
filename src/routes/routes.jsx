import { BrowserRouter, Routes, Route } from "react-router-dom"

import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import CityComparison from "../pages/CityComparison";
import SearchPage from "../pages/SearchPage";
import MapView from "../pages/MapView";
import CitySocialEconomicFactors from "../pages/CountrySocioEconomicFactor";

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
                    <Route path="/mapview" element={<MapView />} />
                    <Route path="/economic-factors" element={<CitySocialEconomicFactors />} />

                    <Route path="/*" element={<ErrorPage />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default PageRoutes;