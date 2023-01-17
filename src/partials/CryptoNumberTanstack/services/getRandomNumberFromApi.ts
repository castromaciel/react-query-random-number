import { URL } from '../../../constants'

export const getRandomNumberFromApi = async (): Promise<number> => {
  const response = await fetch(URL)
  const numberString = await response.text()

  // throw new Error('Help!!!')
  return +numberString
}
