import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_TEST_ENV)
  console.log(import.meta.env.VITE_QUAS)
  return (
    <div className="App">
      {import.meta.env.VITE_TEST_ENV}
      q
    </div>
  )
}

export default App
