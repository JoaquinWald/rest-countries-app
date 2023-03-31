import { useFetch } from "../../hooks/useFetch";
import { CountriesList } from "../components/CountriesList";

export const AllPage = () => {

  const { data, isLoading } = useFetch('https://restcountries.com/v3.1/all');

  return (
    <div className="">
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
