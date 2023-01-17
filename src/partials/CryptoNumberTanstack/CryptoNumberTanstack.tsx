/* eslint-disable react/jsx-one-expression-per-line */
import { useRandom } from './hooks/useRandom'

export const CryptoNumberTanstack = () => {
  const {
    isFetching, data, isError, error, refetch 
  } = useRandom()

  return (
    <div>
      <h1>Crypto Number With Tanstack</h1>
      { 
        isFetching 
          ? <h2>...Loading</h2>
          : <h2>Random number: {data}</h2>
      }

      { !isFetching && isError && <h3>{`${error}`}</h3> }

      <button type="button" onClick={() => refetch()} disabled={isFetching}>
        { isFetching ? '...' : 'New Number' }
      </button>
    </div>
  ) 
}
