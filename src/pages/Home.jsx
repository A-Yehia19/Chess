import "../common.css"
import "./styles/Home.css"
import HomeBoard from "../components/Home/Board"

function HomePage() {
  return (
    <>
      <div className="col">
        <h1> Chess </h1>
        <br />
        <HomeBoard/>
      </div>
    </>
  )
}

export default HomePage
