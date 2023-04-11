import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductItem from './components/ProductItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ProductItem />
    </div>
  )
}

export default App
