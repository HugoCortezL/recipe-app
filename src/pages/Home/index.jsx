import {Container, RecipesContainer} from './styles'
import RecipeCard from '../../components/RecipeCard'
import Header from '../../components/Header'
import { Link } from "react-router-dom";
import {loadRecipes} from '../../services/Recipes'

export default function Home() {
    const recipes = loadRecipes()
    function changeName(name){
        return name.replaceAll(" ", '-')
    }
    return (
        <Container>
            <Header/>
            <RecipesContainer>
                
            {recipes.map((recipes) => (
                <Link
                    className='link-not-style'
                    to={`/recipes/${changeName(recipes.name)}`}
                    key={recipes.id}
                >
                    <RecipeCard key={recipes.id} recipe={recipes}/>
                </Link>
            ))}
            </RecipesContainer>
        </Container>
    )
}
