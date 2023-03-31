import { useFetch } from "../../hooks/useFetch";
import { CountriesList } from "../components/CountriesList";

export const AfricaPage = () => {

  const { data, isLoading } = useFetch('https://restcountries.com/v3.1/region/Africa');

  // const { name, population, region, capital } = !!data;


  return (
    <div>
      <hr />

      {
        (isLoading)
          ? (
            <div>
              Loading...
            </div>
          )
          : (
            <div className="flex justify-center">
              <CountriesList data={data} />
            </div>
          )
      }

    </div>
  )
}
