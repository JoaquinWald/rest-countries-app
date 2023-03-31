import { Link } from "react-router-dom"

export const CountryBorders = ({ borders, altSpellings }) => {


  return (
    <div>
      <h5>Border Countries</h5>
      {
        borders.map((border) => (
          <Link key={border} to={`/country/${border}`}>
            <button>{border}</button>
          </Link>
        ))
      }
    </div>
  )
}
