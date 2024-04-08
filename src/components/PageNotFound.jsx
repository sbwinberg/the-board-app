import { Link } from "react-router-dom"

export default function PageNotFound() {
    return (
        <>
            <h2>Här var det tomt :-(</h2>
            <Link to={'/'}><button>Kom tillbaka!</button></Link>
        </>
    )
}