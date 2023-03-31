import { useParams } from 'react-router-dom'
import CountryByName from '../helpers/CountryByName';


export const CountryPage = () => {

  const { altSpellings } = useParams();

  return (
    <>
      <CountryByName altSpellings={altSpellings} />
    </>
  )
}
