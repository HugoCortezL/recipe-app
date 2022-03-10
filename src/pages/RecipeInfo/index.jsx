import {Container} from './styles'
import Header from '../../components/Header'
import { useParams } from "react-router-dom";

export default function RecipeInfo() {
    let params = useParams()
    params.recipeName = params.recipeName.replaceAll('-', ' ')

    


    return (
        <Container>
            <Header/>
            {params.recipeName}
        </Container>
    )
}
