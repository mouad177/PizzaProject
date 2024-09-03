import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Car1 from './Pages/car1'
import Car2 from './Pages/Car2'
import Car3 from './Pages/Car3'
import Car4 from './Pages/Car4'
import Car5 from './Pages/Car5'
import Car6 from './Pages/Car6'
import Car7 from './Pages/Car7'
import Car8 from './Pages/Car8'
import Car9 from './Pages/Car9'
import Car10 from './Pages/Car10'
import Car11 from './Pages/Car11'
import Car13 from './Pages/Car13'
import Car12 from './Pages/Car12'
import Car16 from './Pages/Car16'
import Car15 from './Pages/Car15'
import Car14 from './Pages/Car14'

function App() {

  return (
    <>
<BrowserRouter basename='/CarsRental/'>
<Routes>

<Route index element={<Home/>} />
<Route path='/Home' element={<Home/>} />
<Route path='/car1' element={<Car1/>} />
<Route path='/car2' element={<Car2/>} />
<Route path='/car3' element={<Car3/>} />
<Route path='/car4' element={<Car4/>} />
<Route path='/car5' element={<Car5/>} />
<Route path='/car6' element={<Car6/>} />
<Route path='/car7' element={<Car7/>} />
<Route path='/car8' element={<Car8/>} />
<Route path='/car9' element={<Car9/>} />
<Route path='/car10' element={<Car10/>} />
<Route path='/car11' element={<Car11/>} />
<Route path='/car12' element={<Car12/>} />
<Route path='/car13' element={<Car13/>} />
<Route path='/car14' element={<Car14/>} />
<Route path='/car15' element={<Car15/>} />
<Route path='/car16' element={<Car16/>} />

</Routes>

</BrowserRouter>
    </>
  )
}

export default App
