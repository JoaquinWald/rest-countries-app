import { Route, Routes } from "react-router-dom";
import { CountryPage } from "../countries/pages/CountryPage";
import { CountriesRoutes } from "../countries/routes/CountriesRoutes";
import { Header } from "../ui/components/Header";

export const AppRouter = () => {
  return (
    <>

      <Header />

      <Routes>

        {/* <Route path="country" element={<CountryPage />} /> */}
        <Route path="country/:altSpellings" element={<CountryPage />} />

        <Route path="country/:cca3" element={<CountryPage />} />

        <Route path="/*" element={<CountriesRoutes />} />

      </Routes>

    </>
  )
}
