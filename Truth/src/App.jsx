import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Discourses from './Discourses';
import SecretWritings from './SecretWritings';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

<Routes>
  <Route path="/" element={<Home/>}/>

</Routes >
</BrowserRouter >

    </>
  )
}

export default App
