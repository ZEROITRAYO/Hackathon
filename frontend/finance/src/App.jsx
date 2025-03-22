import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Auth/Login/LoginPage'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import SignupPage from './Pages/Auth/Signup/SignupPage'
import Signup from './Pages/Auth/Signup/Signup'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path='/signup' exact element={<SignupPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
