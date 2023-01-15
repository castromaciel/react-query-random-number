/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect, useReducer, useState } from 'react'
import { URL } from '../../constants'

const getRandomNumberFromApi = async (): Promise<number> => {
  const response = await fetch(URL)
  const numberString = await response.text()

  // throw new Error('Help!!!')
  return +numberString
}

export const CryptoNumber = () => {
  const [number, setNumber] = useState<number>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setIsError] = useState<string>()

  const [key, forceRefetch] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    setIsLoading(true)
    getRandomNumberFromApi()
      .then(setNumber)
      .catch((err) => setIsError(err.message))
  }, [key])

  useEffect(() => {
    if (number) setIsLoading(false)
  }, [number])

  useEffect(() => {
    if (error) setIsLoading(false)
  }, [error])

  return (
    <div>
      { 
        isLoading 
          ? <h2>...Loading</h2>
          : <h2>Random number: {number}</h2>
      }

      { !isLoading && error && <h3>{error}</h3> }

      <button type="button" onClick={forceRefetch} disabled={isLoading}>
        { isLoading ? '...' : 'New Number' }
      </button>
    </div>
  )
}
