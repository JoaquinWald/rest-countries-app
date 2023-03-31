import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { AiOutlineArrowLeft } from 'react-icons/ai';


const CountryByName = ({ altSpellings }) => {
  const { data } = useFetch('https://restcountries.com/v3.1/all');
  const country = data?.find(data => data.altSpellings[0] === altSpellings);

  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1)
  }


  return (
    <div className="grid grid-cols-1 p-4 bg-zinc-50">
      {country ? (
        <div className="">

          <button
            className="flex items-center px-4 mb-5 border border-gray-900 rounded-sm shadow-md"
            onClick={onNavigateBack}
          >
            <figure className="m-0 pr-1">
              <AiOutlineArrowLeft />
            </figure>
            <p className="m-0 pl-1">
              Back
            </p>
          </button>

          <figure>
            <img
              className="h-56 w-full"
              src={country.flags.svg}
              alt=""
            />
          </figure>

          <div>
            <h2>{country.name.common}</h2>
            <p className="mb-2">
              <b>Native Name:</b> {country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}
            </p>
            <p className="mb-2">
              <b>Population:</b> {country.population.toLocaleString()}
            </p>
            <p className="mb-2">
              <b> Region:</b> {country.region}
            </p>
            <p className="mb-2">
              <b> Sub Region:</b> {country.subregion}
            </p>
            <p className="mb-2">
              <b> Capital:</b> {country.capital}
            </p>
            <br />

            <p className="mb-2">
              <b> Top Level Domain:</b> {country.tld}
            </p>
            <p className="mb-2">
              <b> Currencies:</b> {country.currencies[Object.keys(country.currencies)[0]].name}
            </p>
            <p className="mb-2">
              <b> Languages:</b> {Object.values(country.languages).join(", ")}
            </p>
            <br />

            <h5>Border Countries:</h5>
          </div>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CountryByName;
