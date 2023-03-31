import { CountriesCard } from "./CountriesCard"

export const CountriesList = ({ data }) => {

  return (
    <div className="w-11/12">
      <div className="">

        {
          data.map(data =>
            <CountriesCard
              key={data.name.common}
              {...data}
            />
          )
        }

      </div>
    </div>
  )
}