import { Navigate, Route, Routes } from "react-router-dom";
import { FilterCountries, SearchCountries } from "../components";

import { AfricaPage, AllPage, AmericaPage, AsiaPage, EuropePage, OceaniaPage } from "../pages";
import { CountryPage } from "../pages/CountryPage";

export const CountriesRoutes = () => {
  return (
    <>

      <div className="bg-gray-100">

        <SearchCountries />
        <FilterCountries />

        <Routes>
          <Route path="all" element={<AllPage />} />
          <Route path="africa" element={<AfricaPage />} />
          <Route path="america" element={<AmericaPage />} />
          <Route path="asia" element={<AsiaPage />} />
          <Route path="europe" element={<EuropePage />} />
          <Route path="oceania" element={<OceaniaPage />} />

          {/* <Route path="country/:altSpellings" element={<CountryPage />} /> */}


          <Route path="/" element={<Navigate to={"/all"} />} />
        </Routes>

      </div>

    </>
  )
}
