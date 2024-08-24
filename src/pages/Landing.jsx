import "../common.css"
import Button from "../components/common/button"

function LandingPage() {
  return (
    <>
    <div className="screen">
        <div className="row space-around full align-center">
            <div className="col">
                <h1> Chess </h1>
                <p> Click on the button below to start a new game. </p>
                <Button href="/game/" text={"Offline Game"} />
                <Button href="/host/" text={"Host Game"} />
                <Button href="/join/" text={"Join Game"} />
                <Button href="/about/" text={"About Game"} />
                <h1>&nbsp;</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default LandingPage
