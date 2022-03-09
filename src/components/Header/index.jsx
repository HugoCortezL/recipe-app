import {Container, NavContainer} from './styles'

export default function Header() {
    return (
        <Container>
            <NavContainer>
                <a href="#" className="active">Home</a>
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
