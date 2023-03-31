import { useFetch } from "../../hooks/useFetch";
import { CountriesList } from "../components/CountriesList";

export const AmericaPage = () => {

  const { data, isLoading } = useFetch('https://restcountries.com/v3.1/region/America');


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
