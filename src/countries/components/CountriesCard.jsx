import { Link } from "react-router-dom"


export const CountriesCard = ({ altSpellings, flags, name, capital, population, region }) => {
  return (
    <div
      key={name.common}
      className="mb-10 bg-white rounded-xl"
    >

      <figure className="w-full rounded-xl mt-4 border border-black">
        <img className="rounded-t-lg h-56 w-full" src={flags.png} alt={flags.alt} />
      </figure>

      <div className="px-4 pb-4">

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
