import { useState } from 'react'
import './App.css'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Forgotpassword } from './components/Forgotpassword'
import { BrowserRouter ,Route ,Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
{/* <Route path="/" element={<Homepage />} /> */}
<Route path="/Login" element={<Login />} />
<Route path="/Signup" element={<Signup />} />
<Route path="/Forgotpassword" element={<Forgotpassword />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
