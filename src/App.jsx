import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Details from './pages/Details'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/Details/:id' element={<Details/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
