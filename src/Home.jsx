import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    return (
        <>
            <h1>Hola, bienvenido a EDMarket</h1>
            <p>Conoce las 100 criptos más usadas</p>
            <Link to="/criptomonedas" >Ver criptomonedas</Link>
        </>
    )
}

export default Home