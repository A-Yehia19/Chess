import { Route, Routes } from "react-router-dom";
import HomePage from './pages/Home'
import LandingPage from "./pages/Landing";
import AboutPage from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home/" element={<LandingPage/>} />
      <Route path="/game/" element={<HomePage/>} />
      <Route path="/about/" element={<AboutPage/>} />
    </Routes>
  )
}

export default App
