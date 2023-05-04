import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login/Login.jsx"
import { Settings } from "../pages/Settings/Settings"
import { Home } from "../pages/Home/Home"
import { Navbar } from "../components/Navbar/Navbar.jsx"
import { Home2 } from "../pages/Home2/Home2.jsx"
import { useAuth0 } from "@auth0/auth0-react"

export const Router = () => {

  const {isLoading} = useAuth0()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home2 />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/*" element="Error" />
        </Routes>
    </BrowserRouter>
  )
}
