import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'


function App() {

  return (
    <>
<BrowserRouter basename='/PizzaProject/'>
<Routes>

<Route index element={<Home/>} />


</Routes>

</BrowserRouter>
    </>
  )
}

export default App
