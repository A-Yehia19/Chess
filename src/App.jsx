import { Route, Routes } from "react-router-dom";
import HomePage from './pages/Home'
import LandingPage from "./pages/Landing";
import AboutPage from "./pages/About";
import OnlinePage from "./pages/Online";
import HostPage from "./pages/Host";
import JoinPage from "./pages/Join";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home/" element={<LandingPage/>} />
      <Route path="/game/" element={<HomePage/>} />
      <Route path="/game/:roomID/" element={<OnlinePage/>} />
      <Route path="/host/" element={<HostPage/>} />
      <Route path="/join/" element={<JoinPage/>} />
      <Route path="/about/" element={<AboutPage/>} />
    </Routes>
  )
}

export default App
