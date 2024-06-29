import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Forgotpassword } from './components/Forgotpassword'
import { Home } from './components/Home'
import { Header } from './shared/Header'
import { Footer } from './shared/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          <Route path="/" element={<Home />} />
        
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
