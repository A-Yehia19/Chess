import { Link } from "react-router-dom"

function Button({href, text}) {
  return (
    <div style={{
        backgroundColor: 'var(--black-cell-color)',
        padding: "10px 20px",
        margin: "10px",
        borderRadius: "5px",
        cursor: "pointer",
        display: "inline-block",
    }}>
        <Link to={href} style={{color: 'var(--white-cell-color)'}}> {text} </Link>
    </div>
  )
}

export default Button
