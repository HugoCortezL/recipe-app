import {Container, RecipesContainer} from './styles'
import RecipeCard from '../../components/RecipeCard'
import Header from '../../components/Header'
import { Link } from "react-router-dom";
import {getRecipesShuffle} from '../../services/GetRecipesShuffle'

export default function Home() {
    const recipes = getRecipesShuffle()
    
    function changeName(name){
        return name.replaceAll(" ", '-')
    }

    //console.log(recipes)
    
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
