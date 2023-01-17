import { useQuery } from '@tanstack/react-query'
import { getRandomNumberFromApi } from '../services/getRandomNumberFromApi'

export const useRandom = () => {
  const {
    data, error, isError, isFetching, refetch 
  } = useQuery(
    ['randomNumber'],
    getRandomNumberFromApi,
    {
      refetchOnWindowFocus: false,
      retry: false
    }
  )
  return {
    isFetching,
    data,
    isError,
    error,
    refetch
  }
}
