import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Fruits from './pages/Fruits'
import CreateFruits from './pages/CreateFruits'
import Veggies from './pages/Veggies'
import CreateVeggies from './pages/CreateVeggies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <Link to="/">
        <button>Home</button> 
      </Link>
      <Link to="/create">
        <button>Create Fruit </button>
      </Link>
      <Link to="/veggies">
        <button>Veggies</button> 
      </Link>
      <Link to="/veggies/create">
        <button>Create New Veggie</button>
      </Link>
    </nav>

    <Routes>
      <Route path='/' element={<Fruits />} />
      <Route path='/create' element={<CreateFruits />}/>
      <Route path='/' element={<Veggies />} />
      <Route path='/veggies/create' element={<CreateVeggies />}/>
    </Routes>
    </>
  )
}
export default App