import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';


export const FilterCountries = () => {

  const navigate = useNavigate();

  const [dropdown, setDropdown] = useState(false);
  const openAndCloseDropdown = () => {
    setDropdown(!dropdown)
  }

  const [categories, setCategories] = useState('');
  const [byRegion, setByRegion] = useState(false)

  const filterAll = () => {
    navigate('/all')
    setCategories('All')
    setByRegion(true)
  }
  const filterAfrica = () => {
    navigate('/africa')
    setCategories('Africa')
    setByRegion(true)
  }
  const filterAmerica = () => {
    navigate('/america')
    setCategories('America')
    setByRegion(true)
  }
  const filterAsia = () => {
    navigate('/asia')
    setCategories('Asia')
    setByRegion(true)
  }
  const filterEurope = () => {
    navigate('/europe')
    setCategories('Europe')
    setByRegion(true)
  }
  const filterOceania = () => {
    navigate('/oceania')
    setCategories('Oceania')
    setByRegion(true)
  }

  const filterByRegion = 'Filter by Region...';

  return (
    <div className="flex justify-center">

      <Dropdown isOpen={dropdown} toggle={openAndCloseDropdown} className="pt-2">
        <DropdownToggle caret className="px-5">
          {
            (byRegion)
              ? categories
              : filterByRegion
          }
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem disabled>{filterByRegion}</DropdownItem>
          <DropdownItem onClick={filterAll}>All</DropdownItem>
          <DropdownItem onClick={filterAfrica}>Africa</DropdownItem>
          <DropdownItem onClick={filterAmerica}>America</DropdownItem>
          <DropdownItem onClick={filterAsia}>Asia</DropdownItem>
          <DropdownItem onClick={filterEurope}>Europe</DropdownItem>
          <DropdownItem onClick={filterOceania}>Oceania</DropdownItem>
        </DropdownMenu>

      </Dropdown>

    </div>
  )

}