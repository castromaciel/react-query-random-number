import './App.css'
import { CryptoNumber } from './partials/CryptoNumber/CryptoNumber'
import { CryptoNumberTanstack } from './partials/CryptoNumberTanstack/CryptoNumberTanstack'

export const App = () => (
  <div>
    <CryptoNumber />
    <CryptoNumberTanstack />
  </div>
)
