import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Auth/LoginPage'
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path ="/login" exact element ={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
