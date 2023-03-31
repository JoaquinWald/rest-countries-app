import { useFetch } from "../../hooks/useFetch";
import { CountriesList } from "../components/CountriesList";

export const AsiaPage = () => {

  const { data, isLoading } = useFetch('https://restcountries.com/v3.1/region/Asia');


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
