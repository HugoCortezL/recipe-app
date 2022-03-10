import {Container, NavContainer} from './styles'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Container>
            <NavContainer>
                <Link className='link-not-style' to={`/`} >
                    <a href="#" className="active">Home</a>
                </Link>
                <span></span>
                <a href="#">Buscar por lista</a>
                <span></span>
                <a href="#">Gerir Receitas</a>
                <span></span>
                <a href="#">Gerir Ingredientes</a>
            </NavContainer>
        </Container>
    )
}
