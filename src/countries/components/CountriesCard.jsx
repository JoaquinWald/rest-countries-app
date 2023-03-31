import { Link } from "react-router-dom"


export const CountriesCard = ({ altSpellings, flags, name, capital, population, region }) => {
  return (
    <div
      key={name.common}
      className="mb-10 bg-white rounded-xl"
    >

      <figure className="flex justify-center w-full rounded-xl mt-4">
        <img className="rounded-t-lg h-44 w-auto border" src={flags.png} alt={flags.alt} />
      </figure>

      <div className="px-4 pb-4 sm:text-center">

        <h2>
          {name.common}
        </h2>
        <div>
          <strong>Capital:</strong> {capital}
        </div>
        <div>
          <strong>Population:</strong> {population.toLocaleString()}
        </div>
        <div>
          <strong>Region:</strong> {region}
        </div>

        <div className="flex justify-center mt-2">
          <Link to={`/country/${altSpellings[0]}`} className="btn btn-primary">
            More...
          </Link>
        </div>

      </div>

    </div>
  )
}
