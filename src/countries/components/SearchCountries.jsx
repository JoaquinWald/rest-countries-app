import { RxMagnifyingGlass } from "react-icons/rx";


export const SearchCountries = () => {
  return (
    <div className="flex justify-center pt-4">
      <form className="flex p-2 bg-white rounded-md w-11/12">
        <figure className="relative top-2">
          <RxMagnifyingGlass size={20} />
        </figure>
        <input
          className="w-10/12 ml-2 bg-white"
          type="text"
          placeholder="Search for a country..."
        />
      </form>
    </div>
  )
}
