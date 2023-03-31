import { useFetch } from "../../hooks/useFetch";

export const getCountryByName = (altSpellings) => {

  const { data } = useFetch('https://restcountries.com/v3.1/all');

  return data?.find(data => data.altSpellings[0] === altSpellings);

}







// export const getCountryByName = (altSpellings) => {

//   const { data } = useFetch('https://restcountries.com/v3.1/all');

//   return data?.find(data => data.altSpellings[0] === altSpellings);

// }