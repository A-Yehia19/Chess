import "../common.css"
import Button from "../components/common/button"


function AboutPage() {
  return (
    <>
    <div className="screen">
        <div className="row space-around full align-center">
            <div className="col">
                <h1> Chess </h1>
                <br/>
                <h3 style={{textAlign:"center"}}> Chess is a classic two-player board game that has been played for centuries, <br/>
                     The objective is to checkmate the opponent’s king. <br/>
                     Players use various pieces with unique movements to strategize and win </h3>
                <h6>&nbsp;</h6>
                <Button href={"/"} text={"back "} />
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutPage
