import "../common.css"
import "./styles/Home.css"
import HomeBoard from "../components/Home/Board"
import HomeHistory from "../components/Home/History"

function HomePage() {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1> Chess </h1>
          <br />
          <HomeBoard/>
        </div>
        <HomeHistory/>
      </div>
    </>
  )
}

export default HomePage
